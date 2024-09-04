import { useState } from "react";



const SimpleInput = (props) => {

  const [enteredName, setEnteredName]= useState('');
  const [isValid, setIsvalid]= useState(false);
  // const[isTouched, setIsTouched]= useState(false);
  const [enteredNameIsTouched, setEnteredNameIsTouched]= useState(false);

  const inputHandler=(event)=>{
    setEnteredName(event.target.value);
  };
  const submitHandler=(event)=>{
    event.preventDefault();
    setEnteredNameIsTouched(true);
    if(enteredName.trim() === ''){
      setIsvalid(false);
      return;
    }
    setIsvalid(true);
    console.log(enteredName);
    console.log(isValid);
    setEnteredName('');
  };
  const nameInputIsValid= !isValid && enteredNameIsTouched;

  return (
    <form onSubmit={submitHandler}>
      <div className='form-control'>
        <label htmlFor='name'>Your Name</label>
        <input 
        onChange={inputHandler}
        type='text' 
        id='name'
        value={enteredName} 
        />
        {nameInputIsValid && <p className="error-text">Name must  be typed.</p> }
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
