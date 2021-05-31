import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useStateValue } from '../contextAPI/StateProvider';
import axios from 'axios';

import ScaleLoader from "react-spinners/ScaleLoader";
import swal from 'sweetalert';

import '../css/Validate.css';

const Validate = () => {
    const { client } = useParams();
    const [{ images, API_URL }, dispatch] = useStateValue();
    const [loading, setLoading] = useState(true);
    const [submitSuccess, setSubmitSuccess] = useState(false);
    const [responseAnimation, setResponseAnimation] = useState('');

    const validate = () => {
        if (client !== '' && client !== null){
            axios.post(
                `${API_URL}/1.0/client/validate`,
                {
                    data: {
                        cid: client
                    }
                }
            ).then(response => {
                if (response.status === 200){
                    // Close loaing and display success response
                    setLoading(false);
                    setSubmitSuccess(true);
                }
            }).catch(error => {
                // Close loaing and display error response
                setLoading(false);
                console.log(error);
            })
        }else{
            // Close loaing and display error response
            setLoading(false);
            console.log('No data provided');
        }
    }

    useEffect(() => {
        validate();
        setResponseAnimation(swal({
            title: 'Failed',
            text: 'Password reset failed!',
            icon: 'error',
            className: 'error__note',
            button: {text: 'Retry'}
        }).then(() => {
            window.location = "/reset";
        }));
    }, [])
    
    useEffect(() => {

        if (submitSuccess){
            setResponseAnimation(swal({
                title: 'Success',
                text: 'Password reset successful!',
                icon: 'success',
                className: 'success__note',
                button: {text: 'Ok'}
            }).then(() => {
                window.location = "/";
            }));
        }
    }, [submitSuccess])

    return (
        <div className="processor">
            {
                loading ? (
                    <div className="validate__loadingContain">
                        <ScaleLoader color="#fff" size={100} height={20} />
                        <h3>Process...</h3>
                    </div>
                ) : (
                    <div className="validate__container">
                        {
                            responseAnimation
                        }
                    </div>
                )
            }
        </div>
    )
}

export default Validate
