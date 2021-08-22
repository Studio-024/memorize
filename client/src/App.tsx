import './css/App.css';
import Dashboard from './pages/Dashboard';
import {Switch, Route} from "react-router-dom";
import Registry from './pages/Registry';

const App = () => {
	return(
		<>
		<Switch>
			<Route path="/Dashboard">
				<Dashboard/>
			</Route>		
			<Route path="/registry">
				<Registry/>
			</Route>
		</Switch>
		</>
	)
}

export default App;