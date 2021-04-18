import React, { useState } from "react";
import {
    Button,
    Modal,
    Form,
} from "react-bootstrap";
import { useDispatch } from 'react-redux';
import { addNewProduct } from '../reduxStore';
import { updateProductDetails } from '../apiServices';
import { v4 } from 'uuid'

function AddNewProduct(props) {
    const [modalShow, setModalShow] = React.useState(false);

    return (
        <>
            <Button
                variant="primary"
                onClick={() => setModalShow(true)}>
                Add new product
            </Button>
            <MyVerticallyCenteredModal
                productid={props.productid}
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </>
    );
}

function MyVerticallyCenteredModal(props) {
    const dispatch = useDispatch()
    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');
    const [price, setPrice] = useState('');
    const onTitleChange = ({ target: { value } }) => {
        setTitle(value);
    }
    const onCategoryChange = ({ target: { value } }) => {
        setCategory(value);
    }
    const onDescriptionChange = ({ target: { value } }) => {
        setDescription(value);
    }
    const onImageChange = ({ target: { value } }) => {
        setImage(value);
    }
    const onPriceChange = ({ target: { value } }) => {
        setPrice(value);
    }

    const saveData = async () => {
        const payload = {
            id: v4(),
            title,
            category,
            description,
            image,
            price
        }
        const res = updateProductDetails(payload);
        window.alert('Data updated to server', res.status)
        dispatch(addNewProduct(payload))
        props.onHide();
    }
    const [validated, setValidated] = useState(false);
    const handleSubmit = (event) => {
        const form = event.currentTarget;
        event.preventDefault();
        event.stopPropagation();
        if (form.checkValidity() === false) {
        } else {
            saveData();
        }
        setValidated(true);
    };
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Edit product details
                 </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Product category</Form.Label>
                        <Form.Control required type="text" onChange={onCategoryChange} value={category} />
                        <Form.Control.Feedback type="invalid">
                            Please provide Product category
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Product title</Form.Label>
                        <Form.Control required type="text" value={title} onChange={onTitleChange} />
                        <Form.Control.Feedback type="invalid">
                            Please provide Product title
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Product image URL</Form.Label>
                        <Form.Control required type="text" onChange={onImageChange} value={image} />
                        <Form.Control.Feedback type="invalid">
                            Please provide image URL
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Product Discription</Form.Label>
                        <Form.Control required as="textarea" rows={3} onChange={onDescriptionChange} value={description} />
                        <Form.Control.Feedback type="invalid">
                            Please give detailed Product Discription
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Product Price</Form.Label>
                        <Form.Control required type="number" onChange={onPriceChange} value={price} />
                        <Form.Control.Feedback type="invalid">
                            Please assign Product price.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Button type="submit" variant="success">Save</Button>
                    <Button onClick={props.onHide} variant="danger">Close</Button>
                </Form>
            </Modal.Body>
        </Modal>
    );
}

export default AddNewProduct;
