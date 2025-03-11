import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

const actorData = [
  { name: "Leonardo DiCaprio", movies: ["Inception", "Titanic", "The Revenant"] },
  { name: "Meryl Streep", movies: ["The Devil Wears Prada", "Mamma Mia!", "Sophie's Choice"] },
  { name: "Denzel Washington", movies: ["Training Day", "Fences", "Malcolm X"] },
];

function Actors() {
  return (
    <>
      <header>
        <NavBar/>
      </header>
      <main>
      <h1>Actors Page</h1>
        {actorData.map((actor, index) => (
          <ActorCard key={index} actor={actor} />
        ))}
      </main>
    </>
  );
};

function ActorCard({ actor }) {
  return (
    <article>
      <h2>{actor.name}</h2>
      <ul>
        {actor.movies.map((movie, idx) => (
          <li key={idx}>{movie}</li>
        ))}
      </ul>
    </article>
  );
}

export default Actors;
