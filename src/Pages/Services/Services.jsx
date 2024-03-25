import React, { useState } from 'react'
import './Services.css'
import { ServicesData } from '../../Data/ServicesData'
import { IoSearch } from 'react-icons/io5'

export default function Services() {

    const [filteredData, setFilteredData] = useState(ServicesData);

    const ServicesSearchHandler = (e) => {
        let value = e.target.value.trim().toLowerCase()
        console.log();
        const filtered = ServicesData.filter(item => item.title.toLowerCase().includes(value))
        setFilteredData(filtered);
    }

    const filterByCategory = (category) => {
        if (category === "All") {
            const uniqueTitles = new Set();
            const filtered = ServicesData.filter(service => {
                if (!uniqueTitles.has(service.title)) {
                    uniqueTitles.add(service.title);
                    return true;
                }
                return false;
            });
            setFilteredData(filtered);
        } else {
            let dataCategory = ServicesData.filter(service => service.category === category);
            setFilteredData(dataCategory);
        }
    }
    

    return (
        <>
            <div className="ServicesPage">
                <div className="page1">
                    <div className="main">
                        <h1>Our <br /> Services</h1>
                        <p>Discover unparalleled service excellence with our top-tier provider, delivering excellence in every interaction</p>
                    </div>
                </div>
                <div className="page2">
                    <div className="main">
                        <div className="head">
                            <div className="servicesBtns">
                                <button onClick={() => filterByCategory("All")}>All</button>
                                <button onClick={() => filterByCategory("Digital Marketing")}>Digital Marketing</button>
                                <button onClick={() => filterByCategory("Web Development")}>Web Development</button>
                            </div>
                            <div className='servicesSearch'>
                                <input onChange={ServicesSearchHandler} type="text" placeholder='Search...' />
                                <IoSearch />
                            </div>
                        </div>
                        <div className="box">
                            <div className="right">
                                {
                                    filteredData.map(({ title, description, icon }, index) => (
                                        <div className="card" key={index}>
                                            <h2>{title}</h2>
                                            {icon}
                                            <p>{description}</p>
                                        </div>
                                    ))
                                }
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
            </div>
        </>
    )
}
