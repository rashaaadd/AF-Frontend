import styles from './SetUpRequest.module.css'
import CustomButton from '../Button/Button'

const SetUpRequest = () => {
  return (
    <div className={styles.SetUpRequest}>
        <h6 >
          You need to set up your account before proceeding.
        </h6>
        <div className='d-flex flex-column gap-4 mt-4'>
          <CustomButton title='Setup MFA' style={{ backgroundColor: "#FF5E06", color: "white" }} fullWidth={true} onClick={()=>console.log("Set up MFA")} />
          <CustomButton title='Back' variant='outlined' style={{ color: "#FF5E06", outline: "1px solid #FF5E06", border: "none" }} fullWidth={true} onClick={() => console.log("Back")} />
        </div>
    </div>
  )
}

export default SetUpRequest