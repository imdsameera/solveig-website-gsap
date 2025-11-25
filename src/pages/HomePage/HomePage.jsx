import {Navbar} from '../../components';
import {Hero} from './sections';

const HomePage = () => {
	return (
		<div className='bg-gray-200 px-8 pt-8 min-h-screen w-full overflow-x-hidden'>
			<Navbar/>
			<Hero/>
		</div>
	);
};
export default HomePage;
