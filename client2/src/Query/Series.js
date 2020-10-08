import gql from 'graphql-tag';

// Allow you to get the list of series
const SERIES_QUERY = gql`
  {
    series {
     id
     banner_url
     title
     tag
    }
  }
`;

export {
  SERIES_QUERY,
};
