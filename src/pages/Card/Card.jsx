import React from "react";

const Card = ({ title, description, image }) => {
    return (
        <div className="card m-1" style={{ width: "190px" }}>
            <img src={image} alt={title} className="card-img-top" height="120" />
            <div className="card-body" style={{ fontSize: "0.9rem", textAlign: "left" }}>
                <p className="text-muted text-small">
                    {description}
                </p>
                <a href="#">...Read More</a>
            </div>
        </div>
    );
}

export default Card;
