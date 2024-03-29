import React from "react";

import classes from "./ProfileImageInfo.module.css";



const ProfileImageInfo = (props) =>{





return (

<div className={classes.profileImageInfo}>


                 <div className={classes.nameDiv}>
                        <i className={classes.name_i}><h3>{props.userData.usertitle}  {props.userData.firstname}   {props.userData.lastname} </h3> </i>
                 </div>
	  
	         <div className={classes.profileImageInfo_position}> 
	                 <span>Role </span> 
	                 <i> 
	                     <span className={classes.roleTxt}>
	                          { props.userData !==null && props.userData.usertype.id === 1 && "Admin"}
	                          {props.userData !==null && props.userData.usertype.id === 2 && "Topper"}
	                          {props.userData !==null && props.userData.usertype.id === 3 && "Student"}
	                     </span> 
	                 </i> 
	          </div>
                 <div className={classes.profileImageInfo_status}>  <span>Status</span>  <i>active</i> </div>
                 <div className={classes.profileImageInfo_joiningDate}> <span>Joined Since </span> <i> <span className={classes.joinTxt}>N/A</span></i>  </div>








</div>
);

}

export default ProfileImageInfo;
