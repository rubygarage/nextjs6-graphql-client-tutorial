import React from 'react';
import renderer from 'react-test-renderer';
import Index from 'pages';
import viewerLast100Repositories from 'graphql/queries/viewerLast100Repositories';
import { MockedProvider } from 'react-apollo/test-utils';

describe('Home Page', () => {
  it('renders loading state initially', () => {
    const component = renderer.create(
      <MockedProvider mocks={[]} addTypename={false}>
        <Index />
      </MockedProvider>,
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders cards with all information on success', async () => {
    const mocks = [
      {
        request: {
          query: viewerLast100Repositories,
        },
        result: {
          data: {
            viewer: {
              repositories: {
                edges: [
                  {
                    node: {
                      id: '1', url: 'url.com', name: 'repo name', description: 'desc',
                    },
                  },
                ],
              },
            },
          },
        },
      },
    ];

    const component = renderer.create(
      <MockedProvider mocks={mocks} addTypename={false}>
        <Index />
      </MockedProvider>,
    );
    await new Promise(resolve => setTimeout(resolve));

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correct message on error', async () => {
    const mock = {
      request: {
        query: viewerLast100Repositories,
      },
      error: new Error('error'),
    };

    const component = renderer.create(
      <MockedProvider mocks={[mock]} addTypename={false}>
        <Index />
      </MockedProvider>,
    );
    await new Promise(resolve => setTimeout(resolve));

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
