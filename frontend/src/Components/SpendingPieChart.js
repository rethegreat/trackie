import { PieChart } from "react-minimal-pie-chart";
import "./SpendingPieChart.css";

function SpendingPieChart(props){

  let label = 0
  if (props.pieLabel !== undefined){
    label = props.pieLabel
  }

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
        <h1 className="pie-label">${label}</h1>
      </div>
    )
}

export default SpendingPieChart