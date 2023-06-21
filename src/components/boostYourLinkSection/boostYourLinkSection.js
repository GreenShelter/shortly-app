
import './boostYourLinkSection.css'
import Container from 'react-bootstrap/esm/Container';
import Button from 'react-bootstrap/esm/Button';

function BoostYourLinkSection() {
    return (
        <div className='boost-background'>
            <Container>
                <div className='boost-container text-center'>
                    <p className='boost-title'>Boost your links today</p>
                    <Button className='startedbtn '>Get Stared</Button>
                </div>
            </Container >
        </div>

    );
};

export default BoostYourLinkSection;