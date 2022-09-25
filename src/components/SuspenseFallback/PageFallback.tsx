import { SingleColumnLayout } from '../Layouts';

export const PageFallback = () => {
	return (
		<SingleColumnLayout header={null} main={<p>Loading...</p>} footer={null} />
	);
};
