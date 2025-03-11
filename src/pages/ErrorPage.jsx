function Movie() {
    const { id } = useParams();
    const movie = movies.find((m) => m.id === parseInt(id));
  
    if (!movie) {
      return (
        <>
          <header>
            <NavBar />
          </header>
          <main style={{ textAlign: "center", marginTop: "50px" }}>
            <h1 style={{ color: "red" }}>404 - Movie Not Found!</h1>
            <p>Oops! The movie you are looking for does not exist.</p>
            <a href="/" style={{
              display: "inline-block",
              marginTop: "20px",
              padding: "10px 20px",
              backgroundColor: "#007bff",
              color: "#fff",
              textDecoration: "none",
              borderRadius: "5px"
            }}>
              Go Back Home
            </a>
          </main>
        </>
      );
    }
  
    return (
      <>
        <header>
          <NavBar />
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
  }
  