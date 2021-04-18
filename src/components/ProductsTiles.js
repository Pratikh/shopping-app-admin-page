import { useSelector, useDispatch } from 'react-redux';
import { Card, Button } from 'react-bootstrap';
import { useState } from 'react'
import { deleteProductAction } from '../reduxStore'

import EditProduct from './EditProduct'
import { deletProduct } from '../apiServices'
import './commonStyle.scss'
const ProductsTiles = (props) => {
    const dispatch = useDispatch()
    const [modalShow, setModalShow] = useState(false);

    const products = useSelector(state => state.products);
    console.log(products);
    const onDeleteClick = async (id) => {
        dispatch(deleteProductAction(id));
        const res = await deletProduct(id);
        window.alert(' Product is deleted and update to server', res.status)
    }
    return products.map(({ id, title, price, image }) => {
        return (
            <Card key={id} style={{ width: '18rem' }}>
                <div style={{
                    display: "flex"
                }}>
                    <Card.Img className="card" variant="top" src={image}
                        style={{
                            width: '200px',
                            height: '200px',
                            flex: 1,
                        }}
                    />
                </div>
                <Card.Body className='cardBody'>
                    <div>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>
                            price : {price} $
                         </Card.Text>
                    </div>
                    <div className='bottomButtons'>
                        <Button variant="danger" onClick={onDeleteClick.bind({}, id)} >Delete</Button>
                        <EditProduct
                            show={modalShow}
                            onHide={() => setModalShow(false)}
                            productid={id}
                        />
                    </div>
                </Card.Body>
            </Card>
        )
    })
}

export default ProductsTiles;