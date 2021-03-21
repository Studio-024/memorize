import React from 'react';
import './App.css';
import Dashboard from './dashboardComponents/Dashboard';
import {getCard} from './service/api-data';

export default function App() {

	return(
		<>
			<div className="App">
			</div>
			<Dashboard quest="(MACKENZIE)Acho que não pode haver discriminação racial e religiosa de espécie alguma. O direito de um termina quando começa o do outro. Em todas as raças, todas as categorias, existe sempre gente boa e gente má. No caso particular dessa música, não posso julgar, porque nem conheço o Tiririca. Como posso saber se o que passou na cabeça dele era mesmo ofender os negros? Eu, Carmen Mayrink Veiga, não tenho ideia. Mas o que posso dizer é que se os negros acharam que a música é uma ofensa, eles devem estar com toda razão." response="oi"/>

			<button onClick={getCard}>Button</button>			
		</>
	);
}