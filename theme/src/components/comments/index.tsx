// import React, {FunctionComponent} from "react";
// import { Disqus, CommentCount } from 'gatsby-plugin-disqus'

/**
 * Placeholder which is attached under every post. Can be shadowed to
 * quickly integrate comments (like commento, Disqus, ...).
 */


 //const Comments: FunctionComponent = () => <></> 

// export default Comments;

import { Helmet } from "react-helmet";
import React from "react"

export default class Comments extends React.Component {

    render() {
        return (
            <React.Fragment>
                <div id="commento"/>
                <Helmet>
                    <script 
                        defer 
                        src="https://cdn.commento.io/js/commento.js"
                        />
                </Helmet>
            </React.Fragment>
        );
    }
}
