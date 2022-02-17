import './footer.styles.css';
import FB from '../../assets/socials/fb.png';
import Twitter from '../../assets/socials/twitter.png';
import INSTA from '../../assets/socials/insta.png';
import YT from '../../assets/socials/yt.png';



const Footer = () => {
    return (
        <footer className='footer'>
            <div className="socials">
                <img src={FB} alt="" />
                <img src={Twitter} alt="" />
                <img src={INSTA} alt="" />
                <img src={YT} alt="" />

            </div>
            <div className="links">
                <div className="linkto">
                    <a href="/">Audio and Subtitles</a>
                </div>
                <div className="linkto">
                    <a href="/">Audio Description</a>
                </div>
                <div className="linkto">
                    <a href="/">Help Center</a>
                </div>
                <div className="linkto">
                    <a href="/">Gift Card</a>
                </div>
                <div className="linkto">
                    <a href="/">Media Center</a>
                </div>
                <div className="linkto">
                    <a href="/">Investor Relations</a>
                </div>
                <div className="linkto">
                    <a href="/">Jobs</a>
                </div>
                <div className="linkto">
                    <a href="/">Terms of Use</a>
                </div>
                <div className="linkto">
                    <a href="/">Privacy</a>
                </div>
                <div className="linkto">
                    <a href="/">Legal Notice</a>
                </div>
                <div className="linkto">
                    <a href="/">Cookies Preferences</a>
                </div>
                <div className="linkto">
                    <a href="/">Corporate Information</a>
                </div>
                <div className="linkto">
                    <a href="/">Contact Us</a>
                </div>
            </div>
            <a href="https://github.com/siddhantprateek/netflux" target="__blank">
                <button className="serice-code">Source Code</button>
            </a>
            <div className="content">
            <p>©️ 2022, Netflux, Made with ❤️, by Siddhant</p>  
            </div>
        </footer>
)}

export default Footer;