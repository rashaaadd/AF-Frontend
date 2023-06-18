import styles from './Login.module.css'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { AuthLLayerArgs, loginFormArgs } from '../../types/typesDef';
import { hideLoading, showLoading } from '../../redux/alertSlice';
import { loginFunction } from '../../api/apiCalls';
import { toast } from 'react-toastify';
import CustomButton from '../Button/Button';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { FormEvent, useState } from 'react';

const Login = ({ type, setType }: AuthLLayerArgs) => {
  const [passVisibility, setPassVisibility] = useState(false);
  const [formData, setFormData] = useState<loginFormArgs>({
    email: '',
    password: ''
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handlePassVisibility = () => {
    const element: any = document.getElementById('password')
    if (passVisibility) {
      element.type = "password"
      setPassVisibility(false)
    } else {
      element.type = "text"
      setPassVisibility(true)
    }
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(formData, 'formData');
    dispatch(showLoading());
    loginFunction(formData).then((res: any) => {
      dispatch(hideLoading())
      setType('MFAVerification')
      navigate('/home');
    }).catch((err: any) => {
      dispatch(hideLoading())
      if (err.response.data.detail) {
        return toast.error(err.response.data.detail)
      }
      console.log(err);
      toast.error(err.response.data.message)
    })
  }
  return (
    <>
      <h4 className={styles.title}>Nice to see you again.</h4>
      <form action="">
        <div className={styles.inputContainer}>
          <label className={styles.infoLabel} htmlFor="email">Email*</label>
          <input
            type="email"
            placeholder="abcd@qwerty.com"
            className={styles.infoInput}
            name="email"
            onChange={(e) => { setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value })) }}
            required
          />
        </div>

        <div className={styles.inputContainer}>
          <label className={styles.infoLabel} htmlFor="password">Password*</label>
          <div className='d-flex align-items-center'>
            <input
              type="password"
              placeholder="Min. 8 characters"
              className={styles.infoInput}
              id='password'
              name="password"
              onChange={(e) => { setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value })) }}
              required
            />
            {passVisibility ? (<VisibilityOffIcon onClick={handlePassVisibility} className={styles.faIcon} />) : (<VisibilityIcon onClick={handlePassVisibility} className={styles.faIcon} />)}
          </div>
        </div>
        <div className='mt-3 d-flex justify-content-end'>
          <p className={styles.textSpan2} onClick={() => navigate('/recover-password')}>Forgot password?</p>
        </div>

        <div className="d-grid gap-2">
          <CustomButton variant='contained' style={{ width: "100%", backgroundColor: "#FF5E06", color: "white" }} fullWidth={true} title={"Continue"} onClick={handleSubmit} />
        </div>
      </form>
    </>
  )
}

export default Login;
