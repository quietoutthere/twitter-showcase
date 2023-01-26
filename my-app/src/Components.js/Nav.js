import React from 'react';
import Search from './Search'


function Nav() {

    return (
      <ul class="nav justify-content-center">
      <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="#">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href={Search}>Search</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Random</a>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
      </li>
    </ul>
    )
}

export default Nav;