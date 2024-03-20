import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ProjectListItem from './ProjectListItem'

//include param in routes.js -> include param in NavLink -> access param with useParams()
function ProjectDetails({ id }) {
  // ✅ 5b. Use a fetch request in `ProjectDetails` to access a single project.  Use `useParams` to access the id. 
  const params = useParams()
  const [ project, setProject ] = useState({})

  useEffect(() => {
    //this endpoint is a feature of json-server that allows you to access one singular project object by id
    fetch(`/projects/${params.id}`)
    .then(res => {
      if(res.ok){
        return res.json()
      } else {
        console.error('not found' )
      }
    })
    .then(data => setProject(data))
  }, [])

  return (
    <div >
      <ProjectListItem project={project} />
    </div>
  )
}

export default ProjectDetails