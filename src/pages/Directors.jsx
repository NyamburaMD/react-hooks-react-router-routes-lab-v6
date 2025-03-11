import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

const directors = [
  { name: "Steven Spielberg", movies: ["Jaws", "E.T.", "Jurassic Park"] },
  { name: "Christopher Nolan", movies: ["Inception", "Interstellar", "Dunkirk"] },
  { name: "Greta Gerwig", movies: ["Lady Bird", "Little Women", "Barbie"] },
];

function Directors() {
  return (
    <>
      <header>
        <NavBar/>
      </header>
      <main>
      <h1>Directors Page</h1>
        {directors.map((director, index) => (
          <article key={index}>
            <h2>{director.name}</h2>
            <ul>
              {director.movies.map((movie, idx) => (
                <li key={idx}>{movie}</li>
              ))}
            </ul>
          </article>
        ))}
      </main>
    </>
  );
};

export default Directors;
