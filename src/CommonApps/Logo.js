


import classes from './Logo.module.css';
import image from './logo.png';

const Logo=()=>{

    
return (
    //   <div className={classes.logoText}>
    //       Di
    //       <div className={classes.styleBar}> </div>
    //   </div>
    <div className={classes.logoPicture}>
        <img src={image} alt='LogoImage' className={classes.logoImage}></img>
    </div>


);	



}

export default Logo;
