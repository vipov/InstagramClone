import React from 'react';
import {Link} from 'react-router-dom';

export default function Header() {
  return (
    <h1>
    <Link to='/' className="redux-header">
      Definitely not Instagstagram
    </Link>
    </h1>
  )
}
