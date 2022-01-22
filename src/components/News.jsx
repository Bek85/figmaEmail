import "./News.scss";
import Fly from "@/images/fly.svg?component";
import Stairs from "@/images/stairs.svg?component";

export default function News() {
  return (
    <section className="news-section">
      <div className="news_container">
        <figure className="large_plane">
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/780593/Group%203.png"
            alt=""
          />
        </figure>
        <figure className="luggage">
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/780593/Group%205-1.png"
            alt=""
          />
        </figure>
        <article className="news news_1">
          <h3>Newsletter in minutes</h3>
          <p>
            Emails are traditionally painfully slow to work with. We’ve made a
            drag and drop tool that automatically fetches data and easily copy
            or send HTML using your favorite API
          </p>
        </article>
        <Stairs className="stairs" />

        <article className="news news_2">
          <h3>Works with Sketch, Figma and XD</h3>
          <p>
            Ever wanted to export your designs directly from your favorite
            design tool to your Email service? Now you can. From layers to HTML,
            to people’s inbox.
          </p>
        </article>

        <div className="fly_container">
          <Fly className="fly" />
        </div>
        <article className="news news_3">
          <h3>So affordable. Small teams OK</h3>
          <p>
            Some email services cost hundreds or thousands to send to a
            not-so-large audience. We’ll make sure you can stop worrying bout
            costs and more about sending your beautiful content!
          </p>
        </article>
        <figure className="furniture">
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/780593/furniture%20scene.png"
            alt=""
          />
        </figure>
      </div>
    </section>
  );
}
