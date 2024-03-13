import { useState } from "react";
import Header from "./components/Header";
import ProjectList from "./components/ProjectList";
import ProjectForm from "./components/ProjectForm";
import projects from "./projects";
import Filter from "./components/Filter";

// ✅ 1. Use inverse data flow to implement Light-Dark mode
// ✅ 1a. Move the dark mode button to `Header`
// ✅ 1b. Create a callback function that updates `isDarkMode` and pass the callback function as a prop to the `Header` component

/*
- you can pass down functions as props
- functions will execute in the scope of the components they were created in
- when state gets updated associated children will also re-render
*/

function App() {
	const [darkMode, setDarkMode] = useState(true);

	const [phase, setPhase] = useState(0)
	// ✅ 2b. Write a callback function inside the App component:
	// ✅ - pass the callback function down as a prop to `ProjectList`

	//YOU CAN PASS A WHOLE FUNCTION AS A PROP
	//when passed down as prop, will still execute within scope it was defined
	//i.e. if a child component triggers handleClick, handleClick will execute within scope of App.js
	const handleClick = () => {
		setDarkMode((prevDarkMode) => !prevDarkMode);
	};

	//ONLY SET STATE IN COMPONENT THAT CREATED SAID STATE
	//phaseNumber is a parameter name that gets created in parameter, it is function scope only
	const handlePhaseClick = (phaseNumber) => {
		setPhase(phaseNumber);
	}


	return (
		<div className={darkMode ? "App" : "App light"}>
			<Header handleClick={handleClick} darkMode={darkMode} />
			<Filter handleClick={handlePhaseClick}/>
			{/* saving function 'handlePhaseClick'
			 under key 'handleClick' for props */}
			<ProjectList phase={phase} projects={projects} />
		</div>
	);
}

export default App;

/*
inverse flow

1. parent component
- create state
- create callback that updates state

2. parent -> child
- pass down state
- pass down callback

3. child -> parent
- child triggers callback (through an event)
- results in setState in parent
- results in a state change -> re-render
*/
