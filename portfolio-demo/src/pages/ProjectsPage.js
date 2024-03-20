import { useState, useEffect } from 'react'
import ProjectList from './ProjectList'

function ProjectsPage() {
  const [ projects, setProjects ] = useState([])

  useEffect(() => {
    loadProjects()
  }, []) 

  const loadProjects = () => {
    fetch('/projects')
    .then(res => res.json())
    .then(data => setProjects(data))
  }

  const deleteProject = () => {
    setProjects()
  }

  return (
    <div>
      <ProjectList projects={projects} />
    </div>
  )
}

export default ProjectsPage