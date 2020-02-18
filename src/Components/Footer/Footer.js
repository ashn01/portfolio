import React from 'react'


import '../../css/Footer.css'

export default class Footer extends React.PureComponent
{

    render()
    {
        return (
        <div className="footer">
            <div className="copyright">
                COPYRIGHT 2020 YOUNGMIN KIM. ALL RIGHTS RESERVED.
            </div>
            <div className="footerLink">
                <a href="https://www.linkedin.com/in/youngmin-kim-429b88140" target="_blank" rel="noopener noreferrer">
                    <div className="footerLinkedin"/>
                </a>
                <a href="https://www.linkedin.com/in/youngmin-kim-429b88140" target="_blank" rel="noopener noreferrer">            
                    <div className="footerGithub"/>
                </a>
                
            </div>
        </div>
        )
    }
}