import React from 'react'
import './Portfolio.css'
import mywork_data from '../../assets/mywork_data'
import arrow_right from '../../assets/arrow-right-svgrepo-com.svg'
const Portfolio = (props) => {
    return (
        <div id='portfolio' className='portfolio'>
            <div className="portfolio-title">
                <h1>My Latest Work</h1>
            </div>
            <div className="mywork-container">
                {mywork_data.map((work,index)=>{
                    return <img key={index} src={work.w_image} alt="" className='my-work'/>
                })}
            </div>
            <div className="mywork-showmore">
                <p>Show More</p>
                <img src={arrow_right} alt="" className='more'/>
            </div>
        </div>
    )
}

export default Portfolio
