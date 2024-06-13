import React from "react";
import Card from "../../pages/Card/Card";
import "./carosuel.css";

const Carousel = ({ posts, category }) => {
  // Filter posts based on the selected category or show all if category is "all"
  const filteredPosts = category === "all" ? posts : posts.filter(post => post.category === category);

  const chunkArray = (arr, size) =>
    arr.reduce((acc, _, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), []);

  const chunks = chunkArray(filteredPosts, 3); // Assuming you want 3 cards per slide

  return (
    <div className="d-flex justify-content-center align-items-center">
      <div id="carouselCard" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {chunks.length > 0 ? (
            chunks.map((chunk, index) => (
              <div className={`carousel-item ${index === 0 ? "active" : ""}`} key={index}>
                <div className="d-flex">
                  {chunk.map((post, idx) => (
                    <Card key={idx} title={post.title} description={post.description} image={post.image} />
                  ))}
                </div>
              </div>
            ))
          ) : (
            <div className="carousel-item active">
              <div className="d-flex">
                <div className="p-5 text-center">No posts available in this category.</div>
              </div>
            </div>
          )}
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselCard" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselCard" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
