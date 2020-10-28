import React, { useEffect, useState }from 'react'
import api from './services/api'

import './App.css'
import Header from './components/Header'


function App() {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    api.get('projects').then(response => {
      setProjects(response.data)
    })
  }, [])

  function handleAddProject() {
    // projects.push(`Novo projeto ${Date.now()}`)

    setProjects([... projects, `Novo Projeto ${Date.now()}`])
    console.log(projects);
  }

  return (
    <>
      <Header title='Projects' />
        <ul>
          {projects.map(project => <li key={project.id}>{project.title}</li> )}
        </ul>

        <button type='button' onClick={handleAddProject}>Adicionar projeto</button>
    </>
    )
}

export default App