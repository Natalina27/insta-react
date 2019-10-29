import React, {Component} from 'react';
import Post from "./Post";

export default class Posts extends Component {
    render() {
        return(
            <div className="left">
                <Post  src="./cat.png" alt=" cat siam"/>
                <Post src="./dog.png" alt="jack russel"/>
            </div>
        )
    }

}