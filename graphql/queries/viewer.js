import gql from 'graphql-tag';

const viewer = gql`
{
  viewer {
    login,
    avatarUrl
  }
}
`;

export default viewer;
