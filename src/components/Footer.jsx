import { profile } from '../data/content.js'

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="inner">
        <p>© {new Date().getFullYear()} {profile.name}</p>
        <p>{profile.role}</p>
      </div>
    </footer>
  )
}
