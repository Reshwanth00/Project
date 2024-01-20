import classes from './OTPinputUnit.module.css';



const OTPinputUnit=(props)=>{



return (


   <input type="number" 
	maxLength="1" 
	className={classes.otpUnit}
	onChange={props.handleChangeOTP}
	name={props.name}
	ref={props.inputRef}
	/>


);

}

export default OTPinputUnit;


/*
  <input
                   type="number"
                   onChange={props.handleChangeOTP}
                   name="username"
                   placeholder=" _ "
                   className={classes.otpUnit}
             />
 */

