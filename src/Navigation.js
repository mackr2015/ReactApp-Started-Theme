import React from 'react'
import './Navigation.scss';

export default function Navigation() {
  return (
    <div className="navigation">

      <ul className="navigation_links">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Our Music</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </div>
  )
}
