import PageButton from "../Components/PageButton";
import "./SpendingForm.css";
import { BsCheckLg } from "react-icons/bs";
import React, { useState } from "react";
import Select from "react-select";

function SpendingForm() {
  const questions = ["From where?", "How much?", "Which category?"];

  const categoryOptions = [
    { value: "Climbing", label: "Climbing" },
    { value: "Rent", label: "Rent" },
    { value: "Entertainment", label: "Entertainment" },
    { value: "Food", label: "Food" },
  ];

  // Place holder for userID
  const userID = "0123456789";

  const [curQuestion, setCurQuestion] = useState(0);

  const [FormCompleted, setFormCompleted] = useState(false);

  const [result, setResult] = useState("");

  const [title, setTitle] = useState("");

  const [amount, setAmount] = useState(0);

  const [category, setCategory] = useState("");

  const [error, setError] = useState("");

  const customStyles = {
    control: (base) => ({
      ...base,
      height: 60,
      minHeight: 60,
    }),
  };

  function nextQuestion() {
    if (result === "" && category === ""){
      setError("Enter required field")
      return 
    }
    if (curQuestion === 0) {
      setCurQuestion((curQuestion) => curQuestion + 1);
      setTitle(result);
    } else if (curQuestion < 2) {
      if (isNaN(parseFloat(result))){
        setError("Please enter a value")
        return
      }else {
        setCurQuestion((curQuestion) => curQuestion + 1);
        setAmount(parseFloat(result));
      }
      
    } else {
      setFormCompleted(true);
    }
    setResult("");
    setError("");
  }

  function handleCategoryChange(selectedOption) {
    setCategory(selectedOption.value);
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const spendingResult = { title, category, amount, userID };

    const response = await fetch("/api/spending", {
      method: "POST",
      body: JSON.stringify(spendingResult),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const json = await response.json();

    

    if (!response.ok) {
      console.log(response)
    } else {
      setTitle("");
      setAmount("");
      console.log("spending added", json);
    }
  }

  return (
    <div className="form-flexbox">
      {FormCompleted ? (
        <div>
          <div>
            <h1>Sucessfully added</h1>
            <BsCheckLg size={200} className="icon" />
          </div>

          <div className="nextButton">
            <PageButton
              title={"Great!"}
              onClick={handleSubmit}
              to={"/personal"}
            />
          </div>
        </div>
      ) : (
        <div>
          <div>
            <h1>{questions[curQuestion]}</h1>
            {curQuestion === 2 ? (
              <Select
                className="categorySelection"
                styles={customStyles}
                options={categoryOptions}
                onChange={handleCategoryChange}
              />
            ) : (
              <input
                className="answerBox"
                type="Your answer"
                value={result}
                onChange={(e) => setResult(e.target.value)}
              />
            )}
          </div>
          <p className="inputError">{error}</p>
          <div className="nextButton">
            <PageButton title={"Next"} onClick={nextQuestion} />
          </div>
        </div>
      )}
    </div>
  );
}

export default SpendingForm;
