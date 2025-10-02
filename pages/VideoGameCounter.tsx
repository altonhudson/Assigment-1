import VideoGameCard from "../components/VideoGameCard";
import { useState } from "react";

type VideoGame = {
    title: string;
    releaseYear: number;
    developer: string;
    genre: string;
    image: string;
};

export default function VideoGameCounter({ videoGames }: { videoGames: VideoGame[] }) {
    const [likeCount, setLikeCount] = useState(0)
    const [disCount, setdisCount] = useState(0)

    console.log(videoGames);

    const buttonStyle = {
        backgroundColor: "lightslategray",
        height: "50px",
        width: "200px",
        borderRadius: "10px"
    }

    return (
        <div>
            <h2
                style={{
                    fontSize: "50px",
                    fontFamily: "monospace",
                    textAlign: "center",
                    fontWeight: 900,
                    marginTop: "20px"
                }}
            >VIDEO GAME LIKE COUNTER</h2>
            <h3
                style={{
                    fontSize: "25px",
                    fontFamily: "monospace",
                    textAlign: "center",
                    fontWeight: 900,

                }}>Keep track of games you like or dislike.</h3>
            <div style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "50px"

            }}>
                <div>
                    <p style={{
                        fontSize: "200px"
                    }}>Like: <span style={{
                        fontWeight: 900,
                    }}>{likeCount}</span></p>

                </div>
                <div>
                    <ul style={{
                        display: "flex",
                        flexWrap: "wrap",
                        justifyContent: "space-between",

                    }}>
                        {videoGames.map((game, index) => (
                            <div style={{
                                marginBottom: "50px",
                                padding: "0 0 50px 0",
                                display: "flex",
                                flexDirection: "column"
                            }}>
                                <li key={index} style={{
                                    padding: "0 0 50px 0",
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    flex: "0 1 300px",
                                    marginBottom: "200px"
                                }}> <VideoGameCard videogame={game} /></li>
                                <div style={{
                                    marginTop: "200px"
                                }}>
                                    <button style={{
                                        backgroundColor: "grey",
                                        height: "50px",
                                        width: "200px",
                                        borderRadius: "10px"

                                    }} onClick={() => setLikeCount(likeCount + 1)}>Like</button>
                                    <button style={{
                                        backgroundColor: "grey",
                                        height: "50px",
                                        width: "200px",
                                        borderRadius: "10px"

                                    }} onClick={() => setLikeCount(likeCount - 1)}>dislike</button>
                                </div>
                            </div>
                        ))}
                    </ul>
                </div>

            </div>




        </div>
    );
}