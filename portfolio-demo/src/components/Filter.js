import React from "react";

function Filter({ handleClick }) {
	return (
		<div className="filter">
			{/* ✅ 2c. Using inverse data flow, get the value of the phase from ProjectList UP to the App component */}
			{/* ✅ - Invoke the callback function from the onClick event listener */}
			{/* 0, 5, 4, 3, 2, 1, gets renamed to "phaseNumber" in App.js when it is within the scope of handlePhaseClick */}
			<button onClick={() => handleClick(0)}>All</button>
			<button onClick={() => handleClick(5)}>Phase 5</button>
			<button onClick={() => handleClick(4)}>Phase 4</button>
			<button onClick={() => handleClick(3)}>Phase 3</button>
			<button onClick={() => handleClick(2)}>Phase 2</button>
			<button onClick={() => handleClick(1)}>Phase 1</button>
		</div>
	);
}

export default Filter;
