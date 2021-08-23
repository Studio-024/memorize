import './css/App.css';
import Dashboard from './pages/Dashboard';
import {Switch, Route} from "react-router-dom";
import Login from './pages/Login';

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
			<Route path="/login">
				<Login/>
			</Route>
		</Switch>
		</>
	)
}

export default App;