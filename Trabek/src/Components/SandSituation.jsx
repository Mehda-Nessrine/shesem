import React from "react";
import "./SandSituation.css";
import Hand from "../assets/Hand.png";
import { useNavigate } from "react-router-dom";

import TrabekLogo from "../assets/TrabekLogo.png";
function SandSituation() {
  const navigate = useNavigate();

  const handleAdviceClick = () => {
    navigate("/advice");
  };
  return (
    <div className="SandSituation-wrapper">
         <div className="SandSituation-Container">
      <div className="Left-Side2">
      <img src={TrabekLogo} alt="" className="TrabekLogo2" />
        <img src={Hand} alt="" className="Hand2" />
        <button className="advice-button"onClick={handleAdviceClick}> انظر النصائح</button>
      </div>
      <div className="right-side2">
       
        <h1 className="title2"> حالة التربة :</h1>
        <table className="soil-table">
          <thead>
            <tr>
              <th>العنصر</th>
              <th>القيمة</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>N (kg/ha)</td>
              <td></td>
            </tr>
            <tr>
              <td>P (kg/ha)</td>
              <td></td>
            </tr>
            <tr>
              <td>K (kg/ha)</td>
              <td></td>
            </tr>
            <tr>
              <td>PH</td>
              <td></td>
            </tr>
            <tr>
              <td>الحرارة (°C)</td>
              <td></td>
            </tr>
            <tr>
              <td>الرطوبة (%)</td>
              <td></td>
            </tr>
            <tr>
              <td>تساقط الامطار (mm)</td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    </div>
   
  );
}

export default SandSituation;
