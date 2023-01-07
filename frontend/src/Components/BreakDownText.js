import PageButton from "../Components/PageButton";
import "./BreakDownText.css";

function BreakDownText(props) {
  return (
    <div>
      <div className="left-flexbox">
        <div className="personal-description">
          <div className="greeting">
            <h3>{props.greetingText}</h3>
            <h3>
              Your spending in&nbsp;
              {new Date().toLocaleString("en-US", { month: "long" })} is
            </h3>
            <h3>${Math.round(props.totalSpending * 100) / 100}</h3>
          </div>
          <div className="divider"></div>
          <h3>{props.titleDisplayed}</h3>
          {props.contentDisplayed &&
            props.contentDisplayed.map((content) => (
              <div className="content-flexbox">
                <div>
                  {content.createdAt.slice(0, 10)}: {content.title}
                </div>
                <div>${Math.round(content.amount * 100) / 100}</div>
              </div>
            ))}
        </div>
        <div>
          <p className="sub-total">
            {props.titleDisplayed} total : $
            {Math.round(props.selectedTotal * 100) / 100}
          </p>
          <PageButton title={props.buttonTitle} to="/spendingForm" />
        </div>
      </div>
    </div>
  );
}

export default BreakDownText;
