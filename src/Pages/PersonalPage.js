import "./PersonalPage.css";
import { PieChart } from "react-minimal-pie-chart";

import React, { useState } from "react";
import PageButton from "../Components/PageButton";

function PersonalPage() {
  const spendingData = [
    { title: "Rent", value: 10, color: "#2B0504" },
    { title: "Entertainment", value: 15, color: "#874000" },
    { title: "Food", value: 20, color: "#BC5F04" },
    { title: "Climbing", value: 20, color: "#F4442E" },
  ];

  //Add this from database later
  const spendingCategory = [
    {
      title: "Rent",
      content: [
        { title: "E-transfer to landloard ", date: "Oct 14", amount: 1244.0 },
      ],
    },
    {
      title: "Entertainment",
      content: [{ title: "Cineplex", date: "Oct 16", amount: 26.0 }],
    },
    {
      title: "Food",
      content: [
        { title: "Gyubee", date: "Oct 11", amount: 64.0 },
        { title: "Macdonalds", date: "Oct 1", amount: 14.1 },
      ],
    },
    {
      title: "Climbing",
      content: [{ title: "MEC", date: "Oct 9", amount: 40.0 }],
    },
  ];

  const [selected, setSelected] = useState(0);
  const [titleDisplayed, setTitleDisplayed] = useState("Rent");
  const [contentDisplayed, setContentDisplayed] = useState(
    spendingCategory[0].content
  );

  function changeTitle(index) {
    setSelected(index === selected ? undefined : index);
    setTitleDisplayed(spendingCategory[index].title);
    setContentDisplayed(spendingCategory[index].content);
  }

  return (
    <div>
      <div className="navBar">
        <div className="nav-item selected">Personal</div>
        <div className="nav-item">Shared</div>
        <div className="nav-item">Settings</div>
      </div>
      <div className="personal-main">
        <div className="left-flexbox">
          <div className="personal-description">
            <div className="greeting">
              <h3>Good Morning, Boaz</h3>
              <h3>your spending in October is</h3>
              <h3>$2192.01</h3>
            </div>
            <div className="divider"></div>
            <h3>{titleDisplayed}</h3>
            {contentDisplayed.map((content) => (
              <p>
                {content.date}: {content.title} ${content.amount}
              </p>
            ))}
          </div>
          <PageButton title="Add Spending" />
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
