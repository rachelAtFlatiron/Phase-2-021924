import { useState, useEffect } from 'react'
import Header from "./components/Header";
import ProjectList from "./components/ProjectList";
import ProjectForm from "./components/ProjectForm";
import ProjectEditForm from './components/ProjectEditForm';

// ✅ 1. Create a ProjectEditForm component

//on button click -> 
//populate edit project form with field values -> 
//user updates field values as needed -> 
//on form submit make PATCH request -> 
//update projects state with updated project (use id)

function App() {

  // ✅ 2. Create state in App to represent the project to edit
  // ✅ 2a. Add a button to ProjectListItem that, when clicked on, will:
  // ✅ - update said state with the appropriate project object
  // ✅ - display the ProjectEditForm with the appropriate data.
  const [darkMode, setDarkMode] = useState(true)
  const [ projects, setProjects ] = useState([])
  const [projectToEdit, setProjectToEdit] = useState({})

  useEffect(() => {
    loadProjects()
  }, []) 

  const updateProjectToEdit = (project) => {
    setProjectToEdit(project)
  }

  const loadProjects = () => {
    fetch('http://localhost:4000/projects')
    .then(res => res.json())
    .then(data => setProjects(data))
  }

  const updateDarkMode = () => {
    setDarkMode(prevDarkMode => !prevDarkMode)
  }

  const addProject = (project) => {
    setProjects([...projects, project])
  }

  const deleteProject = (id) => {
    //filter out project with matching id
    setProjects(projects.filter(project => {
      return project.id !== id
      // if(project.id === id){
      //   return false
      // } else {
      //   return true
      // }
    }))
  }

  const updateProjects = (updatedProject) => {
    //find the matching project (by id)
    //return the updated project
    setProjects(projects.map(project => {
      if(project.id === updatedProject.id){
        return updatedProject //replace with updatedProject
      } else {
        return project //"replace" with original project
      }
    }))
  }
  
  return (
    <div className={darkMode ? "App" : "App light"}>
      <Header handleClick={updateDarkMode} darkMode={darkMode} />
      <ProjectForm addProject={addProject} />
      <ProjectEditForm projectToEdit={projectToEdit} updateProjects={updateProjects} />
      <ProjectList projects={projects} updateProjectToEdit={updateProjectToEdit} updateProjects={updateProjects} deleteProject={deleteProject} />
    </div>
  );
}


export default App;
