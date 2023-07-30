import React from 'react';
import ReactApexChart from 'react-apexcharts';
import '/Users/jwsnooke/Desktop/Bloombox Layout/src/components/Analytics/Session.css';
class SessionDuration extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          name: 'Session Duration',
          data: [45, 52, 38, 24, 33, 26, 21, 20, 6, 8, 15, 10],
        },
      ],
      options: {
        chart: {
          type: 'line',
          zoom: {
            enabled: true,
          },
          toolbar: {
            show: true,
            tools: {
              download: true,
              selection: true,
              zoom: true,
              zoomin: true,
              zoomout: true,
              pan: true,
              reset: true,
            },
            autoSelected: 'zoom',
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          width: [5],
          curve: 'straight',
        },
        title: {
          text: 'Session Duration',
          align: 'left',
        },
        markers: {
          size: 0,
          hover: {
            sizeOffset: 6,
          },
        },
        xaxis: {
          categories: [
            '01 Jan',
            '02 Jan',
            '03 Jan',
            '04 Jan',
            '05 Jan',
            '06 Jan',
            '07 Jan',
            '08 Jan',
            '09 Jan',
            '10 Jan',
            '11 Jan',
            '12 Jan',
          ],
        },
        tooltip: {
          y: [
            {
              title: {
                formatter: function (val) {
                  return val + ' (mins)';
                },
              },
            },
          ],
        },
        grid: {
          borderColor: '#f1f1f1',
        },
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: '100%',
              },
              legend: {
                position: 'bottom',
              },
            },
          },
        ],
      },
    };
  }

  render() {
    return (
      <div className="chart-container">
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type="line"
          height="100%"
        />
      </div>
    );
  }
}

export default SessionDuration;
