import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const Series = () => {
  const id = useParams();
  const navigate = useNavigate();
  const tmdbAPI = "e4a7853b52909dd368208439697efacd";
  const [seriesInfo, setSeriesInfo] = useState([]);
  const [szns, setSzns] = useState([]);

  useEffect(() => {
    // getSeriesNum();
    numOfSzns();
  }, []);

  const numOfSzns = async () => {
    const res = await fetch(
      `https://api.themoviedb.org/3/tv/${id.seriesId}?api_key=${tmdbAPI}`
    );
    const data = await res.json();

    // console.log(data);

    for (let i = 1; i <= data.number_of_seasons; i++) {
      setSeriesInfo((prevSzn) => [...prevSzn, i]);
    }

    setSzns(data.seasons);

    // setSeriesInfo(data);
  };

  // const getSeriesNum = async () => {
  //   const res = await fetch(
  //     `https://api.tvmaze.com/lookup/shows?imdb=${id.seriesId}`
  //   );
  //   const data = await res.json();
  //   // console.log(data);

  //   // setSeriesId(data.id);
  //   const seriesID = data.id;
  //   //https://api.tvmaze.com/shows/1/seasons
  //   const res2 = await fetch(
  //     `https://api.tvmaze.com/shows/${seriesID}/seasons`
  //   );
  //   const data2 = await res2.json();
  //   // console.log(data2);
  //   setSeriesInfo(data2);
  // };
  //   console.log(seriesId);

  //   const getSeriesNum = async () => {
  //     const res = await fetch(
  //       `https://api.themoviedb.org/3/search/tv?api_key=${tmdbAPI}&query=arrow`
  //     );
  //     const data = await res.json();
  //     console.log(data);
  //   };

  return (
    <div className="num-of-series-cont">
      <h1>
        {seriesInfo.length} {seriesInfo.length > 1 ? "Seasons" : "Season"}
      </h1>
      <div className="szns-grid">
        {seriesInfo.map((info, index) => {
          return (
            <h3
              className="szn-card"
              key={index}
              onClick={() => {
                navigate(
                  `/series/${id.seriesId}/${index + 1}/${
                    szns[0].name == "Specials"
                      ? szns[index + 1].episode_count
                      : szns[index].episode_count
                  }`
                );
              }}
            >
              Season {index + 1}
            </h3>
          );
        })}
      </div>
      {/* <h1>series {id.seriesId}</h1> */}
      {/* <iframe
        src={`https://fsapi.xyz/tv-imdb/${id.seriesId}-1-1`}
        width={700}
        height={500}
        frameBorder="0"
      ></iframe> */}
    </div>
  );
};

export default Series;
