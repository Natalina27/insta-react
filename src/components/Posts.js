import React, {Component} from 'react';
import InstaService from '../services/instaService';
//import Post from "./Post";
// import cat from "../cat.png";
// import dog from "../dog.png";


export default class Posts extends Component {
    InstaService = new InstaService();
    state = {
        posts: [],
        error: false
    }
    updatePosts(){
        this.InstaService.getAllPosts()
            .then()
            .catch();
    }

    onPostLoaded = (posts) => {
        //this.state.posts = posts; ochen rasprostranennaya oshibka
        // nelzya tak menyat states. nado tak:
        this.setState({
            posts,
            error: false
        })
    }
    render() {
        return(
            <div className="left">
                {/*<Post  src={cat} alt="cat siam" />*/}
                {/*<Post src ={dog} alt="jack russel" />*/}
            </div>
        )
    }
}

