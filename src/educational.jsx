import { useState} from 'react';

function Educational(){

  const [schoolName, setSchool] = useState('');
  const [degree, setDegree] = useState('');
  const [startDate, setStart] = useState('');
  const [endDate, setEnd] = useState ('');

  const [schoolError, setSchoolError] = useState('');
  const [degreeError, setDegreeError] = useState('');
  const [startDateError, setStartDateError] = useState('');
  const [endDateError, setEndDateError] = useState('');
 
  const [submitBtn, setSubmit] = useState (false); //for the submit button
  const [editEdc , setEditEdc] = useState (false); //for the edit button

  const handleSchool = (e) => {
    setSchool(e.target.value);
  }

  const handleDegree = (e) => {
    setDegree(e.target.value);
  }

  const handleStart = (e) => {
    setStart(e.target.value);
  }

  const handleEnd = (e) => {
    setEnd(e.target.value);
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    let formError = false;

    if(!schoolName){
      formError = true;
      setSchoolError("Please enter an Institution");
    }else{
      setSchoolError('');
    }

    if(!degree){
      formError = true;
      setDegreeError("Please enter your degree");
    }else{
      setDegreeError('');
    }

    if(!startDate){
      formError = true;
      setStartDateError("Please enter a date");
    }else{
      setStartDateError('');
    }

    if(!endDate){
      formError = true;
      setEndDateError("Please enter a date");
    }else{
      setEndDateError('');
    }

    if(!formError){ //only submit if no errors in form
    setSubmit(true);
    setEditEdc(false);
    }
  }

  const handleEdit = () => {
    setEditEdc(true);
  }

  return(
    <>
    <div className= 'container-Education'>
      {!submitBtn || editEdc ?(
      <form onSubmit = {handleSubmit}>
        
       <div>
         <h2>Enter Your Education </h2>
         <label> Institution: </label> 
         <span> {schoolError && <p className= 'error'>{schoolError}</p>} </span>
         <input type='text' id='inst' placeholder = 'Enter an Institution' value = {schoolName} onChange={handleSchool}/>
       </div>

       <div>
         <label> Title of Study: </label>
         <span> {degreeError && <p className='error'>{degreeError}</p>} </span>
         <input type='text' id='degree' placeholder = 'Enter title of Study' value = {degree} onChange={handleDegree}/>
       </div>

       <div>
         <label> Start Date: </label>
         <span> {startDateError && <p className='error'>{startDateError}</p>} </span>
         <input type='text' id='startDate' placeholder = 'Enter Start Date' value = {startDate} onChange={handleStart}/>
       </div>

       <div>
         <label> End Date: </label>
         <span> {endDateError && <p className='error'>{endDateError}</p>} </span>
         <input type='text' id='endDate' placeholder = 'Enter End Date' value = {endDate} onChange={handleEnd}/>
       </div>
       
       <button type = 'submit' id = 'submit-edc'>Submit</button>
       
      </form> ):
      
      (
        <div className = 'submittedEducational-Info'>
          <h2> Education <span> <button className='editEducation' onClick = {handleEdit}> Edit </button> </span> </h2> 
          <p> <strong> {schoolName} </strong> </p>
          <p>{degree} </p>
          <p>{startDate} - {endDate}</p>
        </div>
      )}

    </div>
    </>
  );

}

export default Educational;