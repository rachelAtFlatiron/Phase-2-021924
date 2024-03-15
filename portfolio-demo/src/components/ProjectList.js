import ProjectListItem from "./ProjectListItem";

function ProjectList({ projects, phaseState, updatePhase, filter, deleteProject }) {
	// const filteredProjectsByPhase = projects.filter(
	// 	(project) => {
	// 		return project.phase === phaseState || phaseState === 0
	// 	}
	// );

	// const filteredProjectsByName = filteredProjectsByPhase.filter(
	// 	(project) => {
	// 		return project.name.toLowerCase().includes(filter.toLowerCase())
	// 	}
	// )

	const filteredProjects = projects.filter(
		(project) => {
			return (project.phase === phaseState || phaseState === 0) && (project.name.toLowerCase().includes(filter.toLowerCase()))
		}
	)

	return (
		<section>
			<h2>Project List</h2>
			<div className="filter">
				<button onClick={() => updatePhase(0)}>All</button>
				<button onClick={() => updatePhase(5)}>Phase 5</button>
				<button onClick={() => updatePhase(4)}>Phase 4</button>
				<button onClick={() => updatePhase(3)}>Phase 3</button>
				<button onClick={() => updatePhase(2)}>Phase 2</button>
				<button onClick={() => updatePhase(1)}>Phase 1</button>
			</div>
			
			<ul className="cards">
				{filteredProjects.map((project) => (
					<ProjectListItem key={project.id} deleteProject={deleteProject} project={project} />
				))}
			</ul>
		</section>
	);
}

export default ProjectList;
