import React from 'react';

function GenericError({ error }) {
  return (
    <div>
      <p>Error occured: {error.message}</p>
      <p>{JSON.stringify(error)}</p>
    </div>
  );
}

export default GenericError;
