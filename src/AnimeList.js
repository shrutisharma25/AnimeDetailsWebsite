import React from 'react';
import { Link } from 'react-router-dom';

export default function AnimeList({ apiData }) {

    return (

        <div className="FrameOuter">
            {
                apiData.data.map((data, index) => {
                    return (
                        <div className="Frame">

                            <Link to={`/AnimeDetails${data.mal_id}`}>
                                <img className='listImage' src={apiData.data[index].images.jpg.image_url} alt="poster" />
                            </Link>
                            <table>
                                <tr>
                                    <th>
                                        <label className='listLabel'>Name:-</label>
                                    </th>
                                    <th>
                                        <h2 className="framecontent"> {apiData.data[index].title}</h2>
                                    </th>
                                </tr>
                                <tr>
                                    <th>
                                        <label className='listLabel'>Duration:-</label>
                                    </th>
                                    <th>
                                        <h2 className="framecontent"> {apiData.data[index].duration}</h2>
                                    </th>
                                </tr>
                                <tr>
                                    <th>
                                        <label className='listLabel'>Episodes :-</label>
                                    </th>
                                    <th>
                                        <h2 className="framecontent"> {apiData.data[index].episodes}</h2>
                                    </th>
                                </tr>
                                <tr>
                                    <th>
                                        <label className='listLabel'>Year of release:-</label>
                                    </th>
                                    <th>
                                        <h3 className="framecontent"> {apiData.data[index].year}</h3>
                                    </th>
                                </tr>
                            </table>
                        </div>
                    )
                })
            }
        </div>
    );
}