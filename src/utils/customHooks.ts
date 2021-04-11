import { useState, useEffect, useCallback } from 'react';
import Normalizer from './Normalizer';
import { FigmaNode } from '../types';

export const useStyles = (data: FigmaNode, isFullScreen: boolean) => {
  const [ styles, setStyles ] = useState({
		left: Normalizer.calculateOffsetX(data.absoluteBoundingBox.x),
		top: Normalizer.calculateOffsetY(data.absoluteBoundingBox.y),
		width: Normalizer.normalizeWidth(data.absoluteBoundingBox.width),
		height: Normalizer.normalizeHeight(data.absoluteBoundingBox.height)
	})

  const updatePositions = useCallback(() => {
      setStyles({
        left: Normalizer.calculateOffsetX(data.absoluteBoundingBox.x),
        top: Normalizer.calculateOffsetY(data.absoluteBoundingBox.y),
        width: Normalizer.normalizeWidth(data.absoluteBoundingBox.width),
        height: Normalizer.normalizeHeight(data.absoluteBoundingBox.height)
      })
    }, [data.absoluteBoundingBox]);

	useEffect(() => {
		window.addEventListener('resize', updatePositions);

    return () => window.removeEventListener('resize', updatePositions, false);

	}, [updatePositions]);

	useEffect(() => {
	  updatePositions();
	}, [isFullScreen, updatePositions]);

  return styles;
}