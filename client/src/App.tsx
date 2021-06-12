import './App.css';
import Dashboard from './dashboardComponents/Dashboard';
import AddCard from './addCard/Dashboard';
import {getCard} from './service/apiData';



export default function App() {
	return(
		<>
			<Dashboard/>
			
			<AddCard/>
		</>
	);
}