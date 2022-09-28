import Starwars from "../assets/images/star-wars.png";

function Home() {
  return (
    <div id="home">
      <h1>Vilma Developer Test</h1>
      <img src={Starwars} alt="star-wars" width="80%" />
    </div>
  );
}

export default Home;
