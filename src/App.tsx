import React from 'react'
import Menu from './components/Menu/menu'
import MenuItem from './components/Menu/menuItem'
import SubMenu from './components/Menu/subMenu'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
// 添加所以图标
library.add(fas)

const App: React.FC = () => {
  return (
    <div className='App'>
      <Menu defaultIndex={'0'} mode="horizontal" onSelect={(id) => {
        console.log(id)
      }} defaultOpenSubMenus={['0']}>
        <MenuItem>1</MenuItem>
        <SubMenu title="dropdown">
          <MenuItem>dropdown1</MenuItem>
          <MenuItem>dropdown2</MenuItem>
        </SubMenu>
        <MenuItem disabled>3</MenuItem>
      </Menu>
    </div>
  )
}

export default App
