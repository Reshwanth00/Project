import { useEffect, useState, useRef } from "react";

import classes from "./About.module.css";

import LeftImageRightText from "./LeftImageRightText";
import RightImageLeftText from "./RightImageLeftText";

import office from "./Block2.jpg";
import aboutimage2 from "./aboutimage2.jpg";
import p1 from "./p1.png";

import aboutimage3 from "./aboutimage3.jpg";

import checklist from "./checklist.png";

import Team from "./TeamBlock";
import StartUpIndia from "./StartUpIndia.png";
import StartUpOdisha from "./StartUpOdisha.png";
import AboutImage1 from "./AboutImage1.jpg";
import innerDiv from "../Website.module.css";

const About = (props) => {
  const isMounted = useRef(false);

  useEffect(() => {
    isMounted.current = true;
    props.passMountInfo(true);

    return () => {
      isMounted.current = false;
      props.passMountInfo(false);
    };
  }, [props]);

  return (
    <div className={classes.about}>



       <div className={classes.topBlockAbout}>	 
	   <div className={innerDiv.innerDiv}>
              <div className={classes.topTitle}>
                   <h1>Why  Us?</h1>
	           <div style={{fontSize:"18px"}}>
                     Welcome to BrandmySpares.com, where experience meets excellence
                   </div>
              </div>	  
           </div>
       </div>	  


       <Team/>



        <div  className={innerDiv.innerDiv}>
          <p style={{fontSize:"18px"}}>
          With a combined experience of over 40 years, Anurag and Saswat bring a wealth of knowledge and expertise to the table. Having worked with industry giants such as VW, Skoda, Bajaj Auto, Volvo Eicher, Shriram Pistons & Rings, Bosch, Minda, and Mann, they have cultivated a deep understanding of the sector's intricacies.
          </p>


           <p style={{fontSize:"18px"}}>
            Recognizing the critical importance of credible suppliers in private branding for wholesalers and importers, we pride ourselves on our unique relationship with some of the best automotive manufacturers in India. This exclusive access to a vast supplier network sets us apart and cannot be replicated by others. Trust in our experience, reliability, and unparalleled connections to elevate your business in the automotive aftermarket and spare parts domain.
           </p>

           <p style={{fontSize:"18px"}}>
            At BrandmySpares.com, we are committed to delivering quality, forging lasting partnerships, and ensuring that your sourcing needs are met with precision and efficiency. Explore the difference that decades of industry insight can make – welcome to a new era of automotive excellence.

           </p>

         </div>










     <div className={innerDiv.innerDiv}>

        <div className={classes.aboutbox}>
           <div className={classes.leftBox}>
               <img
                  className={classes.OfficeImageContainer}
                  src={AboutImage1}
                  alt="logo"
                  ></img>

               <div className={classes.whyChooseUsDescription}>
	         {/*TGRWA being awarded by Sulochana Das, Mayor - Bhubaneswar for their contributions during the pandemic*/}
               </div>
           </div>


           <div className={classes.RightBox}>
               <div className={classes.p1}>
               Welcome to BrandMySpares.com, a trailblazing force in the automotive spare parts industry, seamlessly merging experience and excellence. Our trajectory is marked by an unwavering commitment to empower businesses with top-tier spare part solutions that surpass expectations.
	       </div>

               <div className={classes.p2}>

                  <b> <h3>Who We Are:</h3> </b>
                  BrandMySpares.com transcends the typical role of a spare parts provider; we are a collective of visionaries, experts, and innovators driven by a fervor for redefining industry standards. Our diverse team amalgamates a wealth of knowledge, creativity, and a shared dedication to instigating positive transformations in the automotive aftermarket.


               </div>

           </div>
        </div>

      <div className={classes.aboutbox2}>
        <div className={classes.RightBox1}>
          <div className={classes.p1}>
           <h3> What Sets Us Apart</h3>
              

	  </div>

          <div className={classes.p2}>

            <ol>
              <li><b>Innovation as our Foundation:</b> BrandMySpares.com is rooted in a culture of innovation. We actively engage with cutting-edge technologies, adhere to industry best practices, and continually explore novel methods to deliver spare part solutions that distinguish themselves in a dynamic automotive landscape.</li>

              <li><b>Collaborative Partnership Philosophy:</b>We value the strength of collaboration. Our relationships with clients are forged on transparent communication, mutual trust, and a collective dedication to achieving outstanding outcomes. Your success is synonymous with our success.
</li>

              <li><b>Agile Development Methodology:</b>BrandMySpares.com fully embraces an agile development methodology. Our adaptive and iterative approach enables us to promptly respond to evolving requirements, ensuring that our spare part solutions seamlessly align with your dynamic needs.
</li>
            </ol>

	  </div>

          <div className={classes.p3}>
          </div>

        </div>

        <div className={classes.leftBox1}>
          <img
            className={classes.OfficeImageContainer}
            src={StartUpIndia}
            alt="logo"
          ></img>
        </div>
      </div>





      

      <div className={classes.whyChooseUsTitle}>Mission </div>
      
      <div className={classes.whyChooseUsDescription}>
      At BrandMySpares, our mission is to revolutionize the automotive component industry through innovative private labeling, delivering unparalleled quality and customization. We empower dealers, enhance profitability, and provide a competitive edge.
     </div>
     


      {/*
      <div className={classes.whyChooseUsContainer}>



        <div className={classes.block1st}>
          <div className={classes.box1}>
            <img className={classes.boxImg} src={checklist} alt="logo"></img>

            <div className={classes.boxTitle}>Community Well-being</div>

            <div className={classes.boxDesc}>
	      To enhance the overall quality of life for residents by fostering a sense of belonging, safety, and well-being within the community.
            </div>
          </div>


          <div className={classes.box1}>
            <img className={classes.boxImg} src={checklist} alt="logo"></img>

            <div className={classes.boxTitle}>Maintenance and Infrastructure:</div>

            <div className={classes.boxDesc}>
	       To ensure the upkeep and improvement of common areas, facilities, and infrastructure to meet residents' needs and expectations.
            </div>
          </div>
        </div>

      </div>
     */}






      <div className={classes.whyChooseUsTitle}>Vision</div>

      <div className={classes.whyChooseUsDescription}>
      At BrandMySpares, we envision leading the automotive component industry with unparalleled quality, customization, and customer satisfaction. Our goal is increased profitability for dealers and distributors through private-labeled spare parts, fostering lasting relationships and industry-wide positive impact.

      </div>



      {/*
      <div className={classes.whyChooseUsContainer}>

          <div className={classes.box1}>
            <img className={classes.boxImg} src={checklist} alt="logo"></img>
            <div className={classes.boxTitle}>Sustainable Living: </div>
            <div className={classes.boxDesc}>
	      To create a sustainable and environmentally responsible community that conserves resources and promotes eco-friendly practices.
            </div>
          </div>


          <div className={classes.box1}>
            <img className={classes.boxImg} src={checklist} alt="logo"></img>
            <div className={classes.boxTitle}> Inclusivity: </div>
            <div className={classes.boxDesc}>
	      To foster an inclusive and diverse community where residents of all backgrounds feel welcome and valued.
            </div>
          </div>

           <div className={classes.box1}>
            <img className={classes.boxImg} src={checklist} alt="logo"></img>
            <div className={classes.boxTitle}> Community Empowerment: </div>
            <div className={classes.boxDesc}>
	      To empower residents to actively participate in decision-making processes and contribute to the betterment of the community.
            </div>
        </div>

      </div>
    */}

    {/*
     <div className={classes.whyChooseUsContainer}>

          <div className={classes.box1}>
            <img className={classes.boxImg} src={checklist} alt="logo"></img>
            <div className={classes.boxTitle}> Quality Living: </div>
            <div className={classes.boxDesc}>
	      To continually improve the quality of life by maintaining high standards of cleanliness, aesthetics, and services.
            </div>
          </div>


          <div className={classes.box1}>
            <img className={classes.boxImg} src={checklist} alt="logo"></img>
            <div className={classes.boxTitle}> Resident Engagement: </div>
            <div className={classes.boxDesc}>
	     To encourage residents to take pride in their community, actively participate in RWA activities, and contribute to the overall betterment of the neighborhood.
            </div>
          </div>

           <div className={classes.box1}>
            <img className={classes.boxImg} src={checklist} alt="logo"></img>
            <div className={classes.boxTitle}> Safety and Security: </div>
            <div className={classes.boxDesc}>
	       To establish a reputation for being a safe and secure place to live, where residents can enjoy peace of mind.
            </div>
        </div>

      </div>
      */}



      {/*
      <div className={classes.whyChooseUsDescription}>
	  It's important to note that the specific mission and vision of TGRWA may evolve over time in response to changing community needs and priorities. Therefore, regular communication and feedback from residents are essential to ensure that the RWA's mission and vision align with the current desires and expectations of the community members.
      </div>
      */}





      <div className={classes.process}>
        <div className={classes.processBox1}>
	  
          <div className={classes.processTitle}> Our Expertise</div>

          <div className={classes.processDesc}>
          BrandMyspare specializes in a range of services,Including
          </div>


          <img className={classes.processImage} src={StartUpOdisha} alt="logo"></img>
	  
        </div>

        <div className={classes.processBox2}>
	  
          <div className={classes.processCard}>
            <img className={classes.cardIcon} src={p1} alt="logo"></img>

            <div className={classes.processContent}>
              <div className={classes.title}>  Branding and Customization Solutions</div>

              <div className={classes.processDesc}>
              Utilizing our expertise in branding, we go beyond the ordinary with custom software development tailored to address your distinct business challenges. Our solutions are crafted to elevate your brand and meet your unique requirements.
              </div>
            </div>
          </div>

	  
          <div className={classes.processCard}>
            <img className={classes.cardIcon} src={p1} alt="logo"></img>

            <div className={classes.processContent}>
              <div className={classes.title}>Integrated Web and Mobile App Solutions</div>

              <div className={classes.processDesc}>
              Seamlessly blending innovation and user-centric design, we specialize in creating scalable and inventive applications for both web and mobile platforms. Our proficiency ensures a harmonious digital experience that resonates with your audience.
              </div>
            </div>
          </div>

	  
          <div className={classes.processCard}>
            <img className={classes.cardIcon} src={p1} alt="logo"></img>

            <div className={classes.processContent}>
              <div className={classes.title}> Advanced Data Science and Analytics </div>

              <div className={classes.processDesc}>
              Delve into the power of data with our expertise in data analytics. We leverage data to derive actionable insights, facilitating informed decision-making and empowering your business to thrive in a data-driven environment.
              </div>
            </div>
          </div>
	  
        </div>
	


      {/*
      <div className={classes.aboutLastSection}>
        <div className={classes.lastSectionTitle1}> Contact Us Today</div>

        <div className={classes.lastSectiondesc1}>
	  Ready to embark on a transformative journey with DiracAi? Contact us today to explore how our innovative software solutions can elevate your business to new heights.
        </div>

      </div>
     */}


     </div>


     </div>	  


    </div>
  );
};

export default About;
