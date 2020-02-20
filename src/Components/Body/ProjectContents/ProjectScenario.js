import React from 'react'


export default class ProjectScenario extends React.PureComponent
{
    render()
    {
        return (
            <div className="container scenarioContainer">
                {
                    this.props.scenario.length &&
                    this.props.scenario.map((v,i)=>{
                        return (
                            <div key={i} className="projectScenarioItem">
                                <div className="ScenarioItemImg">
                                    <img key={i} alt={i} src={process.env.PUBLIC_URL + "/images/"+this.props.id+"/" +v.src} 
                                        onError={(e)=>{e.target.onerror = null; e.target.src=process.env.PUBLIC_URL + "/empty.png"}}/>
                                </div>
                                <div className="ScenarioItemDesc">
                                    <p>{v.description}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}