import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Movie = () => {
  const id = useParams();
  const tmdbAPI = "e4a7853b52909dd368208439697efacd";
  // console.log(id);
  const [url, setUrl] = useState(
    `https://www.2embed.ru/embed/tmdb/movie?id=${id.movieId}`
  );
  const [imdbId, setImdbId] = useState("");

  useEffect(() => {
    getIMDBid();
  }, []);

  const getIMDBid = async () => {
    const results = await fetch(
      `https://api.themoviedb.org/3/movie/${id.movieId}/external_ids?api_key=${tmdbAPI}`
    );
    const { imdb_id } = await results.json();
    setImdbId(imdb_id);
    // console.log(data);
  };

  const s1 = document.getElementById("s1");
  const s2 = document.getElementById("s2");

  //s1
  // setUrl(`https://www.2embed.ru/embed/tmdb/movie?id=${id.movieId}`);

  //s2
  // setUrl(`https://vidsrc.me/embed/${imdbId}`);

  const clickHandler = (e) => {
    s1.removeAttribute("class");
    s2.removeAttribute("class");

    if (e.target.id == "s1") {
      setUrl(`https://www.2embed.ru/embed/tmdb/movie?id=${id.movieId}`);
      s1.setAttribute("class", "active");
    } else {
      setUrl(`https://vidsrc.me/embed/${imdbId}`);
      s2.setAttribute("class", "active");
    }
  };

  return (
    <div className="moviesFrame">
      <div className="servers">
        <h2 id="s1" className="active" onClick={clickHandler}>
          Server 1
        </h2>
        <h2 id="s2" onClick={clickHandler}>
          Server 2
        </h2>
      </div>
      <iframe
        src={url}
        frameborder="0"
        width={500}
        height={400}
        allowFullScreen="allowfullscreen"
      ></iframe>
      {/* <iframe
        src={`https://fsapi.xyz/movie/${id.movieId}`}
        frameborder="0"
        width={500}
        height={400}
        allowFullScreen="allowfullscreen"
      ></iframe> */}
    </div>
  );
};

export default Movie;
