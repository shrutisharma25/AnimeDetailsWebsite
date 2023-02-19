import React,{useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
// import AnimeList from './AnimeList';

export default function SearchedAnime() {
    let {searchkey} = useParams();

    let [apiData, setapiData] = useState(null);
    let [pending, setpending] = useState(true);
    let [error, setError] = useState(null);
    const [searched, setsearched] = useState(null);

    useEffect(() => {
        fetch("https://api.jikan.moe/v4/anime")
            .then((response) => {
                if (response.ok === false) {
                    throw Error("Searching data not found")
                }
                return response.json()
            })
            .then((datas) => { setapiData(datas); setpending(false) })
            .catch((err) => { setError(err.message) })
    },[apiData]);
    // console.log(apiData);  //Object 

    useEffect(()=>{

        apiData && setsearched(apiData.data.filter((data, index)=>{
            return (
                apiData.data[index].title.toUpperCase().includes(searchkey.toUpperCase())
                )
            }) )
    },[pending])
    
    return (
        <>
            {error && <h1>{error}</h1>}
            {pending && <div className="loader"> </div>}
            {searched && <div className="CardOuter">
                <h1 id="searchHeading" >Search Results for:- {searchkey}</h1>
                {
                    searched.map((data, index)=>{
                        return(
                            <div className="Card">
                            
                                <img src={searched[index].images.jpg.image_url} alt="poster" />

                            <h1 className="CardContent"><label>Name:-</label> {searched[index].title}</h1>
                            <h2 className="CardContent"><label>Duration:-</label> {searched[index].duration}</h2>
                            <h2 className="CardContent"><label>Episodes :-</label> {searched[index].episodes}</h2>
                            <h3 className="CardContent"><label>Year of release:-</label> {searched[index].year}</h3>
                        </div>
                        )
                    })
                }
            </div>}
        </>
    );
}