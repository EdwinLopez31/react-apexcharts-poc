import { useState } from "react";
import CustomAppBar from "./components/CustomAppBar";
import Box from "@mui/material/Box";
import "./index.css";
import Chart from "react-apexcharts";
import { data } from "./components/SampleData";
import { ApexOptions } from "apexcharts";
function App() {
  const [chartOptions, setChartOptions] = useState({
    series: [
      {
        data: data.map((datum) => ({
          x: datum.Date,
          y: parseFloat(datum.Revenue).toFixed(2),
        })),
      },
    ],
    options: {
      chart: {
        id: "chart2",
        type: "line",
        height: 230,
        toolbar: {
          autoSelected: "pan",
          show: false,
        },
      },
      colors: ["#546E7A"],
      stroke: {
        width: 3,
      },
      dataLabels: {
        enabled: false,
      },
      fill: {
        opacity: 1,
      },
      markers: {
        size: 0,
      },
      xaxis: {
        type: "datetime",
      },
      annotations: {
        yaxis: [
          {
            y: 28.15,
            label: {
              style: {
                color: "#fff",
                background: "#00E396",
              },
              text: "This is a test",
            },
          },
          {
            y: 556.4,
            label: {
              style: {
                color: "#fff",
                background: "#00E396",
              },
              text: "This is a test 2",
            },
          },
          {
            y: 1084.64,
            label: {
              style: {
                color: "#fff",
                background: "#00E396",
              },
              text: "This is a test 3",
            },
          },
        ],
      },
    },

    seriesLine: [
      {
        data: data.map((datum) => ({
          x: datum.Date,
          y: parseFloat(datum.Revenue).toFixed(2),
        })),
      },
    ],
    optionsLine: {
      chart: {
        id: "chart1",
        height: 130,
        type: "area",
        brush: {
          target: "chart2",
          enabled: true,
        },
        selection: {
          enabled: true,
          xaxis: {
            min: new Date(data[0].Date).getTime(),
            max: new Date(data[data.length - 1].Date).getTime(),
          },
        },
      },
      colors: ["#008FFB"],
      fill: {
        type: "gradient",
        gradient: {
          opacityFrom: 0.91,
          opacityTo: 0.1,
        },
      },
      xaxis: {
        type: "datetime",
        tooltip: {
          enabled: false,
        },
      },
      yaxis: {
        tickAmount: 2,
      },
    },
  });

  return (
    <>
      <CustomAppBar />
      <div id='wrapper'>
        <div id='chart-line2'>
          <Chart
            options={chartOptions.options as ApexOptions}
            series={chartOptions.series}
            type='line'
            height={230}
          />
        </div>
        <div id='chart-line'>
          <Chart
            options={chartOptions.optionsLine as ApexOptions}
            series={chartOptions.seriesLine}
            type='area'
            height={130}
          />
        </div>
      </div>
    </>
  );
}

export default App;
