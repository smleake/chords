import { ArtistsResolver } from "./artists";
import { AlbumResolver } from "./albums";
import { NonEmptyArray } from "type-graphql";
import { GenericSearchResolver } from "./searchall";

const ChordsResolvers: NonEmptyArray<Function> | NonEmptyArray<string> = [
    ArtistsResolver,
    AlbumResolver,
    GenericSearchResolver
];
export default ChordsResolvers;
