/**
 * User: soalin
 * Date: 2020/8/28
 * Time: 07:40
 * Desc:
 */
import React from 'react'
import classNames from 'classnames'
// eslint-disable-next-line import/named
import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome'

export type ThemeProps = 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger' | 'light' | 'dark'

export interface IconProps extends FontAwesomeIconProps {
  theme?: ThemeProps
}

const Icon: React.FC<IconProps> = (props) => {
  const {className, theme, ...restProps} = props
  const classes = classNames('soa-icon', className, {
    [`icon-${theme}`]: theme
  })
  return (
    <FontAwesomeIcon className={classes} {...restProps}/>
  )
}

export default Icon
