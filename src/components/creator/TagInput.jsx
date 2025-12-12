import { useState } from 'react'
import PropTypes from 'prop-types'

const TagInput = ({ tags = [], onTagsChange, disabled = true }) => {
  const [inputValue, setInputValue] = useState('')

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && inputValue.trim() && !disabled) {
      e.preventDefault()
      if (!tags.includes(inputValue.trim())) {
        onTagsChange([...tags, inputValue.trim()])
      }
      setInputValue('')
    }
  }

  const removeTag = (tagToRemove) => {
    if (!disabled) {
      onTagsChange(tags.filter((tag) => tag !== tagToRemove))
    }
  }

  return (
    <div className="space-y-2">
      <div className="flex flex-wrap gap-2 mb-2">
        {tags.map((tag, index) => (
          <span key={index} className="lofi-tag">
            {tag}
            {!disabled && (
              <button
                type="button"
                onClick={() => removeTag(tag)}
                className="ml-1 hover:text-lofi-rust transition-colors"
              >
                ×
              </button>
            )}
          </span>
        ))}
      </div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Escribe un tag y presiona Enter"
        disabled={disabled}
        className="lofi-input w-full"
      />
      {disabled && (
        <p className="text-xs text-lofi-textLight">
          Los tags no son funcionales en esta version MVP
        </p>
      )}
    </div>
  )
}

TagInput.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string),
  onTagsChange: PropTypes.func,
  disabled: PropTypes.bool
}

export default TagInput
