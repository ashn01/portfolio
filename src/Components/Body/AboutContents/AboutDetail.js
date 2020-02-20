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
                        <div className="aboutBtn" onClick={()=>{window.location.href=`mailto:ykim185@myseneca.ca`}}>
                            <p>
                                Get in Touch!
                            </p>
                        </div>
                    </div>

                </div>
                <div className="aboutDetailRight">
                    <div>
                        <div className="title">
                            Hello! I am a Junior Software Developer
                        </div>
                        <div className="description">
                            <p>
                                I'm a Junior developer who recently graduated from Seneca college with an advanced diploma in Computer Programming and Analysis, where I showed my passion and interest in computer programming.
                            </p>
                            <p>
                                I worked as an automation developer co-op for a year at Caseware International, where I grasped sense of teamwork, agile methodologies, and time management. I am currently looking for Software developer position, where I can contribute to and show potential. 
                            </p>
                            <p>
                                Thank you for visiting Youngmin's portfolio!
                            </p>
                        </div>
                        <div className="aboutInfo">
                            <div>
                                <div className="bar"/>
                                <div className="aboutSummaryTitles">
                                    Personality
                                </div>
                                <div className="aboutSummaryDescription">
                                    Team player<br/>

                                </div>
                            </div>
                            <div>
                                <div className="bar"/>
                                <div className="aboutSummaryTitles">
                                    Experience
                                </div>
                                <div className="aboutSummaryDescription">
                                    Software developer<br/>
                                    Automation developer
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
                                    C/C++, C#, Java, Javascript, ReactJS, NodeJS, AWS, Azure, Relational Database, NoSQL, Parallel Programming with Cuda, Android, Objective-C, Swift, Git, Jira, Jenkins, Agile, Network programming, Windows, MacOS, Linux 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}