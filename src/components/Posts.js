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

    componentDidMount() {
        this.updatePosts();
    }

    updatePosts(){
        this.InstaService.getAllPosts()
            .then(this.onPostLoaded)
            .catch(this.onError);
    }

    onPostLoaded = (posts) => {
        //this.state.posts = posts; ochen rasprostranennaya oshibka
        // nelzya tak menyat states. nado tak:
        this.setState({
            posts,
            error: false
        })
    }

    onError = (err) => {
        this.setState({
            error: true
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

