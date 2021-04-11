import React, { useState, useEffect, useCallback } from 'react';
import Frame from '../../components/Frame/Frame';
import Detail from '../../components/Detail/Detail';

import Normalizer from '../../utils/Normalizer';
import { FigmaNode, ImageData } from '../../types';
import './home.css';
import { fetchImage, fetchFrame } from '../../api/index';

const Home = () => {
  const [frame, setFrame] = useState<FigmaNode>();
  const [detailData, setDetailData] = useState<FigmaNode>();
  const [snap, setSnap] = useState<string>();
  const [height, setHeight] = useState(0);
  const [showDetail, setShowDetail] = useState(false);

  const adjustHeight = useCallback(() => {
    if(frame){
      setHeight(Normalizer.normalizeHeight(frame.absoluteBoundingBox.height)+3);
    }
  }, [frame])

  const onBoxClose = () => {
    Normalizer.setIsFullScreen(true);
    setShowDetail(false);
  }

  const onBoxClick = (detail: FigmaNode) => {
    Normalizer.setIsFullScreen(false);
    adjustHeight();
    setDetailData(detail);
    setShowDetail(true);
  }

	useEffect(() => {
		fetchFrame()
			.then((data: any) => {
        const guide = data?.document?.children?.[0].children.find((c: FigmaNode) => c.name === 'Guide');
        if(guide){
          Normalizer.setOffsetX(guide.absoluteBoundingBox.x);
          Normalizer.setOffsetY(guide.absoluteBoundingBox.y);
          Normalizer.setFrameHeight(guide.absoluteBoundingBox.height);
          Normalizer.setFrameWidth(guide.absoluteBoundingBox.width);
          setHeight(Normalizer.normalizeHeight(guide.absoluteBoundingBox.height))
          setFrame(guide);
        }
      });
	}, []);

	useEffect(() => {
    if(frame?.id){
      fetchImage(frame.id)
			.then((d: ImageData) => {
        setSnap(d?.images[frame.id])
      });
    }
		
	}, [frame]);

  	useEffect(() => {

		window.addEventListener('resize', adjustHeight);

    return () => window.removeEventListener('resize', adjustHeight, false);
	}, [frame, adjustHeight]);

  if(!frame){
    return (<div>Loading..</div>)
  }

	return (
    <div className='home'>
      <div className='snap-container' style={{height: `${height}px`}}>
        <img className='snap-img' src={snap} alt='snap' />
        <div className='home-frame-container'>
          <Frame data={frame} isFullScreen={!showDetail} onBoxClick={onBoxClick}/>
        </div>
      </div>
      <div className='detail' style={{width: showDetail ? '30%' : '0'}}>
          {detailData ? <Detail data={detailData} onBoxClose={onBoxClose}/> : null}
      </div>
    </div>
  );
};

export default Home;
