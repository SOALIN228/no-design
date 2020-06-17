import React from 'react';
import Menu from './components/Menu/menu'
import MenuItem from './components/Menu/menuItem'

const App: React.FC = () => {
  return (
    <div className='App'>
    <Menu defaultIndex={0} mode={'vertical'} onSelect={(id)=> {
      console.log(id)}}>
      <MenuItem>1</MenuItem>
      <MenuItem disabled>2</MenuItem>
      <MenuItem>3</MenuItem>
    </Menu>
    </div>
  );
};

export default App;
