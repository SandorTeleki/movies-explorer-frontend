import './SearchForm.css';
import { useLocation } from 'react-router-dom';
import useForm from '../../utils/useForm';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import {useMemo} from 'react';
import {useEffect} from 'react';

function SearchForm({ isShortMovies, onToggle, onSearchMovies, searchCount, onSearchSavedMovies, disabled}) {
  const location = useLocation();
  const initialValues = useMemo(()=> {
    return {searchInput: ''}
  }, []);
  const validator = useForm(initialValues);
  const validatorForSavedMovies = useForm(initialValues);
  const isFormValid = validator.isValid;

  useEffect(() => {
    validator.setValues((prev) => ({...prev, searchInput: localStorage.getItem('searchInput')}) || '');
  }, [searchCount])

  function handleFormSubmit(e) {
    e.preventDefault();
    onSearchMovies(validator.values.searchInput, isFormValid, isShortMovies);
  }

  function handleSavedMoviesFormSubmit(e) {
    e.preventDefault()
    onSearchSavedMovies(validatorForSavedMovies.values.searchInput, isShortMovies, validatorForSavedMovies.resetForm);
  }

  if ((location.pathname === '/movies' || location.pathname === '/')) {
    return (
      <form 
        className={'search-form'}
        name={'search-form'}
        noValidate={true} onSubmit={handleFormSubmit}>
        <div className={'section section_type_search-form'}>
          <div className={'search-form__main'}>
            <input 
              className={'search-form__input'}
              type={'text'}
              placeholder={'Фильмы'}
              required={true}
              name={'searchInput'}
              value={validator.values.searchInput || ''}
              onChange={validator.handleChange}/>
            <button
              className={'search-form__submit-button'}
              aria-label={'Кнопка поиска фильмов'}
              type={'submit'}>
              {}
            </button>
          </div>
          <FilterCheckbox 
            isShortMovies={isShortMovies}
            onToggle={onToggle}/>
        </div>
      </form>)
  } else if (location.pathname === '/saved-movies') {
    return (
      <form 
        className={'search-form'}
        name={'search-form'}
        noValidate={true} onSubmit={handleSavedMoviesFormSubmit}>
      <div className={'section section_type_search-form'}>
        <div className={'search-form__main'}>
          <input 
            className={'search-form__input'}
            type={'text'}
            placeholder={'Фильмы'}
            required={true}
            name={'searchInput'}
            disabled={disabled}
            value={validatorForSavedMovies.values.searchInput || ''}
            onChange={validatorForSavedMovies.handleChange}/>
          <button 
            className={'search-form__submit-button'}
            aria-label={'Кнопка поиска фильмов'}
            disabled={disabled}
            type={'submit'}>
            {}
          </button>
        </div>
        <FilterCheckbox 
          isShortMovies={isShortMovies}
          onToggle={onToggle}
          disabled={disabled}/>
      </div>
    </form>)
  }
  return null
}

export default SearchForm;