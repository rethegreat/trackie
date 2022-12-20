import PageButton from "../Components/PageButton";
import "./SpendingForm.css";
import { BsCheckLg } from "react-icons/bs";
import React, { useState} from "react";

function SpendingForm() {
  const q1 = "From where?";
  const q2 = "How much?";

  const [q1Completed, setQ1Completed] = useState(false);

  const [FormCompleted, setFormCompleted] = useState(false);

  const [result, setResult] = useState("");

  function nextQuestion() {
    setResult("");
    if (q1Completed === false) {
      setQ1Completed(true);
    } else {
      setFormCompleted(true);
    }
  }

  return (
    <div className="form-flexbox">
      {FormCompleted ? (
        <div>
        <h1>Sucessfully added</h1>
        <BsCheckLg size={200} className="icon"/>
        </div>
      ) : (
        <div>
          <h1>{q1Completed ? q2 : q1}</h1>
          <input
            className="answerBox"
            type="Your aswer"
            value={result}
            onChange={(e) => setResult(e.target.value)}
          />
        </div>
      )}
      <div className="nextButton">
        <PageButton
          title={FormCompleted ? "Great!" : "Next"}
          onClick={nextQuestion}
          to={FormCompleted ? "/personal" : ""}
        />
      </div>
    </div>
  );
}

export default SpendingForm;
