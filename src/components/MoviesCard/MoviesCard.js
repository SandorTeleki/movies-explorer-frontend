import './MoviesCard.css';
import {useLocation} from 'react-router-dom';

function MoviesCard({imageLink, heading, duration, isLiked, onLike}) {
  const location = useLocation();
  return (
    <div className={'movies-card'}>
        <div className={'movies-card__description'}>
            <h3 className={'movies-card__heading'}>
                {heading}
            </h3>
            <p className={'movies-card__duration'}>{duration}</p>
        </div>
        <a className={'movies-card__trailer-link'}
         target={'_blank'}
         rel='noreferrer'
         href={'https://youtube.com'}>
            <img 
                className={'movies-card__image'}
                alt={`Обложка фильма: ${heading}`}
                src={imageLink}/>
        </a>
        <div className={'movies-card__reaction'}>
            {location.pathname === '/saved-movies' ? 
                <button
                    type={'button'}
                    className={'movies-card__button movies-card__button_type_delete'}
                    aria-label={'Удаление фильма из списка сохраненных фильмов'}>
                    {}
                </button> :
                <button 
                    type={'button'}
                    aria-label={'Сохранения фильма в список сохраненных фильмов'}
                    className={`movies-card__button movies-card__button_type_like ${isLiked && 'movies-card__button_type_like_liked'}`}
                    onClick={onLike}>
                    {}
                </button>}
        </div>
    </div>)
}

export default MoviesCard;