const BRAND = 'Foodie’s'

const SOCIALS = [
  {
    label: 'Facebook',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M13.5 21v-8h2.7l.4-3.1h-3.1V7.9c0-.9.3-1.5 1.6-1.5h1.6V3.6c-.3 0-1.2-.1-2.3-.1-2.3 0-3.9 1.4-3.9 4v2.4H7.4V13h2.6v8Z" />
      </svg>
    ),
  },
  {
    label: 'X',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M17.6 4h2.9l-6.3 7.2L21.6 20h-5.6l-4-5.2L7.3 20H4.4l6.7-7.7L4.4 4h5.7l3.7 4.9Zm-1 14.4h1.6L8.5 5.5H6.8Z" />
      </svg>
    ),
  },
  {
    label: 'Instagram',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" aria-hidden="true">
        <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
        <circle cx="12" cy="12" r="3.8" />
        <circle cx="17" cy="7" r="1.1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: 'YouTube',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M21.2 8.3c-.2-1.5-.9-2.2-2.4-2.4C17 5.5 12 5.5 12 5.5s-5 0-6.8.4C3.7 6.1 3 6.8 2.8 8.3 2.5 10.1 2.5 12 2.5 12s0 1.9.3 3.7c.2 1.5.9 2.2 2.4 2.4 1.8.4 6.8.4 6.8.4s5 0 6.8-.4c1.5-.2 2.2-.9 2.4-2.4.3-1.8.3-3.7.3-3.7s0-1.9-.3-3.7ZM10.2 15V9l5.2 3Z" />
      </svg>
    ),
  },
]

const USEFUL_LINKS = ['About Us', 'Our Chefs', 'Careers', 'Blog', 'Newsroom']
const MENU_LINKS = [
  { label: 'Home', id: 'home' },
  { label: 'Our Menu', id: 'menu' },
  { label: 'Services', id: 'services' },
  { label: 'Offers', id: 'offers' },
  { label: 'Testimonials', id: 'testimonial' },
]

const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <a
              className="brand"
              href="#home"
              onClick={(e) => {
                e.preventDefault()
                scrollTo('home')
              }}
            >
              <span className="brand__mark">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
                  <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
                </svg>
              </span>
              <span className="brand__text">
                Foodie<span>s</span>
              </span>
            </a>

            <p className="footer__about">
              Fresh, honest food made every day in our kitchen. Sit back, relax and let us
              bring the table to you.
            </p>

            <div className="socials">
              {SOCIALS.map((social) => (
                <a key={social.label} href="#home" aria-label={social.label} onClick={(e) => e.preventDefault()}>
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="footer__title">Useful Links</h3>
            <ul className="footer__links">
              {USEFUL_LINKS.map((label) => (
                <li key={label}>
                  <a href="#home" onClick={(e) => e.preventDefault()}>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="footer__title">Main Menu</h3>
            <ul className="footer__links">
              {MENU_LINKS.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={(e) => {
                      e.preventDefault()
                      scrollTo(link.id)
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__contact-col">
            <h3 className="footer__title">Contact Us</h3>
            <ul className="footer__contact">
              <li>
                <span className="footer__contact-ico">
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M20 10.5c0 5.4-4.6 9.5-10 9.5a10.7 10.7 0 0 1-3.6-.6L3 21l1.7-3.2A9.6 9.6 0 0 1 3.9 10.5C3.9 5.1 8.5 1 14 1s6 4.5 6 9.5Z" />
                  </svg>
                </span>
                <span>1429 Warm Springs Ave, Reno, NV 89501</span>
              </li>
              <li>
                <span className="footer__contact-ico">
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M5 3.5h3.2l1.7 4.2-2 1.4a12.6 12.6 0 0 0 6 6l1.4-2 4.2 1.7V19a2 2 0 0 1-2.2 2A16.8 16.8 0 0 1 3 5.7 2 2 0 0 1 5 3.5Z" />
                  </svg>
                </span>
                <a href="tel:+12345678901">+1 (234) 567-8901</a>
              </li>
              <li>
                <span className="footer__contact-ico">
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <rect x="3" y="5" width="18" height="14" rx="2.5" />
                    <path d="m3.6 6.8 7.3 5.2a2 2 0 0 0 2.2 0l7.3-5.2" />
                  </svg>
                </span>
                <a href="mailto:hello@foodies.com">hello@foodies.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <span>
            © {BRAND} — {new Date().getFullYear()}. All rights reserved. Crafted with{' '}
            <span className="footer__heart">♥</span> and fresh ingredients.
          </span>
          <nav aria-label="Legal">
            <a href="#home" onClick={(e) => e.preventDefault()}>Privacy Policy</a>
            <a href="#home" onClick={(e) => e.preventDefault()}>Terms of Service</a>
          </nav>
        </div>
      </div>
    </footer>
  )
}

export default Footer
