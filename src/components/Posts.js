import React, {Component} from 'react';
import Post from "./Post";
import cat from "../cat.png";
import dog from "../dog.png";


export default class Posts extends Component {
    render() {
        return(
            <div className="left">
                <Post  src={cat} alt="cat siam" />
                <Post src ={dog} alt="jack russel" />
            </div>
        )
    }

}