import React from 'react'
import { Link } from 'react-router-dom'
  export default function LeftPanel() {
  return (
    <>
        <div className="Left_panel shadow border-right">
				<ul>
					<Link to='/' style={{textDecoration: "none"}}><li className="tab"><i className="fa-solid fa-house-user mx-3"></i>Home</li></Link>
					<Link to='/check' style={{textDecoration: "none"}}><li className="tab"><i className="fa-solid fa-square-check mx-3"></i>Score</li></Link>
				</ul>
			</div>
    </>
  )
}