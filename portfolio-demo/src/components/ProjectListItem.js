import { useState, useEffect } from "react";
import { FaPencilAlt, FaTrash } from "react-icons/fa";

// ✅ 4. For the clap button, update the onClick event handler to send a PATCH request to save the updated claps in the database
// ✅ 4a. Send this information to App and include it in projects

// ✅ 5. Add a delete button to ProjectListItem
// ✅ 5a. Create an onClick event handler
// ✅ 5b. When clicked, use a fetch request to delete the project from the database
// ✅ 5c. Pass this information to App and remove the appropriate project from projects
function ProjectListItem({ project, updateProjectToEdit, updateProjects, deleteProject }) {
	let { id, name, about, image, claps, link, phase } = project;
	const [projectClaps, setProjectClaps] = useState(claps);

	//for the sake of demonstration
	//setProjectClaps doesn't know when to run
	//let it know to run when project changes
	useEffect(() => {
		setProjectClaps(project.claps)
	}, [project])

	const handleClap = () => {
		//setProjectClaps((prevProjectClaps) => prevProjectClaps + 1);
		let newClaps = projectClaps + 1
		fetch(`http://localhost:4000/projects/${id}`, {
			method: 'PATCH',
			headers: {'content-type': 'application/json'},
			body: JSON.stringify({claps: newClaps})
		})
		.then(res => res.json())
		.then(data => {
			//project with updated claps
			updateProjects(data)
		})
	};

	const handleEdit = () => {
		updateProjectToEdit(project)
	}

	const handleDelete = () => {
		fetch(`http://localhost:4000/projects/${project.id}`, {
			method: 'DELETE'
		})
		.then(res => res.json())
		.then(() => {
			//remove project from projects state
			deleteProject(project.id)
		})
	}

	//on button clap -> 
	//PATCH request -> 
	//update all projects state (in App) -> 
	//render it on the page

	return (
		<li className="card">
			<figure className="image">
				<img src={image} alt={name} />
				<button onClick={handleClap} className="claps">
					👏{projectClaps}
				</button>
			</figure>
			<section className="details">
				<h4>{name}</h4>
				<p>{about}</p>
				<p>
					<a href={link}>Link</a>
				</p>
			</section>

			<footer className="extra">
				<span className="badge blue">Phase {phase}</span>
				<div className="manage">
					{/* edit button */}
					<button>
						<FaPencilAlt onClick={handleEdit} />
					</button>
					{/* delete button */}
					<button onClick={handleDelete}>
						<FaTrash />
					</button>
				</div>
			</footer>
		</li>
	);
}

export default ProjectListItem;
