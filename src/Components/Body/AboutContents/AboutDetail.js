import React from 'react'

import '../../../css/About.css'

export default class AboutDetail extends React.PureComponent
{
    render()
    {
        return (
            <div className="aboutDetail">
                <div className="aboutDetailLeft">
                    <div>
                        <img src={process.env.PUBLIC_URL + "/portrait.png"} alt="Portrait" onError={(e)=>{e.target.onerror = null; e.target.src=process.env.PUBLIC_URL + "/empty.png"}}/>
                    </div>
                    <div>
                        <div className="aboutBtn" onClick={()=>{console.log("do Something")}}>
                            <p>
                                Get in Touch!
                            </p>
                        </div>
                    </div>

                </div>
                <div className="aboutDetailRight">
                    <div>
                        <div className="title">
                            Hello I am something something
                        </div>
                        <div className="description">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </div>
                        <div className="aboutInfo">
                            <div>
                                <div className="bar"/>
                                <div className="aboutSummaryTitles">
                                    Personality
                                </div>
                                <div className="aboutSummaryDescription">
                                    ppp
                                </div>
                            </div>
                            <div>
                                <div className="bar"/>
                                <div className="aboutSummaryTitles">
                                    Experience
                                </div>
                                <div className="aboutSummaryDescription">
                                    abc
                                </div>
                            </div>
                            <div>
                                <div className="bar"/>
                                <div className="aboutSummaryTitles">
                                    Period
                                </div>
                                <div className="aboutSummaryDescription">
                                    temp
                                </div>
                            </div>
                            <div>
                                <div className="bar"/>
                                <div className="aboutSummaryTitles">
                                    Skillset
                                </div>
                                <div className="aboutSummaryDescription">
                                    temp
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}