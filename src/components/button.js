import React, { useEffect } from 'react'
import Button from 'react-bootstrap/Button';

const CustomButton = ({ doSomethingAmazing, color, label, className }) => {
    return (
        <Button
            variant={color || 'primary'}
            onClick={doSomethingAmazing}
            className={className}
        >
            {label || 'Button'}
        </Button>
    )
}


export default CustomButton;