import "./SharedPage.css";

import React, { useState } from "react";
import BreakDownText from "../Components/BreakDownText";
import SpendingPieChart from "../Components/SpendingPieChart";
import NavBar from "../Components/NavBar";

function SharedPage() {
  const spendingData = [
    { title: "Boaz", value: 10, color: "#2B0504" },
    { title: "Adam", value: 15, color: "#874000" },
    { title: "Candice", value: 20, color: "#BC5F04" },
    { title: "Ella", value: 20, color: "#F4442E" },
  ];

  const totalSpending = 2192.01;

  const greetingText = "Boaz, your group's";
  const descriptionText = "October spending is";

  //Add this from database later
  const spendingCategory = [
    {
      title: "Boaz",
      content: [
        { title: "E-transfer to landloard ", date: "Oct 14", amount: 1244.0 },
      ],
    },
    {
      title: "Adam",
      content: [{ title: "Cineplex", date: "Oct 16", amount: 26.0 }],
    },
    {
      title: "Candice",
      content: [
        { title: "Gyubee", date: "Oct 11", amount: 64.0 },
        { title: "Macdonalds", date: "Oct 1", amount: 14.1 },
      ],
    },
    {
      title: "Ella",
      content: [{ title: "MEC", date: "Oct 9", amount: 40.0 }],
    },
  ];

  const categoryTotal = []
  let total = 0
  for (let i = 0; i < spendingCategory.length; i++){
    total = 0
    for (let j = 0; j < spendingCategory[i].content.length; j ++)
    {
      total += spendingCategory[i].content[j].amount
    }
    categoryTotal.push(total)
  }

  const [selected, setSelected] = useState(0);
  const [titleDisplayed, setTitleDisplayed] = useState("Boaz");
  // const [contentDisplayed, setContentDisplayed] = useState(
  //   spendingCategory[0].content
  // );

  function changeTitle(index) {
    setSelected(index === selected ? undefined : index);
    setTitleDisplayed(spendingCategory[index].title);
    // setContentDisplayed(spendingCategory[index].content);
  }

  return (
    // <div>
    //   <NavBar Personal={false} Shared={true} />
    //   <div className="shared-main">
    //     <BreakDownText
    //       greetingText={greetingText}
    //       // contentDisplayed={contentDisplayed}
    //       titleDisplayed={titleDisplayed}
    //       totalSpending={totalSpending}
    //       descriptionText={descriptionText}
    //       buttonTitle='Add contribution'
    //     />
    //     <SpendingPieChart
    //       changeTitle={changeTitle}
    //       spendingData={spendingData}
    //       selected={selected}
    //       pieLabel={categoryTotal[selected]}
    //     />
    //   </div>
    // </div>

    <div>
      <NavBar Personal={false} Shared={true} />
      <h1>Coming Soon</h1>
    </div>
    
  );
}

export default SharedPage;
