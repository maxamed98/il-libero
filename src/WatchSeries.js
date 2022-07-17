import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const WatchSeries = () => {
  const params = useParams();
  const tmdbAPI = "e4a7853b52909dd368208439697efacd";
  const [url, setUrl] = useState(
    `https://www.2embed.ru/embed/tmdb/tv?id=${params.seriesId}&s=${params.seasonNum}&e=${params.episodeNum}`
  );
  const [imdbId, setImdbId] = useState("");

  // const [server2On, setServer2On] = useState(false);

  // const [iframeLink, setIframeLink] = useState(
  //   `https://www.2embed.ru/embed/tmdb/tv?id=${params.seriesId}&s=${params.seasonNum}&e=${params.episodeNum}`
  // );

  // `https://www.2embed.ru/embed/tmdb/tv?id=${params.seriesId}&s=${params.seasonNum}&e=${params.episodeNum}`

  // `https://fsapi.xyz/tv-tmdb/${params.seriesId}/${params.seasonNum}/${params.episodeNum}`

  useEffect(() => {
    getIMDBid();
  }, []);

  const getIMDBid = async () => {
    const results = await fetch(
      `https://api.themoviedb.org/3/tv/${params.seriesId}/external_ids?api_key=${tmdbAPI}`
    );
    const { imdb_id } = await results.json();
    setImdbId(imdb_id);
    // console.log(data);
  };

  const s1 = document.getElementById("s1");
  const s2 = document.getElementById("s2");

  //s1
  // setUrl(
  //   `https://www.2embed.ru/embed/tmdb/tv?id=${params.seriesId}&s=${params.seasonNum}&e=${params.episodeNum}`
  // );

  //s2
  // setUrl(
  //   `https://vidsrc.me/embed/${imdbId}/${params.seasonNum}-${params.episodeNum}`
  // );

  const clickHandler = (e) => {
    s1.removeAttribute("class");
    s2.removeAttribute("class");

    if (e.target.id == "s1") {
      setUrl(
        `https://www.2embed.ru/embed/tmdb/tv?id=${params.seriesId}&s=${params.seasonNum}&e=${params.episodeNum}`
      );
      s1.setAttribute("class", "active");
    } else {
      setUrl(
        `https://vidsrc.me/embed/${imdbId}/${params.seasonNum}-${params.episodeNum}`
      );
      s2.setAttribute("class", "active");
    }
  };

  return (
    <div className="watch-series-cont">
      <h2>
        Season {params.seasonNum} Episode {params.episodeNum}
      </h2>
      {/* <div className="serversCont">
        <h4
          onClick={() => {
            setIframeLink(
              `https://www.2embed.ru/embed/tmdb/tv?id=${params.seriesId}&s=${params.seasonNum}&e=${params.episodeNum}`
            );
          }}
        >
          Server 1
        </h4>
        <h4
          onClick={() => {
            setIframeLink(
              `https://fsapi.xyz/tv-tmdb/${params.seriesId}/${params.seasonNum}/${params.episodeNum}`
            );
          }}
        >
          Server 2
        </h4>
      </div> */}

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
        allowFullScreen="allowfullsceen"
      ></iframe>
      {/* <iframe
        src={`https://fsapi.xyz/tv-imdb/${params.seriesId}/${params.seasonNum}/${params.episodeNum}`}
        frameborder="0"
        allowFullScreen="allowfullsceen"
      ></iframe> */}
    </div>
  );
};

export default WatchSeries;
