import axios from "axios";
import { Query, Resolver, Ctx, Arg } from "type-graphql";
import { ChordsContext } from "../types/context";
import { Album } from "../generated/graphql";

@Resolver()
export class AlbumResolver {
    @Query(() => [Album])
    async albums(
        @Ctx() { req }: ChordsContext,
        @Arg("searchQuery") searchQuery: string
    ): Promise<Album[]> {
        const user = req.user;
        const albums = await axios(
            `https://api.spotify.com/v1/search?q=${encodeURIComponent(
                searchQuery
            )}&type=album`,
            {
                headers: {
                    Authorization: `Bearer ${user?.token}`,
                },
            }
        ).then(({ data }) => data);
        return albums.items;
    }
}