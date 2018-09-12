import React from 'react';
import { Home } from 'components';
import HeaderContainer from 'containers/HeaderContainer';
import SearchRepoList from 'containers/SearchRepoList';
import searchNewRubyRepos from 'graphql/queries/searchNewRubyRepos';

const NewRuby = () => (
  <Home
    header={<HeaderContainer title="New Ruby Repositories" />}
    content={<SearchRepoList query={searchNewRubyRepos} />}
  />
);

export default NewRuby;
