export const actionTypes = {
  'FETCH_PETITION_REQUEST': 'FETCH_PETITION_REQUEST',
  'FETCH_PETITION_SUCCESS': 'FETCH_PETITION_SUCCESS',
  'FETCH_PETITION_FAILURE': 'FETCH_PETITION_FAILURE'
};

let API_URI = process.env.API_URI;

export function loadPetition (petitionSlug) {
  return (dispatch) => {
    console.log('from mapDispatchToProps');
    dispatch({
      'type': actionTypes.FETCH_PETITION_REQUEST,
      'slug': petitionSlug
    });
    let urlKey = 'petitions/' + petitionSlug;
    if (window.preloadObjects && window.preloadObjects[urlKey]) {
      console.log('using preloadedData');
      dispatch({
        'type': actionTypes.FETCH_PETITION_SUCCESS,
        'petition': window.preloadObjects[urlKey]
      });
    } else {
      fetch(API_URI + '/api/v1/' + urlKey + '.json')
        .then(
          (response) => {
            return response.json();
          },
          (err) => {
            dispatch({
              'type': actionTypes.FETCH_PETITION_FAILURE,
              'error': err,
              'slug': petitionSlug
            });
          }
        ).then((json) => {
          dispatch({
            'type': actionTypes.FETCH_PETITION_SUCCESS,
            'petition': json,
            'slug': petitionSlug
          });
        });
    }
  };
};

export const actions = {
  loadPetition
};
