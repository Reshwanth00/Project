import classes from "./TeamBlock.module.css";
import bookAppointment from "./bookAppointment.jpg";
import pic1 from "./image1.jpg";
import pic2 from "./image2.jpg";
import pic3 from "./image3.jpg";
import { FaFacebookF } from "react-icons/fa";

import { AiFillInstagram } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";

import Bibhuti from './Bibhuti.jpeg';

import SagarPatro from "./SagarPatra.jpeg"

function TeamBlock() {
  return (
    <div className={classes.TeamBlockParent}>
      <div className={classes.parentOurTeam}>
        <div className={classes.ourTeam}>
          <div className={classes.ourTeamTitle}>Our Team</div>
          <div className={classes.ourTeamSubTitle}> Meet Our Founding Team</div>
        </div>

        <div className={classes.allTeamMemberdetail}>
          <div className={classes.ourTeamdetailContainer}>
            <img className={classes.developerPic1} src={pic1} alt="logo"></img>

            <div className={classes.developerName}>Anurag Yadav</div>

            <div className={classes.developerRole}>Founder</div>

            <div className={classes.socialNetworking}>
              <FaFacebookF className={classes.pic1} />
              <BsTwitter className={classes.pic2} />
              <AiFillInstagram className={classes.pic3} />
            </div>
          </div>

          <div className={classes.ourTeamdetailContainer}>
            <img className={classes.developerPic2} src={pic2} alt="logo"></img>

            <div className={classes.developerName}>Saswat Routray</div>

            <div className={classes.developerRole}>Co-Founder</div>

            <div className={classes.socialNetworking}>
              <FaFacebookF className={classes.pic1} />
              <BsTwitter className={classes.pic2} />
              <AiFillInstagram className={classes.pic3} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeamBlock;
