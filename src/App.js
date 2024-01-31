import logo from './logo.svg';
import './App.css';
import Row from './components/Row';
import requests from './request';
import Banner from './components/Banner';
import Navigationbar from './components/Navigationbar';
function App() {
  return (
    <div>
        <Navigationbar/>
        <Banner fetchurl={requests.fetchNetflixOriginals}/>
        <Row title="NetflixOriginal" fetchurl={requests.fetchNetflixOriginals} />
        <Row title="Trending" fetchurl={requests.fetchTrending} />
        <Row title="Top Rated" fetchurl={requests.fetchTopRated} />
        <Row title="Action" fetchurl={requests.fetchActionMovies} />
        <Row title="Comedy" fetchurl={requests.fetchComedyMovies} />
        <Row title="Horror" fetchurl={requests.fetchHorrorMovies} />
        <Row title="Romance" fetchurl={requests.fetchRomanceMovies} />
        <Row title="Documentary" fetchurl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
