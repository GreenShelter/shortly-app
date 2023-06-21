import Shortenbox from '../shorten-link-box/shorten-link-box';
import Container from 'react-bootstrap/esm/Container';
import './advanceStatisticSection.css'
import CardCompontent from '../cardComponent/cardComponent';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import BrandRecognition from '../../assets/icon-brand-recognition.svg'
import DetailedRecords from '../../assets/icon-detailed-records.svg'
import FullCustomizable from '../../assets/icon-fully-customizable.svg'



function AdvanceStatistic() {
    return (
        <>
            <div className='background'>
                <Container className='advanced'>
                    <div className='d-flex justify-content-center'>
                        <Shortenbox />
                    </div>
                    <div className='advanced-statistics my-5'>
                        <h2 className='text-center'>Advanced Statistics</h2>
                        <p className='text-center text-muted'>Track how your links are performing across the web with <br /> our advanced statistics dashboard.</p>
                    </div>
                    <div className='card-boxes'>
                        <Row>
                            <div className='d-flex justify-content-center position-relative'>
                                <div className='connector' />
                            </div>
                            <Col>
                                <CardCompontent
                                    title='Brand Recognition'
                                    content='Boost your brand recognition with each click. Generic links dont mean a thing. Branded links helps instil confidence in your content.'
                                    imgsource={BrandRecognition}
                                />
                            </Col>
                            <Col className='detailed-records-box'>
                                <CardCompontent
                                    title='Detailed Records'
                                    content='Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.'
                                    imgsource={DetailedRecords}
                                />
                            </Col>
                            <Col className='full-customizable-box'>
                                <CardCompontent
                                    title='Fully Customizable'
                                    content='Imporve brand awareness and content discoverability through cusomizable links, supercharging audience engagement.'
                                    imgsource={FullCustomizable}
                                />
                            </Col>
                        </Row>
                    </div>
                </Container>
            </div>
      
        </>
    );
}

export default AdvanceStatistic;