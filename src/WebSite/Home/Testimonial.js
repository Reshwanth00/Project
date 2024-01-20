import classes from "./Testimonial.module.css";
import React, { useRef, useEffect } from "react";

import bookAppointment from "./bookAppointment.jpg";
import t1 from "./t1.jpg";
import t2 from "./t2.jpeg";
import t3 from "./t3.jpg";

import Arindam from "./Arindam.jpeg";

import Debansh from "./debansh.jpeg";
import Santosh from "./Santosh.jpeg"

import { AiFillTwitterCircle } from "react-icons/ai";

function Testimonial() {
  // const divRef = useRef(null);

  // // Automatically scroll the div to the right on component mount
  // useEffect(() => {
  //   const scrollDiv = divRef.current;
  //   if (scrollDiv) {
  //     scrollDiv.scrollLeft = scrollDiv.scrollWidth - scrollDiv.clientWidth;
  //   }
  // }, []);

  return (
    <div className={classes.TestimonialParent}>
      <div className={classes.ourClientDetails}>
        {/* <div className={classes.clientTitle}> Voices of Change </div> */}
        <div className={classes.clientSubTitle}>
          {" "}
          Words from Our Clients..
        </div>

        <div className={classes.clientFeedbackContainer}>


          <div className={classes.aboutClinetBox}>

            <div className={classes.clientFeedback}>
              <img className={classes.clientImg} src={Arindam} alt="logo"></img>

              <AiFillTwitterCircle className={classes.socialNetworkImage} />
            </div>

            <div className={classes.clientDetails}>
            BrandmySpares exceeded our expectations in sourcing and branding our private label spare parts. Their commitment to quality is evident, ensuring a seamless supply chain.
            </div>

            <div className={classes.clientName}>David T</div>

            <div className={classes.clientStatus}>
            Customer Testimonial (Auto Repair Shop Owner)
            </div>
          </div>




          <div className={classes.aboutClinetBox}>
            <div className={classes.clientFeedback}>
              <img className={classes.clientImg} src={Debansh} alt="logo"></img>

              <AiFillTwitterCircle className={classes.socialNetworkImage} />
            </div>
            <div className={classes.clientDetails}>
            Navigating the complexities of sourcing spare parts was made effortless with BrandmySpares. Their trust in top-notch suppliers and dedication to quality standards set them apart in the industry.
            </div>

            <div className={classes.clientName}>Sarah M</div>

            <div className={classes.clientStatus}>
            Client Feedback (Automotive Parts Retailer)
            </div>
          </div>

          <div className={classes.aboutClinetBox}>
            <div className={classes.clientFeedback}>
              <img className={classes.clientImg} src={Santosh} alt="logo"></img>

              <AiFillTwitterCircle className={classes.socialNetworkImage} />
            </div>
            <div className={classes.clientDetails}>
            Choosing BrandmySpares was a game-changer for our business. Their focus on supplier trustworthiness, product quality, and innovative branding concepts truly elevated our private label in the market.
            </div>

            <div className={classes.clientName}>Mike R</div>

            <div className={classes.clientStatus}>Partner Endorsement (Automobile Brand Owner)</div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
