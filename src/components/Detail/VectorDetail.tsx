import React, {useEffect, useState} from 'react';
import background from './square-tile.jpg'
import { fetchImage } from '../../api/index';
import { FigmaNode, ImageData} from '../../types';

const VectorDetail = (props: { data: FigmaNode }) => {
	const { data } = props;
  const [snap, setSnap] = useState<string>();
  const [snapBig, setSnapBig] = useState<string>();
	console.log(data);

  useEffect(() => {
    if(data){
      setSnap('');
      fetchImage(data.id)
        .then((d: ImageData) => {
          setSnap(d?.images[data.id])
        });
      }
  }, [data]);

  useEffect(() => {
    if(data){
      setSnapBig('');
      fetchImage(data.id, 2)
        .then(d => {
          setSnapBig(d?.images[data.id])
        });
      }
  }, [data]);

	return (
		<div>
			<div className="detail-content-header">Assets</div>
        <div className="detail-content-vector-size">
          <div className="detail-content-vector-size-label">Name:</div>
          <div>{data.name}</div>
        </div>
        <div>
          <img 
            style={{
              backgroundImage: `url(${background})`,
              maxWidth: '100px',
            }}
            className='detail-content-vector-img'
            src={snap ? snap : ''} alt='asset-snap'/>
        </div>
        <div style={{marginTop: '15px'}}>
          <img 
            style={{
              backgroundImage: `url(${background})`,
              maxWidth: '200px',
            }}
            className='detail-content-vector-img'
            src={snapBig ? snapBig : ''} alt='asset-snap-big'/>
        </div>
      </div>
	);
};

export default VectorDetail;
