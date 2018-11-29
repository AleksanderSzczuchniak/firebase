import React from 'react'
import Auth from './Auth'
import Chat from './Chat/Chat';

const App = (props) => (
  <div>
    <Auth>
      <Chat />
    </Auth>
  </div>
)

export default App