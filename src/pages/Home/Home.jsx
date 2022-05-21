import "./Home.css";
import { Link } from "react-router-dom";
import homeImg from '../../assets/imgs/homeImg.png'
const Home = () => {
  return (
    <div className="home">
      <div className="container">
        <img className="home-img" src={homeImg} width={452} height={462} alt="img"/>
        <section className="section">
          <div className="text">
            <h1 className="title title--home">
             Биз билан орзуларингизни амалга оширинг !
            </h1>
            
            <button className="btn" style={{ display: 'block' }}>
              <Link className="btn__link" to="/register">
                Магазинга утиш
              </Link>
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
