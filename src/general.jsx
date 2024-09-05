import {useState} from 'react';

function GeneralInfo(){

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [isSubmitted, setSubmitBtn] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  const handleName = (e) => {
    setName(e.target.value);
  }

  const handleEmail = (e) => {
    setEmail(e.target.value);
  }

  const handlePhone = (e) => {
    setPhone(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault(); //prevents the deafult behaviour of forms
    let hasError = false; //boolean to keep track of error
    if(!name){
      hasError = true;
      setNameError("Please Enter your Name"); 
    }else{
      setNameError('');
    } 

    if(!email){
      hasError = true;
      setEmailError("Please enter your email");
    }else{
      setEmailError('');
    }

     if(!phone){
       hasError = true;
      setPhoneError("Please enter a phone number");
    }else{
      setPhoneError('');
    }
   
    if(!hasError){ //IF error free then you may submit form
    setSubmitBtn(true);
    setIsEdit(false);
    }  
   
  }

  const handleEdit = () => {
    setIsEdit(true)
    setNameError('');
    setEmailError('');
    setPhoneError('');
    
  }

  return(
    <div className= "generalInfo">
      {!isSubmitted || isEdit ? (
      <form onSubmit={handleSubmit}>
        <h2 className= 'formTitle'>Resume Builder </h2>
        <div>
          <label> Name: </label> <span> {nameError && <p className = 'error'>{nameError}</p>} </span>
          <input type= 'text' placeholder = 'Enter your name' value = {name} id = 'name' onChange={handleName}/>
        </div>

        <div>
          <label> Email: </label>
          <span> {emailError && <p className='error'>{emailError}</p>} </span>
          <input type= 'text' placeholder = 'Enter your email' value = {email} id = 'email' onChange={handleEmail} />
        </div>

        <div>
          <label> Phone: </label>
          <span> {phoneError && <p className='error'>{phoneError}</p>} </span>
          <input type= 'text' placeholder = 'Enter Phone number' value = {phone} id = 'phone' onChange={handlePhone}/>
        </div> 

        <button type = 'submit' id= 'submitbtn'>Submit</button>
      </form>
      
      ) : (
        <div className = 'submittedGeneral'>

          <h1> {name} <span> 
          <button className = 'editGeneral' onClick = {handleEdit}> 
           Edit 
          </button> 
          </span></h1>
          
          <p> <span> <strong> Email: </strong> {email} </span>

          <span>&nbsp;&nbsp;&nbsp;</span>
           
           <span> <strong> Phone: </strong>  {phone} </span> 

          </p>

          </div>
      )}

    </div>
  );


}
export default GeneralInfo;