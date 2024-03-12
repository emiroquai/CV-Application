import { useState } from 'react'
import './styles/App.css'
import Card from './components/Card'
import Personal from './components/Personal'
import Preview from './components/Preview'

function App() {
  const [personal, setPersonal] = useState({ 
    name: "John Doe",
    email: "johnny@johnny.com",
    phoneNumber: "+66 666-66-66",
    address: "Amsterdam, The Netherlands"
  })

  return (
    <>
      <header>
        <h1>CV Creator ✏️</h1>
      </header>
      <main>
        <div id='sidebar'>
          <Card title="Personal Info">
            <Personal 
              state={personal}
              setState={setPersonal}
            />
          </Card>
        </div>
        <div id='previewSection'>
          <Preview
            personal={personal}
          />
        </div>
      </main>
     
    </>
  )
}

export default App
