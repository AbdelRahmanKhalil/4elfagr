import '../App.css';
import './HeroSection.css';
import React, { Component } from 'react'


export default class HeroSection extends Component {
    render() {
        
        let background;
        if (this.props.image != null) {
            const img_path = process.env.PUBLIC_URL + this.props.image
            console.log(img_path)
            background = <img src={img_path} alt=""/>
        } else if (this.props.video != null) {
            const vid_path = process.env.PUBLIC_URL + this.props.video
            background = <video src={vid_path} autoPlay loop muted />
        } else {
            background = <img src="/img-0.jpg" alt=""/>
        }
        console.log(background)
        return (
            <div className='hero-container'>
                {background}
                

                <h1 className="entry-title">{this.props.title}</h1>
                
                <p>{this.props.paragraph}</p>
                
            </div>
        )
    }
}

