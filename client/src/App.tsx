import './css/App.css';
import Dashboard from './pages/Dashboard';
import {Switch, Route,  Redirect} from "react-router-dom";
import Login from './pages/Login';
import Registry from './pages/Registry';
import ProtectedRoute from './components/ProtectedRoute';

const App = () => {
	return (
		<>
		<Redirect to={'/dashboard/front'} />
		<Switch>
			<ProtectedRoute 
				authenticationPath="/login" 
				path="/Dashboard" 
				component={Dashboard}
			/>
			<Route path="/login">
				<Login/>
			</Route>
			<Route path="/sign">
				<Registry/>
			</Route>
		</Switch>
		</>
	)
}

export default App;