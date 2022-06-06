import './MoviesCard.css';
import {useLocation} from 'react-router-dom';
import {MOVIE_IMAGE_BASE_URL, MINUTES_IN_HOUR} from '../../utils/utils';

function MoviesCard(props) {
  const location = useLocation();
  const {
    country,
    director,
    duration,
    year,
    description,
    trailerLink,
    nameRU,
    nameEN,
    id,
    onLike,
    onDislike
  } = props;
  const image = location.pathname === '/saved-movies' ? props.image : `${MOVIE_IMAGE_BASE_URL}${props.image.url}`;
  const thumbnail = location.pathname === '/saved-movies' ? props.thumbnail : `${MOVIE_IMAGE_BASE_URL}${props.image.formats.thumbnail.url}`;
  const isLiked = props.savedMovies.some((movie) => {
    return movie.movieId === id;
  });

  function displayDuration() {
    if (duration < MINUTES_IN_HOUR) {
      return duration
    }
    const hours = Math.floor(duration / MINUTES_IN_HOUR);
    const minutes = duration - (MINUTES_IN_HOUR * hours);
    return {hours, minutes}
  }

  function handleLike() {
    onLike({
      country,
      director,
      duration,
      year,
      description,
      image,
      trailerLink,
      thumbnail,
      nameRU,
      nameEN,
      id
    })
  }

  function handleDislike() {
    onDislike(props._id)
  }

  return (<div className={'movies-card'}>
    <a 
      className={'movies-card__trailer-link'}
      target={'_blank'}
      rel='noreferrer'
      href={trailerLink}><img className={'movies-card__image'}
      alt={`Обложка фильма: ${nameRU}`}
      src={`${image}`}/>
    </a>
    <div className={'movies-card__description'}>
      <h3 className={'movies-card__heading'}>
        {nameRU}
      </h3>
      {location.pathname === '/saved-movies' ? <button 
        type={'button'}
        className={'movies-card__button movies-card__button_type_delete'}
        onClick={handleDislike}
        aria-label={'Иконка удаление фильма из списка сохраненных фильмов'}>{}</button> :
        <button 
          type={'button'}
          aria-label={'Иконка сохранения фильма в список сохраненных фильмов'}
          className={`movies-card__button movies-card__button_type_like ${isLiked&& 'movies-card__button_type_like_liked'}`}
          onClick={handleLike}>{}</button>}
    </div>
    <p className={'movies-card__duration'}>
      {duration < MINUTES_IN_HOUR ? `${displayDuration()}м` : `${displayDuration().hours}ч ${displayDuration().minutes}м`}
    </p>
  </div>)

}

export default MoviesCard;