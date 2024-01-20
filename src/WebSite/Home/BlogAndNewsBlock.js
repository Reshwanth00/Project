import classes from "./BlogAndNewsBlock.module.css";
import bookAppointment from "./bookAppointment.jpg";
import bn1 from "./bn1.jpg";
import bn2 from "./bn2.jpg";
import bn3 from "./bn3.jpg";
import bn4 from "./bn4.jpg";
import SingleBlog from "./SingleBlog";

import BlogImage1 from "./BL1.jpg";
import BlogImage2 from "./BL2.png";
import BlogImage3 from "./BL3.jpg";
import BlogImage4 from "./BL4.jpeg";

import PSU_DATA_ANALYTICS from "./PSU_DATA_ANALYTICS.png";
import AI_STUDENT_ASSESSMENT from "./AI_STUDENT_ASSESSMENT.png";
import STARTUP_MVP_BUILDER from "./STARTUP_MVP_BUILDER.png"






function BlogAndNewsBlock() {
  
  let title1 = "CES 2024 recap: Hyundai, Bosch talk hydrogen; AI comes to the cockpit, Honda and VinFast EVs make a splash";
  let text1 ="Leveraging data analytics in public sector units can offer numerous benefits and contribute to more effective and efficient governance. Here are several reason..."
  let link1 = "https://www.autonews.com/live-blog/ces-2024-live-updates";

  let title2 = "Maruti Suzuki announces price hike across models to offset inflation";
  let text2 ="Artificial Intelligence (AI) is helping student assessment for several reasons, providing benefits to both educators and students. Here are some key reasons why AI is playing a crucial ..."
  let link2 =
    "https://auto.economictimes.indiatimes.com/news/passenger-vehicle/maruti-suzuki-announces-price-hike-across-models-to-offset-inflation/106889562?utm_source=top_story&utm_medium=homepage";

  let title3 = "Mercedes-Benz plans to double Pune plant capacity to 40k units";
  let text3 ="Building a Minimum Viable Product (MVP) is a common and strategic approach for startups. Here are ten reasons why startups should consider developing an MVP..."
  let link3 =
    "https://auto.economictimes.indiatimes.com/news/passenger-vehicle/mercedes-benz-plans-to-double-pune-plant-capacity-to-40k-units/106847899?utm_source=top_story&utm_medium=homepage";

    return (
    <div className={classes.blogAndNewsContainer}>
      <div className={classes.latest}>
        <div className={classes.latestTitle}>Blogs</div>
        <div className={classes.latestsubTitle}>Latest Articles</div>
      </div>

      <div className={classes.newsContainer}>
        <SingleBlog
          title={title1}
          text={text1}
          link={link1}
          image={PSU_DATA_ANALYTICS}
        />
        <SingleBlog
          title={title2}
          text={text2}
          link={link2}
          image={AI_STUDENT_ASSESSMENT}
        />
        <SingleBlog
          title={title3}
          text={text3}
          link={link3}
          image={STARTUP_MVP_BUILDER}
        />
	 {/*
        <SingleBlog
          title={title4}
          text={text4}
          link={link4}
          image={BlogImage4}
        />
	*/}
      </div>
    </div>
  );
}

export default BlogAndNewsBlock;
