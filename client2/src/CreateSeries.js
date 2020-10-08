import React from 'react';
import { Mutation } from 'react-apollo';
import { CREATE_SERIE } from './Mutations/Series';
import { SERIES_QUERY } from './Query/Series'

export default function CreateSeries() {
  const title = "new serie";
  const tag = "asset";
  const banner_url = "https://via.placeholder.com/600/FF0000";
  return (
    <div>
        Just Make a button that will send a mutation to add a new serie
    </div>
  )
}
