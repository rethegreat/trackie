import { PieChart } from "react-minimal-pie-chart";
import "./SpendingPieChart.css";

function SpendingPieChart(props){
    return(
      <div className="pie">
        <PieChart
          className="perosnal_chart"
          data={props.spendingData}
          lineWidth={30}
          radius={43}
          paddingAngle={5}
          animate
          segmentsStyle={{ transition: "stroke .3s", cursor: "pointer" }}
          segmentsShift={(index) => (index === props.selected ? 6 : 1)}
          onClick={(event, index) => {
            props.changeTitle(index);
          }}
        />
        <h1 className="pie-label">$129.12</h1>
      </div>
    )
}

export default SpendingPieChart