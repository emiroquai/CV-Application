/* eslint-disable react/prop-types */
import '../styles/Preview.css'
import Icon from '@mdi/react';
import { mdiPhone } from '@mdi/js';
import { mdiEmail } from '@mdi/js';
import { mdiMapMarker } from '@mdi/js';

export default function Preview({ personal, experience }) {
  return (
    <div id="preview">
      <div id="personalPreview">
        <div>
          <h1>{personal[0].name}</h1>
          <p><Icon path={mdiEmail} /> {personal[0].email}</p>
          <p><Icon path={mdiPhone} /> {personal[0].phoneNumber}</p>
          <p><Icon path={mdiMapMarker}/> {personal[0].address}</p>
        </div>
        <div id='bioPreview'>
          <em>{'"'}{personal.bio}{'"'}</em>
        </div>
      </div>
      <div id="experiencePreview">
        <h2 className='sectionTitle'>Experience</h2>
        {experience.map((item, index) => {
          return (
            <div key={index} className="experience">
              <h3 className='jobTitle'>🚀 {experience[index].job} @{experience[index].employer}</h3>
              <div className="datesWrapper">
                <p className='date'>{experience[index].startDate} -</p>
                <p className='date'>{experience[index].endDate}</p>
              </div>
              <p className='description'>{experience[index].description}</p>
            </div>
          )
          
        })}
      </div>
    </div>
  )
}