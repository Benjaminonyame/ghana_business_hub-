
import React from 'react';

const sections = [
  { icon: '🏢', name: 'Businesses', description: 'Discover businesses across Ghana.' },
  { icon: '🛍️', name: 'Products', description: 'Buy and sell products online.' },
  { icon: '🛠️', name: 'Services', description: 'Find trusted service providers.' },
  { icon: '💼', name: 'Jobs', description: 'Explore job opportunities.' },
  { icon: '🏠', name: 'Properties', description: 'Find houses, rooms and land.' },
  { icon: '📢', name: 'Advertisements', description: 'Promote your business.' }
];

export default function App() {
  return (
    <div>
      <header className="header">
        <h1>🇬🇭 Ghana Business Hub</h1>
        <p>One platform. Endless opportunities.</p>
      </header>

      <nav className="nav">
        <a href="#home">Home</a>
        <a href="#categories">Categories</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </nav>

      <main id="home">
        <section className="hero">
          <p className="tagline">WELCOME TO GHANA BUSINESS HUB</p>
          <h2>Discover. Connect. Grow.</h2>
          <p>Find businesses, shop products and discover opportunities across Ghana.</p>
          <div className="search">
            <input placeholder="What are you looking for?" />
            <button>Search</button>
          </div>
        </section>

        <section className="categories" id="categories">
          <h2>Explore Our Marketplace</h2>
          <p>Everything you need in one place.</p>
          <div className="grid">
            {sections.map((item) => (
              <article className="card" key={item.name}>
                <span>{item.icon}</span>
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <a href="#contact">Explore →</a>
              </article>
            ))}
          </div>
        </section>

        <section className="about" id="about">
          <h2>Connecting Ghanaian Businesses</h2>
          <p>
            Ghana Business Hub brings buyers, sellers, entrepreneurs
            and service providers together on one digital platform.
          </p>
        </section>
      </main>

      <footer id="contact">
        <h2>Ghana Business Hub</h2>
        <p>Connecting Ghana. Creating opportunities.</p>
        <p>© 2026 Ghana Business Hub. All rights reserved.</p>
      </footer>
    </div>
  );
}
