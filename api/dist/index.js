"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
require("dotenv-safe").config();
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    { }
    const app = express_1.default();
    app.use(express_1.default.json());
    app.use(express_1.default.urlencoded({ extended: true }));
    app.use(cors_1.default({ origin: "*" }));
    const SpotifyWebApi = require("spotify-web-api-node");
    const spotifyApi = new SpotifyWebApi({
        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        redirectUri: "http://localhost:8888/auth/spotify/callback"
    });
    app.post("/songs", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        if (!req.body.name) {
            return;
        }
        let queries = new Map();
        queries = yield spotifyApi.clientCredentialsGrant().then(function (data) {
            spotifyApi.setAccessToken(data.body['access_token']);
            spotifyApi.setAccessToken(data.body['access_token']);
        }, function (err) {
            console.log('Something went wrong when retrieving an access token', err);
        })
            .then(function () {
            return spotifyApi.searchTracks(req.body.name);
        })
            .then(function (data) {
            let query = Array.from(data.body.tracks.items);
            let dict = new Map();
            query.forEach((elm, ind) => {
                let newObj = {};
                newObj.id = ind;
                newObj.title = elm.album.name;
                newObj.img = elm.album.images[0];
                newObj.link = elm.external_urls.spotify;
                dict.set(elm.album.id, newObj);
                return newObj;
            });
            return dict;
        })
            .catch(function (error) {
            console.error(error);
        });
        const resp = Array.from(queries.values());
        res.send(JSON.stringify(resp));
    }));
    app.get("/", (_req, res) => {
        res.send("connected");
    });
    app.listen("3001", () => {
        console.log("listening on port 3001");
    });
});
main();
//# sourceMappingURL=index.js.map