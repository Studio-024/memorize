import './App.css';
import Dashboard from './components/Dashboard';
import AddCard from './addCard/Dashboard';
import {getCard} from './service/api';



export default function App() {
	return(
		<>
			<Dashboard/>
			
			<AddCard/>
		</>
	);
}