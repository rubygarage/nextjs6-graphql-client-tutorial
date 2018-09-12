import React from 'react';
import { Home } from 'components';
import HeaderContainer from 'containers/HeaderContainer';
import SearchRepoList from 'containers/SearchRepoList';
import searchTopRubyRepos from 'graphql/queries/searchTopRubyRepos';

const TopRuby = () => (
  <Home
    header={<HeaderContainer title="Top Ruby Repositories" />}
    content={<SearchRepoList query={searchTopRubyRepos} />}
  />
);

export default TopRuby;
