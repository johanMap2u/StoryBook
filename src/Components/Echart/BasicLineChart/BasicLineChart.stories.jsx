import BasicLineChart from "./BasicLineChart";

export default {
  title: "Example/LineChart",
  component: BasicLineChart,
  argTypes: {
    darkMode: {
      control: { type: 'boolean', name: 'Dark Mode' },
    },
    texture:{
      control:{type:'boolean',name: 'Smooth' }
    }
  },
};

const sampleData = {
  xAxis: {
    type: "category",
    data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  },
  yAxis: {
    type: "value",
  },
  series: {
    data: [120, 200, 150, 80, 70, 110, 130],
    type: "line",
  },
};
const Template = (args) => <BasicLineChart {...args} />;

export const LineChart = Template.bind({});

LineChart.args = {
  data: sampleData, // Pass the sample data as an argument
};
