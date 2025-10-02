export default function NavBar({page, setPage}: any) {

    //This method is to keep track of the page the users clicks and store it in the Page state
const handleNavClick = (e: any)  => {
    const newPage = e.target.innerText;
    setPage(newPage)
    console.log("VALUE OF PAGE: ", e.target.innerText);
    
}
  return (
    <div style={{
            textAlign: "center",
            borderBottom: "5px solid lightcyan",
            paddingBottom: "50px"
        }}>
        <br />
        <div className="nav-container" style={{
            display: "flex",
            justifyContent: "space-evenly",
        }}>
            <button style={{
            backgroundColor: "teal",
            height:"50px",
            width: "200px",
            borderRadius: "10px"
        }} onClick={(e) => handleNavClick(e)}>Video Game List</button>       
        <button type="button" style={{
            backgroundColor: "teal",
            height:"50px",
            width: "200px",
            borderRadius: "10px"
        }} onClick={(e) => handleNavClick(e)}>Video Game Counter</button>  
        <button type="button" style={{
            backgroundColor: "teal",
            height:"50px",
            width: "200px",
            borderRadius: "10px"
        }} onClick={(e) => handleNavClick(e)}>Video Game Wish List</button>
        </div>
    </div>
  );
}
