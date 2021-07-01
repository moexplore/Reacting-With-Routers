import { useParams, Link } from "react-router-dom"
import React, { useState, useEffect } from "react";


const PeopleDetails = () => {
    const [people, setPeople] = useState(null)
    const {peopleid} = useParams()
    
    useEffect(() => {
        fetch(`https://ghibliapi.herokuapp.com/people/${peopleid}`)
          .then((res) => res.json())
          .then((peeps) => setPeople(peeps));
      }, []);


    return (
        <main className="container">
        <section className="row justify-content-center mt-5">
          
            <div className=" card col-md-6" key={`film-card-${people?.id}`}>
              <h1 className="card-header">{people?.name}</h1>
              <p className="card-body">{`This person is ${people?.age} years old, is of the ${people?.gender} gender, and has lustrous ${people?.hair_color} hair`}</p>
              <Link to ='/people' className=" btn btn-primary">Back To People</Link>
            </div>
         
        </section>
      </main>
    )

}

export default PeopleDetails