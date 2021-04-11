import { FigmaNode } from '../../types';
import Normalizer from '../../utils/Normalizer';
import TextDetail from './TextDetail';
import VectorDetail from './VectorDetail';
import CloseLogo from './close-button.svg';
import './detail.css';

const Detail = (props: { data: FigmaNode; onBoxClose: () => void }) => {
	const { data, onBoxClose } = props;

	return (
		<div className="detail">
			<div className="detail-header">
				<div>{data.name}</div>
				<img className="close-sign" src={CloseLogo} alt="close" onClick={onBoxClose} />
			</div>
			<div className="detail-positions">
				<div className="detail-positions-row">
					<div className="detail-positions-value">X:</div>
					<div>{Normalizer.calculateOffsetX(data.absoluteBoundingBox.x)}px</div>
					<div className="detail-positions-value">Y:</div>
					<div>{Normalizer.calculateOffsetY(data.absoluteBoundingBox.y)}px</div>
				</div>
				<div className="detail-positions-row">
					<div className="detail-positions-value">Width:</div>
					<div>{Normalizer.normalizeWidth(data.absoluteBoundingBox.width)}px</div>
					<div className="detail-positions-value">Height:</div>
					<div>{Normalizer.normalizeWidth(data.absoluteBoundingBox.height)}px</div>
				</div>
			</div>
			<div className="detail-divider" />
			<div className="detail-content">
				{data.type === 'TEXT' ? <TextDetail data={data} /> : <VectorDetail data={data} />}
			</div>
		</div>
	);
};

export default Detail;
