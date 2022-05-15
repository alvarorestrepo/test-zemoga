import { useState, useEffect } from "react";
import Banner from "../../components/Banner";
import BannerBottom from "../../components/BannerBottom";
import Card from "../../components/Card";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { getCelebrities } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";

import "./home.css";
import Row from "../../components/Row";
import Select from "../../components/Select";

function Home() {
  const dispatch = useDispatch();
  const [widthFlag, setWidthFlag] = useState(false);
  const [selectCheck, setSelectCheck] = useState(true);
  const user = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(getCelebrities());
  }, []);

  useEffect(() => {
    //Esta es una función para saber el ancho de la pantalla.
    const changeViewResponsive = () => {
      const widthWindow = window.innerWidth;
      if (widthWindow < 600) {
        setWidthFlag(true);
      } else {
        setWidthFlag(false);
      }
    };
    changeViewResponsive();
    window.addEventListener("resize", changeViewResponsive);
    return () => {
      window.removeEventListener("resize", changeViewResponsive);
    };
  }, []);
  console.log(selectCheck);

  return (
    <>
      <Header />
      <Banner />
      <div className="max-centered">
        {!widthFlag && (
          <div className="content_select">
            <span className="text_rulings">Previous Rulings</span>
            <Select setSelectCheck={setSelectCheck} selectCheck={selectCheck} />
          </div>
        )}
        <main role="main">
          {widthFlag && (
            <div className="cards">
              {user.celebrities &&
                user.celebrities
                  .sort((a, b) => b.votes.positive - a.votes.positive)
                  .map((item) => (
                    <Card
                      key={item.celebrity_id}
                      name={item.name}
                      description={item.description}
                      lastUpdated={item.lastUpdated}
                      picture={item.picture}
                      positive={item.votes.positive}
                      negative={item.votes.negative}
                      id={item.celebrity_id}
                      update={item.update}
                      category={item.category}
                    />
                  ))}
            </div>
          )}
          {!widthFlag && selectCheck && (
            <div className="rows">
              {user.celebrities &&
                user.celebrities
                  .sort((a, b) => b.votes.positive - a.votes.positive)
                  .map((item) => (
                    <Row
                      key={item.celebrity_id}
                      name={item.name}
                      description={item.description}
                      lastUpdated={item.lastUpdated}
                      picture={item.picture}
                      positive={item.votes.positive}
                      negative={item.votes.negative}
                      id={item.celebrity_id}
                      update={item.update}
                      category={item.category}
                    />
                  ))}
            </div>
          )}

          {!widthFlag && !selectCheck && (
            <div className="cards">
              {user.celebrities &&
                user.celebrities
                  .sort((a, b) => b.votes.positive - a.votes.positive)
                  .map((item) => (
                    <Card
                      key={item.celebrity_id}
                      name={item.name}
                      description={item.description}
                      lastUpdated={item.lastUpdated}
                      picture={item.picture}
                      positive={item.votes.positive}
                      negative={item.votes.negative}
                      id={item.celebrity_id}
                      update={item.update}
                      category={item.category}
                    />
                  ))}
            </div>
          )}
        </main>
        <BannerBottom />
        <hr role="separator" />
        <Footer />
      </div>
    </>
  );
}

export default Home;
