import React from 'react'
import Link from 'gatsby-link'

import logo from '../assets/images/logo.svg';
import yakHead from '../assets/images/yak-head.svg';

const Header = (props) => (
    <header id="header" className="alt">
      <div className="logo">
        <img src={yakHead} alt="" />
      </div>
      <h1>sherpa</h1>
      <p>
        Elevate your gaming, grow your community
      </p>
    </header>
)

export default Header
