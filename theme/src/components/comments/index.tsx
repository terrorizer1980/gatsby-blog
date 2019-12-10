import React, {FunctionComponent} from "react";

/**
 * Placeholder which is attached under every post. Can be shadowed to
 * quickly integrate comments (like commento, Disqus, ...).
 */
const Comments: FunctionComponent = () => <>
    shortname="lewardslope"
    identifier={post.id}
    title={post.title}
    url={post.url}
    category_id={post.category_id}</>;

export default Comments;

