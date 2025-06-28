export interface ImgProps {
  src: string;
  alt: string;
  width?: string;  // e.g., '100%', '300px'
  height?: string; // e.g., 'auto', '200px'
  disabled?: boolean;
  testIdPrefix?: string;
}
