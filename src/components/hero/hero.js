import './hero.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';

import Heroimage from '../../assets/illustration-working.svg'


function Hero() {
    return (
        <div className='herobackground'>
            <Container >
                <Row>
                    <Col>
                        <h1>More than just <br />shorter links</h1>
                        <p className='text-muted'>Build your brand's recognition and get detailed insights on how your links are performed</p>
                        <Button className='startedbtn'>Get Stared</Button>
                    </Col>
                    <Col>
                        {/* <div className='herobackground' /> */}
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Hero;