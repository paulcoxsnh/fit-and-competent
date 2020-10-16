import {ReturnState} from './_base.js';

const bestPracticeController = (request) => {
  // Did the user tell us they'll comply with the terms.
  if (request.body.bestPractice !== undefined && request.body.bestPractice === 'yes') {
    // Then we don't have any errors. This clears any previous errors.
    request.session.bestPracticeError = false;
    // Save the agreement to comply.
    request.session.bestPractice = true;
    // Follow the 'happy path'.
    return ReturnState.Positive;
  }

  // The user submitted the form without selecting an option, this is an error!
  request.session.bestPracticeError = true;
  // Unset any saved value.
  request.session.bestPractice = false;
  // Reload the page to highlight errors.
  return ReturnState.Error;
};

export {bestPracticeController as default};
