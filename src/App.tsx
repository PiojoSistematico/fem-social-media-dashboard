import Card from "./components/Card";

const social: string[] = ["facebook", "twitter", "instagram", "youtube"];

/* useEffect(() => {
  fetch("data.json").then().then();
}, []); */

function App() {
  return (
    <main>
      <header>
        <div>
          <h1>Social Media Dashboard</h1>
          <span>Total Followers: XXXXXX</span>
        </div>
        <div>
          <span>Dark Mode</span>
          <button>XXXX</button>
        </div>
      </header>
      <section title="main" className="main-section">
        {/* {social.map((elem) => (
          <Card type={elem} data={data[elem]}></Card>
        ))} */}
      </section>
      <section title="detail" className="detail-section"></section>
    </main>
  );
}

export default App;
