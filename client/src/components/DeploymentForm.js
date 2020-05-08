import React, { useState, useEffect } from 'react'
import {
    Form,
    Button,
    Row,
    Col,
    Toast
} from 'react-bootstrap'
import { useDispatch, useSelector } from "react-redux";

import { getAllTemplates, getVersionsOfTemplate } from '../actions/template.action'
import { addDeployment, resetNewDeployment } from '../actions/deployment.action'

const DeploymentForm = () => {
    const templates = useSelector(state => state.template.templates)
    const versions = useSelector(state => state.template.versions)

    const newDeployment = useSelector(state => state.deployment.newDeployment)

    const dispatch = useDispatch()

    const [templateArray, setTemplateArray] = useState([])
    const [templateName, setTemplateName] = useState('')
    const [version, setVersion] = useState('')
    const [url, setUrl] = useState('')

    const toggleShowToast = () => dispatch(resetNewDeployment())

    useEffect(() => {
        if(templates.length) {
            setTemplateArray(templates)
        } else {
            dispatch(getAllTemplates())
        }
      }, [templates, dispatch]);

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(event)
        let payload = {
            url,
            templateName,
            version
        }
        dispatch(addDeployment(payload))
    }

    return (
        <div style={{padding: '25px'}}>
            <h3> Add new Deployment</h3>
        <Form onSubmit={handleSubmit}>
            <Form.Group as={Row}>
                <Form.Label column sm="6">Template</Form.Label>
                <Col>
                    <Form.Control 
                        as="select" 
                        sm="6" 
                        placeholder="Select Template" 
                        onChange={(e) => {
                            setTemplateName(e.target.value)
                            dispatch(getVersionsOfTemplate(e.target.value))
                        }}
                        value={templateName}
                    >
                        <option value={undefined} key={-1}> Select Template</option>
                        {templateArray && templateArray.map((template, i) => {
                            return(
                            <option value={template.name} key={i}>{template.name}</option>
                            )
                        })}
                    </Form.Control>
                </Col>
            </Form.Group>

            <Form.Group as={Row}>
                <Form.Label column sm="6">Version</Form.Label>
                <Col>
                    <Form.Control 
                        as="select" 
                        sm="6" 
                        placeholder="Select Version" 
                        onChange={(e) => setVersion(e.target.value)}
                        defaultValue={version}
                    >
                        <option value={undefined} key={-1}> Select Version </option>
                        {versions && versions.map((vers, i) => {
                            return(
                            <option value={vers} key={i}>{vers}</option>
                            )
                        })}
                    </Form.Control>
                </Col>
            </Form.Group>

            <Form.Group as={Row}>
                <Form.Label column sm="6">Url</Form.Label>
                <Col>
                    <Form.Control 
                        placeholder="Enter Url"
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                    />
                </Col>
                
            </Form.Group>
            {
                templateName && version && url ? 
                (
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                )
                : 
                (
                    <Button variant="secondary" type="submit" disabled>
                        Submit
                    </Button>
                )
            }
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <Toast 
                    show={newDeployment} 
                    autohide={true} 
                    delay={3000} 
                    style={{backgroundColor: 'green'}}
                    onClose={toggleShowToast}
                >
                        <Toast.Body> Deployment Added Successfully !</Toast.Body>
                </Toast>
            </div>
            
        </Form>
        </div>
        
    )
}

export default DeploymentForm