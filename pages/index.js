import React from 'react';
import 'isomorphic-fetch';
import Link from 'next/link';
export default class App extends React.Component {
    static async getInitialProps () {
        const res = await fetch('https://api.pokemontcg.io/v1/cards?pages=1&pageSize=10');
        const data = await res.json();
        return data;
    }
    render(){
        return (
            <div>
            {this.props.cards.map((card, i) => (
                <div key={i} style={{width: 200, float: 'left'}}>
                    <div  style={{margin: 10}}>
                        <Link href={`/cards?id=${card.id}`}>
                            <img src={card.imageUrl} style={{width: 160}}/>
                        </Link>
                    </div>
                </div>
            ))}
            </div>
            
        )
    }
}