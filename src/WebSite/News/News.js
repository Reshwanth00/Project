import { useEffect, useState, useRef } from "react";

import BlogAndNewsBlock from "./BlogAndNewsBlock";
import OneFriend from "../../MainApps/Account/UserProfile/Friends/OneFriend";
import OneNewsBlock from "./OneNewsBlock";
import classes from "./News.module.css";

import imageNews1 from "./p1.jpg";
import imageNews2 from "./p2.jpg";
import imageNews3 from "./p3.jpg";
import imageNews4 from "./p4.jpg";
import imageNews5 from "./p5.jpg";
import imageNews6 from "./p6.jpg";
import imageNews7 from "./Online_meeting_apps.png";

import Blog1 from "./Blog1.json";
import Blog2 from "./Blog2.json";
import Blog3 from "./Blog3.json";
import Blog4 from "./Blog4.json";
import Blog5 from "./Blog5.json";
import Blog6 from "./Blog6.json";
import Blog7 from "./Blog7.json";



const News = (props) => {
  const isMounted = useRef(false);

  useEffect(() => {
    isMounted.current = true;
    props.passMountInfo(true);

    return () => {
      isMounted.current = false;
      props.passMountInfo(false);
    };
  }, [props]);

  console.log("blog1: ", Blog1);

  return (
    <div className={classes.parentContainer}>
      {/* <div className={classes.latest}>
        <div className={classes.latestTitle}>NEWS</div>
        <div className={classes.latestsubTitle}>Latest News</div>
      </div> */}

      <div className={classes.topPic}>
        <div className={classes.topContentDiv}>
          <div className={classes.Heading1s}>Our Products</div>

          <div className={classes.subheading1s}>
            Transforming Ideas into Intelligent Solutions
          </div>

          {/*
          <div className={classes.editbtnContainer}>
            <input
              className={classes.emailEditBox}
              type="text"
              placeholder="Your Email Id"
            />

            <button className={classes.subBtn}>Subscribe Now</button>
          </div>
           */}
        </div>
      </div>


       <div className={classes.prodcategories}>
        <div className={classes.oneProdCat}> 2 W </div> 
        <div className={classes.oneProdCat}> 3 W </div>
	<div className={classes.oneProdCat}> Car </div>
	<div className={classes.oneProdCat}> Truck </div>
	<div className={classes.oneProdCat}> Tractor </div>
	<div className={classes.oneProdCat}> BUS </div>

       </div>


      <div className={classes.newsContainer}>

        <OneNewsBlock Blog={Blog1} image={imageNews1} />

        <OneNewsBlock Blog={Blog2} image={imageNews2} />

        <OneNewsBlock Blog={Blog3} image={imageNews3} />

        <OneNewsBlock Blog={Blog4} image={imageNews4} />

        <OneNewsBlock Blog={Blog5} image={imageNews5} />

        <OneNewsBlock Blog={Blog6} image={imageNews6} />
        
      </div>
    </div>
  );
};

export default News;
