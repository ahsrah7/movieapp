import "./App.scss";
import RegistrationForm from "./Pages/Registration/Registration";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login/Login";
import Movie from "./Pages/movie/Movie";
import MovieDetails from "./Pages/MovieDetails/MovieDetails";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<RegistrationForm />} />
          <Route path="/my-movie" element={<Movie />} />
          <Route path="/details/:id" element={<MovieDetails />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
