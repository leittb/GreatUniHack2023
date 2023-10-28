import { Outlet, Link } from "react-router-dom";

const Home = () => {
    return (
            <div>
                <h>This is home</h>
                <Link to="/blogs">Go To Blogs</Link>
            </div>
            );
    
}
  
  export default Home;

  