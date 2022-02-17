
import VIDEO from "../../assets/moneyheist.mp4";

import './tvshows.styles.css';
const TVSHOW = () => {
  return (
    <div className="tvshows">

        <video autoPlay loop muted>
            <source src={VIDEO} type="video/mp4"/>
        </video>
    </div>
  );
};
export default TVSHOW;
