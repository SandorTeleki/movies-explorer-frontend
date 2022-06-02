import './Promo.css';

function Promo() {
  return (
    <div className={'promo'}>
      <div className={'section section_type_promo'}>
        <h1 className={'promo__heading'}>Учебный проект студента факультета Веб-разработки.</h1>
        <nav className={'promo__navigation'}>
          <a href="#AboutProject" className={'promo__link'}>
            О проекте
          </a>
          <a href="#Techs" className={'promo__link'}>
            Технологии
          </a>
          <a href="#AboutMe" className={'promo__link'}>
            Студент
          </a>
        </nav>
      </div>
  </div>
  )
}

export default Promo;