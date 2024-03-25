import React from 'react'
import videoBG from '../../assets/videoBg.mp4'
import pg3 from '../../assets/Home/pg3.png'
import pg4 from '../../assets/Home/pg4.png'
import pg5 from '../../assets/Home/pg5.png'
import pg9 from '../../assets/Home/pg9.png'
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
              <h1>Top Ranked, <span>Brand builders in Pakistan</span> </h1>
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
        <div className="Services">
          <div className="main">
            <div className="head">
              <h1>Demanded Services</h1>
              <p>Our Services Used</p>
            </div>
            <div className="box">
              <div className="right">
                <div className="card">
                  <h2>API Keys</h2>
                  <svg width="86" height="86" viewBox="0 0 86 86" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M59.4348 59.4348L75.9061 75.9061M26.5652 17.4348L30.2174 21.087V35.6957M30.2174 35.6957C31.3009 35.6957 32.3601 36.0169 33.261 36.6189C34.1619 37.2209 34.864 38.0765 35.2786 39.0775C35.6933 40.0785 35.8018 41.18 35.5904 42.2427C35.379 43.3054 34.8573 44.2815 34.0911 45.0476C33.325 45.8138 32.3488 46.3355 31.2861 46.5469C30.2235 46.7583 29.122 46.6498 28.1209 46.2352C27.1199 45.8205 26.2643 45.1184 25.6624 44.2175C25.0604 43.3166 24.7391 42.2574 24.7391 41.1739C24.7391 39.721 25.3163 38.3276 26.3437 37.3002C27.371 36.2728 28.7645 35.6957 30.2174 35.6957ZM44.8261 32.0435V44.8261L48.4783 48.4783M24.7391 13.7826L21.087 10.1304M19.2609 59.4348L15.6087 55.7826M43 4.65217L39.3478 1M55.7826 55.7826L52.1304 52.1304M15.6087 32.0435V44.8261L26.5652 55.7826H43L50.3043 63.087H53.9565L57.6087 66.7391V70.3913L61.2609 74.0435H64.913L66.7391 75.8696V79.5217L72.2174 85H85V74.0435L57.6087 46.6522V19.2609L46.6522 8.30435M39.3478 13.7826L28.3913 2.82609H19.2609L1 21.087V41.1739L11.9565 52.1304M44.8261 21.087C45.9096 21.087 46.9688 21.4083 47.8697 22.0102C48.7706 22.6122 49.4727 23.4678 49.8873 24.4688C50.302 25.4698 50.4105 26.5713 50.1991 27.634C49.9877 28.6967 49.466 29.6728 48.6998 30.4389C47.9337 31.2051 46.9575 31.7268 45.8948 31.9382C44.8322 32.1496 43.7307 32.0411 42.7296 31.6265C41.7286 31.2118 40.873 30.5097 40.2711 29.6088C39.6691 28.7079 39.3478 27.6487 39.3478 26.5652C39.3478 25.1123 39.925 23.7189 40.9524 22.6915C41.9797 21.6641 43.3732 21.087 44.8261 21.087ZM15.6087 21.087C16.6922 21.087 17.7514 21.4083 18.6523 22.0102C19.5532 22.6122 20.2553 23.4678 20.6699 24.4688C21.0846 25.4698 21.1931 26.5713 20.9817 27.634C20.7703 28.6967 20.2486 29.6728 19.4824 30.4389C18.7163 31.2051 17.7401 31.7268 16.6774 31.9382C15.6148 32.1496 14.5133 32.0411 13.5122 31.6265C12.5112 31.2118 11.6556 30.5097 11.0537 29.6088C10.4517 28.7079 10.1304 27.6487 10.1304 26.5652C10.1304 25.1123 10.7076 23.7189 11.735 22.6915C12.7623 21.6641 14.1558 21.087 15.6087 21.087Z" stroke="url(#paint0_linear_134_757)" strokeWidth="1.5" strokeMiterlimit="10" />
                    <defs>
                      <linearGradient id="paint0_linear_134_757" x1="43" y1="1" x2="43" y2="85" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#5A2FED" />
                        <stop offset="1" stopColor="#C67EFF" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <p>Checking new devices and IP addresses, as well  two-factor authentication
                    allow you to securely protect your account from unauthorized access.</p>
                </div>
                <div className="card">
                  <h2>API Keys</h2>
                  <svg width="124" height="80" viewBox="0 0 124 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M26.0588 22.482C25.4512 19.1423 25.0311 15.7712 24.8003 12.3846C24.7553 11.7764 24.8847 11.168 25.1735 10.6309C25.4624 10.0938 25.8985 9.65028 26.4307 9.35247C37.813 3.8552 50.29 1 62.9302 1C75.5705 1 88.0475 3.8552 99.4298 9.35247C99.962 9.65028 100.398 10.0938 100.687 10.6309C100.976 11.168 101.105 11.7764 101.06 12.3846C100.276 24.2468 97.0637 35.8215 91.6216 46.3909C86.1794 56.9602 78.6239 66.2987 69.4235 73.8274L64.9898 77.4602C64.4128 77.9444 63.6835 78.2099 62.9302 78.2099C62.1769 78.2099 61.4477 77.9444 60.8707 77.4602L56.437 73.8274C50.1721 68.732 44.6546 62.7812 40.0465 56.1497M54.8065 56.4071C57.3127 59.2563 60.0282 61.9144 62.9302 64.3592C77.1164 52.3997 86.4112 35.6426 89.0463 17.276C72.232 10.8312 53.6285 10.8312 36.8142 17.276M48.6279 28.3746V51.2583M40.0465 36.956H48.6279M105.837 36.956V42.6769C105.837 44.1942 105.234 45.6493 104.162 46.7222C103.089 47.7951 101.634 48.3978 100.116 48.3978M123 28.3746V51.2583M114.419 36.956H123M8.5814 28.3746V51.2583M0 36.956H8.5814M25.7442 48.3978C24.2269 48.3978 22.7718 47.7951 21.6989 46.7222C20.626 45.6493 20.0233 44.1942 20.0233 42.6769V36.956C20.0233 35.4387 20.626 33.9835 21.6989 32.9106C22.7718 31.8378 24.2269 31.235 25.7442 31.235C27.2615 31.235 28.7166 31.8378 29.7895 32.9106C30.8624 33.9835 31.4651 35.4387 31.4651 36.956V42.6769C31.4651 44.1942 30.8624 45.6493 29.7895 46.7222C28.7166 47.7951 27.2615 48.3978 25.7442 48.3978Z" stroke="url(#paint0_linear_134_769)" strokeWidth="2" strokeMiterlimit="10" />
                    <defs>
                      <linearGradient id="paint0_linear_134_769" x1="61.5" y1="1" x2="61.5" y2="78.2099" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#5A2FED" />
                        <stop offset="1" stopColor="#C67EFF" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <p>Checking new devices and IP addresses, as well  two-factor authentication
                    allow you to securely protect your account from unauthorized access.</p>
                </div>
                <div className="card">
                  <h2>API Keys</h2>
                  <svg width="84" height="81" viewBox="0 0 84 81" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M69.2552 67.381V79.0952H14.7448V67.381M26.381 26.381V16.619C26.381 12.4766 28.0265 8.50384 30.9557 5.5747C33.8848 2.64556 37.8576 1 42 1C46.1424 1 50.1152 2.64556 53.0443 5.5747C55.9735 8.50384 57.619 12.4766 57.619 16.619V26.381M34.1905 26.381V16.619C34.1905 14.5478 35.0133 12.5614 36.4778 11.0969C37.9424 9.63231 39.9288 8.80952 42 8.80952C44.0712 8.80952 46.0576 9.63231 47.5222 11.0969C48.9867 12.5614 49.8095 14.5478 49.8095 16.619V26.381M51.0395 41.5705L53.7143 38.0952H75.1905M75.1905 38.0952C75.1905 40.2518 76.9387 42 79.0952 42C81.2518 42 83 40.2518 83 38.0952C83 35.9387 81.2518 34.1905 79.0952 34.1905C76.9387 34.1905 75.1905 35.9387 75.1905 38.0952ZM51.0395 58.0486L53.7143 61.5238H75.1905M75.1905 61.5238C75.1905 63.6804 76.9387 65.4286 79.0952 65.4286C81.2518 65.4286 83 63.6804 83 61.5238C83 59.3673 81.2518 57.6191 79.0952 57.6191C76.9387 57.6191 75.1905 59.3673 75.1905 61.5238ZM32.9605 41.5705L30.2857 38.0952H8.80952M8.80952 38.0952C8.80952 40.2518 7.0613 42 4.90476 42C2.74822 42 1 40.2518 1 38.0952C1 35.9387 2.74822 34.1905 4.90476 34.1905C7.0613 34.1905 8.80952 35.9387 8.80952 38.0952ZM32.9605 58.0486L30.2857 61.5238H8.80952M8.80952 61.5238C8.80952 63.6804 7.0613 65.4286 4.90476 65.4286C2.74822 65.4286 1 63.6804 1 61.5238C1 59.3673 2.74822 57.6191 4.90476 57.6191C7.0613 57.6191 8.80952 59.3673 8.80952 61.5238ZM14.7448 32.2381V26.381H69.2552V32.2381M69.2552 44.0695V55.6667M14.7448 44.0695V55.6667M49.8095 49.8095C49.8144 48.4375 49.4576 47.0884 48.7753 45.8981C48.093 44.7078 47.1091 43.7183 45.9227 43.0291C44.7363 42.34 43.3893 41.9755 42.0173 41.9725C40.6452 41.9695 39.2966 42.328 38.1072 43.0119C36.9178 43.6958 35.9296 44.681 35.242 45.8683C34.5544 47.0556 34.1918 48.4031 34.1905 49.7751C34.1893 51.1471 34.5496 52.4952 35.2351 53.6837C35.9205 54.8723 36.907 55.8592 38.0952 56.5452V69.3333H45.9048V56.5452C47.0879 55.8621 48.0712 54.8806 48.7564 53.6987C49.4416 52.5167 49.8047 51.1757 49.8095 49.8095Z" stroke="url(#paint0_linear_134_768)" strokeWidth="2" strokeMiterlimit="10" />
                    <defs>
                      <linearGradient id="paint0_linear_134_768" x1="42" y1="1" x2="42" y2="79.0952" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#5A2FED" />
                        <stop offset="1" stopColor="#C67EFF" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <p>Checking new devices and IP addresses, as well  two-factor authentication
                    allow you to securely protect your account from unauthorized access.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="page2">
          <div className="main">
            <div className="numbers">
              <h1>Registered Company</h1>
              <p>Since 2019</p>
            </div>
            <div className="pg2Container">
              <div className="total">
                {/* <h1>s18.5 B </h1> */}
                <h5><b>EZ Brand Builder leading</b> <br />thousand of bussniess es <br /> worldwide since last year</h5>
              </div>
              <div className="cardDiv">
                <div className="card">
                  <h1>3000+</h1>
                  <p>Happy Client</p>
                </div>
                <div className="twoCard">
                  <div className="card">
                    <h1>21.5 K</h1>
                    <p>Project <br />Completetd</p>
                  </div>
                  <div className="card">
                    <h1>50+
                    </h1>
                    <p>Experience<br />
                      Professionals</p>
                  </div>
                </div>
              </div>
              <div className="actual">
                <p>Actual statistic <br /> on 19.07.2022</p>
              </div>
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
            <h1>Who we are</h1>
            <p>We are prepared to offer our client Services of the highest Quality and give them in-depth advice about their brands. <br />  <br />
              <b>EZ Brand Builders</b> has established a reputation among its client in the it industry for professional and commitment fulfillment.</p>
            <div>
              <button>Create an account <svg width="89" height="83" viewBox="0 0 89 83" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle opacity="0.4" cx="47.5" cy="41.5" r="41" transform="rotate(-90 47.5 41.5)" stroke="white" />
                <path d="M1 41.5L56 41.5M56 41.5L48.5 34M56 41.5L48.5 49" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="page9">
          <div className="main">
            <div className="head">
              <h1>high security <br />platform</h1>
              <p>API, 2FA and Technology</p>
            </div>
            <div className="box">
              <img src={pg9} alt="" />
              <div className="right">
                <div className="card">
                  <h2>API Keys</h2>
                  <svg width="86" height="86" viewBox="0 0 86 86" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M59.4348 59.4348L75.9061 75.9061M26.5652 17.4348L30.2174 21.087V35.6957M30.2174 35.6957C31.3009 35.6957 32.3601 36.0169 33.261 36.6189C34.1619 37.2209 34.864 38.0765 35.2786 39.0775C35.6933 40.0785 35.8018 41.18 35.5904 42.2427C35.379 43.3054 34.8573 44.2815 34.0911 45.0476C33.325 45.8138 32.3488 46.3355 31.2861 46.5469C30.2235 46.7583 29.122 46.6498 28.1209 46.2352C27.1199 45.8205 26.2643 45.1184 25.6624 44.2175C25.0604 43.3166 24.7391 42.2574 24.7391 41.1739C24.7391 39.721 25.3163 38.3276 26.3437 37.3002C27.371 36.2728 28.7645 35.6957 30.2174 35.6957ZM44.8261 32.0435V44.8261L48.4783 48.4783M24.7391 13.7826L21.087 10.1304M19.2609 59.4348L15.6087 55.7826M43 4.65217L39.3478 1M55.7826 55.7826L52.1304 52.1304M15.6087 32.0435V44.8261L26.5652 55.7826H43L50.3043 63.087H53.9565L57.6087 66.7391V70.3913L61.2609 74.0435H64.913L66.7391 75.8696V79.5217L72.2174 85H85V74.0435L57.6087 46.6522V19.2609L46.6522 8.30435M39.3478 13.7826L28.3913 2.82609H19.2609L1 21.087V41.1739L11.9565 52.1304M44.8261 21.087C45.9096 21.087 46.9688 21.4083 47.8697 22.0102C48.7706 22.6122 49.4727 23.4678 49.8873 24.4688C50.302 25.4698 50.4105 26.5713 50.1991 27.634C49.9877 28.6967 49.466 29.6728 48.6998 30.4389C47.9337 31.2051 46.9575 31.7268 45.8948 31.9382C44.8322 32.1496 43.7307 32.0411 42.7296 31.6265C41.7286 31.2118 40.873 30.5097 40.2711 29.6088C39.6691 28.7079 39.3478 27.6487 39.3478 26.5652C39.3478 25.1123 39.925 23.7189 40.9524 22.6915C41.9797 21.6641 43.3732 21.087 44.8261 21.087ZM15.6087 21.087C16.6922 21.087 17.7514 21.4083 18.6523 22.0102C19.5532 22.6122 20.2553 23.4678 20.6699 24.4688C21.0846 25.4698 21.1931 26.5713 20.9817 27.634C20.7703 28.6967 20.2486 29.6728 19.4824 30.4389C18.7163 31.2051 17.7401 31.7268 16.6774 31.9382C15.6148 32.1496 14.5133 32.0411 13.5122 31.6265C12.5112 31.2118 11.6556 30.5097 11.0537 29.6088C10.4517 28.7079 10.1304 27.6487 10.1304 26.5652C10.1304 25.1123 10.7076 23.7189 11.735 22.6915C12.7623 21.6641 14.1558 21.087 15.6087 21.087Z" stroke="url(#paint0_linear_134_757)" strokeWidth="1.5" strokeMiterlimit="10" />
                    <defs>
                      <linearGradient id="paint0_linear_134_757" x1="43" y1="1" x2="43" y2="85" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#5A2FED" />
                        <stop offset="1" stopColor="#C67EFF" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <p>Checking new devices and IP addresses, as well  two-factor authentication
                    allow you to securely protect your account from unauthorized access.</p>
                </div>
                <div className="card">
                  <h2>API Keys</h2>
                  <svg width="124" height="80" viewBox="0 0 124 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M26.0588 22.482C25.4512 19.1423 25.0311 15.7712 24.8003 12.3846C24.7553 11.7764 24.8847 11.168 25.1735 10.6309C25.4624 10.0938 25.8985 9.65028 26.4307 9.35247C37.813 3.8552 50.29 1 62.9302 1C75.5705 1 88.0475 3.8552 99.4298 9.35247C99.962 9.65028 100.398 10.0938 100.687 10.6309C100.976 11.168 101.105 11.7764 101.06 12.3846C100.276 24.2468 97.0637 35.8215 91.6216 46.3909C86.1794 56.9602 78.6239 66.2987 69.4235 73.8274L64.9898 77.4602C64.4128 77.9444 63.6835 78.2099 62.9302 78.2099C62.1769 78.2099 61.4477 77.9444 60.8707 77.4602L56.437 73.8274C50.1721 68.732 44.6546 62.7812 40.0465 56.1497M54.8065 56.4071C57.3127 59.2563 60.0282 61.9144 62.9302 64.3592C77.1164 52.3997 86.4112 35.6426 89.0463 17.276C72.232 10.8312 53.6285 10.8312 36.8142 17.276M48.6279 28.3746V51.2583M40.0465 36.956H48.6279M105.837 36.956V42.6769C105.837 44.1942 105.234 45.6493 104.162 46.7222C103.089 47.7951 101.634 48.3978 100.116 48.3978M123 28.3746V51.2583M114.419 36.956H123M8.5814 28.3746V51.2583M0 36.956H8.5814M25.7442 48.3978C24.2269 48.3978 22.7718 47.7951 21.6989 46.7222C20.626 45.6493 20.0233 44.1942 20.0233 42.6769V36.956C20.0233 35.4387 20.626 33.9835 21.6989 32.9106C22.7718 31.8378 24.2269 31.235 25.7442 31.235C27.2615 31.235 28.7166 31.8378 29.7895 32.9106C30.8624 33.9835 31.4651 35.4387 31.4651 36.956V42.6769C31.4651 44.1942 30.8624 45.6493 29.7895 46.7222C28.7166 47.7951 27.2615 48.3978 25.7442 48.3978Z" stroke="url(#paint0_linear_134_769)" strokeWidth="2" strokeMiterlimit="10" />
                    <defs>
                      <linearGradient id="paint0_linear_134_769" x1="61.5" y1="1" x2="61.5" y2="78.2099" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#5A2FED" />
                        <stop offset="1" stopColor="#C67EFF" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <p>Checking new devices and IP addresses, as well  two-factor authentication
                    allow you to securely protect your account from unauthorized access.</p>
                </div>
                <div className="card">
                  <h2>API Keys</h2>
                  <svg width="84" height="81" viewBox="0 0 84 81" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M69.2552 67.381V79.0952H14.7448V67.381M26.381 26.381V16.619C26.381 12.4766 28.0265 8.50384 30.9557 5.5747C33.8848 2.64556 37.8576 1 42 1C46.1424 1 50.1152 2.64556 53.0443 5.5747C55.9735 8.50384 57.619 12.4766 57.619 16.619V26.381M34.1905 26.381V16.619C34.1905 14.5478 35.0133 12.5614 36.4778 11.0969C37.9424 9.63231 39.9288 8.80952 42 8.80952C44.0712 8.80952 46.0576 9.63231 47.5222 11.0969C48.9867 12.5614 49.8095 14.5478 49.8095 16.619V26.381M51.0395 41.5705L53.7143 38.0952H75.1905M75.1905 38.0952C75.1905 40.2518 76.9387 42 79.0952 42C81.2518 42 83 40.2518 83 38.0952C83 35.9387 81.2518 34.1905 79.0952 34.1905C76.9387 34.1905 75.1905 35.9387 75.1905 38.0952ZM51.0395 58.0486L53.7143 61.5238H75.1905M75.1905 61.5238C75.1905 63.6804 76.9387 65.4286 79.0952 65.4286C81.2518 65.4286 83 63.6804 83 61.5238C83 59.3673 81.2518 57.6191 79.0952 57.6191C76.9387 57.6191 75.1905 59.3673 75.1905 61.5238ZM32.9605 41.5705L30.2857 38.0952H8.80952M8.80952 38.0952C8.80952 40.2518 7.0613 42 4.90476 42C2.74822 42 1 40.2518 1 38.0952C1 35.9387 2.74822 34.1905 4.90476 34.1905C7.0613 34.1905 8.80952 35.9387 8.80952 38.0952ZM32.9605 58.0486L30.2857 61.5238H8.80952M8.80952 61.5238C8.80952 63.6804 7.0613 65.4286 4.90476 65.4286C2.74822 65.4286 1 63.6804 1 61.5238C1 59.3673 2.74822 57.6191 4.90476 57.6191C7.0613 57.6191 8.80952 59.3673 8.80952 61.5238ZM14.7448 32.2381V26.381H69.2552V32.2381M69.2552 44.0695V55.6667M14.7448 44.0695V55.6667M49.8095 49.8095C49.8144 48.4375 49.4576 47.0884 48.7753 45.8981C48.093 44.7078 47.1091 43.7183 45.9227 43.0291C44.7363 42.34 43.3893 41.9755 42.0173 41.9725C40.6452 41.9695 39.2966 42.328 38.1072 43.0119C36.9178 43.6958 35.9296 44.681 35.242 45.8683C34.5544 47.0556 34.1918 48.4031 34.1905 49.7751C34.1893 51.1471 34.5496 52.4952 35.2351 53.6837C35.9205 54.8723 36.907 55.8592 38.0952 56.5452V69.3333H45.9048V56.5452C47.0879 55.8621 48.0712 54.8806 48.7564 53.6987C49.4416 52.5167 49.8047 51.1757 49.8095 49.8095Z" stroke="url(#paint0_linear_134_768)" strokeWidth="2" strokeMiterlimit="10" />
                    <defs>
                      <linearGradient id="paint0_linear_134_768" x1="42" y1="1" x2="42" y2="79.0952" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#5A2FED" />
                        <stop offset="1" stopColor="#C67EFF" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <p>Checking new devices and IP addresses, as well  two-factor authentication
                    allow you to securely protect your account from unauthorized access.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="page10">
          <div className="main">
            <div className="head">
              <h1>our partners</h1>
              <p><span>The Capico platform is theofficial broker </span>of the leading cryptocurrency exchanges</p>
            </div>
            <div className="box">
              <div className="a">
                <h1>Talha</h1>
                <p>hello</p>
              </div>
              <div className="a">
                <h1>Talha</h1>
                <p>hello</p>
              </div>
              <div className="a">
                <h1>Talha</h1>
                <p>hello</p>
              </div>
              <div className="a">
                <h1>Talha</h1>
                <p>hello</p>
              </div>
            </div>
          </div>
        </div>
        <div className="page11">
          <div className="main">
            <h1>Try Capico for free per month</h1>
            <button>Create an account
              <svg width="89" height="83" viewBox="0 0 89 83" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle opacity="0.2" cx="47.5" cy="41.5" r="41" transform="rotate(-90 47.5 41.5)" stroke="white" />
                <path d="M1 41.5L56 41.5M56 41.5L48.5 34M56 41.5L48.5 49" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
