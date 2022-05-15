import React, {Component} from "react";
import {Field, Form, Formik, ErrorMessage} from "formik"
import RicefwService from "./api/RicefwService";
import './DomesticItemEdit.css'

class DomesticItemCreate extends Component {

 constructor(props) {
        super(props)

        this.state = {
            ricefwItem: {}
        }

        this.onSubmit = this.onSubmit.bind(this)
    }

    onSubmit(values) {
        console.log(values)

        let ricefwItem = values.ricefwItem

        RicefwService.createRicefwItem(ricefwItem)
        .then(response => console.log(response))

        this.props.navigate("/ricefw/domestic")
    }

    render() {
        let ricefwItem = this.state.ricefwItem
        return (
            <div className="container edit-form-bg">
                <div className="container edit-domestic-header">
                    <button onClick={() => this.props.navigate("/ricefw/domestic")}>Back</button>
                    <h1>Create RICEFW ID</h1>
                    <hr className="hr-line-spacing"/>
                </div>
                <div className="container edit-form-domestic">
                    <Formik initialValues={{ricefwItem}}
                            onSubmit={this.onSubmit}
                            validateOnBlur={false}
                            enableReinitialize={true}>
                        {
                            (props) => (
                                <Form className="row g-3">
                                    <fieldset className="col-md-6 input-spacing">
                                        <label className="form-label">RICEFW Id</label>
                                        <Field type="text" className="form-control" name="ricefwItem.ricefwId" disabled/>
                                    </fieldset>
                                    <fieldset className="col-md-6 input-spacing">
                                        <label className="form-label">Object Title</label>
                                        <Field type="text" className="form-control" name="ricefwItem.objectTitle"/>
                                    </fieldset>
                                    <fieldset className="col-md-12 input-spacing">
                                        <label className="form-label">RICEFW Description</label>
                                        <Field type="text" className="form-control" name="ricefwItem.ricefwDescription"/>
                                    </fieldset>
                                    <fieldset className="col-md-4 input-spacing">
                                        <label className="form-label">Landscape System</label>
                                        <Field type="text" className="form-control" name="ricefwItem.landscapeSystem"/>
                                    </fieldset>
                                    <fieldset className="col-md-4 input-spacing">
                                        <label className="form-label">Process Area</label>
                                        <Field type="text" className="form-control" name="ricefwItem.processArea"/>
                                    </fieldset>
                                    <fieldset className="col-md-4 input-spacing">
                                        <label className="form-label">Process Area Text</label>
                                        <Field type="text" className="form-control" name="ricefwItem.processAreaText" />
                                    </fieldset>
                                    <fieldset className="col-md-4 input-spacing">
                                        <label className="form-label">Object Type</label>
                                        <Field type="text" className="form-control" name="ricefwItem.objectType" />
                                    </fieldset>
                                    <fieldset className="col-md-4 input-spacing">
                                        <label className="form-label">Object Type Text</label>
                                        <Field type="text" className="form-control" name="ricefwItem.objectTypeText" />
                                    </fieldset>
                                    <fieldset className="col-md-4 input-spacing">
                                        <label className="form-label">Region</label>
                                        <Field type="text" className="form-control" name="ricefwItem.region" />
                                    </fieldset>
                                    <fieldset className="col-md-4 input-spacing">
                                        <label className="form-label">Middleware</label>
                                        <Field type="text" className="form-control" name="ricefwItem.middleware"/>
                                    </fieldset>
                                    <fieldset className="col-md-4 input-spacing">
                                        <label className="form-label">Approved by Lead Panel</label>
                                        <Field type="text" className="form-control" name="ricefwItem.isApprovedByLeadPanel"/>
                                    </fieldset>
                                    <fieldset className="col-md-4 input-spacing">
                                        <label className="form-label">Jira Id</label>
                                        <Field type="text" className="form-control" name="ricefwItem.jiraId"/>
                                    </fieldset>
                                    <fieldset className="col-md-4 input-spacing">
                                        <label className="form-label">Requested By</label>
                                        <Field type="text" className="form-control" name="ricefwItem.requestedBy" />
                                    </fieldset>
                                    <fieldset className="col-md-2 input-spacing">
                                        <label className="form-label">Requested On</label>
                                        <Field type="date" className="form-control" name="ricefwItem.requestedOn" />
                                    </fieldset>
                                    <fieldset className="col-md-4 input-spacing">
                                        <label className="form-label">Approval Status</label>
                                        <Field type="text" className="form-control" name="ricefwItem.approvalStatus" />
                                    </fieldset>
                                    <fieldset className="col-md-2 input-spacing">
                                        <label className="form-label">Active</label>
                                        <Field type="text" className="form-control" name="ricefwItem.isActive" />
                                    </fieldset>
                                    <fieldset className="col-md-4 input-spacing">
                                        <label className="form-label">Responded By</label>
                                        <Field type="text" className="form-control" name="ricefwItem.respondedBy" />
                                    </fieldset>
                                    <fieldset className="col-md-4 input-spacing">
                                        <label className="form-label">Responded On</label>
                                        <Field type="date" className="form-control" name="ricefwItem.respondedOn" />
                                    </fieldset>
                                    <fieldset className="col-md-4 input-spacing">
                                        <label className="form-label">Responded Text</label>
                                        <Field type="text" className="form-control" name="ricefwItem.respondedText" />
                                    </fieldset>
                                    <fieldset className="col-md-12 input-spacing">
                                        <label className="form-label">Documentation URL</label>
                                        <Field type="text" className="form-control" name="ricefwItem.documentationUrl"/>
                                    </fieldset>
                                    <fieldset className="col-md-4 input-spacing">
                                        <label className="form-label">Sub Process Area</label>
                                        <Field type="text" className="form-control" name="ricefwItem.subProcessArea" />
                                    </fieldset>
                                    <fieldset className="col-md-4 input-spacing">
                                        <label className="form-label">Sub Process Area Text</label>
                                        <Field type="date" className="form-control" name="ricefwItem.subProcessAreaText" />
                                    </fieldset>
                                    <fieldset className="col-md-4 input-spacing">
                                        <label className="form-label">Reference Id</label>
                                        <Field type="text" className="form-control" name="ricefwItem.referenceId" />
                                    </fieldset>
                                    <fieldset className="col-md-12 input-spacing">
                                        <hr />
                                    </fieldset>
                                    <div className="row">
                                        <div className="d-grid gap-2 col-6 btn-spacing">
                                            <button type="submit" className="btn btn-success">Save</button>
                                        </div>
                                        <div className="d-grid gap-2 col-6 btn-spacing">
                                            <button onClick={() => this.props.navigate("/ricefw/domestic")} className="btn btn-danger">Cancel</button>
                                        </div>
                                    </div>
                                </Form>
                            )
                        }
                    </Formik>
                </div>
            </div>
        )
    }
}

export default DomesticItemCreate