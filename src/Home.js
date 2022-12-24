import { useState, useEffect } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";
const Home = () => {
    const {data:blog,isPending,error} = useFetch('http://localhost:3000/blogs');
    return ( 
        <div className="home">
            
            { error && <div>{error }</div> }
            { isPending && <div>Loading...</div> }
          {blog && <BlogList blogs={blog} title='All Blogs:'></BlogList> }  
               </div>//output this and passes and render data
     );
}
 
export default Home;