import React from 'react'
import Chart from "react-apexcharts"
import "./Dashboard.css"
import {
  FaHome,
  FaInfoCircle,
  FaEnvelope,
  FaSignInAlt,
  FaUserPlus,
  FaCogs,
  FaProjectDiagram,
  FaGithub,
  FaCode
} from 'react-icons/fa';



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
     <div className='all'>
     
        <div className='dash'>
          <div className='menu item item1'>
          <ul className="space-y-3 text-lg">
      <li><FaHome className="inline mr-2" /> Home</li>
      <li><FaInfoCircle className="inline mr-2" /> About</li>
      <li><FaEnvelope className="inline mr-2" /> Contact</li>
      <li><FaSignInAlt className="inline mr-2" /> Login</li>
      <li><FaUserPlus className="inline mr-2" /> Register</li>
      <li><FaCogs className="inline mr-2" /> Services</li>
      <li><FaProjectDiagram className="inline mr-2" /> Projects</li>
      <li><FaGithub className="inline mr-2" /> My Github</li>
      <li><FaCode className="inline mr-2" /> Source Code</li>
    </ul>


          </div>
        
      <Chart className="item item2" options={options4} series={series4} type="bar" />
 
      <Chart className="item item3" options={options} series={series} type="donut"/>
   
      <Chart className="item item4" options={options2} series={series2} type="line" />



      <div className='menu2' style={{marginRight:"30px"}}>
      <table class="table table-dark table-striped">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>John</td>
      <td>Doe</td>
      <td>@social</td>
    </tr>
  </tbody>
</table>
      </div>
      
      
   
      </div>
        
      
        
     </div> 
  )
}

export default Dashboard