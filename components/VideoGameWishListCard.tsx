import { useState } from "react";

type WishListProp = {
    name: string
}

export default function VideoGameWishListCard({ name }: WishListProp) {
    const [hovered, setHovered] = useState(false);


    return (
        <div
            style={{
                display: "flex",
                alignItems: "center",
                margin: "20px 200px",
                border: "1px solid lightslategray",
                borderRadius: "15px",
                backgroundColor: hovered ? "lightgreen" : "lightslategray",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                transform: hovered ? "scale(1.05)" : "scale(1)",
                cursor: "pointer",
            }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}


        >
            <img style={{
                height: 100,
                width: 100,
                border: "1px solid lightslategray",
                borderRadius: "50px"
            }}
                src="https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            <h3
                style={{
                    fontWeight: 900,
                    letterSpacing: 2,
                    marginLeft: '15px',
                    fontSize: "40px"

                }}
            >{name}</h3>

        </div>
    );
}