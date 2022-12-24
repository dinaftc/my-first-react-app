import { Link } from "react-router-dom";
const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>The D1nz0 blog </h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create" style={{
                    color:"white",
                    backgroundColor:"#35b5f1",
                    borderRadius:"8px"
                }}>New Blog</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;