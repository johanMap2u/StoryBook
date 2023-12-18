import React, { useEffect, useRef } from "react";
import ReactEcharts from "echarts-for-react";

const BasicLineChart = ({ data = {}, darkMode,texture }) => {
  const { xAxisData = [], seriesData = [] } = data;
  const chartRef = useRef(null);
  console.log(texture)
  useEffect(() => {
    const chartInstance = chartRef.current.getEchartsInstance();
    if (chartInstance) {
      // Access the ECharts instance and update canvas-related styles for dark mode
      const canvasStyle = chartInstance.getDom().style;
      canvasStyle.backgroundColor = darkMode ? "#222" : "#fff"; // Change canvas background color
      canvasStyle.color = darkMode ? "#ccc" : "#333"; // Change text color on canvas

      // Update other styles as needed for dark mode
      // For example: chartInstance.setOption({...});
    }
  }, [darkMode]);
  console.log(data.series.data);
  const options = {
    xAxis: {
      type: "category",
      data: data.xAxis.data,
      axisLine: {
        lineStyle: {
          color: darkMode ? "#eee" : "#333", // Adjust axis line color based on dark mode
        },
      },
    },
    yAxis: {
      type: "value",
      axisLine: {
        lineStyle: {
          color: darkMode ? "#eee" : "#333", // Adjust axis line color based on dark mode
        },
      },
    },
    series: [
      {
        data: data.series.data,
        type: "line",
        smooth: texture,
        itemStyle: {
          color: darkMode ? "#ccc" : "#007bff", // Adjust line color based on dark mode
        },
      },
    ],
  };

  return (
    <ReactEcharts
      ref={chartRef}
      option={options}
      style={{ height: "400px", width: "100%" }}
      opts={{ renderer: "svg" }}
    />
  );
};

export default BasicLineChart;
