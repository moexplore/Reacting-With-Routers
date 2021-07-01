import { useParams, Link } from "react-router-dom"
import React, { useState, useEffect } from "react";


const LocationDetails = () => {
    const [location, setLocation] = useState(null);
    const {locationsid} = useParams()
    
    useEffect(() => {
        fetch(`https://ghibliapi.herokuapp.com/locations/${locationsid}`)
          .then((res) => res.json())
          .then((loc) => setLocation(loc));
      }, []);


    return (
        <main className="container">
        <section className="row justify-content-center mt-5">
          
            <div className=" card col-md-6" key={`location-card-${location?.id}`}>
              <h1 className="card-header text-center">{location?.name}</h1>
              <p className="card-body text-center">{`This wondrous place has a ${location?.climate} climate and a ${location?.terrain} terrain`}</p>
              <Link to ='/locations' className=" btn btn-primary">Back To Locations</Link>
            </div>
         
        </section>
      </main>
    )

}

export default LocationDetails