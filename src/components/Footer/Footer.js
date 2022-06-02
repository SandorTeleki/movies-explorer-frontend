import './Footer.css';
import {useLocation, Link } from 'react-router-dom';

function Footer() {
  const location = useLocation();
  if (location.pathname === '/' || location.pathname === '/saved-movies' || location.pathname === '/movies') {
    return (
      <footer className='footer'>
        <div className='section section_type_footer'>
          <p className='footer__heading footer-text'>Учебный проект Яндекс.Практикум х BeatFilm.</p>
          <div className='footer__links-copyright-element'>
            <span className='footer__copyright footer-text'>&#64; 2022</span>
            <nav className='footer__social-icons'>
              <a href='https://practicum.yandex.ru' target='_blank'  rel="noreferrer" className='footer__social-icon footer-text'>Яндекс.Практикум</a>
              <a href='https://github.com/SandorTeleki' target='_blank'  rel="noreferrer" className='footer__social-icon footer-text'>GitHub</a>
              <a href='https://www.facebook.com/' target='_blank'  rel="noreferrer" className='footer__social-icon footer-text'>Facebook</a>
            </nav>
          </div>
        </div>
      </footer>
    )
  } else if (location.pathname === '/signup') {
    return (
      <footer className='footer'>
        <div className='section section_type_footer-signup'>
          <span className='footer__auth-text footer__auth-text_type_question'>Уже зарегистрированы?</span>
            <Link className='footer__auth-text footer__auth-text_type_link' to='/signin'>
                Войти
            </Link>
        </div>
      </footer>
    )
  } else if (location.pathname === '/signin') {
    return (
      <footer className='footer'>
        <div className='section section_type_footer-signup'>
          <span className='footer__auth-text footer__auth-text_type_question'>Еще не зарегистрированы?</span>
          <Link className='footer__auth-text footer__auth-text_type_link' to='/signup'>
              Регистрация
          </Link>
        </div>
      </footer>
    )
  }
  return null
}

export default Footer;