import React, {Component} from "react";
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom'
import DashboardComponent from "./DashboardComponent";
import DomesticItemEdit from "./DomesticItemEdit";
import DomesticItemCreate from "./DomesticItemCreate";
import DomesticReportBoot from "./DomesticReportBoot";
//import DomesticReportComponent from "./DomesticReportComponent";
import withNavigation from "./withNavigation";
import withParams from "./withParams";

class RicefwApp extends Component {

    render() {

        const DashboardComponentWithNavigation = withNavigation(DashboardComponent);
        const DomesticReportComponentWithNavigation = withNavigation(DomesticReportBoot);
        const DomesticItemEditWithNavAndParams = withParams(withNavigation(DomesticItemEdit));
        const DomesticItemCreateWithNavigation = withNavigation(DomesticItemCreate);
        return (
            <div className="container">
                <Router>
                    <Routes>
                        <Route path="/ricefw/dashboard" element={<DashboardComponentWithNavigation />} />
                        <Route path="/ricefw/domestic" element={<DomesticReportComponentWithNavigation />} />
                        <Route path="/ricefw/domestic/edit/:ricefwId" element={<DomesticItemEditWithNavAndParams />} />
                        <Route path="/ricefw/domestic/create" element={<DomesticItemCreateWithNavigation />} />
                    </Routes>
                </Router>
            </div>
        )
    }
}

export default RicefwApp