import React, { Component } from 'react'
import Select from 'react-select'

const typeOptions = [
  { value: 'Colorless', label: 'Colorless' },
  { value: 'Darkness', label: 'Darkness' },
  { value: 'Dragon', label: 'Dragon' },
  { value: 'Fairy', label: 'Fairy' },
  { value: 'Fighting', label: 'Fighting' },
  { value: 'Fire', label: 'Fire' },
  { value: 'Grass', label: 'Grass' },
  { value: 'Lightning', label: 'Lightning' },
  { value: 'Metal', label: 'Metal' },
  { value: 'Psychic', label: 'Psychic' },
  { value: 'Water', label: 'Water' }
]

const Types = () => (
  <Select options={typeOptions}
  placeholder="Select Type"
  />
)

export default typeOptions
