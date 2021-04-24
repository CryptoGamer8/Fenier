import React from 'react'
import { Helmet } from 'react-helmet'

const TITLE = 'Fenier'

class Title extends React.PureComponent {
  render () {
    return (
      <div>
        <Helmet>
          <title>{ TITLE }</title>
        </Helmet>
      </div>
    )
  }
}

export default Title