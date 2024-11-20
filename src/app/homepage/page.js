// pages/homepage.js

"use client";

import React, { useState } from 'react';

const HomePage = () => {
    const [activePage, setActivePage] = useState('Home');

    const navigateTo = (page) => {
        setActivePage(page);
        alert(`Navigating to ${page}`);
    };

    const openArchive = (year) => {
        alert(`Opening archive for year ${year}`);
    };

    return (
        <div className="container">
            {/* Sidebar */}
            <nav className="sidebar">
                <div className="sidebar-logo">+</div>
                <ul className="sidebar-menu">
                    <li
                        className={`sidebar-item ${activePage === 'Home' ? 'active' : ''}`}
                        onClick={() => navigateTo('Home')}
                    >
                        Home
                    </li>
                    <li
                        className={`sidebar-item ${activePage === 'Mark schemes' ? 'active' : ''}`}
                        onClick={() => navigateTo('Mark schemes')}
                    >
                        Mark schemes
                    </li>
                    <li
                        className={`sidebar-item ${activePage === 'FAQ' ? 'active' : ''}`}
                        onClick={() => navigateTo('FAQ')}
                    >
                        FAQ
                    </li>
                </ul>
            </nav>

            {/* Main Content */}
            <div className="main-content">
                <div className="banner">
                    <h1>WELCOME</h1>
                </div>
                <div className="archive">
                    <h2>Mark Scheme Archives →</h2>
                    <div className="archive-items">
                        {["24/25", "23/24", "22/23", "21/22"].map((year) => (
                            <div key={year} className="archive-item" onClick={() => openArchive(year)}>
                                YEAR {year}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Inline CSS for styling */}
            <style jsx>{`
                * {
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                }

                body, html {
                    font-family: Arial, sans-serif;
                    height: 100%;
                    background-color: #ddace3;
                }

                .container {
                    display: flex;
                    width: 100%;
                    height: 100vh;
                }

                .sidebar {
                    width: 80px;
                    background-color: #f0e0f5;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    padding-top: 20px;
                    border-right: 1px solid #ccc;
                }

                .sidebar-logo {
                    font-size: 30px;
                    color: #FF69B4;
                    margin-bottom: 40px;
                    cursor: pointer;
                }

                .sidebar-menu {
                    list-style-type: none;
                    width: 100%;
                }

                .sidebar-item {
                    text-align: center;
                    padding: 15px;
                    font-size: 14px;
                    color: #555;
                    cursor: pointer;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }

                .sidebar-item::before {
                    content: '⭐';
                    font-size: 18px;
                    margin-bottom: 5px;
                    color: #333;
                }

                .sidebar-item:hover,
                .sidebar-item.active {
                    background-color: #e3cfe8;
                    color: #333;
                    font-weight: bold;
                }

                .main-content {
                    flex: 1;
                    padding: 20px;
                    background-color: #fdfdfd;
                    border-radius: 12px;
                    margin: 20px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }

                .banner {
                    background-color: #ccc;
                    height: 150px;
                    width: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 10px;
                    font-size: 36px;
                    color: #333;
                    margin-bottom: 20px;
                    position: relative;
                }

                .banner::before {
                    content: '⭐';
                    position: absolute;
                    font-size: 80px;
                    color: rgba(200, 200, 200, 0.7);
                    top: 20px;
                    left: 20px;
                }

                .banner::after {
                    content: '⭐';
                    position: absolute;
                    font-size: 60px;
                    color: rgba(200, 200, 200, 0.5);
                    bottom: 20px;
                    right: 20px;
                }

                .archive {
                    width: 100%;
                    margin-top: 20px;
                }

                .archive h2 {
                    margin-bottom: 10px;
                    color: #333;
                    font-size: 18px;
                }

                .archive-items {
                    display: flex;
                    gap: 10px;
                    justify-content: center;
                }

                .archive-item {
                    width: 80px;
                    height: 80px;
                    background-color: #e0e0e0;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    text-align: center;
                    color: #333;
                    font-size: 12px;
                    cursor: pointer;
                    border-radius: 8px;
                    position: relative;
                    overflow: hidden;
                    transition: background-color 0.3s;
                }

                .archive-item:hover {
                    background-color: #d0c0e0;
                }

                .archive-item::before {
                    content: '⭐';
                    position: absolute;
                    font-size: 24px;
                    color: rgba(150, 150, 150, 0.4);
                    top: -10px;
                    left: -10px;
                    transform: rotate(-15deg);
                }
            `}</style>
        </div>
    );
};

export default HomePage;
