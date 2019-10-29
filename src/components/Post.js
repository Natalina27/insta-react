import React, {Component} from 'react';
import User from "./User";
import parrot from "../parrot.png";


export default class Post extends Component{
    render() {
        return(
            <div className="post">
                <User src={parrot}
                      alt="parrot"
                      name="Parrot Smith"
                      min />
                <img src={this.props.src} alt={this.props.alt} />
                <div className="post__name">
                    some account
                </div>
                <div className="post__descr">
                   My Profile. My name is .... I am.... etc etc etc
                </div>
            </div>
        )
    }
}