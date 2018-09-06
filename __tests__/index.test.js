import React from 'react';
import renderer from 'react-test-renderer';
import Index from 'pages';
import viewerLast100Repositories from 'graphql/queries/viewerLast100Repositories';
import { MockedProvider } from 'react-apollo/test-utils';

const mocks = [
  {
    request: {
      query: viewerLast100Repositories,
      variables: {
        name: 'Buck',
      },
    },
    result: {
      data: {
        viewer: {
          repositories: {
            edges: [
              { node: { id: '1' } },
            ],
          },
        },
      },
    },
  },
];

describe('Home Page', () => {
  it('should render loading state initially', () => {
    const component = renderer.create(
      <MockedProvider mocks={mocks} addTypename={false}>
        <Index />
      </MockedProvider>,
    );

    const tree = component.toJSON();
    expect(tree.children).toContain('MuiCircularProgress-root-104');
    // const component = renderer.create(<Index />);
    // const tree = component.toJSON();
    // expect(tree).toMatchSnapshot();
  });
});
