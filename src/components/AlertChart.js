import React from 'react';
import ReactECharts from 'echarts-for-react';

const AlertChart = ({ alert }) => {
  const { metric, timeSeries } = alert;

  const option = {
    title: {
      text: metric,
      left: 'center'
    },
    tooltip: {
      trigger: 'axis',
      formatter: (params) => {
        const date = new Date(params[0].value[0]);
        return `
          <strong>${date.toLocaleString()}</strong><br/>
          ${metric}: ${params[0].value[1]}%
        `;
      }
    },
    xAxis: {
      type: 'time',
      axisLabel: {
        formatter: (value) => {
          const date = new Date(value);
          return date.toLocaleTimeString();
        }
      }
    },
    yAxis: {
      type: 'value',
      axisLabel: {
        formatter: '{value}%'
      }
    },
    series: [{
      data: timeSeries.map(item => [item.time, item.value]),
      type: 'line',
      smooth: true,
      symbol: 'circle',
      symbolSize: 6,
      lineStyle: {
        width: 3
      },
      itemStyle: {
        color: '#1890ff'
      },
      areaStyle: {
        color: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [{
            offset: 0,
            color: 'rgba(24, 144, 255, 0.5)'
          }, {
            offset: 1,
            color: 'rgba(24, 144, 255, 0.1)'
          }]
        }
      }
    }],
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    }
  };

  return (
    <ReactECharts
      option={option}
      style={{ height: '400px', width: '100%' }}
    />
  );
};

export default AlertChart;