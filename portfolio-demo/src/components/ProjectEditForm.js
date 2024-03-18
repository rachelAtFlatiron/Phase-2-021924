import { useState, useEffect } from "react";

function ProjectEditForm({ projectToEdit, updateProjects }) {

	// ✅ 3. Submit the edit project form and make a PATCH request
	// ✅ 3a. In App create a function that executes the PATCH request.
	// ✅ 3b. In App update projects with the revised project and reset projectToEdit.
	// ✅ 3c. Pass this function down to ProjectEditForm
	const [form, setForm] = useState(projectToEdit)

	useEffect(() => {
		setForm(projectToEdit)
	}, [projectToEdit])

	const handleChange = (e) => {
		setForm({
			...form,
			[e.target.name]: e.target.value
		})
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		fetch(`http://localhost:4000/projects/${projectToEdit.id}`, {
			method: 'PATCH',
			headers: {'content-type': 'application/json'},
			body: JSON.stringify({
				...form,
				phase: parseInt(form.phase)
			})
		})
		.then(res => {
			return res.json()
		})
		.then(data => {
			updateProjects(data)
			setForm({})
		})

	}

	return (
		<form onSubmit={(e) => handleSubmit(e)} className="form" autoComplete="off" style={{"display": "flex"}}>
			<h3>Edit Project</h3>

			<label htmlFor="name">Name</label>
			<input
				type="text"
				id="name"
				name="name"
				value={form.name}
				onChange={(e) => handleChange(e)}
			/>

			<label htmlFor="about">About</label>
			<textarea
				id="about"
				name="about"
				value={form.about}
				onChange={(e) => handleChange(e)}
			/>

			<label htmlFor="phase">Phase</label>
			<select
				name="phase"
				id="phase"
				value={form.phase}
				onChange={(e) => handleChange(e)}
			>
				<option value="1">Phase 1</option>
				<option value="2">Phase 2</option>
				<option value="3">Phase 3</option>
				<option value="4">Phase 4</option>
				<option value="5">Phase 5</option>
			</select>

			<label htmlFor="link">Project Homepage</label>
			<input
				type="text"
				id="link"
				name="link"
				value={form.link}
				onChange={(e) => handleChange(e)}
			/>

			<label htmlFor="image">Screenshot</label>
			<input
				type="text"
				id="image"
				name="image"
				value={form.image}
				onChange={(e) => handleChange(e)}
			/>

			<button type="submit">Update Project</button>
		</form>
	);
}

export default ProjectEditForm;
