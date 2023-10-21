import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import model from "../glassesImage/model.jpg";
import image from "../glassesImage/v1.png";
import axios from "axios";
function App() {
  const [glasses, setGlasses] = useState([]);
  const [img, setImg] = useState();
  useEffect(() => {
    axios
      .get("https://652382a9f43b179384158611.mockapi.io/tab")
      .then((data) => setGlasses(data.data));
  }, []);

  return (
    <>
      <div className="shop">
        <header>
          <h2>Try Glasses App Online</h2>
        </header>
        <div className="model">
          <div className="left">
            <img src={model} alt="" />
            {img ? <img className="test-img" src={img} alt="" /> : ""}
            <div className="left-content">
              <h5>FENDI F8752</h5>
              <p>
                Light pink square lense define these sunglasses, ending with
                amother of pearl effect tip
              </p>
            </div>
          </div>
          <div className="right">
            <img src={model} alt="" />
          </div>
        </div>
        <div className="list">
          {glasses.map((item, index) => {
            return (
              <img onClick={() => setImg(item.url)} src={item.url} alt="" />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
