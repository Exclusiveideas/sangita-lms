import Image from "next/image";
import "./trustedPartner.css";

const TrustedPartner = () => {
  return (
    <div className="trustedPartnerWrapper">
      <p className="sectionTitle">Trusted By Partners Alike</p>
      <div className="partnersWrapper">
        <Image
          src={`/partner/genpact.svg`}
          width={161}
          height={60} 
          alt="partners logo"
          className="partnerLogo"
        />
        <Image
          src={`/partner/accenture.svg`}
          width={150}
          height={44}
          alt="partners logo"
          className="partnerLogo"
        />
        <Image
          src={`/partner/itc.svg`}
          width={63}
          height={54}
          alt="partners logo"
          className="partnerLogo"
        />
        <Image
          src={`/partner/franklinn.svg`}
          width={156}
          height={45}
          alt="partners logo"
          className="partnerLogo"
        />
        <Image
          src={`/partner/powerGrid.svg`}
          width={187}
          height={56}
          alt="partners logo"
          className="partnerLogo"
        />
      </div>
    </div>
  );
};

export default TrustedPartner;
