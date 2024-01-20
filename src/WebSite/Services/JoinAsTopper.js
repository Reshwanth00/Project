import { useEffect, useState, useRef } from "react";
import classes from "./JoinAsTopper.module.css";

import LeftImageRightText from "./LeftImageRightText.js";
import FirstBlock from "./FirstBlock";
import SecondBlock from "./SecondBlock";
import Testimonial from "./Testimonial";

import image1 from "./n1.png";
import image2 from "./n2.png";
import image3 from "./n3.png";
import image4 from "./n4.png";
import image5 from "./n5.png";
import image6 from "./n6.png";
import image7 from "./n7.png";


import pic1 from "./Picture1.jpg";
import pic2 from "./Picture2.jpg";
import pic3 from "./Picture3.jpg";
import pic4 from "./image1.png";
import pic5 from "./image2.png";
import pic6 from "./image3.png";

import { useHistory } from "react-router-dom";
import Faqlist from "./Faqlist";
import Services from "../Home/Services";
import ServicesTwo from "../Home/ServicesTwo";
import JoinAsTopperTopSection from "../Home/JoinAsTopperTopSection";

const JoinAsTopper = (props) => {
  const isMounted = useRef(false);

  useEffect(() => {
    isMounted.current = true;
    props.passMountInfo(true);

    return () => {
      isMounted.current = false;
      props.passMountInfo(false);
    };
  }, [props]);

  const history = useHistory();

  const applyForTopperHandler = () => {
    history.push("/registerastopper");
  };

  return (
    <div className={classes.rulesAndRegulationsMain}>


      <JoinAsTopperTopSection />
      <div className={classes.bodyContainer}>
        <div className={classes.bodyInnerContainer}>
	{ <ol className={classes.olcards}>
		<li>
			<div className={classes.content}>
				<div className={classes.icon}>
          <img src={image1} alt="logo"></img>
        </div>
				<div className={classes.title}>Network of Most Credible Automotive Component Manufacturers</div>
				<div className={classes.text}>Benefit from our exclusive network of reputable manufacturers, ensuring the highest quality spare parts.</div>
			</div>
		</li>
		<li>
			<div className={classes.content}>
				<div className={classes.icon}><img src={image2} alt="logo"></img></div>
				<div className={classes.title}>You Focus on Sale, We Focus on Your Supplies</div>
				<div className={classes.text}>Streamline your business – let us handle the complexities of sourcing, allowing you to concentrate on sales.</div>
			</div>
		</li><li>
			<div className={classes.content}>
				<div className={classes.icon}><img src={image3} alt="logo"></img></div>
				<div className={classes.title}>Quality Assurance:</div>
				<div className={classes.text}>Our commitment to strict quality standards is reflected in partnerships with ISO 9001, 14001, and IATF 16949 certified suppliers.</div>
			</div>
		</li><li>
			<div className={classes.content}>
				<div className={classes.icon}><img src={image4} alt="logo"></img></div>
				<div className={classes.title}>Consistent Supply of Parts</div>
				<div className={classes.text}>Experience a dependable and consistent supply chain, ensuring you have the parts you need when you need them.</div>
			</div>
		</li><li>
			<div className={classes.content}>
				<div className={classes.icon}><img src={image5} alt="logo"></img></div>
				<div className={classes.title}>Reduce Complexity of Multiple Suppliers</div>
				<div className={classes.text}>Simplify your sourcing process by relying on us as your single-source solution, eliminating the complexities of managing multiple suppliers.</div>
			</div>
		</li><li>
			<div className={classes.content}>
				<div className={classes.icon}><img src={image6} alt="logo"></img></div>
				<div className={classes.title}>Customized Packaging</div>
				<div className={classes.text}>Enhance your brand presence with personalized packaging solutions tailored to your unique specifications.</div>
			</div>
		</li><li>
			<div className={classes.content}>
				<div className={classes.icon}><img src={image7} alt="logo"></img></div>
				<div className={classes.title}>Branding Concepts</div>
				<div className={classes.text}>Leverage our expertise in innovative branding concepts to set your spare parts apart in the competitive automotive market.</div>
			</div>
		</li>
	</ol> }
</div>
</div>
    

      <div className={classes.innerDiv}>


        <ServicesTwo />

        {/* <div className={classes.submainTitle}>
          "A topper become Legend not for achievement but for transforming
          followers’ lives by mentoring and sharing success story"
        </div> */}

        {/* <div className={classes.details1}>
          <b>hello! Toppers</b> provides one-to-one exam preparation online
          mentoring to hundreds of students all over India. Join us and you’ll
          have everything you need to mentor the exam aspirants successfully.
        </div>

        <div className={classes.details2}>
          <b>At hello! Toppers,</b> we believe in the power of mentorship to
          shape the leaders of tomorrow. By becoming a Topper Mentor, you have
          the opportunity to inspire, guide, and motivate students on their
          journey toward achieving success in different competitive exams.
        </div>

        <div className={classes.mainTitle2}>Why Join as a Topper Mentor?</div>

        <div className={classes.threeCardContainer}>
          <div className={classes.card1}>
            <div className={classes.contentContainer}>
              <img src={IMG1} className={classes.img} />
              <div className={classes.title}>
                Create a lasting Impact On Youth
              </div>
              <div className={classes.details}>
                "Shape the future as a topper! Your success story can inspire
                and guide the next generation. Become a mentor and create a
                lasting impact on youth. Share your knowledge, ignite ambitions,
                and be a beacon of inspiration for aspiring minds. Join us in
                building a legacy of excellence!"
              </div>
            </div>
          </div>
          <div className={classes.card2}>
            <div className={classes.contentContainer}>
              <img src={IMG2} className={classes.img} />
              <div className={classes.title}>
                Build Professional and Personal Growth
              </div>
              <div className={classes.details}>
                "Top the charts in your personal and professional journey! As a
                topper, seize the opportunity to build a pathway to success.
                Elevate your expertise, refine communication skills, and boost
                leadership qualities. Join us on the journey of continuous
                growth and make your mark as a leader in your field!"
              </div>
            </div>
          </div>
          <div className={classes.card3}>
            <div className={classes.contentContainer}>
              <img src={IMG3} className={classes.img} />
              <div className={classes.title}>
                Receive Flexible and Rewarding Opportunities
              </div>
              <div className={classes.details}>
                "Top the charts on your terms! As a topper, embrace flexible and
                rewarding opportunities with us. Your expertise is in demand,
                and we offer a platform that fits your schedule. Join today for
                a fulfilling journey where success meets flexibility!"
              </div>
            </div>
          </div>
        </div> */}

        {/* <LeftImageRightText /> */}

        {/* <FirstBlock />

        <SecondBlock /> */}

        {/* <div className={classes.newContainer}>
          <div className={classes.mainheadingTitle}>
            Turn your academic achievements into tangible benefits
          </div>

          <div className={classes.mainHead1}>Monetize Your Expertise :</div>
          <div className={classes.mainDetail1}>
            Earn income by sharing your academic insights and strategies,
            turning your success into a rewarding opportunity.
          </div>

          <div className={classes.mainHead1}>Flexible Schedule :</div>
          <div className={classes.mainDetail1}>
            Enjoy the freedom to set your availability and conduct sessions at
            times that suit your schedule, whether you're a student or a
            professional.
          </div>

          <div className={classes.mainHead1}>
            Personal Growth and Fulfilment :
          </div>
          <div className={classes.mainDetail1}>
            Enhance your communication and teaching skills, and experience the
            satisfaction of positively influencing the educational journeys of
            fellow students.
          </div>

          <div className={classes.mainHead1}>Build Your Reputation :</div>
          <div className={classes.mainDetail1}>
            Establish yourself as an expert in your field, creating a strong
            online presence with positive reviews and testimonials from
            satisfied students.
          </div>

          <div className={classes.mainHead1}>Contribute to Education :</div>
          <div className={classes.mainDetail1}>
            Make a meaningful impact by helping students overcome challenges,
            improve their grades, and succeed academically.
          </div>

          <div className={classes.mainHead1}>Networking Opportunities :</div>
          <div className={classes.mainDetail1}>
            Connect with a community of like-minded mentors, students, and
            education enthusiasts, fostering valuable relationships and
            potential collaborations.
          </div>

          <div className={classes.mainHead1}>Resume Enhancement :</div>
          <div className={classes.mainDetail1}>
            Strengthen your resume by showcasing your experience as a mentor,
            and highlighting your leadership, communication, and teaching
            abilities.
          </div>

          <div className={classes.mainHead1}>
            Positive Community Engagement :
          </div>
          <div className={classes.mainDetail1}>
            Join a supportive and positive community where you can share
            experiences, learn from others, and contribute to the collective
            success of students worldwide.
          </div>

          <div className={classes.mainHead1}>Recognition and Awards :</div>
          <div className={classes.mainDetail1}>
            Stand out as a top-performing mentor with recognition and awards
            based on your contributions, effectiveness, and positive impact on
            students.
          </div>

          <div className={classes.mainHead1}>Convenient Online Platform :</div>
          <div className={classes.mainDetail1}>
            Utilize a user-friendly and advanced online platform that
            streamlines the mentoring process, making it easy for both mentors
            and students to connect and collaborate.
          </div>
        </div> */}

        {/* <Testimonial /> */}

        {/* <Faqlist /> */}

        {/* <div className={classes.shapethefutureCard}>
          <div className={classes.shapetheFutureTitle}>Shape the Future!</div>

          <div className={classes.shapethefutureDetails}>
            Join us in making a difference in the lives of students. Apply now
            to become a Topper Mentor and play a vital role in nurturing the
            next generation of achievers.
          </div>

          <button
            className={classes.shapetheFutureButton}
            type="button"
            onClick={applyForTopperHandler}
          >
            Apply Now
          </button>
        </div> */}
        <div className={classes.bottomContainer}>
          <div className={classes.bottomCardContainer}>
            <div className={classes.bottomImage}>
              <img src={pic1} alt="logo" ></img>
            </div>
            <div className={classes.bottomParagraph}>
              Our mission is to help you connect with your customers through a reliable, quality product. We know that your brand is important to you, which is why we ensure that our private label products meet your exact specifications. Our team has years of experience in the auto parts industry and we pride ourselves on our attention to detail and craftsmanship. We want to help you build a brand that your customers will trust and rely on.
            </div>
          </div>
          <div className={classes.bottomCardContainer}>
            <div className={classes.bottomImage}>
              <img src={pic2} alt="logo" ></img>
            </div>
            <div className={classes.bottomParagraph}>
              We at BrandmySpares.com, understand the myriad challenges that come with sourcing a private label of spare part. Navigating the complex landscape of sourcing, trustworthiness of suppliers, ensuring top-notch product quality, and maintaining a consistent supply chain are just a few hurdles on this journey.
            </div>
          </div>
          <div className={classes.bottomCardContainer}>
            <div className={classes.bottomImage}>
              <img src={pic3} alt="logo" ></img>
            </div>
            <div className={classes.bottomParagraph}>

              As your sourcing partner, we tackle the intricacies of strategic sourcing, evaluating the trustworthiness of suppliers, and ensuring the highest standards of product quality, maintaining seamless supply chain, packaging considerations to defining cutting-edge branding concepts that set your private label apart.

            </div>
          </div>
        </div>
        <div className={classes.lastContainer}>
          <div className={classes.lastCard}>
            <div className={classes.lastText}>
            At BrandmySpares, we are committed to providing our customers with the highest quality auto spare parts . That's why we only work with suppliers who have a proven track record of maintaining the strictest quality standards. Our suppliers are industry best & have certifications such as ISO 9001, 14401 and IATF 16949 to ensure quality standard are met all the times
            </div>
            <div className={classes.lastImage}>
              <img src={pic4} alt="picture" >

              </img>
              <img src={pic5} alt="picture" >

              </img>
              <img src={pic6} alt="picture" >

              </img>
              
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default JoinAsTopper;