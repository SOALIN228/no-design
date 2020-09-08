import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { Button, ButtonProps } from '../components/Button/button'

export default {
  title: 'Example/Button',
  component: Button,
} as Meta

const Template: Story<ButtonProps> = (args) => <Button {...args}>Button</Button>

export const base = Template.bind({})
base.args = {}
base.storyName = '默认 Button'

const typeTemplate: Story<ButtonProps> = (args) => <>
  <Button btnType={'primary'}>Primary</Button>
  <Button btnType={'danger'}>Danger</Button>
  <Button disabled>Disabled</Button>
  <Button btnType="link" href="https://www.baidu.com">Link</Button>
</>

export const type = typeTemplate.bind({})
type.storyName = '不同状态的 Button'

const sizeTemplate: Story<ButtonProps> = (args) => <>
  <Button btnType={'primary'} size={'lg'}>Large</Button>
  <Button btnType={'primary'}>Default</Button>
  <Button btnType={'primary'} size={'sm'}>Small</Button>
</>

export const size = sizeTemplate.bind({})
size.storyName = '不同尺寸的 Button'
