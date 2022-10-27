import PageButton from "../Components/PageButton";
import "./BreakDownText.css";


function BreakDownText(props){
    return (
    <div>
        <div className="left-flexbox">
          <div className="personal-description">
            <div className="greeting">
              <h3>Good Morning, Boaz</h3>
              <h3>your spending in October is</h3>
              <h3>$2192.01</h3>
            </div>
            <div className="divider"></div>
            <h3>{props.titleDisplayed}</h3>
            {props.contentDisplayed.map((content) => (
              <p>
                {content.date}: {content.title} ${content.amount}
              </p>
            ))}
          </div>
          <PageButton title="Add Spending" />
        </div>
    </div>
    )
}

export default BreakDownText