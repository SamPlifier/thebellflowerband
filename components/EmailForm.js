import React, { useState, useEffect } from 'react';
import axios from 'axios';

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
        <div>
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
                  color: #fff;
                  margin-top: 2rem;
                  background: #d81e5b;
                  padding: 1rem 1.5rem;
                  border: 2px solid #fff;
                }
            `}</style>
        </div>
    )
}

export default EmailForm2;
