import React, { Component } from 'react';
import TagsInput from 'react-tagsinput'
import Autosuggest from 'react-autosuggest'

function states () {
  return [
    {name: 'AU' },
    {name: 'ER (Established Relationship)' },
    {name: 'Hurt/comfort' },
    {name: 'POV' },
    {name: 'PWP' },
    {name: 'Songfic' },
    {name: 'Ангст' },
    {name: 'Антиутопия' },
    {name: 'Даркфик' },
    {name: 'Детектив' },
    {name: 'Драма' },
    {name: 'Дружба' },
    {name: 'Занавесочная история' },
    {name: 'Злобный автор' },
    {name: 'Исторические эпохи' },
    {name: 'Любовь/Ненависть' },
    {name: 'Мистика' },
    {name: 'Мифические существа' },
    {name: 'Нестандартная поэзия' },
    {name: 'Омегаверс' },
    {name: 'Пародия' },
    {name: 'Первый раз' },
    {name: 'Повседневность' },
    {name: 'Попаданцы' },
    {name: 'Постапокалиптика' },
    {name: 'Пропущенная сцена' },
    {name: 'Психология' },
    {name: 'Романтика' },
    {name: 'Соулмейты' },
    {name: 'Стёб' },
    {name: 'Стихи' },
    {name: 'Ужасы' },
    {name: 'Учебные заведения' },
    {name: 'Фантастика' },
    {name: 'Философия' },
    {name: 'Флафф' },
    {name: 'Фэнтези' },
    {name: 'Эксперимент' },
    {name: 'Экшн (action)' },
    {name: 'Юмор' }
  ]
}

class AutocompleteExample extends Component {
  constructor () {
    super()
    this.state = {tags: []}
  }

  handleChange (tags) {
    this.setState({tags})
  }

  render () {
    function autocompleteRenderInput ({addTag, ...props}) {
      const handleOnChange = (e, {newValue, method}) => {
        if (method === 'enter') {
          e.preventDefault()
        } else {
          props.onChange(e)
        }
      }

      const inputValue = (props.value && props.value.trim().toLowerCase()) || ''
      const inputLength = inputValue.length

      let suggestions = states().filter((state) => {
        return state.name.toLowerCase().slice(0, inputLength) === inputValue
      })

      return (
        <Autosuggest
          ref={props.ref}
          suggestions={suggestions}
          shouldRenderSuggestions={(value) => value && value.trim().length > 0}
          getSuggestionValue={(suggestion) => suggestion.name}
          renderSuggestion={(suggestion) => <span>{suggestion.name}</span>}
          inputProps={{...props, onChange: handleOnChange}}
          onSuggestionSelected={(e, {suggestion}) => {
            addTag(suggestion.name)
          }}
          onSuggestionsClearRequested={() => {}}
          onSuggestionsFetchRequested={() => {}}
        />
      )
    }

    return <TagsInput renderInput={autocompleteRenderInput} value={this.state.tags} onChange={::this.handleChange} />
  }
}

export default AutocompleteExample
