/* eslint-disable react/prop-types */
// import { useState } from "react";
import Input from "./Input";

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
      <Input
        property="address"
        label="Address"
        type="text"
        state={state}
        setState={setState}
      />
    </>
  )
}