import { useStyles } from '../../utils/customHooks';
import { FrameProps } from '../../types';
import './text.css';

const Text = (props: FrameProps) => {
	const { data, isFullScreen, onBoxClick } = props;
	const styles = useStyles(data, isFullScreen);
	return <div className="text" style={styles} onClick={() => onBoxClick(data)} />;
};

export default Text;
