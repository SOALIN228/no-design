import React from 'react'
import classNames from 'classnames'

export type ButtonSize = 'lg' | 'sm'
export type ButtonType = 'primary' | 'default' | 'danger' | 'link'

interface BaseButtonProps {
  /** 按钮class */
  className?: string;
  /** 按钮失效状态 */
  disabled?: boolean;
  /** 设置按钮大小 */
  size?: ButtonSize;
  /** 设置按钮类型 */
  btnType?: ButtonType;
  /** 点击跳转的地址，btnType 为 link 时生效 */
  href?: string;
  children: React.ReactNode;
}

type NativeButtonProps = BaseButtonProps & React.ButtonHTMLAttributes<HTMLElement>
type AnchorButtonProps = BaseButtonProps & React.AnchorHTMLAttributes<HTMLElement>
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>

/**
 * 按钮用于开始一个即时操作
 */
export const Button: React.FC<ButtonProps> = (props) => {
  const {btnType, disabled, size, children, href, className, ...restProps} = props
  const classes = classNames('btn', className, {
    [`btn-${btnType}`]: btnType,
    [`btn-${size}`]: size,
    disabled: btnType === 'link' && disabled,
  })

  if (btnType === 'link' && href) {
    return (
      <a className={classes} href={href} {...restProps}>
        {children}
      </a>
    )
  } else {
    return (
      <button className={classes} disabled={disabled} {...restProps}>
        {children}
      </button>
    )
  }
}

Button.defaultProps = {
  disabled: false,
  btnType: 'default',
}
