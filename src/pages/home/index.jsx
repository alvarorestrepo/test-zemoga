import Banner from "../../components/Banner";
import BannerBottom from "../../components/BannerBottom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import "./home.css";
function Home() {
  return (
    <>
      <Header />
      <Banner />
      <div className="max-centered">
        <main role="main">{/* aca va el codigo */}</main>
        <BannerBottom />
        <hr role="separator" />
        <Footer />
      </div>
    </>
  );
}

export default Home;
