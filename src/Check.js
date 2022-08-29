import React from 'react'

export default function Check(props) {
  return (
    <div>
        <div style={{textAlign: "center", width: "100vh", position: "relative", left: "30%", top: "30vh"}}>{props.checkScore()}</div>
    </div>
  )
}
