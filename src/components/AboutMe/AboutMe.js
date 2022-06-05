import './AboutMe.css';
import photo from '../../images/photo.jpg'
import Portfolio from '../Portfolio/Portfolio';

function AboutMe() {
  return (
    <section className={'about-me'} id='AboutMe'>
      <div className={'section section_type_about-me'}>
        <h2 className={'section__heading section__heading_type_about-me'}>Студент</h2>
        <div className={'about-me__info'}>
          <article className={'about-me__info-article'}>
            <h3 className={'about-me__info-name'}>Шандор</h3>
            <h4 className={'about-me__info-job'}>Фронтенд-разработчик, 26 лет.</h4>
            <p className={'about-me__info-bio'}>
              Привет! Изучаю фронтенд уже год. Надеюсь устроиться фронтенд разработчиком
              после выпуска из Яндекс.Практикума. Кроме этого, тоже изучал Python, но на
              нем я только создал базовый чат-бот в Дискорде.
            </p>
            <nav className={'about-me__info-links'}>
              <a className={'about-me__info-link'} href={'https://facebook.com'}>Facebook</a>
              <a className={'about-me__info-link'} href={'https://github.com/SandorTeleki'}>GitHub</a>
            </nav>
          </article>
          <img className={'about-me__info-photo'} alt={'Фото студента'} src={photo}/>
        </div>
        <Portfolio />
      </div>
    </section>
  )
}

export default AboutMe;