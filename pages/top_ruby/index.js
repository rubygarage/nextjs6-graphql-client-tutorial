import React from 'react';
import { Home } from 'components';
import HeaderWithMenu from 'containers/HeaderWithMenu';
import SearchRepoList from 'containers/SearchRepoList';
import searchTopRubyRepos from 'graphql/queries/searchTopRubyRepos';

const TopRuby = () => (
  <Home
    header={<HeaderWithMenu />}
    content={<SearchRepoList query={searchTopRubyRepos} />}
  />
);

export default TopRuby;
