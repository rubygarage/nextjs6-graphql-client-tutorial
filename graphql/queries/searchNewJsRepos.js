import gql from 'graphql-tag';

const searchNewJsRepos = gql`
{
  search(query: "language:JavaScript, stars:>1 created:>=2018-07-01", first: 50, type: REPOSITORY) {
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

export default searchNewJsRepos;
