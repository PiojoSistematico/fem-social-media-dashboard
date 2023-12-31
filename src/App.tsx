import { useEffect, useState } from "react";
import Card from "./components/Card";
import CardToday from "./components/CardToday";

type socialData = {
  name: string;
  followers: string;
  new: number;
  pageViews: number;
  pageViewsPCT: number;
  likes: number;
  likesPCT: number;
};

type dataProp = {
  [key: string]: socialData;
};
const socialMediaKeys: (keyof dataProp)[] = [
  "facebook",
  "twitter",
  "instagram",
  "youtube",
];

const generateInitialData = (): dataProp => {
  const initialSocialData: socialData = {
    name: "",
    followers: "0",
    new: 0,
    pageViews: 0,
    pageViewsPCT: 0,
    likes: 0,
    likesPCT: 0,
  };

  return {
    facebook: { ...initialSocialData },
    twitter: { ...initialSocialData },
    instagram: { ...initialSocialData },
    youtube: { ...initialSocialData },
  };
};

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [data, setData] = useState<dataProp>(generateInitialData());

  function handleThemeClick(): void {
    setDarkMode((prev) => !prev);
  }

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((info) => setData(info));
  }, []);

  const followers = Object.keys(data).reduce(
    (sum, elem) =>
      sum +
      parseInt(data[elem].followers.toString().replace(/[^0-9]/g, ""), 10),
    0
  );

  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      <header>
        <div>
          <h1>Social Media Dashboard</h1>
          <span className="secondary-heading">
            Total Followers: {followers}
          </span>
        </div>
        <section className="theme-section">
          <span className="secondary-heading">Dark Mode</span>
          <button onClick={handleThemeClick} className="toggle-button">
            <div
              className="toggle-circle"
              style={{
                transform: darkMode ? "translateX(30px)" : "translateX(0)",
              }}
            />
          </button>
        </section>
      </header>
      <main>
        <section title="summary" className="summary-section">
          {socialMediaKeys.map((platform, index) => (
            <Card
              key={index}
              platform={platform as string}
              values={data[platform]}
            ></Card>
          ))}
        </section>
        <h1>Overview - Today</h1>
        <section title="detail" className="detail-section">
          {socialMediaKeys.map((platform, index) => (
            <CardToday
              key={index}
              platform={platform as string}
              values={data[platform]}
            ></CardToday>
          ))}
        </section>
      </main>
    </div>
  );
}

export default App;
