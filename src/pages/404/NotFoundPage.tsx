import { SingleColumnLayout } from '../../components/Layouts';

const NotFoundPage = () => {
	return (
		<SingleColumnLayout
			header={null}
			main={<h1>404 - Not found</h1>}
			footer={null}
		/>
	);
};

export default NotFoundPage;
