import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CtaStyle = `
    color: #fff;
    padding: 1rem 1.5rem;
    text-align: center;
    position: relative;
    background-image: linear-gradient(45deg, #d81e5b 10%, var(--main-orange));
    z-index: 1;
    font-weight: 400;
    border: none;
`;
const CtaBeforeStyle = `
    position: absolute;
    content: "";
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-image: linear-gradient(45deg, #9c27b0 50%, #d81e5b);
    z-index: -1;
    transition: opacity 0.5s linear;
    opacity: 0;
`
const CtaHoverBeforeStyle = `
    opacity: 1;
`

const EmailForm2 = () => {
    const [serverState, setServerState] = useState({
        sending: false,
        status: null
    });
    const [fieldErrors, setFieldErrors] = useState({
        email: null,
        message: null
    });
    const [inputs, setInputs] = useState({
        email: '',
        message: ''
    });
    const validityRules = {
        email: val => !(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)),
        message: val => !val
    };
    const validate = () => {
        let err = {
            emailErr: validityRules.email(inputs.email),
            msgErr: validityRules.message(inputs.message),
        }
        setFieldErrors(prev => ({
            ...prev,
            email: err.emailErr,
            message: err.msgErr
        }))
        let hasErrors = true;
        if (!err.emailErr && !err.msgErr) {
            hasErrors = false;
        }
        return hasErrors;
    }
    const renderErrors = (field) => {
        if (fieldErrors[field]) {
            if (field === 'email') {
                return <p className="error">Please enter a valid email.</p>
            } else {
                return <p className="error">Please add a message.</p>
            }
        }
    }

    const handleOnChange = event => {
        event.persist();
        setInputs(prev => ({
            ...prev,
            [event.target.id]: event.target.value
        }));
    };

    const handleServerResponse = (ok, msg) => {
        setServerState({
            sending: false,
            status: { ok, msg }
        });
        console.log(msg);
        if (ok) {
            setFieldErrors({});
            setInputs({
                email: '',
                message: ''
            })
        }
    };

    const handleFormSubmit = e => {
        e.preventDefault();
        if (validate()) {
            return
        }
        setServerState({ sending: true });
        const form = e.target;
        axios({
            method: 'post',
            url: 'https://formspree.io/mbjllqae',
            data: new FormData(form)
        })
            .then(resp => {
                handleServerResponse(true, 'Message sent. Thanks!');
            })
            .catch(resp => {
                console.log(resp.response);
                handleServerResponse(false, resp.response.data.error, form);
            });
    };
    return (
        <div className="formContainer">
            <h2>GET IN TOUCH</h2>
            <form onSubmit={handleFormSubmit} noValidate>
            {serverState.status && (
                    <p className={!serverState.status.ok ? "errorMsg" : ""}>{serverState.status.msg}</p>
                )}
                <label htmlFor='email'>Email</label>
                <input
                    value={inputs.email}
                    onChange={handleOnChange}
                    id='email'
                    type='email'
                    name='email'
                    noValidate
                    autoComplete="off"
                    required
                    />
                {renderErrors("email")}
                <label htmlFor='message'>Message</label>
                <textarea
                    value={inputs.message}
                    onChange={handleOnChange}
                    id='message'
                    type='text'
                    name='message'
                    rows='2'
                    noValidate
                    required
                />
                {renderErrors('message')}
                <button type='submit' disable={serverState.sending.toString()} 
                >SEND</button>
            </form>
            <style jsx>{`
                .formContainer {
                    padding-top: .2rem;
                }
                form {
                  display: flex;
                  flex-direction: column;
                  justify-content: flex-start;
                  align-items: space-between;
                  padding-bottom: 1rem;
                }
                form label {
                  text-align: left;
                }
                label, button {
                  margin-top: 1rem;
                }
                input, textarea {
                  margin-top: .5rem;
                }
                form textarea {
                  resize: vertical;
                }
                button {
                    ${CtaStyle}
                    margin-top: 2rem;
                }
                button::before {
                    ${CtaBeforeStyle}
                }
                button:hover::before {
                    ${CtaHoverBeforeStyle}
                }
            `}</style>
        </div>
    )
}

export default EmailForm2;
