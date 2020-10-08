import React from 'react';
import CreateSeries from './CreateSeries';
import MediaCard from './components/carousel/carousel';
import { Query } from 'react-apollo';
import { SERIES_QUERY } from './Query/Series';

/*
    App component contains an example of how to use react-apollo
    You need to update it to create your custom view
    Will not work at the beginning... i Will let you search
*/

function App() {
  return (
    <div className="App">
      <Query query={SERIES_QUERY}>
        {({ loading, error, data }) => {
          if (loading) return (<div>Fetching</div>);
          if (error) return (<div>Error</div>);
          return (
            <div>
              There are {data.series.length} series in the server
            </div>
          )
        }}
      </Query>
      <CreateSeries />
      <MediaCard />
    </div>
  );
}

export default App;
