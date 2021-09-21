import React from 'react';
import Card from './components/Card';
import Data from './data.json'

function App(){

    return <div>
          <h1 className="cssstyle largetext" >React App</h1>
          {Data.map((item ,index) => <Card key={index} text={item.title} paragraph = {item.desc} />)}
  </div>
}

export default App;