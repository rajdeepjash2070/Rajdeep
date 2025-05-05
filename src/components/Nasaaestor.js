import React, { useEffect, useState } from "react";

const Nasaaestor= () => {
  const [asteroids, setAsteroids] = useState([]);

  useEffect(() => {
    const fetchAsteroids = async () => {
      try {
        const response = await fetch(
          "https://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-07&end_date=2015-09-08&api_key=0q3Gas7Z6hNjEcdoF1xr8OJccU6tzyyo0GbaPrZr"
        );
        const data = await response.json();

        // Accessing date key(s) dynamically
        const allAsteroids = [];
        for (const date in data.near_earth_objects) {
          allAsteroids.push(...data.near_earth_objects[date]);
        }

        setAsteroids(allAsteroids);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchAsteroids();
  }, []);

  return (
    <div>
      <h2>Asteroids on 2015-09-07 to 2015-09-08</h2>
      <ul>
        {asteroids.map((asteroid, index) => (
          <li key={index}>
            {asteroid.name} -{" "}
            {asteroid.is_potentially_hazardous_asteroid
              ? "🚨 Hazardous"
              : "✅ Not Hazardous"}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Nasaaestor;
