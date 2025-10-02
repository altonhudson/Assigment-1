import NavBar from "../components/NavBar";
import VideoGameList from "./VideoGameList";
import { useState } from "react";
import VideoGameCounter from "./VideoGameCounter";
import VideoGameWishList from "./VideoGameWishList";


export default function Home() {
  const [page, setPage] = useState("")

  type VideoGame = {
    title: string;
    releaseYear: number;
    developer: string;
    genre: string;
    image: string;
};

  //Video Game Data
  const videoGamesArray: VideoGame[] = [
  {
    title: "The Witcher 3: Wild Hunt",
    releaseYear: 2015,
    developer: "CD Projekt Red",
    genre: "RPG",
    image: "https://upload.wikimedia.org/wikipedia/en/0/0c/Witcher_3_cover_art.jpg",
  },
  {
    title: "Elden Ring",
    releaseYear: 2022,
    developer: "FromSoftware",
    genre: "RPG",
    image: "https://upload.wikimedia.org/wikipedia/en/b/b9/Elden_Ring_Box_art.jpg",
  },
  {
    title: "Dark Souls",
    releaseYear: 2011,
    developer: "FromSoftware",
    genre: "RPG",
    image: "https://upload.wikimedia.org/wikipedia/en/2/26/Cover_art_for_the_first_Dark_Souls_comic.jpg",
  },
  {
    title: "Final Fantasy VII Remake",
    releaseYear: 2020,
    developer: "Square Enix",
    genre: "RPG",
    image: "https://upload.wikimedia.org/wikipedia/en/c/ce/FFVIIRemake.png",
  },
  {
    title: "Cyberpunk 2077",
    releaseYear: 2020,
    developer: "CD Projekt Red",
    genre: "RPG",
    image: "https://upload.wikimedia.org/wikipedia/en/9/9f/Cyberpunk_2077_box_art.jpg",
  },
  {
    title: "Persona 5",
    releaseYear: 2016,
    developer: "Atlus",
    genre: "RPG",
    image: "https://upload.wikimedia.org/wikipedia/en/b/b0/Persona_5_cover_art.jpg",
  },
  {
    title: "Dragon Age: Inquisition",
    releaseYear: 2014,
    developer: "BioWare",
    genre: "RPG",
    image: "https://upload.wikimedia.org/wikipedia/en/c/ce/Dragon_Age_Inquisition_BoxArt.jpg",
  },
  {
    title: "Dark Souls III",
    releaseYear: 2016,
    developer: "FromSoftware",
    genre: "RPG",
    image: "https://upload.wikimedia.org/wikipedia/en/e/ed/Dark_Souls_II_cover.jpg",
  },
  {
    title: "Mass Effect 2",
    releaseYear: 2010,
    developer: "BioWare",
    genre: "RPG",
    image: "https://upload.wikimedia.org/wikipedia/en/0/05/MassEffect2_cover.PNG",
  },
  {
    title: "Starfield",
    releaseYear: 2023,
    developer: "Bethesda Game Studios",
    genre: "RPG",
    image: "https://upload.wikimedia.org/wikipedia/en/6/6d/Bethesda_Starfield.jpg",
  },
  {
    title: "Call of Duty: Modern Warfare",
    releaseYear: 2019,
    developer: "Infinity Ward",
    genre: "FPS",
    image: "https://upload.wikimedia.org/wikipedia/en/1/1f/Call_of_Duty_Modern_Warfare_%282019%29_cover.jpg",
  },
  {
    title: "DOOM Eternal",
    releaseYear: 2020,
    developer: "id Software",
    genre: "FPS",
    image: "https://upload.wikimedia.org/wikipedia/en/9/9d/Cover_Art_of_Doom_Eternal.png",
  },
  {
    title: "Halo Infinite",
    releaseYear: 2021,
    developer: "343 Industries",
    genre: "FPS",
    image: "https://upload.wikimedia.org/wikipedia/en/1/14/Halo_Infinite.png",
  },
  {
    title: "Overwatch",
    releaseYear: 2016,
    developer: "Blizzard Entertainment",
    genre: "FPS",
    image: "https://upload.wikimedia.org/wikipedia/en/5/51/Overwatch_cover_art.jpg",
  },
  {
    title: "Battlefield 1",
    releaseYear: 2016,
    developer: "DICE",
    genre: "FPS",
    image: "https://upload.wikimedia.org/wikipedia/en/f/fc/Battlefield_1_cover_art.jpg",
  },
  {
    title: "Apex Legends",
    releaseYear: 2019,
    developer: "Respawn Entertainment",
    genre: "FPS",
    image: "https://upload.wikimedia.org/wikipedia/en/d/db/Apex_legends_cover.jpg",
  },
  {
    title: "Far Cry 5",
    releaseYear: 2018,
    developer: "Ubisoft Montreal",
    genre: "FPS",
    image: "https://upload.wikimedia.org/wikipedia/en/0/03/Far_Cry_5_boxshot.jpg",
  },
  {
    title: "Rainbow Six Siege",
    releaseYear: 2015,
    developer: "Ubisoft Montreal",
    genre: "FPS",
    image: "https://upload.wikimedia.org/wikipedia/en/4/47/Tom_Clancy%27s_Rainbow_Six_Siege_cover_art.jpg",
  },
  {
    title: "Destiny 2",
    releaseYear: 2017,
    developer: "Bungie",
    genre: "FPS",
    image: "https://upload.wikimedia.org/wikipedia/en/0/05/Destiny_2_%28artwork%29.jpg",
  },
  {
    title: "Counter-Strike: Global Offensive",
    releaseYear: 2012,
    developer: "Valve",
    genre: "FPS",
    image: "https://upload.wikimedia.org/wikipedia/en/6/6e/CSGOcoverMarch2020.jpg",
  },
];

  
 
  return (
    <div>
      <h1 style={{
        fontSize: '50px',
        textAlign:"center",
        fontWeight: 900,
        fontFamily: "Arial",
        textTransform: "uppercase",
        marginTop: "25px",
        marginBottom: "25px"
      }}>Welcome to Your Video Game Tracker! </h1>
      
      <NavBar page={page} setPage={setPage}/>
      {page == "Video Game List" ? <VideoGameList videoGames={videoGamesArray}/> : page == "Video Game Counter" ? <VideoGameCounter videoGames={videoGamesArray} /> : page == "Video Game Wish List" ? <VideoGameWishList /> : null}
    </div>
  );
}
