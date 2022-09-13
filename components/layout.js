import React, { useState } from 'react';
import Superhero from '../pages/api/superheroADK';
import Header from './header';

export default function Layout({ children }) {
  const [superheroInfo, setSuperheroInfo] = useState({ superheroes: [] });

  const searchSuperhero = ({ ...options }) => {
    Superhero.search({ ...options }).then((superheroes) => {
      setSuperheroInfo({ superheroes: superheroes });
    });
  };

  return (
    <>
      <Header searchSuperhero={searchSuperhero} />
      <main>{children}</main>
    </>
  );
}
