const Normalized = () => {
  let frameHeight = 0;
  let frameWidth = 0;
  let offsetX = 0;
  let offsetY = 0;
  let isFullScreen = true;

  const setIsFullScreen = (b: boolean) => {
    isFullScreen = b;
  }

  const setOffsetX = (x: number) => {
    offsetX = x;
  }

  const getOffsetX = () => {
    return offsetX;
  }

  const setOffsetY = (y: number) => {
    offsetY = y;
  }

  const getOffsetY = () => {
    return offsetY;
  }


  const setFrameWidth = (width: number) => {
    frameWidth = width;
  }

  const getFrameWidth = () => {
    return frameWidth;
  }

  const setFrameHeight = (height: number) => {
    frameHeight = height;
  }

  const getFrameHeight = () => {
    return frameHeight;
  }

  const getContentWidth = () => {
    return isFullScreen ? window.innerWidth : window.innerWidth*0.7;
  }

  const normalizeWidth = (width: number) => {
    if(frameWidth){
      return Math.floor(width * getContentWidth() / frameWidth);
    }

    return 0;
  }

  const normalizeHeight = (height: number) => {
    if(frameHeight && frameWidth) {
      return Math.floor(height* getContentWidth() / frameWidth);
    }
    return 0;
  }

  const calculateOffsetX = (x: number) => {
    if(frameWidth){
      return Math.floor(normalizeWidth(x-offsetX));
    }

    return 0;
  }

  const calculateOffsetY = (y: number) => {
    if(frameHeight && frameWidth) {
      return Math.floor(normalizeHeight(y-offsetY));
    }
    return 0;
  }

  return {
    setFrameWidth,
    getFrameWidth,
    setFrameHeight,
    getFrameHeight,
    normalizeWidth,
    normalizeHeight,
    calculateOffsetX,
    calculateOffsetY,
    setIsFullScreen,
    setOffsetX,
    getOffsetX,
    setOffsetY,
    getOffsetY
  }
}

const NormalizerInstance = Normalized();

export default NormalizerInstance;