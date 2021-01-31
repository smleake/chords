import cors from "cors";
import express from "express";
import { Query } from "./types/Query";

require("dotenv-safe").config()

const main = async () =>{{}
    const app = express();

    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(cors({origin: "*"}))
    const SpotifyWebApi = require("spotify-web-api-node");
    // Create the api objecct with the credientials
    const spotifyApi = new SpotifyWebApi({
        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        redirectUri: "http://localhost:8888/auth/spotify/callback"
    });

    // Retireve an access token

    // response = fetch("/songs", ()=> )
    app.post("/songs", async (req, res) => {
        if(!req.body.name){
            return;
        }
        let queries = new Map<string, Query>();
        queries = await spotifyApi.clientCredentialsGrant().then(function(data: any) { 
            spotifyApi.setAccessToken(data.body['access_token']) 
                //Save the access token so that it's useed in future calls
                spotifyApi.setAccessToken(data.body['access_token']);
                
            },
            function(err: any){
                console.log('Something went wrong when retrieving an access token', err);
            }
        )
        .then(function(){
            return spotifyApi.searchTracks(req.body.name);
        })
        .then(function(data:any){
            let query: Array<[]> = Array.from(data.body.tracks.items)
            let dict = new Map<string, Query>();
            
            query.forEach((elm: any, ind: number) =>{
                let newObj: any = {};
                newObj.id = ind;
                newObj.title = elm.album.name
                newObj.img = elm.album.images[0]
                newObj.link = elm.external_urls.spotify
                dict.set(elm.album.id, newObj);
                return newObj;
            })
            
            return dict;
            
        })
        .catch(function(error:any){
            console.error(error);
        });
        
        const resp = Array.from(queries.values());
        // let resp = {}
        // let i = 0
        // for(const property in resp){
        //     = 
        // }
        res.send(JSON.stringify(resp))

    })
   
    app.get("/", (_req: any, res: any) =>{
        res.send("connected")
    })
    app.listen("3001", () =>{
        console.log("listening on port 3001")
    })
}
main();