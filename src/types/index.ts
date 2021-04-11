export interface FigmaNode {
  id: string;
  children: FigmaNode[];
  name: string;
  type: string;
  absoluteBoundingBox: {
    x: number,
    y: number,
    height: number,
    width: number
  };
  characters: string;
  style: {
    fontPostScriptName: string;
    fontSize: string;
    color: string;
  },
  fills: [{color: {
    r: number,
    g: number,
    b: number
  }}]
}

export interface FrameProps {
    data: FigmaNode;
    isFullScreen: boolean;
    onBoxClick: (detail: FigmaNode) => void;
}

export interface ImageData {
  images: {
    [key: string]: string
  }
}