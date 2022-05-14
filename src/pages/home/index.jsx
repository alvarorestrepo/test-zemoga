import Banner from "../../components/Banner";
import BannerBottom from "../../components/BannerBottom";
import Card from "../../components/Card";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import data from "../../assets/data.json";

import "./home.css";
import Row from "../../components/Row";

function Home() {
  return (
    <>
      <Header />
      <Banner />
      <div className="max-centered">
        <main role="main" className="cards">
          {/* {data.data.map((item, index) => (
            <Card
              key={index}
              name={item.name}
              description={item.description}
              lastUpdated={item.lastUpdated}
              picture={item.picture}
              positive={item.votes.positive}
              negative={item.votes.negative}
            />
          ))} */}
          <Row />
        </main>
        <BannerBottom />
        <hr role="separator" />
        <Footer />
      </div>
    </>
  );
}

export default Home;
