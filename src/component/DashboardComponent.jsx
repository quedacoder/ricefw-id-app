import React, {Component} from "react";
import RicefwService from "./api/RicefwService";
import "./DashboardComponent.css"

class DashboardComponent extends Component {

    constructor(props) {
        super(props)
        this.getDomesticReport = this.getDomesticReport.bind(this)
    }
    
    render() {
        return (
            <div className="container dashboard">
                <h1 className="header-spacing">Ricefw Dashboard</h1>
                <hr />
                <div className="row">
                    <div className="col">
                        <div className="d-grid gap-2">
                            <button className="btn btn-primary dashboard-btn" onClick={this.getDomesticReport}>RICEFW Id Domestic Report</button>
                        </div>
                        
                    </div>
                    <div className="col">
                        <div className="d-grid gap-2">
                            <button className="btn btn-primary dashboard-btn">Create Domestic Ricefw Id</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    getDomesticReport() {
        this.props.navigate(`/ricefw/domestic`);
    }
}

export default DashboardComponent