import React from 'react'
import { RouteHandler, Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import { config } from 'config'
import './style.css'
import '../../static/fonts/fontawesome/style.css'

class SiteLinks extends React.Component {
    render () {

      return (
        <div className="blog-links">
          <ul>
            {config.siteBitbucketUrl && (
              <li>
                <a href={config.siteBitbucketUrl}>
                  <i className="fa fa-bitbucket" />
                </a>
              </li>
            )}
            {config.siteGithubUrl && (
              <li>
                <a href={config.siteGithubUrl}>
                  <i className="fa fa-github-alt" />
                </a>
              </li>
            )}
          </ul>
          <ul>
            {config.siteEmailUrl && (
              <li>
                <a href={config.siteEmailUrl}>
                  <i className="fa fa-envelope-o" />
                </a>
              </li>
            )}
            {config.siteTelegramUrl && (
              <li>
                <a href={config.siteTelegramUrl}>
                  <i className="fa fa-paper-plane" />
                </a>
              </li>
                )}
          </ul>
          <ul>
            {config.siteRssUrl && (
              <li>
                <a href={config.siteRssUrl}><i className="fa fa-rss" /></a>
              </li>
            )}
          </ul>
        </div>
      )
  }
}

export default SiteLinks
