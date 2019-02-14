import React from 'react';
import 'isomorphic-fetch';
export default class App extends React.Component{
    static async getInitialProps({query}){
        const res = await fetch('https://api.pokemontcg.io/v1/cards/' + query.id)
        const data = await res.json()
        return data
    }
    render(){
        return(
            <div>card detail</div>
        )
    }
}