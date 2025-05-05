import React from 'react'
import Chart from "react-apexcharts"
import "./Dashboard.css"
const Dashboard = () => {
  const series = [44, 55, 41, 17, 15];

  const options = {
    labels: ["A", "B", "C", "D", "E"],
    plotOptions:{
      pie:{
         donut:{
             labels:{
                 show:true,
                 total:{
                     show:true,
                      showAlways:true,
                    //   formatter: () => '343',
                    //  fontSize:30,
                    //  color: '#f90000',
                 }
             }
         }
      }

      }
  };

  const series2 = [{ data: [30, 40, 25, 50, 49, 21, 70, 51] }];

  const options2 = {
    stroke: { curve: "smooth" },
    markers: { size: 0 },
    xaxis: {
      categories: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
    },
    chart: {
      toolbar: {
        show: false
      }
    }
  };


  const series3 = [
    {
      name: "series-1",
      data: [30, 40, 25, 50, 49, 21, 70, 51]
    },
    {
      name: "series-2",
      data: [23, 12, 54, 61, 32, 56, 81, 19]
    },
    
  ];

  const options3 = {
    xaxis: {
      categories: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
    },
    chart: {
      toolbar: {
        show: false
      }
    }
  };

  const series4 = [{ data: [30, 40, 25, 50, 49, 21, 70, 51] }];

  const options4 = {
    dataLabels: { enabled: false },
    xaxis: { categories: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"] },
    chart: {
      toolbar: {
        show: false
      }
    }
  };
  return (
    <div>
      <div className="container">
        <div className='row'>
       <div className="barchart col">
       <div>
      <Chart className="ch" options={options4} series={series4} type="bar" />
       </div>
      </div>
      <div className='donutchart col'>
      <div className="donut">
      <Chart className="ch" options={options} series={series} type="donut"
      
      />
      </div>
      </div>
      </div>
        


      <div className='row'>
      <div className='linechart col'>
      <div>
      <Chart className="ch" options={options2} series={series2} type="line" />
    </div>
      </div>

        
      <div className='areachart col'>
      <div>
      <Chart className="ch" options={options3} series={series3} type="area" />
    </div>
      </div>
      </div>
      </div>
    </div>
  )
}

export default Dashboard