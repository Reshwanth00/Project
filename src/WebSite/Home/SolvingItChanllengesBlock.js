import classes from "./SolvingItChanllengesBlock.module.css";
import innerDiv from "../Website.module.css";
import IMG1 from "./purchase.png";
import IMG2 from "./maintenance.png";
import IMG3 from "./enhance.png";

function SolvingItChanllengesBlock() {
  return (

    <div className={classes.threeCardContainer}>
      <div className={classes.card1}>
        <div className={classes.contentContainer}>
          <img src={IMG1} className={classes.img} />
          <div className={classes.title}>Innovative Spare Part Solutions</div>
        </div>
      </div>
      <div className={classes.card2}>
        <div className={classes.contentContainer}>
          <img src={IMG2} className={classes.img} />
          <div className={classes.title}>Strategic Brand Enhancement</div>
        </div>
      </div>
      <div className={classes.card3}>
        <div className={classes.contentContainer}>
          <img src={IMG3} className={classes.img} />
          <div className={classes.title}>Reliable Performance, Every Mile</div>
        </div>
      </div>
   </div>
  );
}

export default SolvingItChanllengesBlock;
