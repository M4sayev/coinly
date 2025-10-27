import React, { useEffect, useRef } from "react";
import Bitcoin from "../../assets/bitcoin_outline.svg";
import Azn from "../../assets/azn_outline.svg";
import Dollar from "../../assets/dollar_outline.svg";
import Euro from "../../assets/euro_outline.svg";

interface CanvasProps extends React.CanvasHTMLAttributes<HTMLCanvasElement> {}

const Canvas: React.FC<CanvasProps> = (props) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const draw = (ctx: CanvasRenderingContext2D) => {
    ctx.fillStyle = "#668affff";
    ctx.beginPath();
    ctx.arc(Math.random() * 2000, Math.random() * 1000, 10, 0, 2 * Math.PI);
    ctx.fill();
  };

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
    img.src = Dollar;
    img.onload = () => {
      const offscreen = document.createElement("canvas");

      offscreen.width = img.width;
      offscreen.height = img.height;
      const offCtx = offscreen.getContext("2d");
      offCtx?.drawImage(img, 0, 0);

      const imageData = offCtx?.getImageData(0, 0, img.width, img.height);

      const particles: { x: number; y: number; tx: number; ty: number }[] = [];

      const scaleFactor = 0.8;
      const leftOffset = rect.width * 0.05;
      const topOffset = rect.height / 2 - (img.height * scaleFactor) / 2;

      const step = 6;
      for (let y = 0; y < img.height; y += step) {
        for (let x = 0; x < img.width; x += step) {
          const index = (y * img.width + x) * 4;
          const alpha = imageData?.data[index + 3];
          if (alpha && alpha > 128) {
            particles.push({
              x: Math.random() * rect.width,
              y: Math.random() * rect.height,
              tx: x * scaleFactor + leftOffset,
              ty: y * scaleFactor + topOffset,
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
          img.width * scaleFactor,
          img.height * scaleFactor
        );

        ctx.globalCompositeOperation = "source-over";

        ctx.fillStyle = "#668affff";

        particles.forEach((p) => {
          p.x += (p.tx - p.x) * 0.005;
          p.y += (p.ty - p.y) * 0.005;

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
