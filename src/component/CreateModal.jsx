import React, {Component} from "react";
import {Field, Form, Formik, ErrorMessage, getIn} from "formik"
import { Modal, Button } from 'react-bootstrap';
import RicefwService from "./api/RicefwService";
import './CreateModal.css'

class CreateModal extends Component{

    constructor(props) {
        super(props)

        this.state = {
            ricefwItem: {}
        }

        this.onSubmit = this.onSubmit.bind(this)
        this.validate = this.validate.bind(this)
        this.getStyles = this.getStyles.bind(this)
    }

    onSubmit(values) {
        console.log(values)

        let ricefwItem = values.ricefwItem
        console.log(ricefwItem)

        RicefwService.createRicefwItem(ricefwItem)
        .then(response => console.log(response))



        this.props.navigate("/ricefw/domestic")
    }

    validate(ricefwItem) {

        let errors = {
            ricefwItem: {}
        };


        if (ricefwItem.ricefwItem.objectTitle == null || ricefwItem.ricefwItem.objectTitle.length < 5) {
            errors.ricefwItem.objectTitle = 'Enter an Object Title greater than 5 characters';
        } 

        if (ricefwItem.ricefwItem.ricefwDescription == null || ricefwItem.ricefwItem.ricefwDescription.length < 10) {
            errors.ricefwItem.ricefwDescription = 'Enter a valid description for Object Title.  Object Title Description must be at least 10 characters.';
        }

        if (ricefwItem.ricefwItem.landscapeSystem == null || ricefwItem.ricefwItem.landscapeSystem === 'default') {
            errors.ricefwItem.landscapeSystem = 'Select a valid landscape system.';
        }

        if (ricefwItem.ricefwItem.objectType == null || ricefwItem.ricefwItem.objectType === 'default') {
            errors.ricefwItem.objectType = 'Select a valid Object Type.';
        }

        if (ricefwItem.ricefwItem.originatingProject == null || ricefwItem.ricefwItem.originatingProject === 'default') {
            errors.ricefwItem.originatingProject = 'Select a valid Originating Project.';
        }

        if (ricefwItem.ricefwItem.subProcessArea == null || ricefwItem.ricefwItem.subProcessArea === 'default') {
            errors.ricefwItem.subProcessArea = 'Select a valid Sub-Process Area.';
        }

        return errors;
    }

    getStyles(errors, fieldName) {
        if (getIn(errors, fieldName)) {
            return {
                border: '1px solid red'
            }
        }
    }

    render () {
        let ricefwItem = this.state.ricefwItem
        return (
            <Modal
            {...this.props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            className="create-modal">
                <Modal.Header closeButton className="create-modal-header">
                    <Modal.Title id="contained-modal-title-vcenter" className="h1-align">
                        <h1 className="h1-align">Create RICEFW ID</h1>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="container edit-form-domestic">
                        <Formik initialValues={{ricefwItem}}
                                onSubmit={this.onSubmit}
                                validate={this.validate}
                                validateOnChange={false}
                                validateOnBlur={false}
                                enableReinitialize={true}>
                            {
                                (props) => (
                                    <Form className="row g-3">
                                        <fieldset className="col-md-12 input-spacing">
                                            <label className="form-label">Object Title</label>
                                            <Field type="text" className="form-control" name="ricefwItem.objectTitle" style={this.getStyles(props.errors, 'ricefwItem.objectTitle')}/>
                                            <ErrorMessage name="ricefwItem.objectTitle" component="div">
                                                {msg => <p className="error">{msg}</p>}
                                            </ErrorMessage>
                                        </fieldset>
                                        <fieldset className="col-md-12 input-spacing">
                                            <label className="form-label">RICEFW Description</label>
                                            <Field type="text" className="form-control" name="ricefwItem.ricefwDescription" style={this.getStyles(props.errors, 'ricefwItem.ricefwDescription')}/>
                                            <ErrorMessage name="ricefwItem.ricefwDescription" component="div">
                                                {msg => <p className="error">{msg}</p>}
                                            </ErrorMessage>
                                        </fieldset>
                                        <fieldset className="col-md-4 input-spacing">
                                            <label className="form-label">Landscape System</label>
                                            <Field as="select" className="form-control" name="ricefwItem.landscapeSystem" style={this.getStyles(props.errors, 'ricefwItem.landscapeSystem')}>
                                                <option value="default">--</option>
                                                <option value="P41">P41</option>
                                                <option value="PG1">PG1</option>
                                            </Field>
                                            <ErrorMessage name="ricefwItem.landscapeSystem" component="div">
                                                {msg => <p className="error">{msg}</p>}
                                            </ErrorMessage>
                                        </fieldset>
                                        <fieldset className="col-md-4 input-spacing">
                                            <label className="form-label">Object Type</label>
                                            <Field as="select" className="form-control" name="ricefwItem.objectType" style={this.getStyles(props.errors, 'ricefwItem.landscapeSystem')}>
                                                <option value="default">--</option>
                                                <option value="CNV">Conversion</option>
                                                <option value="ENH">Enhancement</option>
                                                <option value="INT">Interface</option>
                                                <option value="FRM">Form</option>
                                                <option value="REP">Report</option>
                                                <option value="WFLW">Workflow</option>
                                            </Field>
                                            <ErrorMessage name="ricefwItem.objectType" component="div">
                                                {msg => <p className="error">{msg}</p>}
                                            </ErrorMessage>
                                        </fieldset>
                                        <fieldset className="col-md-4 input-spacing">
                                            <label className="form-label">Originating Project</label>
                                            <Field as="select" className="form-control" name="ricefwItem.originatingProject" style={this.getStyles(props.errors, 'ricefwItem.originatingProject')}>
                                                <option value="default">--</option>
                                                <option value="Philadelphia">Philadelphia</option>
                                                <option value="Non-Project Related">Non-Project Related</option>
                                            </Field>
                                             <ErrorMessage name="ricefwItem.orginatingProject" component="div">
                                                {msg => <p className="error">{msg}</p>}
                                            </ErrorMessage>
                                        </fieldset>
                                        <fieldset className="col-md-2 input-spacing">
                                            <label className="form-label">Region</label>
                                            <Field type="text" className="form-control" name="ricefwItem.region" style={this.getStyles(props.errors, 'ricefwItem.region')} disabled={true} value="Domestic"/>
                                             <ErrorMessage name="ricefwItem.region" component="div">
                                                {msg => <p className="error">{msg}</p>}
                                            </ErrorMessage>
                                        </fieldset>
                                        <fieldset className="col-md-4">
                                            <label className="form-label">Approved by Lead Panel</label>
                                            <Field as="select" className="form-control" name="ricefwItem.isApprovedByLeadPanel">
                                                <option value=" ">--</option>
                                                <option value="yes">Yes</option>
                                                <option value="no">No</option>
                                            </Field>
                                        </fieldset>
                                        <fieldset className="col-md-3 input-spacing">
                                            <label className="form-label">Jira Id</label>
                                            <Field type="text" className="form-control" name="ricefwItem.jiraId"/>
                                        </fieldset>
                                        <fieldset className="col-md-3 input-spacing">
                                            <label className="form-label">Requested By</label>
                                            <Field type="text" className="form-control" name="ricefwItem.requestedBy" />
                                        </fieldset>
                                        <fieldset className="col-md-12 input-spacing">
                                            <label className="form-label">Documentation URL</label>
                                            <Field type="text" className="form-control" name="ricefwItem.documentationUrl"/>
                                        </fieldset>
                                        <fieldset className="col-md-6 input-spacing">
                                            <label className="form-label">Sub Process Area</label>
                                            <Field as="select" className="form-control" name="ricefwItem.subProcessArea" style={this.getStyles(props.errors, 'ricefwItem.subProcessArea')}>
                                                <option value=""></option>
                                                <option value="CRS">CRS - Cross Functional</option>
                                                <option value="INV">INV - Inventory Management</option>
                                                <option value="PPS">PPS - Production Planning and Scheduling</option>
                                                <option value="EWM">EWM - Enterprise Warehouse Management</option>
                                                <option value="GTS">GTS - Global Trade Systems</option>
                                                <option value="TPE">TPE - Transportation Planning and Execution</option>
                                                <option value="WHS">WHS - Warehouse Management</option>
                                                <option value="RND">RND = R and D Global Specifications</option>
                                                <option value="TMG">TMG - Trade Management</option>
                                                <option value="BOM">BOM - Bill of Materials</option>
                                                <option value="COP">COP - Co-Packing</option>
                                                <option value="DIS">DIS - Disassembly</option>
                                                <option value="MME">MME - Material Master Extensions</option>
                                                <option value="MMD">MMD - Material Master Data</option>
                                                <option value="PTM">PTM - Plant Maintenance</option>
                                                <option value="QTM">QTM - Quality Management</option>
                                                <option value="BIL">BIL - Sales Billing</option>
                                                <option value="FAR">FAR - Financial Accounts Receivables</option>
                                                <option value="FSC">FSC - Financial Supply Chain Management</option>
                                                <option value="LSD">LSD - Logistics Sales and Distribution</option>
                                                <option value="CCA">CCA - Cost Center Accounting</option>
                                                <option value="CCO">CCO - Cost Center Controlling</option>
                                                <option value="CPA">CPA - Controlling Profitability Analysis</option>
                                                <option value="CPC">CPC - Controlling Product Costing</option>
                                                <option value="FAA">FAA - Financials Asset Accounting</option>
                                                <option value="FGL">FGL - Financials General Ledger</option>
                                                <option value="FLS">FLS - Lease Accelerator</option>
                                                <option value="FNS">FNS - Financials - Not Specific</option>
                                                <option value="FPA">FPA - Financial Planning and Analysis</option>
                                                <option value="PCA">PCA - Profit Center Accounting</option>
                                                <option value="SSC">SSC - Security Administration</option>
                                                <option value="FAP">FAP - Financials Accounts Payable</option>
                                                <option value="FRC">FRC - Financials Check Recon</option>
                                                <option value="FTX">FTX - Vertex Tax</option>
                                                <option value="PRO">PRO - Procurement</option>
                                                <option value="BYT">BYT - Blue Yonder Transportation Management</option>
                                            </Field>
                                             <ErrorMessage name="ricefwItem.subProcessArea" component="div">
                                                {msg => <p className="error">{msg}</p>}
                                            </ErrorMessage>
                                        </fieldset>
                                        <fieldset className="col-md-6 input-spacing">
                                            <label className="form-label">Reference Id</label>
                                            <Field type="text" className="form-control" name="ricefwItem.referenceId" />
                                        </fieldset>
                                        <hr />
                                        <div className="row">
                                            <div className="d-grid gap-2 col-6 btn-spacing">
                                                <button type="submit" className="btn save-btn">Save</button>
                                            </div>
                                            <div className="d-grid gap-2 col-6 btn-spacing">
                                                <Button onClick={this.props.onHide} className="btn cancel-btn">Cancel</Button>
                                            </div>
                                        </div>
                                    </Form>
                                )
                            }
                        </Formik>
                    </div>
                </Modal.Body>
                <Modal.Footer>
        
                </Modal.Footer>
            </Modal>
        );
    }
}

export default CreateModal;