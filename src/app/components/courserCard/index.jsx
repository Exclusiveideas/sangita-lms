import "./courseCard.css";

const CourseCard = ({ cardInfo }) => {
  return (
    <div className="courseCard">
      <div className="card_topContainer">
        <h3 className="cardTitle">{cardInfo?.cardTitle}</h3>
      </div>
      <div className="card_bottomContainer">
        <div className="mentorInfo">
          <p className="divHeader">Mentor</p>
          <p className="divInfo">{cardInfo?.mentorName}</p>
        </div>
        <div className="mentorInfo">
          <p className="divHeader">Starting at</p>
          <div className="divInfo div">
            <p>{cardInfo?.pricing?.new}/-</p>
            <div className="strikeThrough">
              <p>{cardInfo?.pricing?.former}</p>
              <hr />
            </div>
          </div>
        </div>
        <div className="mentorInfo">
          <p className="divHeader">What You’ll learn</p>
          <div className="divInfo checks">
            {cardInfo?.learnables?.map((learnable, i) => (
              <p key={i} className="courseChecks">
                {learnable}
              </p>
            ))}
          </div>
        </div>
        <div className="actionBtnWrapper">
          <div className="actionBtn buy">Buy Now</div>
          <div className="actionBtn view">View</div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
