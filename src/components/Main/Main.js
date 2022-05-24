
import './Main.css';
import Promo from '../Promo/Promo';
import AboutProject from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';
import AboutMe from '../AboutMe/AboutMe';

function Main({isLoggedIn}) {
  if (!isLoggedIn) {
    return (
        <main>
            <Promo/>
            <AboutProject id="AboutProject"/>
            <Techs id="Techs"/>
            <AboutMe id="AboutMe"/>
        </main>)
  }
  return null
}

export default Main;