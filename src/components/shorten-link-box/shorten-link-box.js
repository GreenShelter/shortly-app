import './shorten-link-box.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Alert } from 'bootstrap';
import { useState } from 'react';



function Shortenbox() {

    const [shorten, setShorten] = useState();
    const [shortenField, setShortenField] = useState('');
    const arrays = [];

    const handleChange = (e) => {
        setShortenField(e.target.value);
        console.log(shortenField);

    }

    const addShortenLink = () => {
        if (shortenField !== "") {
            arrays.push(shortenField)
            console.log(arrays)
        } else {
            alert("no field data")
        }
    }

    return (
        <>
            <div className='shortenbox w-75'>
                <Row>
                    <Col lg='9'>
                        <Form.Control name='shorten-link' onChange={handleChange} size="lg" type="text" placeholder="Shorten a link here..." />
                    </Col>
                    <Col lg='3'>
                        <Button onClick={addShortenLink} size='lg' className='startedbtn px-4'>Shorten it!</Button>
                    </Col>
                </Row>
            </div>

            {arrays == "" ?
                <>
                    {arrays.map((array) => (
                        <Row className='w-100 p-3 bg-white rounded mb-3'>
                            <Col className='d-flex justify-content-start'>
                                <p className='my-auto fs-3'>{array}</p>
                            </Col>
                            <Col className='d-flex justify-content-end align-items center'>
                                <p className='shorten-link my-auto me-5 fs-3'>Link Name</p>
                                <Button className='startedbtn fs-5'>Copy</Button>
                            </Col>
                        </Row>
                    ))}
                </>
                :
                null
            }
            {/* <>
                {shorten ? 
                <div>

                </div>
                 : null}
            </> */}
        </>

    );
}

export default Shortenbox;