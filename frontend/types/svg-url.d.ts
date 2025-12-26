declare module "*.svg?url" {
  const url: string;
  export default url;
}

declare module "*.svg" {
  import React from "react";
  const Component: React.FC<React.SVGProps<SVGSVGElement>>;
  export default Component;
}
