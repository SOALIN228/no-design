import React from 'react';
import Button from './components/Button/button';
import Menu from './components/Menu/menu'
import MenuItem from './components/Menu/menuItem'

const App: React.FC = () => {
  return (
    <div className='App'>
    <Menu defaultIndex={0} onSelect={(id)=> {
      console.log(id)}}>
      <MenuItem index={0}>1</MenuItem>
      <MenuItem index={1} disabled>2</MenuItem>
      <MenuItem index={2}>3</MenuItem>
    </Menu>
    </div>
  );
};

export default App;
