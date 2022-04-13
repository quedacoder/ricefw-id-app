import React, {Component} from "react";
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom'
import DashboardComponent from "./DashboardComponent";
import DomesticReportComponent from "./DomesticReportComponent";
import withNavigation from "./withNavigation";

class RicefwApp extends Component {

    render() {

        const DashboardComponentWithNavigation = withNavigation(DashboardComponent);
        const DomesticReportComponentWithNavigation = withNavigation(DomesticReportComponent);
        return (
            <div className="container">
                <Router>
                    <Routes>
                        <Route path="/ricefw/dashboard" element={<DashboardComponentWithNavigation />} />
                        <Route path="/ricefw/domestic" element={<DomesticReportComponentWithNavigation />} />
                    </Routes>
                </Router>
            </div>
        )
    }
}

export default RicefwApp