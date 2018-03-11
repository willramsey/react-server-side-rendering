import React from 'react';

const Home = () => {
  return (
    <div>
      <div>I'm finally home</div>
      <button onClick={() => console.log('You clicked me!')} >Click me!</button>
    </div>
  );
};

export default Home;