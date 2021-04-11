import Text from '../Text/Text';
import Vector from '../Vector/Vector';
import { useStyles } from '../../utils/customHooks';
import { FrameProps, FigmaNode } from '../../types';
import './frame.css';

const Frame = (props: FrameProps) => {
	const { data, isFullScreen, onBoxClick } = props;
	const styles = useStyles(data, isFullScreen);

	return (
		<div className="frame" style={styles}>
			<div>
				{data.children.map((child: FigmaNode) => {
					const childData = {
						key: child.id,
						data: child,
						onBoxClick,
						isFullScreen
					};
					switch (child.type) {
						case 'FRAME':
							return <Frame {...childData} />;
						case 'TEXT':
							return <Text {...childData} />;
						case 'VECTOR':
							return <Vector {...childData} />;
						default:
							return null;
					}
				})}
			</div>
		</div>
	);
};

export default Frame;
