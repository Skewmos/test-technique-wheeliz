import gql from 'graphql-tag';
import { tagPropType } from 'reactstrap/lib/utils';
import CreateSeries from '../CreateSeries';

// Mutation to create a serie
const CREATE_SERIE = gql`
  mutation CreateSeries($title: String!, $tag: String!, $banner_url: String!) {
    createSeries(title: $title, tag: $tag, banner_url: $banner_url) {
      title
      tag
      banner_url
    }
  }
`;

export {
  CREATE_SERIE,
};
