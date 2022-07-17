import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const SznNum = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [eps, setEps] = useState([]);

  useEffect(() => {
    epLoop();
  }, []);

  const epLoop = () => {
    for (var i = 1; i <= parseInt(params.totEpisodeNum); i++) {
      setEps((prevEps) => [...prevEps, i]);
    }
  };

  // console.log(eps);

  return (
    <div className="full-eps-cont">
      <h1 id="ep-count-title">{eps.length} Episodes</h1>

      <div className="episode-cont">
        {eps.map((ep, index) => {
          return (
            <h3
              key={index}
              className="ep-num-card"
              onClick={() => {
                navigate(
                  `/series/${params.seriesId}/${params.seasonNum}/${
                    index + 1
                  }/watch-series`
                );
              }}
            >
              Episode {index + 1}
            </h3>
          );
        })}

        {eps.length == 0 && <h1 id="noEpsAvailable">No episodes available.</h1>}
      </div>
    </div>
  );
};

export default SznNum;
