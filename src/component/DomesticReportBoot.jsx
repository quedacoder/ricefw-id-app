import React, {Component} from "react";
import RicefwService from "./api/RicefwService";

class DomesticReportBoot extends Component {

    constructor(props) {
        super(props)
        this.state = {
            ricefwList: []
        }

        this.handleSuccessRicefwList = this.handleSuccessRicefwList.bind(this)
        this.deleteRicefwItem = this.deleteRicefwItem.bind(this)
        this.updateRicefwItem = this.updateRicefwItem.bind(this)
    }

    refreshRicefwList() {
        RicefwService.retrieveDomesticRicefwDetails()
        .then(response => this.handleSuccessRicefwList(response))
    }

    componentDidMount() {
        this.refreshRicefwList()
    }

    handleSuccessRicefwList(response) {
        this.setState({
            ricefwList: response.data
        })
    }

    deleteRicefwItem(ricfwId) {
        RicefwService.deleteRicefwId(ricfwId)
    }

    updateRicefwItem(ricefwId) {
        this.props.navigate(`/ricefw/domestic/edit/${ricefwId}`)
    }

    render() {
        return (
            <div className="container">
                <div className="domestic-report-header">
                    <h1>RICEFW ID Report</h1>
                    <hr />
                </div>
                <div className="container">
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>RICEFW Id</th>
                                <th>Object Title</th>
                                <th>RICEFW Description</th>
                                <th>Landscape System</th>
                                <th>Process Area</th>
                                <th>Process Area Text</th>
                                <th>Object Type</th>
                                <th>Object Type Text</th>
                                <th>Region</th>
                                <th>Originating Project</th>
                                <th>Source System</th>
                                <th>Target System</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.ricefwList.map (
                                    ricefwItem =>
                                    <tr key={ricefwItem.id}>
                                        <td>{ricefwItem.ricefwId}</td>
                                        <td>{ricefwItem.objectTitle}</td>
                                        <td>{ricefwItem.ricefwDescription}</td>
                                        <td>{ricefwItem.landscapeSystem}</td>
                                        <td>{ricefwItem.processArea}</td>
                                        <td>{ricefwItem.processAreaText}</td>
                                        <td>{ricefwItem.objectType}</td>
                                        <td>{ricefwItem.objectTypeText}</td>
                                        <td>{ricefwItem.region}</td>
                                        <td>{ricefwItem.originatingProject}</td>
                                        <td>{ricefwItem.sourceSystem}</td>
                                        <td>{ricefwItem.targetSystem}</td>
                                        <td><button onClick={() => this.updateRicefwItem(ricefwItem.ricefwId)} className="btn btn-warning">Update</button></td>
                                        <td><button onClick={() => this.deleteRicefwItem(ricefwItem.ricefwId)} className="btn btn-danger">Delete</button></td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default DomesticReportBoot