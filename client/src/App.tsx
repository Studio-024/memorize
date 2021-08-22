import './css/App.css';
import Dashboard from './pages/Dashboard';
import {Switch, Route} from "react-router-dom";

const App = () => {
	return(
		<>
		<Switch>
			<Route path="/Dashboard">
				<Dashboard/>
			</Route>		
		</Switch>
		</>
	)
}

export default App;