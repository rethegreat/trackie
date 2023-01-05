import "./PersonalPage.css";

import React, { useEffect, useState } from "react";
import BreakDownText from "../Components/BreakDownText";
import SpendingPieChart from "../Components/SpendingPieChart";
import NavBar from "../Components/NavBar";

function PersonalPage() {
  const greetingText = "Good morning, Boaz"

  

  const [selected, setSelected] = useState(0);
  const [selectedSpending, setSelectedSpending] = useState(null);
  const [selectedTotal, setSelectedTotal] = useState(0);
  const [titleDisplayed, setTitleDisplayed] = useState("Rent");

  const [pieData, setPieData] = useState([]);

  const [dataMounted, setDataMounted] = useState(false)

  const [spending, setSpending] = useState(null)

  const [totalSpending, setTotalSpending] = useState(0)

  const [rentValue, setRentValue] = useState(0)
  const [climbingValue, setClimbingValue] = useState(0)
  const [foodValue, setFoodValue] = useState(0)
  const [entertainmentValue, setEntertainmentValue] = useState(0)


  function changeTitle(index) {
    setSelected(index === selected ? undefined : index);

    setTitleDisplayed(pieData[index].title)
  }

  function findSelectedTotal(selectedName, spending){
    const selectedSpending =  spending.filter(object => object.category === selectedName)

    return selectedSpending.reduce((accumulator, object) => {
      return accumulator + object.amount
    }, 0)
  }

  useEffect(() => {
    const fetchSpending = async () => {
      const response = await fetch('/api/spending')
      const json = await response.json()

      if (response.ok){
        setSpending(json)
        setTotalSpending(json.reduce((accumulator, object) => {
          return accumulator + object.amount
        }, 0))
        setDataMounted(true)

        setRentValue(findSelectedTotal("Rent", json))
        setClimbingValue(findSelectedTotal("Climbing", json))
        setEntertainmentValue(findSelectedTotal("Entertainment", json))
        setFoodValue(findSelectedTotal("Food", json))
      }
    }
    fetchSpending()
  }, [])

  useEffect(() => {
    if (dataMounted){
      setSelectedSpending(spending.filter(object => object.category === titleDisplayed))
    } 

    
  }, [titleDisplayed, spending, dataMounted])

  useEffect(() => {
    if (selectedSpending !== null){
      setSelectedTotal(selectedSpending.reduce((accumulator, object) => {
        return accumulator + object.amount
      }, 0))
    }
  }, [selectedSpending])

  

  useEffect(() => {
    setPieData([
      { title: "Rent", value: rentValue, color: "#2B0504"},
      { title: "Entertainment", value: entertainmentValue, color: "#874000"},
      { title: "Food", value: foodValue, color: "#BC5F04"},
      { title: "Climbing", value: climbingValue, color: "#F4442E"},
    ])
  }, [rentValue, entertainmentValue, foodValue, climbingValue])

  return (
    <div>
      <NavBar Personal={true} Shared={false}/>
      <div className="personal-main">
        <BreakDownText
          greetingText={greetingText}
          contentDisplayed={selectedSpending}
          titleDisplayed={titleDisplayed}
          totalSpending={totalSpending}
          selectedTotal={selectedTotal}
          buttonTitle='Add spending'
        />
        <SpendingPieChart
          changeTitle={changeTitle}
          spendingData={pieData}
          selected={selected}
          pieLabel={selectedTotal}
        />
      </div>
    </div>
  );
}

export default PersonalPage;
