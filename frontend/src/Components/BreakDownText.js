import PageButton from "../Components/PageButton";
import "./BreakDownText.css";

function BreakDownText(props) {
  return (
    <div>
      <div className="left-flexbox">
        <div className="personal-description">
          <div className="greeting">
            <h3>{props.greetingText}</h3>
            <h3>{props.descriptionText}</h3>
            <h3>${props.totalSpending}</h3>
          </div>
          <div className="divider"></div>
          <h3>{props.titleDisplayed}</h3>
          {props.contentDisplayed && props.contentDisplayed.map((content) => (
            <div className="content-flexbox">
              <div>
                {content.createdAt.slice(0, 10)}: {content.title}
              </div>
              <div>${content.amount}</div>
            </div>
          ))}
        </div>
        <div>
          <p className="sub-total">{props.titleDisplayed} total : $1241</p>
          <PageButton title={props.buttonTitle} to="/spendingForm" />
        </div>
      </div>
    </div>
  );
}

export default BreakDownText;
