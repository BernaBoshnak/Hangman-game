import React from 'react'
import { classnames as cn } from '../../utils/classnames'
import styles from './Character.module.scss'

const Arm_Right = () => {
  return (
    <div
      className={cn(
        styles['character-common'],
        styles['character-common-body-parts'],
        styles['character-arms'],
        styles['character-arm-right'],
      )}
    ></div>
  )
}

export default Arm_Right
