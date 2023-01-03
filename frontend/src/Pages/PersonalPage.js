import "./PersonalPage.css";

import React, { useEffect, useState } from "react";
import BreakDownText from "../Components/BreakDownText";
import SpendingPieChart from "../Components/SpendingPieChart";
import NavBar from "../Components/NavBar";

function PersonalPage() {
  const pieData = [
    { title: "Rent", value: 10, color: "#2B0504" },
    { title: "Entertainment", value: 15, color: "#874000" },
    { title: "Food", value: 20, color: "#BC5F04" },
    { title: "Climbing", value: 20, color: "#F4442E" },
  ];

  const greetingText = "Good morning, Boaz"

  const descriptionText = "your spending in October is";

  const [selected, setSelected] = useState(0);
  const [selectedSpending, setSelectedSpending] = useState(null);
  const [titleDisplayed, setTitleDisplayed] = useState("Rent");


  function changeTitle(index) {
    setSelected(index === selected ? undefined : index);

    setTitleDisplayed(pieData[index].title)
    
  }

  const [dataMounted, setDataMounted] = useState(false)

  const [spending, setSpending] = useState(null)

  const [categoryTotal, setCategoyTotal] = useState(0)

  useEffect(() => {
    const fetchSpending = async () => {
      const response = await fetch('/api/spending')
      const json = await response.json()

      if (response.ok){
        setSpending(json)
        setCategoyTotal(json.reduce((accumulator, object) => {
          return accumulator + object.amount
        }, 0))
        setDataMounted(true)
      }
    }
    fetchSpending()
  }, [])

  useEffect(() => {
    if (dataMounted){
      setSelectedSpending(spending.filter(object => object.category === titleDisplayed))
    } 
    

  }, [titleDisplayed, spending, dataMounted])

  

  return (
    <div>
      <NavBar Personal={true} Shared={false}/>
      <div className="personal-main">
        <BreakDownText
          greetingText={greetingText}
          contentDisplayed={selectedSpending}
          titleDisplayed={titleDisplayed}
          totalSpending={categoryTotal}
          descriptionText={descriptionText}
          buttonTitle='Add spending'
        />
        <SpendingPieChart
          changeTitle={changeTitle}
          spendingData={pieData}
          selected={selected}
          pieLabel={categoryTotal}
        />
      </div>
    </div>
  );
}

export default PersonalPage;
