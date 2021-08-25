import React from 'react';
import Row from './Row';
import request from './requests';
import Navbar from './Navbar';
import Banner from './Banner';
import './App.css'

function App() {
  return (
    <div className="app">
      <Navbar />
      <Banner />
      <Row  title = "NETFLIX ORIGINALS" fetchUrl = {request.fetchNetflixOriginals} isLargeRow />
      <Row  title = "TRENDING NOW" fetchUrl = {request.fetchTrending}/>
      <Row  title = "TOP RATED" fetchUrl = {request.fetchTopRated}/>
      <Row  title = "ACTION MOVIES" fetchUrl = {request.fetchActionMovies}/>
      <Row  title = "HORROR MOVIES" fetchUrl = {request.fetchHorrorMovies}/>
      <Row  title = "COMEDY MOVIES" fetchUrl = {request.fetchComedyMovies}/>
      <Row  title = "ROMANCE MOVIES" fetchUrl = {request.fetchRomanceMovies}/>
      <Row  title = "DOCUMENTRIES" fetchUrl = {request.fetchDocumentaries}/>
    </div>
  );
}

export default App;
