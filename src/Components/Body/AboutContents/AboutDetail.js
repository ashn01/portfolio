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
                        <img src={process.env.PUBLIC_URL + "/profile.png"} alt="Portrait" onError={(e)=>{e.target.onerror = null; e.target.src=process.env.PUBLIC_URL + "/empty.png"}}/>
                    </div>
                    <div className="btnParent">
                        <div className="btns" onClick={()=>{window.location.href=`mailto:ykim185@myseneca.ca`}}>
                            <p>
                                Get in Touch!
                            </p>
                        </div>
                    </div>

                </div>
                <div className="aboutDetailRight">
                    <div>
                        <div className="title">
                            I am a Software Developer
                        </div>
                        <div className="description">
                            <p>
                                I am a Junior developer who recently graduated from Seneca college with an advanced diploma in Computer Programming and Analysis, where I showed my passion and interest in computer programming.
                            </p>
                            <p>
                                I worked as an automation developer co-op for a year at Caseware International, where I grasped sense of teamwork, agile methodologies, and time management. I am currently looking for Software developer position, where I can contribute to and show potential. 
                            </p>
                            <p>
                                Thank you for visiting Youngmin's portfolio!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}