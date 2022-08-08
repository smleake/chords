import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import express from "express";
import {
    Profile,
    Strategy as SpotifyStrategy,
    VerifyCallback,
    VerifyFunction,
} from "passport-spotify";
import passport from "passport";
import session from "express-session";
import cors from "cors";
import "reflect-metadata";
import * as dotenv from "dotenv";
import ChordsResolvers from "./resolvers/exported_resolvers";
dotenv.config();

const main = async () => {
    const express_app = express();
    passport.use(
        new SpotifyStrategy(
            {
                clientID: <string>process.env.CLIENT_ID, // silly casting going on here to ensure this type will always be string
                clientSecret: <string>process.env.CLIENT_SECRET,
                callbackURL: "http://localhost:8000/auth/spotify/callback",
            },
            (accessToken, refreshToken, expiresIn, profile, done) => {
                return done(null, {
                    profile,
                    token: accessToken,
                    refreshToken,
                    expiresIn,
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

    const apollo_server = new ApolloServer({
        schema: await buildSchema({
            resolvers: ChordsResolvers,
            validate: false,
        }),
        context: ({ req, res }) => ({
            req,
            res,
        }),
        csrfPrevention: true,
        cache: "bounded",
    });

    await apollo_server.start();
    apollo_server.applyMiddleware({ app: express_app, cors: false });

    express_app.get("/authorized", 
    (req, res) => {
        res.send({ authed: req.isAuthenticated()})
    });
    express_app.get(
        "/auth/spotify/callback",
        passport.authenticate("spotify", { failureRedirect: "/login" }),
        (req, res) => {
            res.redirect(`http://localhost:3000`);
        }
    );

    express_app.get(
        "/auth/spotify",
        passport.authenticate("spotify", {
            scope: ["user-read-email", "user-read-private"],
        })
    ); 
    
    express_app.listen(8000, () => {
        console.log("GraphQL server live on port 8000");
    });
};

main().catch((err) => {
    console.error(err);
});


