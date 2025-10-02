import VideoGameCard from "../components/VideoGameCard";
import { useState } from "react";

type VideoGame = {
    title: string;
    releaseYear: number;
    developer: string;
    genre: string;
    image: string;
};

export default function VideoGameList({ videoGames }: { videoGames: VideoGame[] }) {

    const [genre, setGenre] = useState("select")

    const filteredGame = videoGames.filter((videoGame) => { return videoGame.genre == genre }
    )


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
            >VIDEO GAME LIST</h2>
            <h3
                style={{
                    fontSize: "25px",
                    fontFamily: "monospace",
                    textAlign: "center",
                    fontWeight: 900,

                }}>Filter By Game Type!</h3>

            <div style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "40px",
                marginBottom: "40px"
            }}>
                <label htmlFor="genre-select">Select Game Genre:</label>
                <select
                    id="genre-select"
                    value={genre}
                    onChange={(e) => setGenre(e.target.value)}
                    style={{
                        backgroundColor: "#f0f0f0",
                        color: "#333",
                        border: "2px solid #ccc",
                        borderRadius: "8px",
                        padding: "8px 12px",
                        fontSize: "16px",
                        fontWeight: 600,
                        cursor: "pointer",
                        outline: "none",
                        transition: "all 0.3s ease",
                    }}
                >
                    <option value="select">Select A Genre</option>
                    <option value="RPG">RPG</option>
                    <option value="FPS">FPS</option>
                </select>
            </div>

            {genre == "select" ? <p style={{
                textAlign: "center",
                marginTop: "25px"
            }}>Please select a genre to show list of games.</p> : genre == "RPG" ?
                <div>
                    <ul style={{
                        display: "flex",
                        flexWrap: "wrap",
                        justifyContent: "space-between",

                    }}>
                        {filteredGame.map((game, index) => (
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
                                    marginBottom: "200px",
                                    marginRight: "70px"
                                }}> <VideoGameCard videogame={game} /></li>

                            </div>
                        ))}
                    </ul>
                </div>
                : genre == "FPS" ? <div>
                    <ul style={{
                        display: "flex",
                        flexWrap: "wrap",
                        justifyContent: "space-between",

                    }}>
                        {filteredGame.map((game, index) => (
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
                                    marginBottom: "200px",
                                    marginRight: "70px"
                                }}> <VideoGameCard videogame={game} /></li>

                            </div>
                        ))}
                    </ul>
                </div> : null}
        </div>
    );
}
