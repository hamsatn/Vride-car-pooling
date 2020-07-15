import React from 'react';

const App = (props) => {
  return (
    <>
      <h1>Google</h1>
      <div>
        {props.children}
      </div>
    </>
  );
}

export default App;
