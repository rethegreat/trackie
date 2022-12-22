import PageButton from "../Components/PageButton";
import "./SpendingForm.css";
import { BsCheckLg } from "react-icons/bs";
import React, { useState } from "react";

function SpendingForm() {
  const q1 = "From where?";
  const q2 = "How much?";

  const [q1Completed, setQ1Completed] = useState(false);

  const [FormCompleted, setFormCompleted] = useState(false);

  const [result, setResult] = useState("");

  const [fromWhere, setFromWhere] = useState("");

  const [cost, setCost] = useState("");

  const [error, setError] = useState(null);

  function nextQuestion() {
    if (q1Completed === false) {
      setQ1Completed(true);
      setFromWhere(result);
    } else {
      setCost(result);
      setFormCompleted(true);
    }
    setResult("");
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const spenidngResult = { fromWhere, cost };

    const response = await fetch("/api/workouts", {
      method: "POST",
      body: JSON.stringify(spenidngResult),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
    } else {
      setFromWhere("");
      setCost("");
      setError(null);
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
              title={FormCompleted ? "Great!" : "Next"}
              onClick={nextQuestion}
              to={FormCompleted ? "/personal" : ""}
            />
          </div>
        </div>
      ) : (
        <div>
          <div>
            <h1>{q1Completed ? q2 : q1}</h1>
            <input
              className="answerBox"
              type="Your answer"
              value={result}
              onChange={(e) => setResult(e.target.value)}
            />
          </div>
          <div className="nextButton">
          <PageButton title={"Next"} onClick={nextQuestion} />
          </div>
        </div>
      )}
    </div>
  );
}

export default SpendingForm;
