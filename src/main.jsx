import React, { useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const events = [
  {
    id: 'hack',
    category: 'tech',
    type: 'TECH & BUILD',
    title: 'CodeStorm: 24H Hackathon',
    date: '18–19 October 2026',
    venue: 'Innovation Lab, Block C',
    description: 'An all-night build sprint for teams ready to turn sharp ideas into working prototypes.',
    image: 'https://images.unsplash.com/photo-1551818255-e6e10975bc17?auto=format&fit=crop&w=1600&q=85',
  },
  {
    id: 'vibrance',
    category: 'culture',
    type: 'CULTURE',
    title: "Vibrance '26: Opening Night",
    date: '17 October 2026',
    venue: 'Central Lawn, ABES Campus',
    description: 'The first big night of ABES’s two-day cultural celebration.',
    image: 'https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=1600&q=85',
  },
  {
    id: 'startup',
    category: 'career',
    type: 'CAREER',
    title: 'ABES Startup Sprint',
    date: '21 October 2026',
    venue: 'Seminar Hall A, Block B',
    description: 'Turn an idea into a crisp, confident pitch that gets noticed.',
    image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1600&q=85',
  },
  {
    id: 'robotics',
    category: 'tech',
    type: 'TECH & BUILD',
    title: 'RoboWars Build Day',
    date: '24 October 2026',
    venue: 'Robotics Lab, Block C',
    description: 'Build, test and battle your own robot in a friendly campus competition.',
    image: 'https://images.unsplash.com/photo-1535378917042-10a22c95931a?auto=format&fit=crop&w=1600&q=85',
  },
  {
    id: 'run',
    category: 'sports',
    type: 'SPORTS',
    title: 'Sunday Sunrise Run',
    date: '26 October 2026',
    venue: 'Main Gate, ABES Campus',
    description: 'A five-kilometre campus run for every pace and energy level.',
    image: 'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&w=1600&q=85',
  },
  {
    id: 'stage',
    category: 'culture',
    type: 'CULTURE',
    title: 'Open Mic Under the Stars',
    date: '29 October 2026',
    venue: 'Amphitheatre, ABES Campus',
    description: 'Poetry, music, and stories from campus talent in a relaxed evening setting.',
    image: 'https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?auto=format&fit=crop&w=1600&q=85',
  },
];

function Header() {
  return (
    <header className="top">
      <div className="brand">ABES PULSE</div>
      <nav>
        <a href="#events">Discover</a>
        <a href="#features">Campus life</a>
      </nav>
    </header>
  );
}

function EventCard({ event }) {
  return (
    <article className="event-card">
      <div className="event-image" style={{ backgroundImage: `linear-gradient(0deg, rgba(9,10,22,.55), rgba(9,10,22,.04)), url('${event.image}')` }}>
        <small>{event.type}</small>
      </div>
      <div className="event-body">
        <time>{event.date}</time>
        <h3>{event.title}</h3>
        <p>{event.description}</p>
        <span>? {event.venue}</span>
      </div>
    </article>
  );
}

function Home() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('all');
  const visibleEvents = useMemo(() => {
    return events.filter(event => {
      const matchesQuery = `${event.title} ${event.description} ${event.venue}`.toLowerCase().includes(query.toLowerCase());
      const matchesCategory = category === 'all' || event.category === category;
      return matchesQuery && matchesCategory;
    });
  }, [query, category]);

  return (
    <main>
      <section className="hero">
        <div>
          <p className="eyebrow">? ABES CAMPUS · LIVE NOW</p>
          <h1>Find your <em>next</em><br />campus moment.</h1>
          <p className="hero-copy">From hackathons to open mic nights, ABES Pulse brings the best of campus life in one place.</p>
          <div className="actions">
            <a className="primary" href="#events">Explore events ?</a>
            <a className="link-button light" href="#features">See campus life ?</a>
          </div>
          <div className="numbers">
            <div><b>{events.length}+</b><span>upcoming events</span></div>
            <div><b>12</b><span>student communities</span></div>
            <div><b>1</b><span>campus, together</span></div>
          </div>
        </div>
      </section>

      <section id="events" className="discover">
        <div className="section-title">
          <h2>Find your thing.</h2>
          <p>Browse the best events happening around campus this week.</p>
        </div>
        <div className="finder">
          <input
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Search events, clubs, or venues"
          />
          <div>
            {['all', 'tech', 'culture', 'sports', 'career'].map(item => (
              <button
                key={item}
                className={category === item ? 'active' : ''}
                onClick={() => setCategory(item)}
              >
                {item === 'all' ? 'All events' : item}
              </button>
            ))}
          </div>
        </div>
        <div className="event-grid">
          {visibleEvents.length ? visibleEvents.map(event => <EventCard key={event.id} event={event} />) : <p className="empty">No events match your search.</p>}
        </div>
      </section>

      <section id="features" className="feature-panel">
        <div className="section-title"><h2>Campus life is more than events.</h2><p>Connect, learn, compete and celebrate with ABES Pulse.</p></div>
        <div className="feature-list">
          <article><h3>Student communities</h3><p>Join clubs, societies, and study groups across every discipline.</p></article>
          <article><h3>Live experiences</h3><p>From coding sprints to cultural festivals, there is always something on campus.</p></article>
          <article><h3>Easy discovery</h3><p>Browse upcoming events with simple filters and fast search.</p></article>
        </div>
      </section>
    </main>
  );
}

function Footer() {
  return <footer>ABES Engineering College · ABES Pulse · Campus experiences made easy.</footer>;
}

function App() {
  return (
    <>
      <Header />
      <Home />
      <Footer />
    </>
  );
}

createRoot(document.getElementById('root')).render(<App />);
