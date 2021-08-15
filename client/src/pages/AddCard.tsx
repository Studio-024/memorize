import { Route, Switch } from 'react-router-dom';
import AddFront from '../components/Add'
import AddBack from '../components/Add'

const AddCard = () => {
	return(
        <div className="container" id="containerCard">
            <main>
                <Switch>
                    <Route exact path={`/addCard`}>
                        <AddFront />
                    </Route>     
                    <Route exact path={`/addCard/front`}>
                        <AddFront />
                    </Route>
                    <Route exact path={`/addCard/back`}>
                        <AddBack />
                    </Route>
                </Switch>
            </main>
        </div>
	)
}

export default AddCard
