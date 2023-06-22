import Tab from "./components/Tab/Tab";
import TaskList from "./components/TaskList/TaskList";
import Title from "./components/Title/Title";
import { GlobalStyles } from "./styles/GlobalStyles";


const App = () => {

	return (

		<>
			<GlobalStyles />
			<Title />
			<Tab />	
			<TaskList />
		
		</>
	
		)

};

export default App;
