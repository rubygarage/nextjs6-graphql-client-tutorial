import gql from 'graphql-tag';

const viewerLast100Repositories = gql`
{
  viewer {
    repositories(last:100) {
      edges {
        node {
          id
          name
          description
        }
      }
    }
  }
}
`;

export default viewerLast100Repositories;
