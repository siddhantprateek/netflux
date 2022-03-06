import './profile.style.css';
import { Avatar } from '../../assets';


const Profile = () => {
    return (
        <div className="manage-profile">
            <div className='profiles'>
                <img className='pr-avatar' src={Avatar} alt="" />
                <img className='pr-avatar' src={`https://pro2-bar-s3-cdn-cf.myportfolio.com/dddb0c1b4ab622854dd81280840458d3/877ad1ce3a479ef9498e1efc_rw_600.png?h=794db6a6ae01c539fdfb7ad5e5a89589`} alt="" />
                <img className='pr-avatar' src={`https://mir-s3-cdn-cf.behance.net/project_modules/disp/84c20033850498.56ba69ac290ea.png`} alt="" />
                <div className='add-profile'>
                    <img src={`http://cdn.onlinewebfonts.com/svg/img_28512.png`} height="60rem" alt="" />
                    <p>Add Profile</p>
                </div>

            </div>

        </div>
    )
}

export default Profile