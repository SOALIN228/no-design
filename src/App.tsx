import React from 'react'
import { TransMenu } from './components/Menu'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
// 添加所以图标
library.add(fas)

const App: React.FC = () => {
  return (
    <div className='App'>
      <TransMenu defaultIndex={'0'} mode="horizontal" onSelect={(id) => {
        console.log(id)
      }} defaultOpenSubMenus={['0']}>
        <TransMenu.SubMenu title="dropdown">
          <TransMenu.Item>dropdown1</TransMenu.Item>
          <TransMenu.Item>dropdown2</TransMenu.Item>
        </TransMenu.SubMenu>
        <TransMenu.Item>disabled3</TransMenu.Item>
        <TransMenu.Item disabled>disable</TransMenu.Item>
      </TransMenu>
    </div>
  )
}

export default App
