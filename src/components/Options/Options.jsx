import React from 'react';
import Button from '../Button/Button';

const Options = ({ vote, total }) => {
  return (
    <>
      <Button vote={() => vote('good')}>Good</Button>
      <Button vote={() => vote('neutral')}>Neutral</Button>
      <Button vote={() => vote('bad')}>Bad</Button>
      {total > 0 && <Button vote={() => vote()}>Reset</Button>}
    </>
  );
};

export default Options;
