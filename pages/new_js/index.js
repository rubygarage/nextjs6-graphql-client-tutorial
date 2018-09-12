import React from 'react';
import { Home } from 'components';
import HeaderContainer from 'containers/HeaderContainer';
import SearchRepoList from 'containers/SearchRepoList';
import searchNewJsRepos from 'graphql/queries/searchNewJsRepos';

const NewJs = () => (
  <Home
    header={<HeaderContainer title="New JavaScript Repositories" />}
    content={<SearchRepoList query={searchNewJsRepos} />}
  />
);

export default NewJs;
