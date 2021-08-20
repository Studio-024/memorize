import './css/App.css';
import Dashboard from './pages/Dashboard';
import AddCard from './pages/AddCard';
import {Switch, Route} from "react-router-dom";
import Registry from './pages/Registry';

const App = () => {
	return(
		<>
		<Switch>
			<Route path="/Dashboard">
				<Dashboard/>
			</Route>		
			<Route path="/addCard">
				<AddCard/>
			</Route>

			{/* Test */}
			<Route path="/registro">
				<Registry/>
			</Route>
		</Switch>
		</>
	)
}

export default App;