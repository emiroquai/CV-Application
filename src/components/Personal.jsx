/* eslint-disable react/prop-types */
// import { useState } from "react";
import Input from "./Input";
import Textarea from "./Textarea";

export default function Personal({state, setState}) {

  return (
    <>
      <h2 className="cardTitle">Personal Info</h2>
      <Input
        property="name" 
        label= "Name"
        type= "text"
        state={state}
        setState={setState}
      />
      <Input
        property="email"
        label="Email"
        type="email"
        state={state}
        setState={setState}
      />
      <Input
        property="phoneNumber"
        label="Phone Number"
        type="tel"
        state={state}
        setState={setState}
      />
      <Textarea
        property="address"
        label="Address"
        state={state}
        setState={setState}
      />
    </>
  )
}