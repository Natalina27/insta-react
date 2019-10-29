import React, {Component} from 'react';
import Post from "./Post";

export default class Posts extends Component {
    render() {
        return(
            <div className="left">
                <Post  src="src/cat.png" alt="cat siam" />
                <Post src="src/dog.png" alt="jack russel" />
            </div>
        )
    }

}