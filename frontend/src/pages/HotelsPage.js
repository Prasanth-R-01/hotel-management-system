import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const HotelsPage = () => {
    const [hotels, setHotels] = useState([]);
    
    useEffect(() => {
        axios.get("http://localhost:5000/hotels")
            .then(response => setHotels(response.data))
            .catch(error => console.error("Error fetching hotels:", error));
    }, []);

    return (
        <div className="container mt-4">
            <h2>Available Hotels</h2>
            <div className="row">
                {hotels.map(hotel => (
                    <div key={hotel.id} className="col-md-4 mb-4">
                        <div className="card p-3 shadow">
                            <h5>{hotel.name}</h5>
                            <p>Location: {hotel.location}</p>
                            <p>Price: ${hotel.price} per night</p>
                            <Link to={`/hotels/${hotel.id}`} className="btn btn-primary">View Details</Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HotelsPage;