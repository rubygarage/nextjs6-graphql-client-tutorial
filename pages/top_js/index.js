import React from 'react';
import { Home } from 'components';
import HeaderContainer from 'containers/HeaderContainer';
import SearchRepoList from 'containers/SearchRepoList';
import searchTopJsRepos from 'graphql/queries/searchTopJsRepos';

const TopRuby = () => (
  <Home
    header={<HeaderContainer title="Top Javascript Repositories" />}
    content={<SearchRepoList query={searchTopJsRepos} />}
  />
);

export default TopRuby;
