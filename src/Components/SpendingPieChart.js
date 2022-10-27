import { PieChart } from "react-minimal-pie-chart";
import "./SpendingPieChart.css";

function SpendingPieChart(props){
    return(
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
    )
}

export default SpendingPieChart