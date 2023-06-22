
import './footer.css'
import BrandRecognition from '../../assets/icon-brand-recognition.svg'
import DetailedRecords from '../../assets/icon-detailed-records.svg'
import FullCustomizable from '../../assets/icon-fully-customizable.svg'
import Col from 'react-bootstrap/esm/Col'
import Row from 'react-bootstrap/esm/Row'
import Logo from '../../assets/logo.svg'
import FacebookLogo from '../../assets/icon-facebook.svg';
import TwitterLogo from '../../assets/icon-twitter.svg';
import PinterestLogo from '../../assets/icon-pinterest.svg';
import InstagramLogo from '../../assets/icon-instagram.svg';
import Container from 'react-bootstrap/esm/Container'

function Footer() {

    return (
        <div className='footerbg'>
            <Container>
                <Row>
                    <Col lg='4'>
                        <img src={Logo} />
                    </Col>
                    <Col lg='4'>
                        <Row>
                            <Col lg='4'>
                                <ul>
                                    <li>Features</li>
                                    <li>Link Shortening</li>
                                    <li>Branded Links</li>
                                    <li>Analytics</li>
                                </ul>
                            </Col>
                            <Col lg='4'>
                                <ul>
                                    <li>Resources</li>
                                    <li>Blog</li>
                                    <li>Developers</li>
                                    <li>Support</li>
                                </ul>
                            </Col>
                            <Col lg='4'>
                                <ul>
                                    <li>Company</li>
                                    <li>About</li>
                                    <li>Our Team</li>
                                    <li>Careers</li>
                                    <li>COntact</li>
                                </ul>
                            </Col>
                        </Row>
                    </Col>
                    <Col lg='4'>
                        <Row>
                            <Col>
                                <img src={FacebookLogo} />
                            </Col>
                            <Col>
                                <img src={TwitterLogo} />
                            </Col>
                            <Col>
                                <img src={PinterestLogo} />
                            </Col>
                            <Col>
                                <img src={InstagramLogo} />
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div >
    );
}

export default Footer;