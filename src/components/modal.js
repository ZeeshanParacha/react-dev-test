import React from 'react'
import { Modal, Spinner } from "react-bootstrap";
import { Scrollbars } from 'react-custom-scrollbars';
import CustomButton from './button'
import { useSelector, useDispatch } from 'react-redux'

const style = {
    centered: {
        display: 'flex',
        justifyContent: 'space-evenly',
        padding: '20px 0px'
    },
    paragraph: {
        padding: '0px',
        margin: '2px',
    }
}


const MyVerticallyCenteredModal = (props) => {
    const contacts = useSelector(state => state.contacts.contacts)
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    {props.heading}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body >
                <div style={style.centered}>
                    <CustomButton className='btn1' color='primary' label='All Contacts' doSomethingAmazing={props.getcountries} />
                    <CustomButton className='btn2'color='danger' label='US Contacts' doSomethingAmazing={props.getUsCountries} />
                    <CustomButton className='btn3' color='warning' label='Close' doSomethingAmazing={props.onHide} />
                </div>
            </Modal.Body>
            {<Scrollbars
                style={{ width: 500, height: 300, margin: 'auto' }}
                onScrollFrame={(event) => props.handleScrollFrame(event)}
            >
                <div ref={props.refProp}>
                    {contacts && Object.keys(contacts).map(key => {
                        const _id = contacts[key].id;
                        const first_name = contacts[key].first_name;
                        return _id && first_name && <div key={_id} style={style.centered}>
                            <p style={style.paragraph}>{_id}</p>
                            <p style={style.paragraph}>{first_name}</p>
                        </div>
                    })}
                </div>

                {props.loading && <div style={style.centered}>
                    <Spinner animation="border" />
                </div>}
            </Scrollbars>}
        </Modal>
    );
}


export default MyVerticallyCenteredModal;