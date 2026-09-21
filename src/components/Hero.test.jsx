import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Hero from './Hero.jsx'
import { PROFILE } from '../data.js'

describe('Hero', () => {
  it('renders the name and role', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { name: PROFILE.name })).toBeInTheDocument()
    expect(screen.getByText(PROFILE.role)).toBeInTheDocument()
  })

  it('renders a working mailto link', () => {
    render(<Hero />)
    const emailLink = screen.getByText(new RegExp(PROFILE.email))
    expect(emailLink).toHaveAttribute('href', `mailto:${PROFILE.email}`)
  })
})