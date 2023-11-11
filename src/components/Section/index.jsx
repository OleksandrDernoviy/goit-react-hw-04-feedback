import React from 'react';
import css from './section.module.css'

const Section = ({ title, children }) => {
    return (
    <>
      <h1 className={css.sectionTitle}>{title}</h1>
      {children}
   </>
    )
}

export default Section