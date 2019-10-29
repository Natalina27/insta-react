import React, {Component} from 'react';
import Post from "./Post";

export default class Posts extends Component {
    render() {
        return(
            <div className="left">
                <Post  src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn0.wideopenpets.com%2Fwp-content%2Fuploads%2F2016%2F05%2Fbigstock-125688836-770x405.jpg&imgrefurl=https%3A%2F%2Fwww.wideopenpets.com%2Fmuch-know-siamese-cat-coloration%2F&docid=rALJhbEbkRREiM&tbnid=JjrotQtwkx5X4M%3A&vet=12ahUKEwiDq--r9sHlAhXi_CoKHWRzCOs4yAEQMyg5MDl6BAgBEEI..i&w=770&h=405&safe=active&bih=715&biw=1440&q=siamese&ved=2ahUKEwiDq--r9sHlAhXi_CoKHWRzCOs4yAEQMyg5MDl6BAgBEEI&iact=mrc&uact=8" alt=" cat siam"/>
                <Post src="https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwiC2pqF-MHlAhWQDuwKHaLFD3wQjRx6BAgBEAQ&url=https%3A%2F%2Finstagram-dm.com%2Fhashtag%2Fgliamicidiares&psig=AOvVaw3YO7TqStRK1xJy10CIP7m-&ust=1572454400914348" alt="jack russel"/>
            </div>
        )
    }

}