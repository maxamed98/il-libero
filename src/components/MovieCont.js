import React from "react";
import { useNavigate } from "react-router-dom";

const MovieCont = ({ vids }) => {
  const navigate = useNavigate();

  const poster_root = "https://image.tmdb.org/t/p/w500/";

  const redirect = (vid) => {
    if (vid.release_date) {
      navigate(`/movies/${vid.id}`);
    } else {
      navigate(`/series/${vid.id}`);
    }
    // console.log(vid);
    // console.log("clicked");
  };

  return (
    <div className="movieCont">
      {vids.length > 0 &&
        vids.map((vid, index) => {
          return (
            <div
              className="movieCard"
              key={index}
              onClick={() => {
                redirect(vid);
              }}
            >
              <img
                src={`${poster_root}/${vid.poster_path}`}
                alt={vid.name || vid.title}
              />
              <h3>{vid.name || vid.title}</h3>
              <p>
                {vid.release_date
                  ? `Released: ${vid.release_date}`
                  : `First Air: ${vid.first_air_date}`}{" "}
              </p>
            </div>
          );
        })}
    </div>
  );
};

export default MovieCont;
