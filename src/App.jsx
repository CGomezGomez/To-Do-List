import { useState } from "react";
import { ContainerMain } from "./components/ContainerMain/ContainerMain";
import { GlobalStyles } from "./styles/GlobalStyles";


const App = () => {
	
	const [dark, setDark] = useState(false);

	return (

		<>
			<GlobalStyles  dark={dark}/>
			<ContainerMain dark={dark} setDark={setDark}/>
		</>
	
		)

};




export default App;
