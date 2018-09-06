import React from 'react';
import { Home } from 'components';
import HeaderWithMenu from 'containers/HeaderWithMenu';
import SearchRepoList from 'containers/SearchRepoList';
import searchNewRubyRepos from 'graphql/queries/searchNewRubyRepos';

const NewRuby = () => (
  <Home
    header={<HeaderWithMenu />}
    content={<SearchRepoList query={searchNewRubyRepos} />}
  />
);

export default NewRuby;
