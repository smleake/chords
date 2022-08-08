import axios from "axios";
import { Query, Resolver, Ctx, Arg } from "type-graphql";
import { ChordsContext } from "../types/context";
import { Artist } from "../generated/graphql";

@Resolver()
export class ArtistsResolver {
    @Query(() => [Artist])
    async artists(
        @Ctx() { req }: ChordsContext,
        @Arg("searchQuery") searchQuery: string
    ): Promise<Artist[]> {
        const user = req.user;
        const artists: Artist[] = await axios(
            `https://api.spotify.com/v1/search?q=${encodeURIComponent(
                searchQuery
            )}&type=artist`,
            {
                headers: {
                    Authorization: `Bearer ${user?.token}`,
                },
            }
        ).then(({ data }) => data.artists.items);
        return artists;
    }
}
