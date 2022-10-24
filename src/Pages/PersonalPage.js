import "./PersonalPage.css";
import { PieChart } from "react-minimal-pie-chart";

import React, { useState } from "react";

function PersonalPage() {
  const spendingData = [
    { title: "Rent", value: 10, color: "#2B0504" },
    { title: "Entertainment", value: 15, color: "#874000" },
    { title: "Food", value: 20, color: "#BC5F04" },
    { title: "Climbing", value: 20, color: "#F4442E" },
  ];

  //Add this from database later
  const spendingCategory = [
    {title: "Rent", content: {title: "E-transfer to landloard ", date: "Oct 14", amount: 1244.00}},
    {title: "Entertainment", content: {title: "E-transfer to landloard ", date: "Oct 14", amount: 1244.00}},
    {title: "Food", content: {title: "E-transfer to landloard ", date: "Oct 14", amount: 1244.00}},
    {title: "Climbing", content: {title: "E-transfer to landloard ", date: "Oct 14", amount: 1244.00}}
  ]

  const [selected, setSelected] = useState(0);
  const [titleDisplayed, setTitleDisplayed] = useState("Rent");
  const [contentDisplayed, setContentDisplayed] = useState("");

  function changeTitle(index) {
    setSelected(index === selected ? undefined : index);
    setTitleDisplayed(spendingData[index]);
  }

  return (
    <div>
      <div className="navBar">
        <div className="nav-item">Personal</div>
        <div className="nav-item">Shared</div>
      </div>
      <div className="personal-main">
        <div className="personal-description">
          <div className="greeting">
            <h3>Good Morning, Boaz</h3>
            <h3>your spending in October is</h3>
            <h3>$2192.01</h3>
          </div>
          <div className="divider"></div>
          <h3>{titleDisplayed}</h3>
          <p>E-transfer to landloard ~ $1425.00</p>
        </div>
        <PieChart
          className="perosnal_chart"
          data={spendingData}
          lineWidth={30}
          radius={43}
          paddingAngle={5}
          animate
          segmentsStyle={{ transition: "stroke .3s", cursor: "pointer" }}
          segmentsShift={(index) => (index === selected ? 6 : 1)}
          onClick={(event, index) => {
            console.log("CLICK", { event, index });
            changeTitle(index);
          }}
        />
      </div>
      ;
    </div>
  );
}

export default PersonalPage;
