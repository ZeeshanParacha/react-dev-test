import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { fetchContacts } from '../redux/actions/contacts';
import CustomButton from '../components/button'
import {  useDispatch } from 'react-redux'
import { setCountry } from '../redux/actions/contacts'

const style = {
    container: {
        background: "#fff",
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        height: '100vh'
    },
}
const HomePage = ({ history }) => {
    const dispatch = useDispatch()
    return (
        <>
            <div style={style.container}>
                <CustomButton className='btn1' color='primary' label='Button A' doSomethingAmazing={() => { history.push('/all-countries'); dispatch(setCountry('All')) }} />
                <CustomButton className='btn2' color='secondary' label='Button B' doSomethingAmazing={() => { history.push('/us-countries'); dispatch(setCountry('US')) }} />
            </div>
        </>
    )
}



export default HomePage;