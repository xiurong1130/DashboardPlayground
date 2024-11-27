import React from 'react';
import '../styles/Analytics.css';

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
        </div>
    )
}

export default Analytics;