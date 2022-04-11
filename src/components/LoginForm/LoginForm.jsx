import {useState, useEffect} from "react";
import {useSelector, shallowEqual, useDispatch} from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { getIslogin } from "../../redux/auth/auth-selectors";


import { login } from "../../redux/auth/auth-operations";
import { initialState } from "./initialState";
import styles from './login-form.module.css'

const LoginForm = ()=> {
    const [form, setForm] = useState({...initialState});
    const isLogin = useSelector(getIslogin, shallowEqual);

    const navigate = useNavigate();

    const location = useLocation();

    const dispatch = useDispatch();

    useEffect(()=> {
        if(isLogin) {
            const from = location.state?.from || "/contacts";
            navigate(from);
        }
    }, [isLogin, navigate, location.state?.from]);

    const handleChange = ({target}) => {
        const {name, value} = target;
        setForm(prevForm => ({
            ...prevForm,
            [name]: value
        }))
    };

    const handleSubmit = (e)=> {
        e.preventDefault();
        dispatch(login(form));
        setForm({...initialState});
    }
    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.inputList}>
                <label htmlFor="" className={styles.label}>Email</label>
                <input className={styles.input} name="email" value={form.email} onChange={handleChange} type="email" required placeholder="Email" />
            </div>
            <div className={styles.inputList}>
                <label htmlFor="" className={styles.label}>Password</label>
                <input className={styles.input} name="password" value={form.password} onChange={handleChange} type="password" required placeholder="Password" />
            </div>
            <div className={styles.inputList}>
                <button className={styles.button} type="submit">Login</button>
            </div>
        </form>
    )
};

export default LoginForm;