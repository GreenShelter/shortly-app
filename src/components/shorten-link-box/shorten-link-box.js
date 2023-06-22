import './shorten-link-box.css'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { useState } from 'react';



function Shortenbox() {


    const [shortenDataArray, setShortenDataArray] = useState([]);
    const [shortenCode, setShortenCode] = useState();
    const [noLink, setNolink] = useState(false);
    const [invalidLink, setInvalidNolink] = useState(false);
    const [shortenField, setShortenField] = useState("");
    const [copied, setCopied] = useState(false);

    const validDomain = new RegExp('^[a-zA-Z0-9][a-zA-Z0-9-]{0,61}[a-zA-Z0-9](?:\.[a-zA-Z]{2,})+$');

    const handleChange = (e) => {
        setShortenField(e.target.value);
        console.log(shortenField);

    }

    const addShortenLink = () => {

        if (shortenField === "") {
            setNolink(true)
            return
        } else if (!validDomain.test(shortenField)) {
            setInvalidNolink(true)
            return
        } else {
            setNolink(false)
            setInvalidNolink(false)
        }

        axios.get(`https://api.shrtco.de/v2/shorten?url=${shortenField}`, {
            url: shortenField,

        }, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
            .then(function (response) {
                const data = response.data.result;
                if (shortenDataArray.length < 5) {
                    setShortenDataArray([...shortenDataArray, data])
                } else {
                    alert("You have reached maximum links")
                }
                console.log(shortenDataArray);
            })
            .catch(function (error) {
                console.log(error);
            });

    }

    return (
        <>
            <div className='shortenbox w-75'>
                <Row>
                    <Col lg='9'>
                        <Form.Control className={noLink || invalidLink ? 'shorten-link-invalid' : null} name='shorten-link' onChange={handleChange} size="lg" type="text" placeholder="Shorten a link here..." />
                        {noLink === true ?
                            <p className='text-danger'>
                                Please add a link
                            </p>
                            : invalidLink === true ?
                                <p className='text-danger'>
                                    Please put a valid name
                                </p>
                                : null}
                    </Col>
                    <Col lg='3'>
                        <Button onClick={addShortenLink} size='lg' className='startedbtn px-4'>Shorten it!</Button>
                    </Col>
                </Row>
            </div>

            {shortenDataArray !== "" ?
                <>
                    <div className='flex-column w-75'>
                        {shortenDataArray.map((array, index) => (
                            <Row key={index} className='justify-content-center w-100 p-3 bg-white rounded mb-3'>
                                <Col lg='6' className='d-flex justify-content-start'>
                                    <p className='my-auto fs-3'>{array.original_link}</p>
                                </Col>
                                <Col lg='6' >
                                    <Row>
                                        <Col lg='8'>
                                            <p className='shorten-link my-auto fs-3'>{array.short_link}</p>
                                        </Col>
                                        <Col lg='4' className='d-flex justify-content-center'>
                                            <Button key={index} onClick={() => {
                                                navigator.clipboard.writeText(array.short_link)
                                                    .then(() => {
                                                        setCopied(true);
                                                        setTimeout(() => {
                                                            setCopied(false);
                                                        }, 1000);
                                                    })
                                                    .catch((err) => {
                                                        console.log(err);
                                                    });
                                            }}
                                                className='startedbtn fs-5'>{copied ? 'Copied!' : 'Copy'}</Button>
                                        </Col>

                                    </Row>
                                </Col>
                            </Row>
                        ))}
                    </div>
                </>
                :
                null
            }

        </>

    );
}

export default Shortenbox;