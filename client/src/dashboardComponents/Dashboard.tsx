import Status from './Status';
import Cards from './Cards';
import New from './New';


const Dashboard = () => { 
	return(
		<div className="conteiner">
        
        {/* Header */}
        <header className="dashboard__header__status">
            <Status/>
        </header>

        {/* Main */}
        <main>
            <Cards/>
        </main>
        
        {/* Footer */}
        <footer>
            <New/>
        </footer>
            {/*Printa o cod*/}
            <div className="three" id="print_cod"></div>
    </div>
	);
}

export default Dashboard;