import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import NavBar from "../components/NavBar";

const movies = [
  {id: 1, title: "The Woman At the Window"},
  {id: 2, title: "Me Before You"},
  {id: 3, title: "The Fault In Our Stars"},
]

function Home() {
  return (
    <>
      <header>
        <NavBar/>
      </header>
      <main>
        <h1>Home</h1>
        {movies.map((movie) => (
          <MovieCard key={movie.id} id={movie.id} title={movie.title} />
        ))}
      </main>
    </>
  );
};

export default Home;
