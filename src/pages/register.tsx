import { render } from '@testing-library/react';
import React from 'react';

function Register() {
    
    return(
        <main className="register">
            <section className='content-form'>
                <div className='inner-content'>
                    <h1>
                        Sign Up
                    </h1>

                    <form>
                        <div className='form-group'>
                            <label htmlFor='name'>
                                Username
                            </label>
                            <input type='text' id='name' className='form-control' />
                        </div>
                        <div className='form-group'>
                            <label htmlFor='email'>
                                Email
                            </label>
                            <input type='text' id='email' className='form-control' />
                        </div>
                        <div className='form-group'>
                            <label htmlFor='password'>
                                Password
                            </label>
                            <input type='password' id='password' className='form-control' />
                        </div>

                        <button type="button" className="button">
                            Sign Up
                        </button>
                    </form>
                </div>
            </section>
        </main>
    )
}

export default Register;