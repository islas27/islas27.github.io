import React from 'react'
import Helmet from 'react-helmet'
import { prefixLink } from 'gatsby-helpers'

const BUILD_TIME = new Date().getTime()

module.exports = React.createClass({
    displayName: 'HTML',
    propTypes: {
        body: React.PropTypes.string,
    },
    render() {
        const {body, route} = this.props
        const {title} = Helmet.rewind()
        const font = <link href='https://fonts.googleapis.com/css?family=Roboto:400,400italic,500,700&subset=latin,cyrillic' rel='stylesheet' type='text/css' />
        let css
        if (process.env.NODE_ENV === 'production') {
            css = <style dangerouslySetInnerHTML={ {    __html: require('!raw!./public/styles.css')} } />
        }
        return (
            <html lang="en">
            <head>
              <meta charSet="utf-8" />
              <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
              <meta name="viewport" content="width=device-width, initial-scale=1.0 maximum-scale=5.0" />
              <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png"/>
              <link rel="icon" type="image/png" href="/favicon/favicon-32x32.png" sizes="32x32"/>
              <link rel="icon" type="image/png" href="/favicon/favicon-16x16.png" sizes="16x16"/>
              <link rel="manifest" href="/favicon/manifest.json"/>
              <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#49a010"/>
              <link rel="shortcut icon" href="/favicon/favicon.ico"/>
              <meta name="msapplication-config" content="/favicon/browserconfig.xml"/>
              <meta name="theme-color" content="#ffffff"/>
              { title.toComponent() }
              { font }
              { css }
            </head>
            <body>
              <div id="react-mount" dangerouslySetInnerHTML={ {    __html: this.props.body} } />
              <script src={ prefixLink(`/bundle.js?t=${BUILD_TIME}`) } />
            </body>
            </html>
        )
    }
})
