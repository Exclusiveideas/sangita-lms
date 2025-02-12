import Image from "next/image";
import "./flagShipCourse.css";

const cardInfo = {
  courseTitle: "Campus to Corporate",
  courseDesc: "(Basic Knowledge for Final year students/Freshers)",
  learnables: [
    "Mastering Professional Conversations and Interactions",
    "Writing Clear, Polished, and Professional Emails",
    "Strategies for Productivity and Efficiency",
    "Making a Lasting First Impression and much more....",
  ],
};

const FlagShipCourse = () => {
  return (
    <div className="flagShipCourse_wrapper">
      <div className="courseDetails_wrapper">
        <div className="courseDetails_wrapper_top">
          <h4 className="flagship_labelTxt">Course</h4>
          <h2 className="flagship_courseTitle">{cardInfo?.courseTitle}</h2>
          <p className="flagship_courseDesc">{cardInfo?.courseDesc}</p>
        </div>
        <div className="courseDetails_wrapper_middle">
          <div className="flagship_actionBtnWrapper">
            <div className="flagship_actionBtn buy">Buy Now</div>
            <div className="flagship_actionBtn view">View</div>
          </div>
        </div>
        <div className="courseDetails_wrapper_bottom">
          <div className="flagship_mentorInfo">
            <p className="flagship_divHeader">What You’ll learn</p>
            <div className="flagship_divInfo checks">
              {cardInfo?.learnables?.map((learnable, i) => (
                <p key={i} className="flagship_courseChecks">
                  {learnable}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="courseCard_wrapper">
        <div className="flagship_card">
          <div className="upperContainer"></div>
          <div className="lowerContainer">
            <div className="mentorInfo">
              <p className="divHeader">Mentor</p>
              <p className="divInfo">Sangita Bhattacharya</p>
            </div>
            <div className="mentorInfo">
              <p className="divHeader">Starting at</p>
              <div className="divInfo div">
                <p>6,499/-</p>
                <div className="strikeThrough">
                  <p>1,95,000</p>
                  <hr />
                </div>
              </div>
            </div>
          </div>
          <div className="starContainer">
            <Image
              src={`/images/star.svg`}
              width={65}
              height={65}
              alt="star icon"
              className="cardStar"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlagShipCourse;
