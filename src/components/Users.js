import React from 'react';
import User from "./User";
import parrot from "../parrot.png";

export default function Users(){
    return(
        <div className="right">
            <User src={parrot}
                  alt="parrot"
                  name="Parrot Smith" />
             <div className="users__block">
                 <User src={parrot}
                       alt="parrot"
                       name="Parrot Smith"
                       min />
                 <User src={parrot}
                       alt="parrot"
                       name="Parrot Smith"
                       min />
                 <User src={parrot}
                       alt="parrot"
                       name="Parrot Smith"
                       min />
                 <User src={parrot}
                       alt="parrot"
                       name="Parrot Smith"
                       min />

             </div>
        </div>
    )
}