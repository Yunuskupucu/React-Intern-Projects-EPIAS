import "../style/Home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="motto-div">
        <label className="home-label">
          Plan <span>Today,</span>
        </label>
        <br />
        <label className="home-label">
          Succeed <span>Tomorrow.</span>
        </label>
        <button className="home-btn">Start</button>
      </div>
    </div>
  );
};

export default Home;
