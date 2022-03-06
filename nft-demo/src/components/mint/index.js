import React, { useState } from 'react';
import { Formik, Field } from "formik";
import * as Yup from "yup";

import { Form, Button, Row, Col, Container, FloatingLabel, Image } from 'react-bootstrap';
import {
    mintNFT,
} from "../../services/mint";

const MinterView = () => {
    const [form, setForm] = useState({})
    const [errors, setErrors] = useState({})
    const [isLoading, setLoading] = useState(false);
    const [previewImage, setPreviewImage] = useState('');
    const [status, setStatus] = useState('');


    const fileOnSelection = (event) => {
        setField('image', event.target.files[0]);
        setPreviewImage(URL.createObjectURL(event.target.files[0]));
    }
    function isValidPhoto(fileName) {
        var allowed_extensions = new Array("jpg", "png", "gif", "jpeg");
        var file_extension = fileName.split('.').pop().toLowerCase();

        for (var i = 0; i <= allowed_extensions.length; i++) {
            if (allowed_extensions[i] == file_extension) {
                return true;
            }
        }

        return false;
    }


    const handleSubmit = (event) => {
        event.preventDefault()
        event.stopPropagation();
        // get our new errors
        const newErrors = findFormErrors()
        // Conditional logic:
        if (Object.keys(newErrors).length > 0) {
            // We got errors!
            setErrors(newErrors)
        } else {
            // No errors! Put any logic here for the form submission!
            onMintPressed(form.image, form.name, form.description);
        }
    };

    const onMintPressed = async (image,name, description ) => {
        setLoading(true);
        const { success, status } = await mintNFT(image, name, description);
        setStatus(status);
        if (success) {
            setLoading(false);
        }else{
            setLoading(false);
        }


    };
    const setField = (field, value) => {
        setForm({
            ...form,
            [field]: value
        })

        if (!!errors[field]) setErrors({
            ...errors,
            [field]: null
        })
    }
    const findFormErrors = () => {
        const { name, description, image } = form
        const newErrors = {}
        // name errors
        console.log(image)
        if (!name || name === '') newErrors.name = 'cannot be blank!';
        if (!description || description === '') newErrors.description = 'cannot be blank!';
        if (!image ) newErrors.image = 'cannot be blank!';

        return newErrors
    }

    return (<section id="mint" className="mint-section">
        <Container>
            <Row>
                <Col md={6} className="mx-auto">


                    <Form title='Create New Item'>
                        <Form.Group controlId="formFile" className="mb-3">
                            <Form.Label>Image</Form.Label>
                            {/* <Form.Control type="file" className="form-control" accept="image/*" onChange={fileOnSelection}
                                isInvalid={!!errors.image}
                            /> */}
                            <Form.Control
                                type="text"
                                placeholder="e.g. https://gateway.pinata.cloud/ipfs/<hash>"
                                isInvalid={!!errors.image}
                                onChange={e => setField('image', e.target.value)}
                            />
                            <Form.Control.Feedback type='invalid'>{errors.image}</Form.Control.Feedback>
                        </Form.Group>
                        {previewImage && (

                            <Image src={previewImage} thumbnail={true} />
                        )}

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="e.g. My first NFT!"
                                isInvalid={!!errors.name}
                                onChange={e => setField('name', e.target.value)}
                            />
                            <Form.Control.Feedback type='invalid'>{errors.name}</Form.Control.Feedback>
                        </Form.Group>


                        {/* <Form.Group className="mb-3" controlId="formBasicdescription">
                            <Form.Label></Form.Label>
                            <Form.Control type="text" placeholder="Description" />
                        </Form.Group> */}
                        <Form.Group className="mb-3" controlId="floatingTextarea2">
                            <Form.Label>Description</Form.Label>
                            <Form.Control
                                as="textarea"

                                placeholder="e.g. Even cooler than cryptokitties ;)"
                                style={{ height: '100px' }}
                                onChange={e => setField('description', e.target.value)}
                                isInvalid={!!errors.description}

                            />


                            <Form.Control.Feedback type='invalid'>{errors.description}</Form.Control.Feedback>
                        </Form.Group>

                        <div className="d-grid gap-2">

                            <Button variant="primary" size="lg" type="submit" disabled={isLoading}
                                onClick={handleSubmit}
                            >
                                {isLoading ? 'Loading…' : 'Submit'}
                            </Button>
                        </div>
                    </Form>
                    <p id="status" style={{ color: "red" }}>
        {status}
      </p>

                </Col>
            </Row>
        </Container>
    </section>);

}
export default MinterView;