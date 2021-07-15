import { useState } from 'react'
import { ICardOrdered } from '../domain/useCase/orderCard'

const AddCardTest = () => { 
    const [orderCards, setOrderCards ] = useState<ICardOrdered[]>([])
    const [index, setIndex] = useState(0)
    
	return(

            <main>
              <textarea name="" id="">test</textarea>
              <span>Test</span>
              <div >test</div>
            </main>
            
	)
}

export default AddCardTest