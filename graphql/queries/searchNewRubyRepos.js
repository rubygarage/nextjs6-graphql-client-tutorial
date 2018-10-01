import gql from 'graphql-tag';

// const dateArray = new Date().toLocaleDateString().split('/').reverse();

// const lastMonth = dateArray.map((elem, key) => (key === 1 ? elem - 1 : elem)).join('-');

const searchNewJsRepos = gql`
{
  search(query: "language:Ruby, stars:>1 created:>=2018-07-01", first: 50, type: REPOSITORY) {
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
