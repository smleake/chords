import { graphql_url } from "./constants";
import { gql, useLazyQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { Album } from '../../chords-minor/generated/graphql'
import axios from "axios";

function App() {
    const [searchQuery, setSearchQuery] = useState("");
    const [searchArtists, { data, loading, error }] = useLazyQuery(
        gql` 
            query ($searchQuery: String!) {
                searchAll(searchQuery: $searchQuery) {
                    artists {
                        items {
                            ... on Artist {
                                id
                                name
                                popularity
                                images {
                                    url
                                }
                            }
                        }
                    }
                    albums {
                        items {
                            ... on Album {
                                id
                                name
                                images {
                                    url
                                }
                            }
                        }
                    }
                    tracks {
                        items {
                            ... on Track {
                                id
                                name
                                album {
                                    images {
                                        url
                                    }
                                }
                            }
                        }
                    }
                }
            }
        `
    );
    const [isAuthed, setIsAuthed] = useState(false);
    useEffect(() => {
        //replace later, rn this is fine
        axios
            .get(`${graphql_url}/authorized`, {
                withCredentials: true,
            })
            .then(({ data }) => {
                console.log(data);
                setIsAuthed(data.authed);
            });
        console.log(data);
    }, [data]);
    return (
        <>
            {!isAuthed ? (
                <a href={`${graphql_url}/auth/spotify`}>
                    <button> Log in to Spotify </button>
                </a>
            ) : (
                <>
                    <input
                        type="text"
                        onChange={(event) => {
                            setSearchQuery(event.target.value);
                        }}
                    />
                    <button
                        type="submit"
                        onClick={() => {
                            console.log("balls");
                            searchArtists({ variables: { searchQuery } });
                            console.log(data);
                        }}
                    >
                        Search
                    </button>
                    {loading && <div>loading...</div>}
                    {data && (
                        <ul>
                            <h3>Albums</h3>
                            {data.searchAll.albums.items.map((album: Album) => (
                                <li key={album.id}>
                                    {album.name}
                                    <div>
                                        <img src={album?.images?.[0]?.url ?? ""} alt="" />
                                    </div>
                                </li>
                            ))}
                            <h3>Artists</h3>    
                            {data.searchAll.artists.items.map(
                                (artists: any) => (
                                    <li key={artists.id}>
                                        {artists.name}  
                                        <div>
                                            <img
                                                src={artists?.images?.[0]?.url ?? undefined}
                                                alt=""
                                            />
                                        </div>
                                    </li>
                                )
                            )}
                            <h3>Tracks</h3>
                            {data.searchAll.tracks.items.map((tracks: any) => (
                                <li key={tracks.id}>
                                    {tracks.name}
                                    <div>
                                        <img src={tracks?.album?.images?.[0]?.url ?? undefined} alt="" />
                                    </div>
                                </li>
                            ))}
                        </ul>
                    )}
                </>
            )}
        </>
    );
}

export default App;
