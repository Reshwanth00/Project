import classes from "./Home.module.css";

import w1 from "./is1.png";
import w2 from "./solution.png";
import w3 from "./service.png";

import w4 from "./enhance.png";
import w5 from "./fast-delivery.png";
import w6 from "./customer-service.png";
import innerDiv from "../Website.module.css";




const Services = () => {



  const dataanalyticsHandler=()=>{

   window.open("https://diracai.com/servicesDetails/1","__blank");

  }


  const webdevHandler=()=>{
 
   window.open("https://diracai.com/servicesDetails/2","__blank");	  
  
  }


  const mobdevhandler=()=>{

    window.open("https://diracai.com/servicesDetails/3","__blank");	  

  }	


  const edtechHandler=()=>{

   window.open("https://diracai.com/servicesDetails/4","__blank");

  }


  const databasehandler=()=>{

   window.open("https://diracai.com/servicesDetails/5","__blank");

  }


  const softtrainHandler=()=>{

   window.open("https://diracai.com/servicesDetails/6","__blank");

  }




  return (
    <div className={classes.mainWhytoppersContainer}>
      <div className={innerDiv.innerDiv}>

        <div className={classes.whyToppersTitle}>Our Services</div>



        <div className={classes.whyToppersContainer}>


          <div className={classes.paarent} onClick={dataanalyticsHandler}>
            <div className={classes.logo}>
              <img src={w1} className={classes.imagesExam} />
            </div>
            <div className={classes.title}> Premium Product Sourcing</div>
            <div className={classes.description}>
            High-quality spare parts sourced directly, rigorously checked for reliability, ensuring longevity and optimal performance.
	    </div>
          </div>

          <div className={classes.paarent} onClick={mobdevhandler}>
            <div className={classes.logo}>
              <img src={w2} className={classes.imagesExam} />
            </div>
            <div className={classes.title}> Customized Branding Solutions</div>
            <div className={classes.description}>
            Tailored branding services for businesses, create unique logos, packaging, and labels to build brand identity.            </div>
          </div>

         

          <div className={classes.paarent} onClick={edtechHandler}>
            <div className={classes.logo}>
              <img src={w3} className={classes.imagesExam} />
            </div>
            <div className={classes.title}>Diverse Product Range</div>
            <div className={classes.description}>
            Extensive catalog covering engine, body, suspension, and electrical parts, ensuring compatibility with various vehicle models.
	    </div>
          </div>

          <div className={classes.paarent} onClick={databasehandler}>
            <div className={classes.logo}>
              <img src={w4} className={classes.imagesExam} />
            </div>
            <div className={classes.title}> Competitive Pricing Strategies</div>
            <div className={classes.description}>
	     Implement competitive pricing models to ensure affordability while maintaining the high quality of spare parts. 

	   </div>
          </div>

          <div className={classes.paarent} onClick={softtrainHandler}>
            <div className={classes.logo}>
              <img src={w5} className={classes.imagesExam} />
            </div>
            <div className={classes.title}>Timely Delivery</div>
            <div className={classes.description}>
            Robust logistics network for efficient delivery, ensuring timely arrival of spare parts to any location.            </div>


          </div>
          <div className={classes.paarent} onClick={webdevHandler}>
            <div className={classes.logo}>
              <img src={w6} className={classes.imagesExam} />
            </div>
            <div className={classes.title}>Exceptional Customer Support</div>
            <div className={classes.description}>
            Dedicated support team providing guidance on product selection, branding, and addressing customer queries and concerns.
	    </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
