import { useState } from 'react'
import './styles/App.css'
import Card from './components/Card'
import Personal from './components/Personal'
import Experience from './components/Experience'
import Education from './components/Education'
import Preview from './components/Preview'

function App() {
  const [personal, setPersonal] = useState([
    { 
    name: "John Doe",
    email: "johnny@johnny.com",
    phoneNumber: "+66 666-66-66",
    address: "Amsterdam, The Netherlands",
    bio: "Sometimes I get confused and try to smell the stars...",
    }
  ])

  const [experience, setExperience] = useState([
    {
      job: "Senior Asteroid Miner Manager", 
      employer: "SpaceY",
      startDate: "2035-06-01",
      endDate: "2040-10-03",
      description: "Meetings in space, all day long."
    },
    {
      job: "Asteroid Scrubber", 
      employer: "SpaceY",
      startDate: "2025-02-13",
      endDate: "2035-06-01",
      description: "Scrubby scrubby scrub scrub the space rocks, all day long."
    },
    ])

  const [education, setEducation] = useState([
    {
      school: "Moon Space Lab",
      degree: "BSc Kerbal Science",
      startDate: "2020-09-01",
      endDate: "2024-06-01",
    },
  ])

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
          <Card title="Experience">
            <Experience 
              state={experience}
              setState={setExperience}
            />
          </Card>
          <Card title="Education">
            <Education 
              state={education}
              setState={setEducation}
            />
          </Card>

        </div>
        <div id='previewSection'>
          <Preview
            personal={personal}
            experience={experience}
            education={education}
          />
        </div>
      </main>
     
    </>
  )
}

export default App
