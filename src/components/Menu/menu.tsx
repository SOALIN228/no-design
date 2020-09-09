import React, { createContext, useState } from 'react'
import classNames from 'classnames'
import { MenuItemProps } from './menuItem'

type MenuMode = 'horizontal' | 'vertical'
type SelectCallback = (SelectCallback: string) => void

export interface MenuProps {
  className?: string;
  style?: React.CSSProperties;
  /** 初始选中的菜单项 */
  defaultIndex?: string;
  /** 菜单类型，现在支持垂直、水平模式 */
  mode?: MenuMode;
  /** 被选中时调用 */
  onSelect?: SelectCallback;
  /** 初始展开的 SubMenu 菜单项数组 */
  defaultOpenSubMenus?: string[]
}

interface IMenuContext {
  index: string;
  onSelect?: SelectCallback;
  mode?: MenuMode;
  defaultOpenSubMenus?: string[];
}

export const MenuContext = createContext<IMenuContext>({index: '0'})
/**
 * 为页面和功能提供导航的菜单列表
 */
export const Menu: React.FC<MenuProps> = (props) => {
  const {className, mode, style, children, defaultIndex, onSelect, defaultOpenSubMenus} = props
  const [currentActive, setActive] = useState(defaultIndex)
  const classes = classNames('soa-menu', className, {
    'menu-vertical': mode === 'vertical',
    'menu-horizontal': mode === 'horizontal'
  })
  const handleClick = (index: string) => {
    setActive(index)
    if (onSelect) {
      onSelect(index)
    }
  }
  const passedContext: IMenuContext = {
    index: currentActive ? currentActive : '0',
    onSelect: handleClick,
    mode,
    defaultOpenSubMenus
  }
  const renderChildren = () => {
    return React.Children.map(children, (child, index) => {
      const childElement = child as React.FunctionComponentElement<MenuItemProps>
      const {displayName} = childElement.type
      if (displayName === 'MenuItem' || displayName === 'SubMenu') {
        // 克隆调用时传入属性并添加index属性，实现默认配置
        return React.cloneElement(childElement, {
          index: index.toString()
        })
      } else {
        console.error('Warning: Menu has a child which is not a MenuItem components or SubMenu components')
      }
    })
  }

  return (
    <ul className={classes} style={style} data-testid="soa-menu">
      <MenuContext.Provider value={passedContext}>
        {renderChildren()}
      </MenuContext.Provider>
    </ul>
  )
}

Menu.defaultProps = {
  defaultIndex: '0',
  mode: 'horizontal',
  defaultOpenSubMenus: [],
}
