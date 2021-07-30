import './css/App.css'
import Dashboard from './pages/Dashboard'
import {getCard} from './service/api'
import AddCard from './pages/AddCard'
import { useEffect, useState } from 'react'
import history from './hooks/history'

let a = new history('test');

export default function App() {
	const [getDashbortType, setDashboardType] = useState('Dashboard')
	useEffect(() => {
	
		if(getDashbortType == 'Dashboard'){
		}
	})
	return(
		<>
			<Dashboard/>
			{/* <AddCard/> */}
		</>
	)
}