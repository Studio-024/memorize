import './css/App.css';
import Dashboard from './pages/Dashboard';
import AddCard from './pages/AddCard';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


const App = () => {
	return(
		<>
			<Router>
				<Switch>
					<Route path="/Dashboard">		
						<Dashboard/>
					</Route>		
					<Route path="/AddCard">		
						<AddCard/>
					</Route>		
				</Switch>
			</Router>
		</>
	)
}

export default App;