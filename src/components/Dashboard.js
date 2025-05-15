import React,{useState} from 'react'
import Chart from "react-apexcharts"
import "./Dashboard.css"
import { FaTachometerAlt, FaUser, FaCog, FaSignOutAlt } from "react-icons/fa";



const Dashboard = () => {
  const series = [44, 55, 41, 17, 15];

  const options = {
    labels: ["A", "B", "C", "D", "E"],
    legend: {
      labels: {
        colors: 'white',
        useSeriesColors: false
      }
    },
    grid: {
      show: false // 👈 Hides all grid lines
    },
   
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
                    //color: 'white',
                 }
             },
             labels: {
              show: true,
              name: {
                show: true,
                color: 'white', // 👈 Font color for the label name
                fontSize: '16px'
              },
              value: {
                show: true,
                color: 'white', // 👈 Font color for the value
                fontSize: '14px'
              },
              total: {
                show: true,
                label: 'Total',
                color: 'white', // 👈 Font color for the total label
                fontSize: '14px'
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
    grid: {
      show: false // 👈 Hides all grid lines
    },
    xaxis: {
      labels: {
        style: {
          colors: 'rgb(255, 255, 255)',   // 👈 X-axis labels font coloe
          fontSize: '14px'
        }
      }
    },
    yaxis: {
      labels: {
        style: {
          colors: 'white',   // 👈 Y-axis labels font color
          fontSize: '14px'
        }
      }
    },
    chart: {
      toolbar: {
        show: false
      }
    }
  };


  
  const series4 = [{ data: [30, 40, 25, 50, 49, 21, 70, 51] }];

  const options4 = {
    grid: {
      show: false // 👈 Hides all grid lines
    },
    dataLabels: { enabled: false },
    xaxis: { categories: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"] },
    chart: {
      toolbar: {
        show: false
      }
    },
    xaxis: {
      labels: {
        style: {
          colors: 'rgb(255, 255, 255)',   // 👈 X-axis labels font coloe
          fontSize: '14px'
        }
      }
    },
    yaxis: {
      labels: {
        style: {
          colors: 'white',   // 👈 Y-axis labels font color
          fontSize: '14px'
        }
      }
    },
  };

  

  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = [
    { icon: <FaTachometerAlt className='ic'/> , label: "Dashboard" },
    { icon: <FaUser className='ic'/> , label: "Profile" },
    { icon: <FaCog className='ic'/> , label: "Settings" },
    { icon: <FaSignOutAlt className='ic'/> , label: "Logout" },
  ];

 
  const options3 = {
    chart:{
      toolbar: {
        show: false 
      }
    },
    grid: {
      show: false 
    },
    xaxis: {
      categories: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
    },
    xaxis: {
      labels: {
        style: {
          colors: 'rgb(255, 255, 255)',   // 👈 X-axis labels font coloe
          fontSize: '14px'
        }
      }
    },
    yaxis: {
      labels: {
        style: {
          colors: 'white',   // 👈 Y-axis labels font color
          fontSize: '14px'
        }
      }
    },
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
    {
      name: "series-3",
      data: [24, 20, 5, 75, 42, 79, 72, 35]
    }
  ];
  return (
     <div className='all'>
     
        
          
          <div className={`sidebar ${isOpen ? "open" : "closed"}`}>
        <button className="toggle-btn" onClick={toggleSidebar}>
          ☰
        </button>
        <ul className="menu">
          {menuItems.map((item, index) => (
            <li key={index}>
              <span className="icon">{item.icon}</span>
              {isOpen && <span className="label">{item.label}</span>}
            </li>
          ))}
        </ul>
      </div>

          
      <div className='dash'>
      <Chart className="item item2" options={options4} series={series4} type="bar" />
 
      <Chart className="item item3" options={options} series={series} type="donut"/>
   
      <Chart className="item item4" options={options2} series={series2} type="line" />
      <Chart className="item item5" options={options3}  series={series3} type="area" />

      <div className='menu2' style={{marginRight:"30px"}}>
      <table class="table table-dark table-striped">
  <thead>
    <tr>
      <th scope="col">Sl no.</th>
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
    <tr>
      <th scope="row">3</th>
      <td>John</td>
      <td>Doe</td>
      <td>@social</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>John</td>
      <td>Doe</td>
      <td>@social</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>John</td>
      <td>Doe</td>
      <td>@social</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>John</td>
      <td>Doe</td>
      <td>@social</td>
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