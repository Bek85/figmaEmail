import "./Hero.scss";
import Waves from "@/images/waves.svg?component";
import Planes from "@/images/planes.svg?component";

export default function Hero() {
  return (
    <div className="hero">
      <div className="hero_container">
        <Waves className="waves" />
        <img
          className="lamp"
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/780593/Group.png"
          alt="lamp"
        />
        <div className="hero_cta">
          <h2 className="cta_title">Emaily for Designers</h2>
          <p className="cta_description">
            Dynamic email tool for creators that doesn’t cost a leg. Works with
            Sketch, Figma and XD. Easily import your content and send with your
            favorite API.
          </p>
          <button className="btn cta_btn">Start Free Trial</button>
        </div>
        <div className="container_sun">
          <img
            className="sun"
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/780593/sun.png"
            alt=""
          />
        </div>
        <Planes className="planes" />
      </div>
    </div>
  );
}
