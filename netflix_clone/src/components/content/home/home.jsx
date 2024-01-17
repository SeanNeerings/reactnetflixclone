import "./home.css"

const Home = () => {
  return (
    <div>
      <section className="home">
        <div className="container">
        <img src="./assets/imgs/sagepizza.png" alt="logo" className="home_img" />
          <div className="home_searchitems">
            <h2>Valorant Stats</h2>
            <input type="text" placeholder="Search Player..." />
          </div>
          <img src="./assets/imgs/sagepizza.png" alt="logo" className="home_img flip" />
        </div>
      </section>
    </div>
  );
};

export default Home;