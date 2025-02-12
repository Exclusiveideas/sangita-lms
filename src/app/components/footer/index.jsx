import Image from "next/image";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="leftFooter">
        <div className="videoContainer">
          <Image
            src={`/images/play.svg`}
            width={68}
            height={68}
            alt="play icon"
            className="playIcon"
          />
        </div>
      </div>
      <div className="rightFooter">
        <div className="rightFooter_upperContainer">
          <h2>Prostrategic-H</h2>
          <Image
            src={`/images/check.svg`}
            width={43}
            height={43}
            alt="verified icon"
            className="checkMark"
          />
        </div>
        <div className="rightFooter_lowerContainer">
          <p>
            ProStrategic-H: A Training Consultancy Dedicated to Empowering
            Individuals and Organizations with Tailored Learning Solutions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
