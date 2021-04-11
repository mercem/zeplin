import { useStyles } from '../../utils/customHooks';
import { FrameProps } from '../../types';
import './vector.css';

const Vector = (props: FrameProps) => {
	const { data, isFullScreen, onBoxClick } = props;
	const styles = useStyles(data, isFullScreen);

	return <div className="vector" style={styles} onClick={() => onBoxClick(data)} />;
};

export default Vector;
