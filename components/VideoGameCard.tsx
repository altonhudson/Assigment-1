import { useState } from "react";

type VideoGame = {
    title: string;
    releaseYear: number;
    developer: string;
    genre: string;
    image: string;
};

type VideoGameCardProps = {
    videogame: VideoGame;
}

export default function VideoGameCard({ videogame }: VideoGameCardProps) {
    const [hovered, setHovered] = useState(false);
    return (
        <div
            style={{
                width: "100%",
                height: "200px",
                objectFit: "cover",
                display: "flex",
                flexDirection: "column",
                boxShadow: hovered
                    ? "0 8px 20px rgba(0,0,0,0.4)"
                    : "0 2px 5px rgba(0,0,0,0.1)",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                transform: hovered ? "scale(1.05)" : "scale(1)",
                cursor: "pointer",
            }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <img
                src={videogame.image}
                alt={videogame.title}
                style={{
                    height: "500px",
                    width: "100%",

                }}
            />
            <div>
                <p style={{
                    fontWeight: 900
                }}>Game Name: <span style={{
                    textDecoration:"underline"
                }}>
                    {videogame.title}
                </span>
                </p>
                <p style={{
                    fontWeight: 900
                }}>Release date: <span style={{
                    textDecoration:"underline"
                }}>
                    {videogame.releaseYear}
                </span>
                </p>
                <p style={{
                    fontWeight: 900
                }}>Developer: <span style={{
                    textDecoration:"underline"
                }}>
                    {videogame.developer}
                </span>
                </p>
            </div>
        </div>

    )
}