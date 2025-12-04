import {Contact, Home, Work} from './pages';
import {Route, Routes} from 'react-router-dom';
import {Navbar} from './components/';

const App = () => {
	return (
		<>
		<Navbar/>
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/work" element={<Work />} />
			<Route path="/contact" element={<Contact />} />
		</Routes>
		</>
	);
};
export default App;
