import gql from 'graphql-tag';

const searchTopRubyRepos = gql`
{
  search(query: "language:Ruby stars:>10000", first: 20, type: REPOSITORY) {
    edges {
      node {
        ... on Repository {
          name
          description
          url
        }
      }
    }
  }
}
`;

export default searchTopRubyRepos;
