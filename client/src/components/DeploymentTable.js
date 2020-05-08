import React, { useEffect, useState } from 'react'
import { Table, Button, Toast } from 'react-bootstrap'
import { useDispatch, useSelector } from "react-redux";

import { getAllDeployment, deleteDeployment, resetDeleteDeployment } from '../actions/deployment.action'

const DeploymentTable = () => {
    const dispatch = useDispatch()

    const deployments = useSelector(state => state.deployment.deployments)
    const delDeployment = useSelector(state => state.deployment.deleteDeployment)

    const [deploymentArray, setDeploymentArray] = useState([])

    const toggleShowToast = () => dispatch(resetDeleteDeployment())


    useEffect(() => {
        if(deployments.length) {
            setDeploymentArray(deployments)
        } else {
            dispatch(getAllDeployment())
        }
        
    }, [deployments, dispatch])

    return (
        <div style={{margin: '25px'}}>
            <h3> Deployments List </h3>
        <Table responsive style={{color: 'white'}}>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Url</th>
                    <th>Template Name</th>
                    <th>Version</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {deploymentArray && deploymentArray.map((deployment, i) => {
                    return (
                        <tr key={i}>
                            <td>{i +1}</td>
                            <td> {deployment.url}</td>
                            <td> {deployment.templateName}</td>
                            <td>{deployment.version}</td>
                            <td>
                                <Button onClick={() => dispatch(deleteDeployment(deployment._id))} variant="danger">Delete</Button>
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </Table>
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <Toast 
                show={delDeployment} 
                autohide={true} 
                delay={3000} 
                style={{backgroundColor: 'red'}}
                onClose={toggleShowToast}
            >
                <Toast.Body> Deployment Deleted Successfully !</Toast.Body>
            </Toast>
        </div>
        
        </div>
    )
}

export default DeploymentTable