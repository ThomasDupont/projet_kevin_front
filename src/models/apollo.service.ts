import { Apollo } from 'apollo-angular';
import { HttpLink } from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { Injectable } from '@angular/core';
import gql from 'graphql-tag';
import { environment} from "../environments/environment";

@Injectable()
export class ApolloService {
    constructor(
        public apollo: Apollo,
        httpLink: HttpLink
    ) {
        apollo.create({
            link: httpLink.create({ uri: environment.api_url }),
            cache: new InMemoryCache()
        });
    }

    public query(query : String): any {
        return this.apollo.query({query: gql`${query}`});
    }
}