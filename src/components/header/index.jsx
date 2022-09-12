import React from 'react'
import './index.scss';
import Logo from '../../assets/svgs/logo';
import MenuIcon from '../../assets/svgs/menu-icon';
import UserMenu from '../../assets/svgs/user-menu';
export default function Header() {
  return (
    <div className='section-header section-header_fix'>
        <div className='section-header_logo'>
            <MenuIcon/>
            <Logo/>
        </div>

        <div className='section-header_user-area'>
            <UserMenu/>
            <img src="https://avatars.githubusercontent.com/u/37827216?v=4" alt="user-img-samurai" />
        </div>
    </div>
  )
}
