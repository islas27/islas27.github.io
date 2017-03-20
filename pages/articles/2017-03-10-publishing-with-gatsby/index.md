---
title: "Publishing a SG blog with Gatsby"
date: "2017-03-10T20:03:00.284Z"
layout: post
path: "/publishing-with-gatsby/"
category: "Development"
description: "Here I'll talk about using Gatsby to actually publish this blog"
author: "Jonathan Islas"
tags: "GatsbyJS,Development,Review,Beta"
---

My oh my! I've finally got back to writing in this blog...

And to celebrate, I'll be writing about using Gatsby. That's right, this blog is published by using the SSG Gatsby.

To start off, first I'll point you to the official repo: [Gatsby @ Github](https://github.com/gatsbyjs/gatsby)

And now, I'll say the most important bits about it:

> Gatsby is a static site generator based on React, and as such, to develop more complex parts and design your pages, you need to write React Components, make them interact or just modify the ones provided by a `starter`. One of the coolest features it has is to be able to hot reload your content when you're writing a blog post for example. Save the file, and it automagically appears in the browser.

Well now, it sounds like all happiness and unicorns:
- No need for a database, all content is stored in text files
- No need for a big processor or something akin, everything is static
- Secure, as there are no 'moving parts' (XSS, SQL Injection, etc.)
- And if you're using Github pages, its totally free to host (albeit having a 'github.io' ending)

Well, I've bumped into a couple of issues along the way which made cringe, but for now I'll let them pass:
- No comments, or release your control over them: As this is a static site, there's no way to save comments, to interact directly with your audience. Options available are using a service like [disqus](disqus.com), but forgo the control over them (and the privacy of it). Or manage your own comments service.
- And as of now, not very clear documentation. Of course, this is expected. Gatsby has not reached yet primetime (Still on the road to v1) and it even discloses it will possibly break it's current API. Use it at your own risk.

Well, after coming into contact with it, I can say I like it a bit. As a web developer I like it is quite open to extension and improvements. The usage of React has helped me learn a bit about it even. But I do miss some features found in more clunky options like Wordpress.

The next steps for me (asides from publishing stuff more often) is to fix the contact me page, and I'll surrender for now. I plan to add comments using Disqus. Also, I'll probably publish how I made this blog (a very small guide).

Stay tuned!
