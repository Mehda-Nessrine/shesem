import React, { useState } from "react";
import "./Advice.css";
import Hand from "../assets/Hand.png";
import TrabekLogo from "../assets/TrabekLogo.png";
const Advice = () => {
    const [selectedCrop, setSelectedCrop] = useState("");
    const [nextCrop, setNextCrop] = useState("");

  const handleClick = async () => {
    if (selectedCrop == "not") {
      console.log("request sent to crop");
    } else {
      console.log("request sent to next");
    }
  };

  const recommendations = [
    "النيتروجين مرتفع. النطاق المثالي: 1.33 - 60.98.",
    "الفوسفور منخفض. النطاق المثالي: 51.02 - 76.50.",
    "البوتاسيوم مرتفع. النطاق المثالي: 12.88 - 35.58.",
    "درجة الحرارة منخفضة. النطاق المثالي: 18.36 - 27.73.",
    "الرطوبة منخفضة. النطاق المثالي: 57.04 - 69.12.",
    "درجة الحموضة (pH) منخفضة. النطاق المثالي: 6.34 - 7.46.",
    "هطول الأمطار مرتفع. النطاق المثالي: -38.58 - 258.54."
  ];
  
  const crops = [
    "أرز",
    "البسلة الهندية",
    "الجرام الأسود",
    "الجوت",
    "الفاصوليا الحمراء",
    "الفاصوليا العثة",
    "المونج",
    "بابايا",
    "برتقال",
    "بطاطا",
    "بطيخ",
    "تفاح",
    "جوز الهند",
    "حمص",
    "ذرة",
    "رمان",
    "زيتون",
    "شعير",
    "شمام",
    "طماطم",
    "عدس",
    "عنب",
    "فول",
    "قمح",
    "قهوة",
    "مانجو",
    "موز",
  ];
  console.log(selectedCrop);

  return (
    <div className="advice-wrapper">
      <div className="Advice-container">
        <div className="RightSide3">
        <img src={TrabekLogo} alt="" className="TrabekLogo3" />
          <label className="title3"> نصائح لتحسين صحة تربتك :</label>
          <ul>
            {
                recommendations.map((item,index)=> {
                    return <li
                    key={index}
                    >{ 
                        item
                    }
                        </li>
                })
            }
          </ul>
          <label className="title3"> المحصول الحالي : </label>
          <select onChange={(e) => setSelectedCrop(e.target.value)}  style={{
                width:400,
                height:36,
                padding:"0px 12px"
            }}>
            <option value="not" className="current-crop">"لم ازرع بعد"</option>
            {crops.map((item, index) => {
              return (
                <option value={item} key={index} >
                  {item}
                </option>
              );
            })}
          </select>
          <div style={{
            display:"flex",
            alignItems:"center",
            gap:20,
            
          }}>
          <label className="title3">اقتراحات المحصول القادم : </label>
          <p className="NextCrop" style={{
            marginTop:"20px",
            fontSize:24,
            fontWeight:600
          }}>{nextCrop}</p>
          </div>
          
           <button className="button3">اقترح لي
           </button>
          </div>
          <div className="LeftSide3">
            
            <img src={Hand} alt="" className="Hand3" />
            
         
        </div>
       
      </div>
    </div>
  );
};

export default Advice;
