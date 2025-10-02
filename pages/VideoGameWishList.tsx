import VideoGameWishListCard from "../components/VideoGameWishListCard";
import { useState } from "react";

export default function VideoGameWishList() {

  const [ gameName, setGameName ] = useState("")
  const [errorMsg, setErrorMsg] = useState(false)
  const [wishList, setWishList] = useState<string[]>([]);
  const error = "Please Enter A Valid Game Name"

  const wishListSubmit = (e: any) => {
    e.preventDefault()
    if (gameName == "") {
      setErrorMsg(true)
    } else {
      setErrorMsg(false)
      setWishList([...wishList, gameName]);
    }
  }

  return (
    <div>
      <h2
      style={{
      fontSize:"50px",
      fontFamily:"monospace",
      textAlign: "center",
      fontWeight: 900,
      marginTop: "20px"
    }}
      >VIDEO GAME WISH LIST</h2>
       {errorMsg ? <h3 style={{
          color:"red",
          fontSize: "40px",
          fontWeight: 900,
          textAlign: "center"
        }}> {error} </h3> : null}
      <div style={{
      display: "flex",
      justifyContent: "center",
      marginTop: "60px"

    }}>

  
      <form action="submit">
       
        <label htmlFor="">Game Name:</label>
        <input type="text" placeholder=" Enter Game Name Here" onChange={(e) => setGameName(e.target.value)} style={{
          backgroundColor: "lightslategray",
          height:"50px",
          width: "200px",
          marginLeft: "10px",
          borderRadius: "10px"
        }}/>

      </form>
        <button style={{
          backgroundColor: "lightcyan",
          color: "black",
          height:"50px",
          width: "200px",
          borderRadius: "10px",
          marginLeft: "20px"
          
        }}
        onClick={(e) => wishListSubmit(e)}>Add to Wish List</button>
        </div>
      {!errorMsg ? <div>
        <ul>
            {wishList.map((game, index) => (
                  <>
                  <li key={index}> <VideoGameWishListCard name={game} /> </li>
                  </>
            ))}
      </ul>
      </div> : null}

        
    </div>
  );
}