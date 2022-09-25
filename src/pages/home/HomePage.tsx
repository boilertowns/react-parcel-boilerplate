import { Counter } from '../../components/Counter';
import { HomeWelcome } from '../../components/HomeWelcome';
import { SingleColumnLayout } from '../../components/Layouts';

const HomePage = () => {
	return (
		<SingleColumnLayout
			header={null}
			main={
				<>
					<HomeWelcome />
					<Counter />
				</>
			}
			footer={null}
		/>
	);
};

export default HomePage;
