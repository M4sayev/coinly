import React, { useEffect, useRef } from "react";
import Bitcoin from "../../assets/bitcoin_outline.svg";
import Azn from "../../assets/azn_outline.svg";
import Dollar from "../../assets/dollar_outline.svg";
import Euro from "../../assets/euro_outline.svg";

interface CanvasProps extends React.CanvasHTMLAttributes<HTMLCanvasElement> {}

interface Particle {
  x: number;
  y: number;
  tx: number;
  ty: number;
}

const IMAGE_MAP: { [key: string]: string } = {
  bitcoin: Bitcoin,
  azn: Azn,
  dollar: Dollar,
  euro: Euro,
};

const PARTICLE_SPEED = 0.005;
const IMG_SCALE = 0.8;
const LEFT_OFFSET_COEFFICIENT = 0.05;
const IMAGE_DENSITY = 6; // lower the value, more particles
const JITTER = 70;
const JITTER_THRESHOLD = 0.5;

const Canvas: React.FC<CanvasProps> = (props) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");

    if (!ctx || !canvas) return;
    const scale = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();

    canvas.width = rect.width * scale;
    canvas.height = rect.height * scale;
    ctx.scale(scale, scale);

    const img = new Image();
    img.src = IMAGE_MAP["bitcoin"];

    const particles: Particle[] = [];

    img.onload = () => {
      const offscreen = document.createElement("canvas");

      offscreen.width = img.width;
      offscreen.height = img.height;
      const offCtx = offscreen.getContext("2d");
      offCtx?.drawImage(img, 0, 0);

      const imageData = offCtx?.getImageData(0, 0, img.width, img.height);

      const leftOffset = rect.width * LEFT_OFFSET_COEFFICIENT;
      const topOffset = rect.height / 2 - (img.height * IMG_SCALE) / 2;

      for (let y = 0; y < img.height; y += IMAGE_DENSITY) {
        for (let x = 0; x < img.width; x += IMAGE_DENSITY) {
          const index = (y * img.width + x) * 4;
          const alpha = imageData?.data[index + 3];
          if (alpha && alpha > 128) {
            particles.push({
              x: Math.random() * rect.width,
              y: Math.random() * rect.height,
              tx: x * IMG_SCALE + leftOffset,
              ty: y * IMG_SCALE + topOffset,
            });
          }
        }
      }

      function render() {
        if (!ctx) return;
        ctx.clearRect(0, 0, rect.width, rect.height);

        ctx.globalCompositeOperation = "source-in";
        ctx.drawImage(
          img,
          leftOffset,
          topOffset,
          img.width * IMG_SCALE,
          img.height * IMG_SCALE
        );

        ctx.globalCompositeOperation = "source-over";

        ctx.fillStyle = "#00124d";

        particles.forEach((p) => {
          if (
            Math.abs(p.x - p.tx) < JITTER_THRESHOLD &&
            Math.abs(p.y - p.ty) < JITTER_THRESHOLD
          ) {
            p.x += Math.random() * JITTER - Math.random() * JITTER;
            p.y += Math.random() * JITTER - Math.random() * JITTER;
          }

          p.x += (p.tx - p.x) * PARTICLE_SPEED;
          p.y += (p.ty - p.y) * PARTICLE_SPEED;

          ctx.beginPath();
          ctx.arc(p.x, p.y, 1.5, 0, Math.PI * 2);
          ctx.fill();
        });

        requestAnimationFrame(render);
      }
      render();
    };
  }, []);

  return <canvas ref={canvasRef} {...props} />;
};

export default Canvas;
