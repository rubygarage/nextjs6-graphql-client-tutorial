import React from 'react';
import { Home } from 'components';
import HeaderWithMenu from 'containers/HeaderWithMenu';
import SearchRepoList from 'containers/SearchRepoList';
import searchTopJsRepos from 'graphql/queries/searchTopJsRepos';

const TopRuby = () => (
  <Home
    header={<HeaderWithMenu />}
    content={<SearchRepoList query={searchTopJsRepos} />}
  />
);

export default TopRuby;
