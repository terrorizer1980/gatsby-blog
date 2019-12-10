import React, {FunctionComponent} from "react";
import { Disqus, CommentCount } from 'gatsby-plugin-disqus'

/**
 * Placeholder which is attached under every post. Can be shadowed to
 * quickly integrate comments (like commento, Disqus, ...).
 */
const Comments: FunctionComponent = () => {
  let disqusConfig = {
    url: `${config.siteUrl+location.pathname}`,
    identifier: post.id,
    title: post.title,
  }
  return (
    <>
      <h1>{post.title}</h1>
      <CommentCount config={disqusConfig} placeholder={'...'} />
      /* Post Contents */
      <Disqus config={disqusConfig} />
    </>
  )
}
// const Comments: FunctionComponent = () => <></> 

export default Comments;

