import cx from 'classnames'
import { NavLink } from 'react-router-dom'
import styles from './GNB.module.scss'

import { useAppDispatch, useAppSelector } from 'hooks'
import { getTheme, toggleTheme } from 'states/system'

const navData = ['kakao', 'google', 'buttons', 'corona', 'todo', 'weather']

const GNB = () => {
  const dispatch = useAppDispatch()
  const theme = useAppSelector(getTheme)

  const handleThemeClick = () => {
    dispatch(toggleTheme())
  }

  return (
    <nav className={styles.gnb}>
      <ul>
        {navData.map((item) => {
          return (
            <li key={`gnb-item-${item}`}>
              <NavLink to={item} className={({ isActive }) => cx({ [styles.isActive]: isActive })}>
                <p>안녕 이것 무슨 기능인지 몰라서 이렇게 적어놓는다.</p>
              </NavLink>
            </li>
          )
        })}
      </ul>
      <div className={styles.rightWing}>
        <button type='button' onClick={handleThemeClick} className={styles.theme}>
          {theme}
        </button>
      </div>
    </nav>
  )
}

export default GNB
