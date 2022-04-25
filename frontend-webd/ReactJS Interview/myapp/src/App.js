import React from 'react';
import "../src/App.css"

function App(props) {
  const shoot1 = (a) =>{
    alert(a);
  }

  const shoot = () => {
    alert("Nice Shot!");
  }

  return (
    <div className = "maindiv">
      <div className='center1'>
        <div className='centered'>
          <h1>My Name is Sabeeh</h1>
          {/*School listed via props, prop is argument passed in Render argument in main script.*/}
          <p>I am a student at { props.school } in Toronto</p>
          <button onClick={shoot}>Take a shot by passing var</button>
          <button onClick={ () => shoot1("Goal")}>Take a shot by passing string as const argument</button>
        </div>
      </div>
    </div>
  );
}

export default App;
