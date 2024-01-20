import classes from "./TeamBlock.module.css";
import bookAppointment from "./bookAppointment.jpg";
import { FaFacebookF } from "react-icons/fa";



import  Reeta from "./Reeta.jpeg";
import  Alok from "./Alok.png";
import  Sanjit  from "./Sanjit.png";
import  Jacky from "./Jacky.jpeg";
import  Kiran  from "./KIran.jpg";
import  Arpita from "./Arpita.png";
import  Souvik from "./Souvik.png";
import  Akshay from "./Akshay.jpeg";
import  Anurag from "./image1.jpg";
import  Saswat from "./image1.jpg";
import Ipsit from "./Ipsit.jpeg";
import Rasmita from "./Rasmita.jpeg";
import Ateeb from "./Ateeb.png";


import OneTeamMember from "./OneTeamMember";



import { AiFillInstagram } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";

import Bibhuti from './Bibhuti.jpeg';

import SagarPatro from "./SagarPatra.jpeg"

function TeamBlock() {
  return (
    <div className={classes.TeamBlockParent}>
      <div className={classes.parentOurTeam}>
        <div className={classes.ourTeam}>
          <div className={classes.ourTeamTitle}>Founders</div>
	  {/*
          <div className={classes.ourTeamSubTitle}> Meet Our  Team</div>
	  */}
        </div>


          <div style={{fontSize:"18px", width:"80%",textAlign:"center", marginTop:"30px", marginBottom:"30px"}}>
            With a combined experience of over 40 years, Anurag and Saswat bring a wealth of knowledge and expertise to the table. Having worked with industry giants such as VW, Skoda, Bajaj Auto, Volvo Eicher, Shriram Pistons & Rings, Bosch, Minda, and Mann, they have cultivated a deep understanding of the sector's intricacies.

	  </div>

        <div className={classes.allTeamMemberdetail}>


         <OneTeamMember name="Anurag Yadav"
                        description="20+ years experience in aftermarket business strategy,
                        SKODA, VOLKSWAGEN;Head-aftermarket planning and pricing,spare parts                         
                        Volvo eicher- regional parts manager
                        Bajaj Auto- Area Parts Manager
                        Bosch- Territory manager- IAM
                        
                        Shriram Pistons & Rings: Sales officer- IAM
                        "
                        role="Founder"
                        image={Anurag}
                        />


          <OneTeamMember name="Saswat Routray"
                         description="20+ years experience in automotive aftermarket product, management, supplier management

                         Minda Uno
                         Bosch
                         Mann Fitter
                         "
                        role="Co-Founder"
                        image={Saswat}
                        />


          
        </div>
      </div>
    </div>
  );
}

export default TeamBlock;
