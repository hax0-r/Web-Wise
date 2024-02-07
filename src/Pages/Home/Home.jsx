import React from 'react'
import videoBG from '../../assets/videoBg.mp4'

export default function Home() {
  return (
    <>
      <div className="home">
        <div className="page1">
          <div className="container">
            <video src={videoBG} muted loop autoPlay>
            </video>
          </div>
        </div>
      </div>
    </>
  )
}
