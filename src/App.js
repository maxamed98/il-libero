import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Nav from "./Nav";
import Movie from "./components/Movie";
import Series from "./Series";
import SznNum from "./components/SznNum";
import WatchSeries from "./WatchSeries";
import PageNotFound from "./components/PageNotFound";

function App() {
  return (
    <div>
      <Header />
      <h5 id="md">MD PRODUCTIONS</h5>
      <Routes>
        <Route path="/" element={<Nav />} />
        <Route path="/movies/:movieId" element={<Movie />} />
        <Route path="/series/:seriesId" element={<Series />} />
        <Route
          path="/series/:seriesId/:seasonNum/:totEpisodeNum"
          element={<SznNum />}
        />
        <Route
          path="/series/:seriesId/:seasonNum/:episodeNum/watch-series"
          element={<WatchSeries />}
        />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
