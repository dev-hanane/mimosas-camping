import { Link } from 'react-router-dom'
import '../styles/community.css'

const sampleMessages = [
  { id: 1, author: 'Mina', text: 'Bonjour à toutes et à tous 👋', createdAt: '08:30' },
  { id: 2, author: 'Youssef', text: 'Le cadre est magnifique en cette saison.', createdAt: '09:00' },
]

export default function Community() {
  return (
    <div className="community-page" style={{ minHeight: '100vh', background: '#f7f8f0', padding: '24px 20px 60px' }}>
      <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
        <Link to="/" style={{ textDecoration: 'none', color: '#2d7a3a', fontWeight: 700 }}>
          Retour à l'accueil
        </Link>
      </nav>

      <section
        style={{
          maxWidth: 900,
          margin: '0 auto',
          background: '#fff',
          borderRadius: 20,
          padding: 24,
          boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
        }}
      >
        <h1 style={{ color: '#2d7a3a', marginBottom: 8 }}>Communauté camping</h1>
        <p style={{ color: '#666', marginBottom: 24 }}>
          Une page statique pour partager l’ambiance du camping sans dépendre d’un backend.
        </p>

        <div style={{ display: 'grid', gap: 12 }}>
          {sampleMessages.map((message) => (
            <div key={message.id} style={{ border: '1px solid #e5e7eb', borderRadius: 14, padding: 14 }}>
              <div style={{ fontWeight: 700, color: '#2d7a3a' }}>{message.author}</div>
              <div style={{ marginTop: 4 }}>{message.text}</div>
              <div style={{ marginTop: 6, color: '#888', fontSize: 12 }}>{message.createdAt}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
