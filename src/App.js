// App.js

import React from 'react';
import CV from './CV';
import './App.css';

const App = () => {
  return (
    <div className="app-container">
      <main>
        <section className="cv-section">
          <CV />
        </section>
      </main>
    </div>
  );
};

export default App;
