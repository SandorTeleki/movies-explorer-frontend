import './Promo.css';

function Promo() {
  return (
    <section className={'promo'}>
      <div className={'section section_type_promo'}>
        <h1 className={'promo__heading'}>Учебный проект студента факультета Веб-разработки.</h1>
        <nav className={'promo__navigation'}>
            <a
              className={'promo__link'}
              rel={'noreferrer'}
              href={'#aboutproject'}
              target={'_self'}>
              О проекте
            </a>
            <a  
              className={'promo__link'}
              rel={'noreferrer'}
              href={'#techs'}
              target={'_self'}>
              Технологии
            </a>
            <a
              className={'promo__link'}
              rel={'noreferrer'}
              href={'#student'}
              target={'_self'}>
              Студент
            </a>
        </nav>
      </div>
  </section>
  )
}

export default Promo;