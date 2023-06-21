
import './cardComponent.css'
import BrandRecognition from '../../assets/icon-brand-recognition.svg'
import DetailedRecords from '../../assets/icon-detailed-records.svg'
import FullCustomizable from '../../assets/icon-fully-customizable.svg'
import Col from 'react-bootstrap/esm/Col'
import Row from 'react-bootstrap/esm/Row'

function CardCompontent({ title, content, imgsource }) {
    const customStyles = {
        backgroundImage: `url(${imgsource})`,
        height: '50px',
        width: '50px',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',

    }
    return (
        <div className='card'>
            <div className='logo-container d-flex justify-content-center align-items-center'>
                <div className='logo' style={customStyles} />
            </div>
            <div className='content-container'>
                <p className='title mx-4'>{title}</p>
                <p className='content mx-4 text-muted'>{content}</p>
            </div>
        </div >
    );
}

export default CardCompontent;