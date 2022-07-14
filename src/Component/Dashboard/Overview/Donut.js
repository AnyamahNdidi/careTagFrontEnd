import { height } from '@mui/system';
import React, { Component } from 'react';
import Chart from 'react-apexcharts'

class Donut extends Component {

  constructor(props) {
    super(props);

    this.state = {
      options: {
        title: {
          text: "Top Location with the highest agent",
          align: "center",
          style: {
           fontWeight: "600",
          }
        },

          dataLabels: {
          enabled:false
        },
        labels: ['ikeja', 'boundary', 'Lekki', 'Surulere', 'ikotun', ],
       
      },
        series: [44, 55, 41, 17, 15],
   
     
     
    }
  }

  render() {

    return (
      <div >
         <br/>
        <Chart options={this.state.options} series={this.state.series} type="donut" style={{ width: "90%", height:"auto"}}
               />
      </div>
    );
  }
}

export default Donut;