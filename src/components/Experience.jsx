/* eslint-disable react/prop-types */
import AddButton from "./AddButton";
import DeleteButton from "./DeleteButton";
import Input from "./Input";
import Textarea from "./Textarea";

export default function Experience({state, setState}) {

  return (
    <>
      {state.map((job, index) => {
        return (
          <div key={index} className="formWrapper">
            <Input
              index={index}
              property="job"
              label="Job"
              type="text"
              state={state}
              setState={setState} />
            <Input
              index={index}
              property="employer"
              label="Employer"
              type="text"
              state={state}
              setState={setState} />
            <div className="dateWrapper">
              <Input
                index={index}
                property="startDate"
                label="Start"
                type="date"
                state={state}
                setState={setState} />
              <Input
                index={index}
                property="endDate"
                label="End"
                type="date"
                state={state}
                setState={setState} />
            </div>
            <Textarea
              index={index}
              property="description"
              label="Description"
              state={state}
              setState={setState} />
            <DeleteButton
              index={index}
              state={state}
              setState={setState}
            />
            
          </div>
        )     
      })}
      <AddButton
        handleClick={() => {
          const newState = [...state];
          newState.push({
            job: "", 
            employer: "",
            startDate: "",
            endDate: "",
            description: ""
          })
          setState(newState);
        }}
      />
    </>
  )
}