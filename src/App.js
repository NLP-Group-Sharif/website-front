import logo from './logo.svg';
import './App.css';
import Navbarr from './components/navbar';
import Persian from './components/persian';
import { useState } from 'react'

import React from 'react'

const AddTripButton = (props) => {
  return <button onClick={props.addTrip}>Add a trip</button>
}

// export default AddTripButton

function App() {
  const [state, setState] = useState('start')

  return (
    <div>
      {state === 'start' && (
        <AddTripButton addTrip={() => setState('add-trip') } />
      )}

      {state === 'add-trip' && <Persian />}
    </div>
  )
  // return (
  //   <div className="App">
  //   <Navbarr> </Navbarr>
  //   </div>
  // );
}

export default App;
