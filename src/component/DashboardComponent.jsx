import React, {Component} from "react";
import Button from 'react-bootstrap/Button';
import RicefwService from "./api/RicefwService";
import CreateModal from "./CreateModal";
import "./DashboardComponent.css"


class DashboardComponent extends Component {

    constructor(props) {
        super(props)
        this.getDomesticReport = this.getDomesticReport.bind(this)
        this.getCreateFormRicefwId = this.getCreateFormRicefwId.bind(this)
        this.state = {
            modalShow: false
        }

        this.setModalShowState = this.setModalShowState.bind(this)
    }

    setModalShowState(isVisible) {
        this.setState ({
            modalShow: isVisible
        });
    }
    
    render() {
        return (
            <div className="container dashboard">
                <h1 className="header-spacing">Ricefw Dashboard</h1>
                <hr className="hr-dashboard"/>
                <div className="row">
                    <div className="col">
                        <div className="d-grid gap-2">
                            <button className="btn btn-primary dashboard-btn dashboard-btn-left" onClick={this.getDomesticReport}>RICEFW Id Domestic Report</button>
                        </div>
                        
                    </div>
                    <div className="col">
                        <div className="d-grid gap-2">
                            <Button variant="btn btn-primary dashboard-btn dashboard-btn-right" onClick={() => this.setModalShowState(true)}>
                                Create Domestic Ricefw Id
                            </Button>
                            <CreateModal show={this.state.modalShow} onHide={() => this.setModalShowState(false)} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    getDomesticReport() {
        this.props.navigate(`/ricefw/domestic`);
    }

    getCreateFormRicefwId() {
        this.props.navigate('/ricefw/domestic/create');
    }
}

export default DashboardComponent