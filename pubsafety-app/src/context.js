const Route       = ReactRouterDOM.Route;
const Link        = ReactRouterDOM.Link;
const HashRouter  = ReactRouterDOM.HashRouter;
const UserContext = React.createContext(null);
//import React, { useRef, useEffect, useState } from 'react';



function Card(props){

    return(
        <div className='card text-center'>
            <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                <img src={props.cardimage} width="200" align="center" className="img-fluid"/>
            </div>
            <div className="card-header">{props.header}</div>
            <div className="card-body">
                {props.body}
            </div>
        </div>
    );
}


function CardWide(props){
    return(
        <div className='card text-center'>
                 <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                <img src={props.cardimage} width="400" align="center" className="img-fluid"/>

                
            </div>
            <div className="card-header">{props.header}</div>

            <div className="card-body">
                {props.title && (<h5 className="card-title">{props.title}</h5>)}
                {props.text && (<p className="card-text">{props.text}</p>)}
                {props.body}
                {props.status && (<div id='createStatus'>{props.status}</div>)}
            </div>
        </div>
    );
}

