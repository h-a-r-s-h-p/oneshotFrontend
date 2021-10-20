import React, { useState, useEffect } from "react";
import "./ByState.css";

import axios from "axios";
import { Pie } from "react-chartjs-2";

function ByState() {
  const [colleges, setColleges] = useState([]);
  const [data, setData] = useState({});

  useEffect(() => {
    axios
      .get("http://localhost:8001/charts")
      .then((res) => {
        setColleges(res);
      })
      .catch(function (error) {
        console.log(error);
      });

    // let [lbls, dt] = StateWiseAnalysis(colleges);

    setData({
      labels: ["UP", "AP", "Tamilnadu", "Kerala", "J&K"],
      datasets: [
        {
          label: "Colleges by state",
          backgroundColor: [
            "#B21F00",
            "#C9DE00",
            "#2FDE00",
            "#00A6B4",
            "#6800B4",
          ],
          data: [20, 25, 64, 94, 65],
        },
      ],
    });
  }, [colleges]);

  return (
    <div className="">
      <h1>ByState</h1>
      <div style={{ position: "relative", height: "20vh", width: "40vw" }}>
        <Pie
          data={data}
          width={"50%"}
          options={{
            title: {
              display: true,
              text: "Colleges by state",
              fontSize: 20,
            },
            legend: {
              display: true,
              position: "right",
            },
            // maintainAspectRatio: false
          }}
        />
      </div>
    </div>
  );
}

function StateWiseAnalysis(list) {
  var a;
  var total_colleges = 0;
  const AllStates = {};
  var states = [];
  for (a of list) {
    var stateName = a.state;
    if (AllStates[stateName]) {
      AllStates[stateName]++;
    } else {
      AllStates[stateName] = 1;
      states.push(stateName);
    }
    total_colleges += 1;
  }

  var Percentage = [];
  for (a of states) {
    AllStates[a] = (AllStates[a] / total_colleges) * 100;
    Percentage.push(AllStates[a]);
  }

  return [states, Percentage];
}

export default ByState;
