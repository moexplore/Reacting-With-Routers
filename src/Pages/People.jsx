import React, { useState, useEffect } from "react";
import {Link} from 'react-router-dom'
const People = () => {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    fetch("https://ghibliapi.herokuapp.com/people")
      .then((res) => res.json())
      .then((peoples) => setPeople(peoples))
      .catch((err) => {
        err = new Error('Failed to Fetch')
        console.log(err)
      })
  }, []);
  return (
    <main className="container">
      <section className="row justify-content-center mt-5">
          <div className="col-md-6 offset-2">
        {people.map((peeps) => (
            <ul className="list-group">
              <li className="list-group-item d-flex justify-content-between align-items-center" key={`film: ${peeps.id}`}>
                {peeps.name}
                <Link to ={`People/${peeps.id}`} className = 'btn btn-success'>Read More</Link>
              </li>
            </ul>
        ))}
          </div>
      </section>
    </main>
  );
};

export default People;