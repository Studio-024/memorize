import './css/App.css'
import Dashboard from './pages/Dashboard'
import {getCard} from './service/api'
import AddCard from './pages/AddCard'
export default function App() {
	return(
		<>
			<Dashboard/>
			{/* <AddCard/> */}
		</>
	)
}