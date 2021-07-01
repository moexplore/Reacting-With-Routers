import React, { useState, useEffect } from "react";
import {Link} from 'react-router-dom'
const Films = () => {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    fetch("https://ghibliapi.herokuapp.com/films")
      .then((res) => res.json())
      .then((films) => setFilms(films));
  }, []);
  return (
    <main className="container">
      <section className="row justify-content-center mt-5">
          <div className="col-md-6 offset-2">
        {films.map((film) => (
            <ul className="list-group">
              <li className="list-group-item d-flex justify-content-between align-items-center" key={`film: ${film.id}`}>
                {film.title}
                <Link to ={`films/${film.id}`} className = 'btn btn-success'>Read More</Link>
              </li>
            </ul>
        ))}
          </div>
      </section>
    </main>
  );
};

export default Films;
