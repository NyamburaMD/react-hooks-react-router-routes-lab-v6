import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import { useParams } from "react-router-dom";

const movies = [
  { id: 1, title: "The Woman At the Window", time: "100 min", genres: ["Thriller", "Mystery"] },
  { id: 2, title: "Me Before You", time: "110 min", genres: ["Romance", "Drama"] },
  { id: 3, title: "The Fault In Our Stars", time: "125 min", genres: ["Romance", "Drama"] },
]

function Movie() {
  const {id} = useParams();
  const movie = movies.find((m) => m.id === parseInt(id));
  if (!movie) {
    return (
      <>
        <header>
          <NavBar />
        </header>
        <main>
          <h1>Movie not found!</h1>
        </main>
      </>
    );
  }
  return (
    <>
      <header>
        <NavBar/>
      </header>
      <main>
      <h1>{movie.title}</h1>
        <p>Duration: {movie.time}</p>
        <div>
          {movie.genres.map((genre, index) => (
            <span key={index} style={{ marginRight: "10px" }}>{genre}</span>
          ))}
        </div>
      </main>
    </>
  );
};

export default Movie;
