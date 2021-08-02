import { useState} from 'react'
import React from 'react'
import AddQuest  from '../components/AddQuest'
import AddResponse  from '../components/AddResponse'
const CardContext = React.createContext('');

const AddCard = () => {
    const [index, setIndex] = useState(0)

    function resetCard() {
        setIndex(index + 1)
        document.getElementById("dashboard__content__back")!.style.display = "none"
        document.getElementById("dashboard__content__seeBack")!.style.display = "initial"
    }

	return(
        <div className="container" id="containerCard">
            <main>
                {/* <AddQuest/> */}
                {/* <AddResponse/> */}
            </main>
        </div>
	)
}

export default AddCard