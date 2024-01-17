import "./home.css"

const Home = () => {
  return (
    <div>
      <section className="home">
        <div className="container">
          <div className="home_searchitems">
            <input type="text" placeholder="Search Player..." />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;