import './css/App.css'
import Dashboard from './pages/Dashboard'
import {getCard} from './service/api'
import AddCard from './pages/AddCard'
import { useEffect, useState } from 'react'


export default function App() {
	const [getDashbortType, setDashboardType] = useState('Dashboard')
	useEffect(() => {
		history.pushState('test','test','/test');
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