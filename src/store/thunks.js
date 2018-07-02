
import {cluesLoaded} from './actions';

export function fetchClues(){
    return dispatch => {
        Promise.all([
            fetch('http://jservice.io/api/random'),
            fetch('http://jservice.io/api/random'),
            fetch('http://jservice.io/api/random')
          ])
         // fetch('http://jservice.io/api/random')
          //.then(responses => response.json())
          .then(responses => {
        
            responses[0].json
            return Promise.all([
              responses[0].json(),
              responses[1].json(),
              responses[2].json(),
        
            ]);
          })
          //.then( clues => clues[0])
          .then(clueArrays => clueArrays.map(arr => arr[0]))
          .then(clues => {
         // this.props.cluesFetched(clues);    
         dispatch(cluesLoaded(clues));
        });
        };
}





