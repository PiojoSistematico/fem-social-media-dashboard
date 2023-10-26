import iconUp from "../assets/images/icon-up.svg";
import iconDown from "../assets/images/icon-down.svg";
import CustomImage from "./CustomImage";

type CardTodayProps = {
  platform: string;
  values: {
    name: string;
    followers: string;
    new: number;
    pageViews: number;
    pageViewsPCT: number;
    likes: number;
    likesPCT: number;
  };
};

const dictionary = {
  facebook: ["Page Views", "Likes"],
  instagram: ["Profile Views", "Likes"],
  twitter: ["Retweets", "Likes"],
  youtube: ["Total Views", "Likes"],
};

const CardToday: React.FunctionComponent<CardTodayProps> = ({
  platform,
  values,
}) => {
  return (
    <>
      <article className="detail">
        <div className="flex-row-between">
          <span>{dictionary[platform as keyof typeof dictionary][0]}</span>
          <CustomImage platform={platform}></CustomImage>
        </div>
        <div className="flex-row-between">
          <span className="big-number">{values.pageViews}</span>
          <div className="flex-row">
            <img
              src={Number(values.pageViewsPCT) > 0 ? iconUp : iconDown}
              alt=""
            />
            <span
              className={
                Number(values.pageViewsPCT) > 0 ? "increase" : "decrease"
              }
            >
              {values.pageViewsPCT} %
            </span>
          </div>
        </div>
      </article>
      <article className="detail">
        <div className="flex-row-between">
          <span>{dictionary[platform as keyof typeof dictionary][1]}</span>
          <CustomImage platform={platform}></CustomImage>
        </div>
        <div className="flex-row-between">
          <span className="big-number">{values.likes}</span>
          <div className="flex-row">
            <img src={Number(values.likesPCT) > 0 ? iconUp : iconDown} alt="" />
            <span
              className={Number(values.likesPCT) > 0 ? "increase" : "decrease"}
            >
              {values.likesPCT} %
            </span>
          </div>
        </div>
      </article>
    </>
  );
};

export default CardToday;
