import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';

import Analytics from './pages/Analytics';
import Classes from './pages/Classes';
import Courses from './pages/Courses';
import Lectures from './pages/Lectures';
import Notifications from './pages/Notifications';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import Students from './pages/Students';
import AnalyticChart from './pages/AnalyticChart';

function App() {
    return (
        <Router>
            <div className="app"> 
                <Sidebar />
                <div className="main-content">
                    <Routes>
                        {/* Redirect any undefined route to Analytics, <Route path="*" element={<Navigate to="/analytics" />} /> */}
                        <Route path="/analytics" element={<Analytics />} />
                        <Route path="/classes" element={<Classes />} />
                        <Route path="/courses" element={<Courses />} />
                        <Route path="/lectures" element={<Lectures />} />
                        <Route path="/notifications" element={<Notifications />} />
                        <Route path="/profile" element={<Profile />} />
                        <Route path="/settings" element={<Settings />} />
                        <Route path="/students" element={<Students />} />
                        <Route path="/analyticChart" element={<AnalyticChart />} />
                    </Routes>
                </div>
            </div>
        </Router>
    )
}

export default App;
