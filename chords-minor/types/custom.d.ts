import { Profile as SpotifyProfile } from "passport-spotify";
export {};
declare global {
    namespace Express {
        interface User {
            profile: SpotifyProfile;
            token: string;
            refreshToken: string;
            expiresIn: number;
        }
    }
}
