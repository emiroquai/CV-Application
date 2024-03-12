/* eslint-disable react/prop-types */
import '../styles/Preview.css'
import Icon from '@mdi/react';
import { mdiPhone } from '@mdi/js';
import { mdiEmail } from '@mdi/js';
import { mdiMapMarker } from '@mdi/js';

export default function Preview({ personal }) {
  return (
    <div id="preview">
      <div id="personalPreview">
        <h1>{personal.name}</h1>
        <p><Icon path={mdiEmail} /> {personal.email}</p>
        <p><Icon path={mdiPhone} /> {personal.phoneNumber}</p>
        <p><Icon path={mdiMapMarker}/> {personal.address}</p>
      </div>
    </div>
  )
}