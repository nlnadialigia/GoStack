import React, { useState }from 'react'

import './App.css'
import backgroundImage from './assets/background.jpeg'
import Header from './components/Header'


function App() {
  const [projects, setProjects] = useState(['Desenvolvimento de app', 'Front-end web'])

  function handleAddProject() {
    // projects.push(`Novo projeto ${Date.now()}`)

    setProjects([... projects, `Novo Projeto ${Date.now()}`])
    console.log(projects);
  }

  return (
    <>
      <Header title='Projects' />
        <img width={100} src={backgroundImage} alt="Nature"/>
        <ul>
          {projects.map(project => <li key={project}>{project}</li> )}
        </ul>

        <button type='button' onClick={handleAddProject}>Adicionar projeto</button>
    </>
    )
}

export default App