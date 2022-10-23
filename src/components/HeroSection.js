import React from 'react'
import { Button } from './Button'
import './HeroSection.css'

function HeroSection() {
  return (
    <div className='bg'>
      <div className='hero-container'>
        <img src='/images/logoMain.png' alt='' width="486.4" height="431.36" className='logoHeroSection' />
        <h1 className='hero-company-name'>Салон "УСПЕХ"</h1>
        <p>Наращивание ресниц , шугаринг</p>
        <p>Улица Чуй-194</p>
        <div className='hero-btns'>
          <Button
            className='btns'
            buttonStyle='btn--outline'
            buttonSize='btn--large'
            redirect='/gallery'
          >
            Галерея
          </Button>
          <Button
            className='btns'
            buttonStyle='btn--outline'
            buttonSize='btn--large'
            redirect='/services'
          >
            Прайс лист
          </Button>
        </div>
      </div>
    </div>
  )
}

export default HeroSection