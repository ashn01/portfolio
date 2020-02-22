import React from 'react'

import '../../../css/About.css'

export default class AboutDetail extends React.PureComponent
{
    render()
    {
        return (
            <div className="aboutAdditionalInfo">
                <div className="aboutInfoGrid">
                    <div className="aboutInfoGridCell">
                        <div className="bar"/>
                        <div className="aboutSummaryTitles">
                            Personality
                        </div>
                        <div className="aboutSummaryDescription">
                            Team player<br/>
                            Responsible<br/>
                            Self-starter<br/>
                            Flexible<br/>
                            Eager<br/>
                            Adaptable<br/>
                        </div>
                    </div>
                    <div className="aboutInfoGridCell">
                        <div className="bar"/>
                        <div className="aboutSummaryTitles">
                                Experience
                        </div>
                        <div className="aboutSummaryDescription">
                            1 year - Software developer<br/>
                            1 year - Automation developer
                        </div>
                    </div>
                    <div className="aboutInfoGridCell">
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
        )
    }
}