import React from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";
import { TbFaceId } from "react-icons/tb";
import Hand from "../assets/Hand.png";
import TrabekLogo from "../assets/TrabekLogo.png";

const Home = () => {
  const navigate = useNavigate();

  const handleSandSituationClick = () => {
    navigate("/sand-situation"); // Navigate to SandSituation component
  };

  return (
    <div className="Home-Wrapper">
      <div className="Home-Container">
        <img src={TrabekLogo} alt="" className="TrabekLogo" />
        <div className="Left-Side">
          <h1 className="title">أمنك الغذائي يبدأ من أرضك</h1>
          <img src={Hand} alt="" className="Hand"/>
          <p className="Description">
            من خلال مراقبة صحة تربة المحاصيل، يمكنك ضمان استدامة الزراعة وتحقيق
            أعلى عوائد ممكنة على المدى الطويل، مما يدعم استقرار الأمن الغذائي في
            مجتمعك.
          </p>
        </div>
        <div className="right-side">
          <div className="Info-Container">
            <h1 className="title">التسجيل</h1>
            <p className="Description2">
              لتبدأ في مراقبة صحة تربة مزرعتك ومحاصيلك، قم بتسجيل الدخول الآن
            </p>
            <div style={{ display: "flex", position: "relative" }}>
              <input
                type="text"
                className="input"
                placeholder="هوية الجهاز"
              />
              <TbFaceId 
                style={{
                  position: "absolute",
                  top: 6,
                  left: 5,
                  fontSize: 30
                }}
              />
            </div>
            <button 
              className="button" 
              onClick={handleSandSituationClick}
            >
              دخول
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;