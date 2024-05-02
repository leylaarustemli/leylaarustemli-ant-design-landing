import React from "react";
import "./Section2.css";
import { Descriptions } from "antd";

const Section2 = () => {
  let array = [
    {
      image: "https://zos.alipayobjects.com/rmsportal/WBnVOjtIlGWbzyQivuyq.png",
      title: "Bir pəncərədən biznesə giriş",
      description:"Məhsulların ödəniş, hesablaşma və mühasibat uçotunun səmərəliliyi dörd dəfə artır"
    },
    {
        image: "https://zos.alipayobjects.com/rmsportal/WBnVOjtIlGWbzyQivuyq.png",
        title: "Bir pəncərədən biznesə giriş",
        description:"Məhsulların ödəniş, hesablaşma və mühasibat uçotunun səmərəliliyi dörd dəfə artır"
      },
      {
        image: "https://zos.alipayobjects.com/rmsportal/WBnVOjtIlGWbzyQivuyq.png",
        title: "leyla",
        description:"Məhsulların ödəniş, hesablaşma və mühasibat uçotunun səmərəliliyi dörd dəfə artır"
      },
  ];
  return (
    <div className="section-two">
      <h3>məhsul və xidmətlər</h3>
      <div className="cards">
      
      {
        array.map((item,index)=>{
            return (  <div key={index} className="card">
          <img
            src={item.image}
            alt=""
          />
          <h3>{item.title}</h3>
          <p>
           {item.description}
          </p>
        </div>)
        })
      }
      </div>
    </div>
  );
};

export default Section2;
