import {React,useEffect, useState} from "react";
import "../Styles/Home.scss";
import Row from "./Row";
import Footer from "./Footer";
import axios from "axios";
import {FaPlay} from 'react-icons/fa';
import {FaPlus} from 'react-icons/fa';

const apikey = "82e7fea964cf7849d3f4ddfc9df9ff97";
const url = "https://api.themoviedb.org/3";
const imgurl="https://image.tmdb.org/t/p/original";

const Home = () => {
  const [upcomingMovies,setupcomingMovies]=useState([]);
  const [nowplayingMovies,setnowplayingMovies]=useState([]);
  const [popularMovies,setpopularMovies]=useState([]);
  const [topratedMovies,settopratedMovies]=useState([]);

  useEffect(() => {    
   
    //fetching upcoming movies
    const fetchUpcoming= async() => {
      const {data:{results}}=await axios.get(`${url}/movie/upcoming?api_key=${apikey}`);
      setupcomingMovies(results);
    }

    //fetching Nowplaying movies
    const fetchNowplaying= async() => {
      const {data:{results}}=await axios.get(`${url}/movie/now_playing?api_key=${apikey}`);
      setnowplayingMovies(results);
    }

    //fetching Popular movies
    const fetchPopular= async() => {
      const {data:{results}}=await axios.get(`${url}/movie/popular?api_key=${apikey}`);
      setpopularMovies(results);
    }

    //fetching Top rated movies
    const fetchToprated= async() => {
      const {data:{results}}=await axios.get(`${url}/movie/top_rated?api_key=${apikey}`);
      settopratedMovies(results);
    }

    //calling all functions
    fetchUpcoming();
    fetchNowplaying();
    fetchPopular();
    fetchToprated();

  }, [])
  
  return (
    <section className="home">
     
      <div className="banner" style={{
        // if popularmovies[0] exits then set its poster else set background color $bg
        backgroundImage:popularMovies[0]?`url(${`${imgurl}/${popularMovies[0].poster_path}`})`:"rgb(16,16,16)"
      }}>
        {popularMovies[0] && <h1>{popularMovies[0].original_title}</h1>}

        <div>
        <button> <FaPlay/>Play</button>
        <button className="mylist"><FaPlus/>My List</button>
        </div>

        {popularMovies[0] && <p>{popularMovies[0].overview}</p>}

       
      </div>

      <Row title={"Upcoming"} arr={upcomingMovies}/>
      <Row title={"Now Playing"} arr={nowplayingMovies}/>
      <Row title={"Popular"} arr={popularMovies}/>
      <Row title={"Top Rated"}arr={topratedMovies} />

      <Footer/>
    </section>
  );
};

export default Home;
