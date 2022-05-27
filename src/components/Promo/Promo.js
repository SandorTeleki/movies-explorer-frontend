import './Promo.css';

function Promo() {
  return (
    <div className={'promo'}>
      <div className={'section section_type_promo'}>
        <h1 className={'promo__heading'}>Учебный проект студента факультета Веб-разработки.</h1>
        <div className={'promo__navigation'}>
          <div className={'promo__link'}>О проекте</div>
          <div className={'promo__link'}>Технологии</div>
          <div className={'promo__link'}>Студент</div>
        </div>
      </div>
  </div>
  )
}

export default Promo;