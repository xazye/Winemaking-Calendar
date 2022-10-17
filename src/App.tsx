import { Link } from "react-router-dom";
import "./App.css";
const HeroLanding = () => {
  return (
    <div className="root">
      <div className="inner">
        <h1 className="title">
          Twój <span className="hlght">Kalendarzyk Winiarza</span> jest gotowy
          Ci pomóc.
        </h1>
        <div className="description">
          Przekonaj się jak łatwe potrafi być tworzenie i przechowywanie notatek
          o twoich trunkach! Zapisuj swoje ukochane przepisy w chmurze,
          przeglądaj zdjęcia swoich seksownych nastawów, a wszystko to ZA DARMO.
        </div>
        <Link to={"/kalendarz"}>
          <div className="control">Ayyyyyyy, wpuść mnie</div>
        </Link>
      </div>
    </div>
  );
};
export default HeroLanding;
