import React from 'react'

const Info = () => {
  return (
    <div className="about_info grid">
        <div className="about_box">
          <i className="bx bx-award about_icon"></i>
            <h3 className='about_title'>
                Experience
            </h3>
            <span className="about_subtitle">
                1.5 Years of Developing
            </span>
        </div>

        <div className="about_box">
          <i className="bx bx-briefcase-alt about_icon"></i>
            <h3 className='about_title'>
                Completed
            </h3>
            <span className="about_subtitle">
                Blog site in MERN
            </span><br/>
            <span className="about_subtitle">
                e-Commerce in React
            </span>
        </div>

    </div>
  )
}

export default Info