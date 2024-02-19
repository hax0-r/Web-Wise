import React from 'react'
import videoBG from '../../assets/videoBg.mp4'
import pg3 from '../../assets/Home/pg3.png'
import pg4 from '../../assets/Home/pg4.png'
import pg5 from '../../assets/Home/pg5.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper/modules';

export default function Home() {
  return (
    <>
      <div className="home">
        <div className="page1">
          <div className="container">
            <video src={videoBG} muted loop autoPlay />
            <div className="inside">
              <h1>Crypto trading <span> with bots and smart seals</span> </h1>
              <button>Sign up now
                <svg width="69" height="52" viewBox="0 0 69 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle opacity="0.4" cx="43.6328" cy="25.9141" r="24.9844" transform="rotate(-90 43.6328 25.9141)" stroke="white" strokeWidth="0.609375" />
                  <path d="M1.29687 25.9144L49.4769 25.9144M49.4769 25.9144L42.9069 19.3444M49.4769 25.9144L42.9069 32.4844" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
            <div className="bottom">
              <div className="moving">
                <div className="moving-in">
                  <h1>Hello</h1>
                </div>
                <div className="moving-in">
                  <h1>Hello</h1>
                </div>
                <div className="moving-in">
                  <h1>Hello</h1>
                </div>
                <div className="moving-in">
                  <h1>Hello</h1>
                </div>
                <div className="moving-in">
                  <h1>Hello</h1>
                </div>
                <div className="moving-in">
                  <h1>Hello</h1>
                </div>
                <div className="moving-in">
                  <h1>Hello</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="page2">
          <div className="main">
            <div className="numbers">
              <h1>numbers</h1>
              <p>Manage position on </p>
            </div>
            <div className="total">
              <h1>s18.5 B </h1>
              <h5>Total trading <br /> volume</h5>
            </div>
            <div className="cardDiv">
              <div className="card">
                <h1>36M</h1>
                <p>We are online</p>
              </div>
              <div className="twoCard">
                <div className="card">
                  <h1>21.5 K</h1>
                  <p>Traiders <br />
                    in platform</p>
                </div>
                <div className="card">
                  <h1>325 M</h1>
                  <p>Total <br />
                    deals in platform</p>
                </div>
              </div>
            </div>
            <div className="actual">
              <p>Actual statistic <br /> on 19.07.2022</p>
            </div>
          </div>
        </div>
        <div className="page3">
          <div className="main">
            <div className="numbers">
              <h1>benefits</h1>
              <p>Manage positions on </p>
            </div>
            <div className="container">
              <div className="left">
                <img src={pg3} alt="" />
              </div>
              <div className="right">
                <h1>Interface <br /> Builder</h1>
                <div>
                  <h5>Customize <br />
                    your look</h5>
                  <p>Remove the excess, add what you need. <br /> Trade at your convenience.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="page4">
          <div className="main">
            <div className="container">
              <div className="left">
                <h1>MultiChart</h1>
                <h4><span>Add any trading pairs</span> from different exchanges and analyzecryptocurrency assets on one screen</h4>
              </div>
              <div className="right">
                <img src={pg4} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="page5">
          <div className="main">
            <div className="container">
              <div className="left">
                <img src={pg5} alt="" />
              </div>
              <div className="right">
                <h1>Portfolio
                  <br />Statistics</h1>
                <div>
                  <h5>Your assets on all connected
                    exchanges are collected in one place</h5>
                  <p>Visual statistics of trade. <br />
                    Uploading reports</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="page7">
          <div className="main">
            <div className="head">
              <h1>features</h1>
              <p>Manage positions on </p>
            </div>
            <div className="container">
              <div className="left">
                <ul>
                  <li> Stop Loss and Take Profit</li>
                  <li> Trailing</li>
                  <li> Timeout and Candle Stop Loss</li>
                  <li> Pending orders</li>
                  <li> Trading on the chart channel bot</li>
                  <li> Ladder and averaging</li>
                  <li> Automatic breakeven</li>
                  <li> Booster</li>
                  <li> Panic Sell</li>
                </ul>
              </div>
              <div className="right">
                <Swiper
                  effect={'cards'}
                  grabCursor={true}
                  modules={[EffectCards]}
                  className="mySwiper"
                >
                  <SwiperSlide>Slide 1</SwiperSlide>
                  <SwiperSlide>Slide 2</SwiperSlide>
                  <SwiperSlide>Slide 3</SwiperSlide>
                  <SwiperSlide>Slide 4</SwiperSlide>
                  <SwiperSlide>Slide 5</SwiperSlide>
                  <SwiperSlide>Slide 6</SwiperSlide>
                  <SwiperSlide>Slide 7</SwiperSlide>
                  <SwiperSlide>Slide 8</SwiperSlide>
                  <SwiperSlide>Slide 9</SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
        <div className="page8">
          <div className="main">
            <h1>Trade anywhere</h1>
            <p>The service is fully adapted to work through a browser on your smartphone or tablet</p>
            <div>
              <button>Create an account <svg width="89" height="83" viewBox="0 0 89 83" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle opacity="0.4" cx="47.5" cy="41.5" r="41" transform="rotate(-90 47.5 41.5)" stroke="white" />
                <path d="M1 41.5L56 41.5M56 41.5L48.5 34M56 41.5L48.5 49" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
