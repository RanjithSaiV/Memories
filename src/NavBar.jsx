const NavBar =()=>{
    const handleCllick =()=>{
       let body= document.getElementById("root");
       if(body.style="background:white"){
        body.style="background:black";
       }
       else{
        body.style="background:white";
       }
            

    }
    return(<nav>
        <h2>My Memories...</h2>
        <h2 onClick={handleCllick}>Mode</h2>
    </nav>)
    
}
export default NavBar;