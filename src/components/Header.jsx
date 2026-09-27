import { useEffect, useRef, useState } from 'react'

const NAV_LINKS = [
  { label: 'Home', id: 'home' },
  { label: 'Menu', id: 'menu' },
  { label: 'Services', id: 'services' },
  { label: 'Offers', id: 'offers' },
]

const SUGGESTIONS = ['Fattoush Salad', 'Vegan Bowl', 'Breakfast', 'Gift Cards']

function scrollToSection(id) {
  const target = document.getElementById(id)
  if (!target) return
  target.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

const SearchIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="11" cy="11" r="7" />
    <path d="m20 20-3.2-3.2" />
  </svg>
)

const CloseIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
    <path d="M18 6 6 18M6 6l12 12" />
  </svg>
)

const ArrowIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 12h13M13 6l6 6-6 6" />
  </svg>
)

const LeafIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
    <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
  </svg>
)

const MenuIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
    <path d="M4 7h16M4 12h16M4 17h16" />
  </svg>
)

function Header() {
  const [stuck, setStuck] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('home')
  const [query, setQuery] = useState('')
  const searchInput = useRef(null)
  const searchPanel = useRef(null)

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (searchOpen) searchInput.current?.focus()
  }, [searchOpen])

  useEffect(() => {
    const onKey = (event) => {
      if (event.key === 'Escape') {
        setSearchOpen(false)
        setMenuOpen(false)
      }
    }
    const onClick = (event) => {
      if (searchPanel.current && !searchPanel.current.contains(event.target)) {
        setSearchOpen(false)
      }
    }
    document.addEventListener('keydown', onKey)
    document.addEventListener('mousedown', onClick)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.removeEventListener('mousedown', onClick)
    }
  }, [])

  useEffect(() => {
    const sections = NAV_LINKS.map(({ id }) => document.getElementById(id)).filter(Boolean)
    if (!sections.length) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 },
    )
    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  const go = (id) => {
    setMenuOpen(false)
    setSearchOpen(false)
    scrollToSection(id)
  }

  return (
    <header className={`header${stuck ? ' is-stuck' : ''}`}>
      <div ref={searchPanel}>
        <div className="container header__bar">
          <a className="brand" href="#home" onClick={(e) => { e.preventDefault(); go('home') }}>
            <span className="brand__mark">
              <LeafIcon />
            </span>
            <span className="brand__text">
              Foodie<span>s</span>
            </span>
          </a>

          <nav className="nav" aria-label="Main navigation">
            {NAV_LINKS.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`nav__link${active === link.id ? ' is-active' : ''}`}
                aria-current={active === link.id ? 'page' : undefined}
                onClick={(e) => { e.preventDefault(); go(link.id) }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="header__actions">
            <button
              type="button"
              className={`header__search-btn${searchOpen ? ' is-open' : ''}`}
              aria-label={searchOpen ? 'Close search' : 'Search'}
              aria-expanded={searchOpen}
              onClick={() => setSearchOpen((value) => !value)}
            >
              {searchOpen ? <CloseIcon /> : <SearchIcon />}
            </button>

            <a className="header__cta" href="#menu" onClick={(e) => { e.preventDefault(); go('menu') }}>
              Order Now
              <ArrowIcon />
            </a>

            <button
              type="button"
              className="burger"
              aria-label="Toggle navigation"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((value) => !value)}
            >
              {menuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>

        <div className={`search${searchOpen ? ' is-open' : ''}`}>
          <div className="container search__inner">
            <div className="search__field">
              <SearchIcon />
              <input
                ref={searchInput}
                type="search"
                value={query}
                aria-label="Search dishes, categories and services"
                placeholder="Search dishes, categories, services…"
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && query.trim()) {
                    setQuery('')
                    go('menu')
                  }
                }}
              />
              {query && (
                <button type="button" className="icon-btn" aria-label="Clear search" onClick={() => setQuery('')}>
                  <CloseIcon />
                </button>
              )}
            </div>

            <div className="search__hint">
              <span>Popular:</span>
              {SUGGESTIONS.map((item) => (
                <button
                  key={item}
                  type="button"
                  className="chip"
                  onClick={() => {
                    setQuery('')
                    go('menu')
                  }}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className={`mobile-nav${menuOpen ? ' is-open' : ''}`}>
        <div className="container mobile-nav__inner">
          {NAV_LINKS.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`mobile-nav__link${active === link.id ? ' is-active' : ''}`}
              onClick={(e) => { e.preventDefault(); go(link.id) }}
            >
              {link.label}
              <ArrowIcon />
            </a>
          ))}
          <a
            className="btn btn--primary mobile-nav__cta"
            href="#menu"
            onClick={(e) => { e.preventDefault(); go('menu') }}
          >
            Order Now
            <ArrowIcon />
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header
