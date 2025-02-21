import React from 'react';
import Header from '../../components/Header';


export default function Layout({ children }) {
  return (
    <div>
      <div>
        <Header/>
      </div>
      <div>
      {children}
      </div>
    </div>
  );
}