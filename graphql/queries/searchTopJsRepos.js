import gql from 'graphql-tag';

const searchTopJsRepos = gql`
{
  search(query: "language:JavaScript stars:>10000", first: 50, type: REPOSITORY) {
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

export default searchTopJsRepos;
