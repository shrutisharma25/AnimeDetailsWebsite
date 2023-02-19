import { useEffect, useState } from 'react';
import AnimeList from './AnimeList';

function Home() {    
  let [apiData , setApiData] = useState( null );
  let [pending , setPending] = useState( true );
  let [error , setError] = useState( null );
  
const arr = [1,2,4,5,8,];

  useEffect(() => {
    fetch("https://api.jikan.moe/v4/anime")
        .then((response) => {
            if (response.ok === false) {
                throw Error("Searching data not found")
            }
            return response.json()
        })
        .then((datas) => { setApiData(datas); setPending(false) })
        .catch((err) => { setError(err.message) })
}, []);
console.log(apiData);
  
  return (
    <div>
    { error    &&  <h1>{error}</h1>}
    { pending  &&  <div className="loader"></div> }
    { apiData   &&  <AnimeList apiData={apiData} />}
  </div>
  );
}

export default Home
