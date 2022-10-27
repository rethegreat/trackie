import "./PersonalPage.css";

import React, { useState } from "react";
import BreakDownText from "../Components/BreakDownText";
import SpendingPieChart from "../Components/SpendingPieChart";
import NavBar from "../Components/NavBar";

function PersonalPage() {
  const spendingData = [
    { title: "Rent", value: 10, color: "#2B0504" },
    { title: "Entertainment", value: 15, color: "#874000" },
    { title: "Food", value: 20, color: "#BC5F04" },
    { title: "Climbing", value: 20, color: "#F4442E" },
  ];

  const totalSpending = 2192.01;

  const greetingText = "Good morning, Boaz"

  const descriptionText = "your spending in October is";

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
      <NavBar Personal={true} Shared={false}/>
      <div className="personal-main">
        <BreakDownText
          greetingText={greetingText}
          contentDisplayed={contentDisplayed}
          titleDisplayed={titleDisplayed}
          totalSpending={totalSpending}
          descriptionText={descriptionText}
          buttonTitle='Add spending'
        />
        <SpendingPieChart
          changeTitle={changeTitle}
          spendingData={spendingData}
          selected={selected}
        />
      </div>
    </div>
  );
}

export default PersonalPage;
