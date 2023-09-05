import facebook from "../assets/images/icon-facebook.svg";
import instagram from "../assets/images/icon-instagram.svg";
import twitter from "../assets/images/icon-twitter.svg";
import youtube from "../assets/images/icon-youtube.svg";
import iconUp from "../assets/images/icon-up.svg";
import iconDown from "../assets/images/icon-down.svg";

type CardProps = {
  platform: string;
  values: {
    name: string;
    followers: number;
    new: number;
    pageViews: number;
    pageViewsPCT: number;
    likes: number;
    likesPCT: number;
  };
};

const Card: React.FunctionComponent<CardProps> = ({ platform, values }) => {
  return (
    <article className={`article ${platform}`}>
      <div className="flex-row">
        <img src={facebook} alt="social-logo" />
        <h2 className="username">{values.name}</h2>
      </div>
      <div className="flex-col">
        <span className="big-number">{values.followers}</span>
        <span className="uppercase">
          {platform == "youtube" ? "Subscribers" : "Followers"}
        </span>
      </div>

      <div
        className={
          Number(values.new) > 0 ? "flex-row increase" : "flex-row decrease"
        }
      >
        <img src={Number(values.new) > 0 ? iconUp : iconDown} alt="" />
        <span>{values.new}</span>
        <span>Today</span>
      </div>
    </article>
  );
};

export default Card;
