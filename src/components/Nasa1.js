import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Nasa1 = () => {
  const [users, setUsers] = useState([]);

  const [loading, setLoading] = useState(true);

  // API call on component mount
  useEffect(() => {
    fetch("https://api.nasa.gov/planetary/apod?api_key=0q3Gas7Z6hNjEcdoF1xr8OJccU6tzyyo0GbaPrZr")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

 
    console.log(users.date)
  
  if (loading) return <p>Loading...</p>;
  
  

  return (
    <div>
      <div>
      <h1>Astronomy Image of the day</h1>
      <ul>
        <li>{users.title}</li>
        <li>{users.date}</li>
        <img src={users.hdurl} style={{height:"200px", width:"300px"}}/>
        <Link to={users.hdurl}> Zoom the image </Link>
      </ul>
      </div>

      
    </div>
  );
};

export default Nasa1;
