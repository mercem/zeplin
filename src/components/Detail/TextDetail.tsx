import React from 'react';
import { FigmaNode } from '../../types';

function componentToHex(c: number) {
	var hex = Math.floor(c * 255).toString(16);
	return hex.length === 1 ? '0' + hex : hex.toLocaleUpperCase();
}

function rgbToHex(color: { r: number; g: number; b: number }) {
	const { r, g, b } = color;
	return '#' + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

const TextDetail = (props: { data: FigmaNode }) => {
	const { data } = props;
	const color = rgbToHex(data.fills[0].color);

	return (
		<div>
			<div className="detail-content-header">Typeface</div>
			<div>{data.style.fontPostScriptName}</div>
			<div className="detail-content-text-size">
				<div className="detail-content-text-size-label">Size:</div>
				<div>{data.style.fontSize}px</div>
			</div>
			<div className="detail-content-text-color">
				<div className="detail-content-text-color-label" style={{ backgroundColor: color }} />
				{color}
			</div>
		</div>
	);
};

export default TextDetail;
