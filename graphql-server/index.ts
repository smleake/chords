import { ApolloServer } from "apollo-server-express";
import express from "express";
import { Strategy as SpotifyStrategy } from "passport-spotify";
import passport from "passport";
import session from "express-session";
import cors from "cors";
import axios from "axios";

const main = async () => {
    const express_app = express();
    passport.use(
        new SpotifyStrategy(
            {
                clientID: "",
                clientSecret: "",
                callbackURL: "",
            },
            (accessToken, refreshToken, expires_in, profile, done) => {
                return done(null, {
                    profile: profile,
                    token: accessToken,
                    refreshToken: refreshToken,
                    expires_in: expires_in,
                });
            }
        )
    );

    passport.serializeUser((user, done) => {
        done(null, user);
    });

    passport.deserializeUser((obj: any, done) => {
        done(null, obj);
    });

    express_app.use(
        session({
            secret: "temp secret change later",
            resave: true,
            saveUninitialized: true,
        })
    );

    express_app.use(
        cors({
            origin: [
                "http://localhost:3000",
                "https://studio.apollographql.com",
            ],
            credentials: true,
        })
    );
    express_app.use(passport.initialize());
    express_app.use(passport.session());

    // const apollo_server = new ApolloServer({
    //     typeDefs,
    //     resolvers,
    //     context: ({req}) => ({
    //         getUser: () => req.user,
    //     }),
    //     csrfPrevention: true,
    //     cache: 'bounded'
    // })
    // await apollo_server.start();
    // apollo_server.applyMiddleware({ express_app, cors: false })

    express_app.get(
        "/auth/spotify/callback",
        passport.authenticate("spotify", { failureRedirect: "/login" }),
        (_req, res) => {
            res.redirect("http://localhost:3000");
        }
    );

    express_app.get(
        "/auth/spotify",
        passport.authenticate("spotify", { 
            scope: ["user-read-email", "user-read-private"]
        }),
    );

    express_app.listen(8000, () => {
        console.log('GraphQL server live on port 8000');
    })
};

main().catch((err) => {
    console.error(err);
});
