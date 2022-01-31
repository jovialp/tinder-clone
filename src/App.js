import React from 'react';
import './style.css';

// Components
import Header from './components/Header';
import TinderCard from './components/TinderCard';

export default function App() {
  return (
    <div>
      {/* Header */}
      <Header />

      {/* Tinder Card */}
      <TinderCard />
    </div>
  );
}
