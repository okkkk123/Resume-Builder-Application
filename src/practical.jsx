import { useState} from 'react';

function Practical() {
  
  const [experiences, setExperiences] = useState([{companyName: '', position: '', tasks: '', start: '', end: ''}]);
  const [submit, setSubmit] = useState(false);
  const [edit, setEdit] = useState(false);
  const [errors, setErrors] = useState({}); //error state which holds error messages 

  const handleCompanyChange = (index, e) => {
    const newExperiences = [...experiences]; //copies into new array
    newExperiences[index].companyName = e.target.value; //access the property of the index
    setExperiences(newExperiences);
  }

  const handlePositionChange = (index, e) => {
   const newExperiences = [...experiences];
   newExperiences[index].position = e.target.value;
   setExperiences(newExperiences);
  }

  const handleTasksChange = (index, e) => {
    const newExperiences = [...experiences];
    newExperiences[index].tasks = e.target.value;
    setExperiences(newExperiences);
  }

  const handleStartChange = (index, e) => {
    const newExperiences = [...experiences];
    newExperiences[index].start = e.target.value;
    setExperiences(newExperiences)
  }

  const handleEndChange = (index, e) => {
    const newExperiences = [...experiences];
    newExperiences[index].end = e.target.value
    setExperiences(newExperiences);
  }

  const validateForm = () => {
    let formErrors = {};
    let hasErrors = false;
    experiences.forEach((experiences, index) =>{
      if(!experiences.companyName){
        formErrors[`companyName_${index}`] = "Please enter a Company name";
        hasErrors = true;
      }
      if(!experiences.position){
        formErrors[`position_${index}`] = "Please enter a Postion";
        hasErrors = true;
      }
      if(!experiences.tasks){
        formErrors[`tasks_${index}`] = "Please enter a Task";
        hasErrors = true;
      }
      if(!experiences.start){
        formErrors[`start_${index}`] = "Please enter a Start date";
        hasErrors = true;
      }
      if(!experiences.end){
        formErrors[`end_${index}`] = "Please enter an End date";
        hasErrors = true
      }
    });
    setErrors(formErrors);
    return hasErrors;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(validateForm()){//if there is empty fields
      setSubmit(false);
      setEdit(false);
    }else{//if there are no empty fields 
    setSubmit(true);
    setEdit(false);
    }
  }

  const handleEdit = () => {
    setEdit(true);
  }
//this func changes the state 
  const addExperience = () => {
    setExperiences([...experiences, {companyName: '', position: '', tasks: '', start: '', end: ''}]);
    setSubmit(false); //this allows the form to pop up as it will satisfy the condition
  }

  return (
    <>
      {!submit || edit ? (
      <form onSubmit = {handleSubmit}>
      {experiences.map( (experiences, index) => (
        <div className = 'experiencesForm' key = {index}>
          <h2>Enter Work Experience</h2>

         <div> 
           <label>Company Name: </label>
           <span>{errors[`companyName_${index}`] && <p className="error">{errors[`companyName_${index}`]}</p>}</span>
           <input type = 'text' placeholder = 'Enter company name' id= 'company' value = {experiences.companyName} onChange = { (e)=>handleCompanyChange(index,e)}/> 
         </div>

         <div> 
           <label>Position: </label>
           <span>{errors[`position_${index}`] && <p className="error">{errors[`position_${index}`]}</p>}</span>
           <input type = 'text' placeholder = 'Enter Position' id= 'position' value = {experiences.position} onChange = {(e)=>handlePositionChange(index,e)}/> 
         </div>

         <div> 
           <label>Tasks: </label>
           <span>{errors[`tasks_${index}`] && <p className="error">{errors[`tasks_${index}`]}</p>}</span>
           <input type = 'text' placeholder = 'Enter task' id= 'task' value = {experiences.tasks} onChange = { (e)=> handleTasksChange(index,e)} /> 
         </div>

         <div> 
           <label>Start Date: </label>
           <span>{errors[`start_${index}`] && <p className="error">{errors[`start_${index}`]}</p>}</span>
           <input type = 'text' placeholder = 'Enter Start date' id= 'start' value = {experiences.start} onChange = { (e) => handleStartChange(index,e)}/> 
         </div>

         <div> 
           <label>End Date: </label>
           <span>{errors[`end_${index}`] && <p className="error">{errors[`end_${index}`]}</p>}</span>
           <input type = 'text' placeholder = 'Enter End date' id= 'end' value = {experiences.end} onChange = { (e) => handleEndChange(index,e)}/>
         </div>

         </div>
          ))}

        <button type = 'submit' id= 'submit-exp'>Submit</button>
      </form>): 
      (
        <div className = 'experienceInfo'>
          <h2>Experiences <span> <button className= 'editPractical' onClick = {handleEdit}> Edit </button> </span> 
          <span> <button className = 'addExpBtn' type = 'button' onClick = {addExperience}>Add Experience</button> </span>
          </h2> 
          {experiences.map( (experiences, index) => (
            <div key= {index}>
              <p> <strong> {experiences.companyName}  </strong> </p>
              <p>{experiences.position} </p>
              <p>{experiences.tasks} </p>
              <p>{experiences.start} - {experiences.end} </p>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default Practical;