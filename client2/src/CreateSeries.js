import React from 'react';

import { Mutation } from 'react-apollo';
import { CREATE_SERIE } from './Mutations/Series';
import { SERIES_QUERY } from './Query/Series'
import { Button } from 'reactstrap';


export default function CreateSeries() {
  const title = "new serie";
  const tag = "asset";
  const banner_url = "https://via.placeholder.com/600/FF0000";

  return (
    <div className="container">
    <Mutation mutation={CREATE_SERIE} variables={{title, tag, banner_url}}>
      {createSeries => (
        <Button  className="btn-block mt-5 mb-5" color="primary" onClick={createSeries}>NEW </Button>
      )}
    </Mutation>
    </div>
  );
}
