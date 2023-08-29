// import styles from '../styles/security-check.module.css';
import Nav from './nav';
import styles from '../styles/check-point.module.css';



const CheckPoint = () => {
  return (
    <div>
        <Nav/>

        <div className={styles.container}>
            <div className={styles.box}>
                <div className={styles.section}>
                    <strong>Choose a way to confirm it's you</strong>
                </div>
                <div className={styles.section}>
                    <p>Your account has two-factor authentication switched on, which requires this extra login step.</p>
                </div>

                <div className={styles.section}>
                    <strong>Approve from another device</strong>
                    <p>
                    We sent a notification to your Device. Check your Facebook notifications there and approve the login to continue.
                    </p>
                </div>

                <div className={styles.section}>
                    <strong>Or, enter your login code</strong>
                    <p>
                        Enter the 6-digit code from the authentication app you set up.
                    </p>
                    <input type="text" placeholder="Login code" className={styles.code} />
                </div>

                <div className={styles.bottom}>
                    <a>Need another way to confirm it's you?</a>
                    <button className={styles.btn}>Submit code</button>
                </div>

            </div>
        </div>

    </div>
  );
};

export default CheckPoint;