import React from 'react'
import { getAllByRole, findByText, render, screen, fireEvent} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { unmountComponentAtNode } from "react-dom"
import App from './App'
import {savedData} from './data/data'

test('renders loading page', () => {
  render(<App testing={false} />)
  const images = screen.getAllByRole('img')
  // expect to find loading images  
  const svgImg = images[0]
  expect(svgImg).toHaveAttribute('height', '32')
  expect(svgImg).toHaveAttribute('width', '800')
})

test('renders loaded app', () => {
  render(<App testing={true} />)
  expect(screen.getByRole('heading')).toHaveTextContent(savedData.name)
})

test('renders carousel when image is clicked', () => {
  const {getByLabelText} = render(<App testing={true} />)
  fireEvent.click(getByLabelText(savedData.groups[0].name))
  // copying the way alt text is set according to image href
  const img = savedData.groups[0].images[0]
  const itemDescAry = img.href.split('/') 
  const altText = itemDescAry[itemDescAry.length - 1].split('.')[0].split('-').join(' ')
  screen.getAllByAltText(altText)
  screen.debug()
})
