import React from 'react';

const Feedback = ({ reaction: { good, neutral, bad }, total }) => {
  const positive = total > 0 ? Math.round((good / total) * 100) + '%' : '0%';

  return (
    <>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total}</p>
      <p>Positive: {positive}</p>
    </>
  );
};

export default Feedback;
