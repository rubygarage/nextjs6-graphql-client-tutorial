import React from 'react';
import { Home } from 'components';
import HeaderWithMenu from 'containers/HeaderWithMenu';
import SearchRepoList from 'containers/SearchRepoList';
import searchNewJsRepos from 'graphql/queries/searchNewJsRepos';

const NewJs = () => (
  <Home
    header={<HeaderWithMenu />}
    content={<SearchRepoList query={searchNewJsRepos} />}
  />
);

export default NewJs;
