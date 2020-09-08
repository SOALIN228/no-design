import React from 'react'
import '../src/styles/index.scss'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
}

export const decorators = [(Story) => <div style={{ margin: '3em' }}><Story/></div>]
