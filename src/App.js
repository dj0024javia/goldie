import React from 'react';
import './App.css';
import Slider from './Slider';

function App() {

  const images = [
    'https://images.unsplash.com/photo-1449034446853-66c86144b0ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80',
    'https://images.unsplash.com/photo-1470341223622-1019832be824?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2288&q=80',
    'https://images.unsplash.com/photo-1448630360428-65456885c650?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2094&q=80',
    'https://images.unsplash.com/photo-1534161308652-fdfcf10f62c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2174&q=80'
  ]

  const images1 = [
    require('./images/wallhaven-0w556p.jpg'),
    require('./images/wallhaven-lmg3ol.jpg'),
    require('./images/wallhaven-mdyv6m.jpg'),
    require('./images/wallhaven-r26ogm.jpg')
  ]

  return (
    <div className="App">
      <Slider images={images1} />

    </div>

  );
}

export default App;
