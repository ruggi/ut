import * as React from 'react'
import { Scene, Storyboard } from 'utopia-api'
import { App } from '/src/app.js'
import { Playground } from '/src/playground.js'
import uuid from 'react-uuid'

export var storyboard = (
  <Storyboard data-uid='0cd'>
    <Scene
      style={{
        width: 700,
        height: 759,
        position: 'absolute',
        left: 151,
        top: 144,
        borderRadius: '0px',
      }}
      data-label='Playground'
      data-uid='b58'
    >
      <Playground style={{}} data-uid='ab5' />
    </Scene>
    <Scene
      style={{
        width: 744,
        height: 1133,
        position: 'absolute',
        left: 1036,
        top: 128,
      }}
      data-label='My App'
      data-uid='81d'
    >
      <App style={{}} data-uid='b91' />
    </Scene>
    <div
      style={{
        backgroundColor: '#aaaaaa33',
        position: 'absolute',
        left: 509,
        top: 35,
        width: 'max-content',
        height: 'max-content',
      }}
      data-uid='05f'
    >
      {uuid()}
    </div>
  </Storyboard>
)
