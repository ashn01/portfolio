import React from 'react'

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import '../../../css/animate.css'

export default class Carousel extends React.PureComponent
{
    render()
    {
        return (
            <div className="carouselContainer">
                
                { this.props.project.imgsrc.length && (
                    <OwlCarousel className="owl-theme" loop margin={20} items={1} autoplay={true} 
                        autoplayHoverPause={true} animateIn="fadeIn" animateOut="fadeOut" mouseDrag={true} touchDrag={true}>
                            {
                                this.props.project.imgsrc.map((v,i)=>{
                                    return (
                                        <img key={i} alt={i} src={process.env.PUBLIC_URL + "/images/" +v} 
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