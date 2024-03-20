import { FaPencilAlt, FaTrash } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

// ✅ 5. Update `ProjectListItem`
// ✅ 6. Manage delete project.
function ProjectListItem({ project }) {
	let { id, name, about, image, claps, link, phase } = project;
	const navigate = useNavigate()
	const handleDelete = () => {
		// ✅ 6a. On successful `DELETE` request redirect to `/projects`.
		fetch(`/projects/${id}`, {
			method: 'DELETE'
		})
		.then(res => {
			if(res.ok){
				return res.json()
			} else {
				console.error('delete failed')
			}
		})
		.then(() => {
			navigate('/projects') //goes to different url
			navigate(0) //refreshses page
		})
	};

	return (
		<li className="card">
			<figure className="image">
				<img src={image} alt={name} />
			</figure>
			<section className="details">
				{/* ✅ 5a. Create a `NavLink` for each project that redirects to `ProjectDetails`.  */}
				{/* ✅ - The link is to `/projects/:id` */}
				{/* ✅ 5b. Use a fetch request in `ProjectDetails` to access a single project.  Use `useParams` to access the id. */}

				<NavLink to={`/projects/${id}`} >
					<h3>{name}</h3>
					<button>{claps}</button>

				</NavLink>
				<p>{about}</p>
				<p>
					<a href={link}>Link</a>
				</p>
			</section>

			<footer className="extra">
				<span className="badge blue">Phase {phase}</span>
				<div className="manage">
					<button class="manage-button">
						<NavLink to={`/edit/${id}`}>
							<FaPencilAlt />
						</NavLink>
					</button>
					<button onClick={() => handleDelete()}>
						<FaTrash />
					</button>
				</div>
			</footer>
		</li>
	);
}

export default ProjectListItem;
