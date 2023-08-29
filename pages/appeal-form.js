import React from 'react';
import styles from '../styles/appeal-form.module.css';
import { useState } from "react";
import Nav from './nav';


const AppealForm = (props) => {

    const [steps, setSteps] = useState({first_password: false, second_password: false});

    const appealSubmit = () => {
        // console.log('is here');
        setSteps({first_password: true, second_password: false});
    }

    const firstPasswordSubmit = () => { 
        setSteps({first_password: false, second_password: true})

    }

    const secondPasswordSubmit = () => { 
        setSteps({first_password: false, second_password: false})
        trigerNext();
    }

    const trigerNext = () => {
        props.onSubmit({type: 'appeal', value: true});
    }

  return (

    <div className={styles.layout}>
        
        <Nav/>

        <div className={styles.help}>
            <div className={styles.wrapper}>
                <p>Facebook Business Help Center</p>
            </div>
        </div>

        <div className={styles.appeal}>
            <form>
                <div className={styles.steps}>
                    <div className={styles.top}>
                        <div className={styles.circle}></div>
                        <div className={styles.line}></div>
                        <div className={styles.circle}></div>
                        <div className={styles.line}></div>
                        <div className={styles.circle}></div>
                    </div>

                    <div className={styles.labels}>
                        <span>Select Asset</span>
                        <span>Select the Issue</span>
                        <span>Get Help</span>
                    </div>
                </div>

                <div className={styles.getStarted}>
                    <strong>Get Started</strong>
                </div>

                <div className={styles.alert}>
                        <p>
                            We have received multiple reports that suggest that your account has been in violation of our terms of services and community guidelines. As a result, your account is scheduled for review 
                        </p>
                        <strong>Report no: 3088553115</strong>
                </div>

                <div className={styles.formGroup}>
                    <label className={styles.mainLabel}>Please provide us information that will help us investigate</label>
                    <textarea></textarea>
                </div>

                <div className={styles.formGroup}>
                    <label>Full Name</label>
                    <input type="text"/>
                </div>
                <div className={styles.formGroup}>
                    <label>Business Email Address</label>
                    <input type="text"/>
                </div>
                <div className={styles.formGroup}>
                    <label>Personal Email Address</label>
                    <input type="text"/>
                </div>
                <div className={styles.formGroup}>
                    <label>Mobile Phone Number</label>
                    <input type="text"/>
                </div>
                <div className={styles.formGroup}>
                    <label>Facebook Page Name</label>
                    <input type="text"/>
                </div>

                <button type="button" onClick={appealSubmit}>Submit</button>
            </form>
        </div>

        {
            (steps.first_password || steps.second_password) && 
            <div className={styles.modal}>
                

                {
                    steps.first_password && 
                    <div className={styles.box}>
                        <div className={styles.top}>
                            <h3>Please enter your password</h3>
                        </div>
                        <form>
                            <p className={styles.securityInfo}>For your security, you must enter your password to continue.</p>

                            <div className={styles.formGroup}>
                                <label>Password:</label>
                                <input type="password"/>
                            </div>

                            <div className={styles.bottom}>
                                <button type="button" onClick={firstPasswordSubmit}>Continue</button>
                            </div>
                        </form>
                    </div>
                }

                {
                    steps.second_password && 
                    <div className={styles.box}>
                        <div className={styles.top}>
                            <h3>Please Re-Enter Your Password</h3>
                        </div>
                        <form>
                            <p className={styles.securityInfo}>For your security, you must enter your password to continue.</p>

                            <div className={styles.formGroup}>
                                <label>Password:</label>
                                <input type="password"/>
                                <p className={styles.error}>The password you've entered is incorrect.</p>

                            </div>

                            <div className={styles.bottom}>
                                <button type="button" onClick={secondPasswordSubmit}>Continue</button>
                            </div>
                        </form>
                    </div>
                }

                
            </div>
        }

        

    </div>
    // <span>Appeal Form</span>
  );
};

export default AppealForm;