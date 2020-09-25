import React from 'react'
import { render, screen } from '@testing-library/react'
import { unmountComponentAtNode } from "react-dom"
import {savedData} from '../../data/data'
import {GroupCard} from './GroupCard'

test('renders a group card', () => {
  render(<GroupCard group={savedData.groups[0]} selected={false} />)
  const header = screen.getByText(savedData.groups[0].name.toUpperCase())
})

test('passes group select event when image is clicked', () => {
  const handleClick = jest.fn()
  render(<GroupCard group={savedData.groups[0]} selected={handleClick} />)
  const image = screen.getByLabelText(savedData.groups[0].name)
  image.dispatchEvent(new MouseEvent("click", { bubbles: true }))
  expect(handleClick).toHaveBeenCalledTimes(1)
})
