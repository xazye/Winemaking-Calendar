import { hover } from "@testing-library/user-event/dist/hover";
import CSS from "csstype";
import background from "./media/background.jpg";
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
        <div className="control">Ayyyyyyy, wpuść mnie</div>
      </div>
    </div>
  );
};
export default HeroLanding;
