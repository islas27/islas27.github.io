import React from 'react'
import { Link } from 'react-router'
import { config } from 'config'

import './style.css'

class MailMe extends React.Component {
    render () {
      let post = this.props.post
      let replyLink = config.siteEmailUrl + '?subject=Reply: ' + post.title
      let author = post.author || config.siteAuthor
      let subject = "A blog post from '" + author + "' @ '" + config.siteTitle + "'"
      let body = "Hi,I found this blog post and thought you might like it: " + post.title + " @ https://islas27.github.io" + post.path
      let shareLink = "mailto:?subject=" + subject + "&body=" + body
      return (<p>
        <a href={replyLink}>Mail me</a> to reply to this topic! Or <a href={shareLink}>share it</a> with a friend.
        </p>)
    }
}

MailMe.propTypes = {
    post: React.PropTypes.object.isRequired
}

export default MailMe
