import { useState } from 'react'
import './styles/App.css'
import Card from './components/Card'
import Personal from './components/Personal'

function App() {
  const [personal, setPersonal] = useState({ 
    name: "John Doe",
    email: "johnny@johnny.com",
    phoneNumber: 6666666,
    address: "Amsterdam"
  })

  return (
    <>
      <header>
        <h1>CV Creator ✏️</h1>
      </header>
      <main>
        <div id='sidebar'>
          <Card>
            <Personal 
              state={personal}
              setState={setPersonal}
            />
          </Card>
        </div>
        <div id='previewSection'>
          <h1>{personal.name}</h1>
          <h3>{personal.email}</h3>
        </div>
      </main>
     
    </>
  )
}

export default App
