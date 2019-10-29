import React, {Component} from 'react';
import Post from "./Post";

export default class Posts extends Component {
    render() {
        return(
            <div className="left">
                <Post  src=".src/components/cat.png" alt=" cat siam"/>
                <Post src=".src/components/dog.png" alt="jack russel"/>
            </div>
        )
    }

}