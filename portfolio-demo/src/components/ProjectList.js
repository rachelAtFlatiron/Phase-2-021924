import { useState } from "react";
import ProjectListItem from "./ProjectListItem";

// ✅ 2. Refactor the phase filter component out of `ProjectList` and implement inverse data flow
// ✅ 2a. Move the `phase` state from `ProjectList` to `App`

//handleClick is actually handlePhaseClick in App.js, it got renamed due to parameter key/value pairs when passed down as props
function ProjectList({ projects, phase }) {


	
	const filteredProjects = projects.filter(
		(project) => phase === 0 || project.phase === phase
	);

	return (
		<section>
			<h2>Project List</h2>
			
			<ul className="cards">
				{filteredProjects.map((project) => (
					<ProjectListItem key={project.id} project={project} />
				))}
			</ul>
		</section>
	);
}

export default ProjectList;
