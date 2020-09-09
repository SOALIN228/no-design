import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { Menu, MenuProps } from '../components/Menu/menu'
import MenuItem from '../components/Menu/menuItem'
import SubMenu from '../components/Menu/subMenu'

export default {
  title: 'Example/Menu',
  component: Menu,
} as Meta

const Template: Story<MenuProps> = (args) => {
  return <Menu onSelect={(id) => {
    console.log(id)
  }} {...args}>
    <SubMenu title="dropdown">
      <MenuItem>dropdown1</MenuItem>
      <MenuItem>dropdown2</MenuItem>
    </SubMenu>
    <MenuItem>disabled3</MenuItem>
    <MenuItem disabled>disable</MenuItem>
  </Menu>
}

export const base = Template.bind({})
base.args = {}
base.storyName = '默认 Menu'

export const verticalMenu = Template.bind({})
verticalMenu.args = {
  mode: 'vertical',
  defaultOpenSubMenus: ['0']
}
verticalMenu.storyName = '垂直 Menu'
