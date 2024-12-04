import React from 'react';
import '../styles/Analytics.css';
//import { useNavigate, useState } from 'react';
import { useState } from 'react';
import ReactDOM from 'react-dom/client';
import Rest from './Rest.jsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const root = ReactDOM.createRoot(document.getElementById('root'));
const queryClient = new QueryClient();



const Analytics = () => {
    return (
        <div className="analytics">
            <header className="analytics-header">
                <h1>Insights</h1>
            <div className="course-dropdown">
                <select>
                    <option>Courses</option>
                </select>
            </div>
            <div className="analytics-controls">
                <select>
                    <option>Select Lecture</option>
                </select>
                <select>
                    <option>Select Class (Optional)</option>
                </select>
            </div>
            </header>

            <div className="analytical-legend">
                <h3>Assesment Legend</h3>
                <ul>
                    <li>Fundemental Misunderstanding</li>
                    <li>Partial Understanding</li>
                    <li>Adequete Understanding</li>
                    <li>Proficient Understanding</li>
                    <li>Exceptional Understanding</li>
                </ul>
            </div>

            <div className="analytical-content">
                <img src="" alt="No Data"/>
                <p>No analytical data available</p>
                <small>Please select a course and lecture to view analytics</small>
            </div>
            <div className="analytical-content">
                <QueryClientProvider client={queryClient}>
                    <Rest />
                </QueryClientProvider>
            </div>
        </div>
    )
}

export default Analytics;