import React, { useState } from 'react'
import { Link } from 'react-router-dom';

function Navbar() {

  const [search, setsearch] = useState("")

  return (
    <div className='navbar'>
      <h1 className='navbarh1'>My<span className='navbarspan'>Anime</span>List</h1>
      <div className='navbarinnerdiv'>
      <input className='navbarinput' type="search" placeholder="search the movie" value={search} onChange={(e)=>{setsearch(e.target.value)}}  />
      <Link to={`/SearchAmine${search}`}><button className='navbarLink'>search</button></Link>
      </div>
    </div>
  )
}

export default Navbar;

// .navbarLink::before{
//   content: 'search';
//   position: absolute;
//   top: 0;
//   left: -50px;
//   z-index: -1;
//   width:150%;
//   height: 100%;
//   background-color: #C3073F;
//   transform: scaleX(0) skewX(35deg);
//   transform-origin: left;
//   transition: transform 1s;
// }

// .navbarLink:hover::before{
//   transform: scaleX(1) skewX(35deg);
// }
