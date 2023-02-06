import React from 'react';
import './Background.css'
import { useLocation } from 'react-router-dom';

const Background = ( { children } )=> {
    const pathInit = useLocation().pathname === '/'

    return(
        <div class="container">
            <div class= { ( !pathInit? "titleSmall " : "" ) + "title"}>Rick<span>and</span>Morty</div>
            <div class={ ( !pathInit? "titleSmall " : "" ) + "title middle"}>Rick<span>and</span>Morty</div>
            <div class={( !pathInit? "titleSmall " : "" ) + "title bottom" }>Rick<span>and</span>Morty</div>
            {children}
            <div class="portal"></div>
        </div>
    )
}

export default Background