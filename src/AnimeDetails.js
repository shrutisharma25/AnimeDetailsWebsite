import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

export default function AnimeDetails() {

    let h = useHistory();
    let { id } = useParams();

    const [apiData, setapiData] = useState(null);
    let [pending, setpending] = useState(true);
    let [error, setError] = useState(null);

    useEffect(() => {
        fetch("https://api.jikan.moe/v4/anime/" + id)
            .then((response) => {
                if (response.ok === false) {
                    throw Error("Searching data not found")
                }
                return response.json()
            })
            .then((datas) => { setapiData(datas); setpending(false) })
            .catch((err) => { setError(err.message) })
    }, [id]);


    // Deleting The Movie 
    let deleteAnime = () => {
        fetch("https://api.jikan.moe/v4/anime/" + id, { method: "DELETE" })
            .then(() => {
                alert("Movie Deleted Succesfully");
                h.goBack();
            }
        )
    }

    
    return (
        <>
            {error && <h1>{error}</h1>}
            {pending && <div className="loader"> </div>}
            {apiData && <div className="AnimeDetails">
                <div className="image">
                    <img className='detailsImage' src={apiData.data.images.jpg.image_url} alt="poster" />
                </div>

                <div className="details">
                    <h1 className="FrameContentDetails"><label className='name'>Name:-</label> {apiData.data.title}</h1>
                    <h2 className="FrameContentDetails"><label>Duration:-</label> {apiData.data.duration}</h2>
                    <h2 className="FrameContentDetails"><label>Episodes :-</label> {apiData.data.episodes}</h2>
                    <h2 className="FrameContentDetails"><label>Year of release:-</label> {apiData.data.year}</h2>
                    <h2 className="FrameContentDetails"><label>Trailer:-</label><a href={apiData.data.trailer.url} id="detailsdiva"> {apiData.data.trailer.url}</a></h2>
                    <h2 className="FrameContentDetails"><label>Score :-</label> {apiData.data.score}</h2>
                    <h2 className="FrameContentDetails"><label>Aired Date :-</label> {apiData.data.aired.string}</h2>
                    <h2 className="FrameContentDetails"><label>Broadcast Day and time:-</label> {apiData.data.broadcast.string}</h2>
                    <h2 className="FrameContentDetails"><label>Broadcast time zone:-</label> {apiData.data.broadcast.timezone}</h2>
                    <div className='innerdiv'>
                    <a className='innerdivitem' href={apiData.data.url}> Complete Details</a>
                    <button className="innerdivitem" onClick={deleteAnime}>Delete</button>
                    </div>
                    </div>
            </div>}
        </>
    );
}