import React from 'react'

import {RESOURCES} from '../../../APIROUTE'

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import '../../../css/animate.css'

export default class Carousel extends React.PureComponent
{
    render()
    {
        return (
            <div className="container carouselContainer">
                
                { this.props.source.length && (
                    <OwlCarousel className="owl-theme" loop margin={20} items={1} autoplay={true} 
                        autoplayHoverPause={true} animateIn="fadeIn" animateOut="fadeOut" mouseDrag={true} touchDrag={true}>
                            {
                                this.props.source.map((v,i)=>{
                                    return (
                                        <img key={i} alt={i} src={RESOURCES+this.props.title+"/"+v.src} 
                                        onError={(e)=>{e.target.onerror = null; e.target.src=process.env.PUBLIC_URL + "/empty.png"}}/>
                                    )
                                })
                            }
                    </OwlCarousel>)
                }
            </div>
        )
    }
}