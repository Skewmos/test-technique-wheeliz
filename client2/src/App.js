import React from 'react';
import CreateSeries from './CreateSeries';
import Mediacard from './components/carousel/carousel';
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
     <CreateSeries />
      <Query query={SERIES_QUERY}>
        {({ loading, error, data }) => {
          if (loading) return (<div>Fetching</div>);
          if (error) return (<div>Error</div>);
          let items = data.series;
          console.log(data.series);
          return (
            <>
            <div className="jumbotron text-center">
              There are {data.series.length} series in the server
            </div>
            {
              data.series.map((item) => (
                <Mediacard serie={item}/>
              ))
            }
            </>
          )
        }}
      </Query>
    
    </div>
  );
}

export default App;
