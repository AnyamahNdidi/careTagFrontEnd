
import React, { Component } from "react";
import Chart from "react-apexcharts";
import "./simple.css"

class Sample extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: "basic-bar",
          foreColor:"#223862"
        },
        xaxis: {
          categories: ["ikeja", "Lekki", "ikorodu", "surulere", "VI", "Ajeromi", "Banana Island", "Qwripa"]
        },
        plotOptions: {
          bar: {
            horizontal:true
          }
        },
        fill: {
          colors:["#223862"]
        },
        dataLabels: {
          enabled:false
        },
        title: {
          text: "Agent Location And Covered Customer",
          align: "center",
          margin: -20,
          offsetY:10,
          offsetX:30,
          
          style: {
            fontWeight: "600",
           
            
          }
        }
      },
      series: [
        {
          name: "customer",
          data: [5, 40, 45, 50, 49, 40, 70, 31]
        }
      ]
    };
  }

  render() {
    return (
      <div >
        <div >
          <div >
            <br/>
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="bar"
              style={{width:"80%"}}
              
              
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Sample;