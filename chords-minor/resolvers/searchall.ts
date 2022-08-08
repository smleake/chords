import axios from "axios";
import { Query, Resolver, Ctx, Arg } from "type-graphql";
import { ChordsContext } from "../types/context";
import { GenericSearchResults } from "../generated/graphql";

@Resolver()
export class GenericSearchResolver {
    @Query(() => GenericSearchResults)
    async searchAll(
        @Ctx() { req }: ChordsContext,
        @Arg("searchQuery") searchQuery: string
    ): Promise<GenericSearchResults> {
        const user = req.user;
        const results = await axios(
            `https://api.spotify.com/v1/search?q=${encodeURIComponent(
                searchQuery
            )}&type=album,track,artist`,
            {
                headers: {
                    Authorization: `Bearer ${user?.token}`,
                },
            }
        ).then(({ data }) => data);
        return results;
    }
}