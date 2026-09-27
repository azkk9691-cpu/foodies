import { useEffect, useState } from 'react'
import { IMAGES } from '../assets/images.js'

/* ---------------- static data ---------------- */

const CATEGORIES = [
  { id: 'main', name: 'Main Dish', count: '120+ Items', image: IMAGES.categories.mainDish },
  { id: 'breakfast', name: 'Breakfast', count: '40+ Items', image: IMAGES.categories.breakfast },
  { id: 'dessert', name: 'Dessert', count: '60+ Items', image: IMAGES.categories.dessert },
  { id: 'all', name: 'Browse All', count: '240+ Items', image: IMAGES.categories.browseAll, highlight: true },
]

const DISHES = [
  {
    id: 'fattoush',
    name: 'Fattoush Salad',
    tag: 'Chef’s Pick',
    description: 'Crisp lettuce, ripe tomatoes, cucumber and toasted pita chips tossed in our signature lemon dressing.',
    price: '$12.50',
    rating: 4.9,
    reviews: 128,
    image: IMAGES.dishes.fattoush,
  },
  {
    id: 'vegetable',
    name: 'Vegetable Salad',
    tag: 'Fresh',
    description: 'A colorful bowl of seasonal vegetables, garden herbs and our creamy house dressing on the side.',
    price: '$10.99',
    rating: 4.8,
    reviews: 96,
    image: IMAGES.dishes.vegetable,
  },
  {
    id: 'egg',
    name: 'Egg Vegi Salad',
    tag: 'Protein',
    description: 'Boiled eggs, fresh greens, corn and crunchy veggies finished with a light ranch drizzle.',
    price: '$11.75',
    rating: 4.7,
    reviews: 84,
    image: IMAGES.dishes.egg,
  },
]

const SERVICES = [
  {
    title: 'Catering',
    text: 'Premium catering for every occasion, prepared fresh and delivered to your venue on time.',
    icon: 'catering',
  },
  {
    title: 'Fast Delivery',
    text: 'Your order hot and packed within minutes, at your door in under 30 minutes.',
    icon: 'delivery',
  },
  {
    title: 'Online Order',
    text: 'Order in a few clicks and follow it live from our kitchen straight to your table.',
    icon: 'order',
  },
  {
    title: 'Gift Cards',
    text: 'Delicious gift cards for any occasion, delivered instantly to your inbox.',
    icon: 'gift',
  },
]

const VIDEO_ID = '36QOkwvNzts'

/* ---------------- inline icons ---------------- */

const ArrowIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 12h13M13 6l6 6-6 6" />
  </svg>
)

const PlayIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M8 5.5v13a1 1 0 0 0 1.53.85l10-6.5a1 1 0 0 0 0-1.7l-10-6.5A1 1 0 0 0 8 5.5Z" />
  </svg>
)

const StarIcon = ({ filled = true }) => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill={filled ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" aria-hidden="true">
    <path d="m12 3.6 2.6 5.3 5.9.9-4.2 4.1 1 5.8-5.3-2.8-5.3 2.8 1-5.8-4.2-4.1 5.9-.9Z" />
  </svg>
)

const HeartIcon = ({ filled }) => (
  <svg width="19" height="19" viewBox="0 0 24 24" fill={filled ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 20.3 4.7 13a4.6 4.6 0 0 1 6.5-6.5l.8.8.8-.8A4.6 4.6 0 0 1 19.3 13Z" />
  </svg>
)

const PlusIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true">
    <path d="M12 5v14M5 12h14" />
  </svg>
)

const CheckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="m5 13 4.5 4.5L19 7" />
  </svg>
)

const CloseIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
    <path d="M18 6 6 18M6 6l12 12" />
  </svg>
)

const SERVICE_ICONS = {
  catering: (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 16h18M5 16a7 7 0 0 1 14 0M12 5v3M9 5v2M15 5v2" />
      <path d="M2.5 19.5h19" />
    </svg>
  ),
  delivery: (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 16V7a1 1 0 0 1 1-1h9v10" />
      <path d="M13 9h4l3 3v4h-2" />
      <circle cx="7" cy="17.5" r="1.8" />
      <circle cx="17" cy="17.5" r="1.8" />
    </svg>
  ),
  order: (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="4" width="18" height="13" rx="2" />
      <path d="M8 21h8M12 17v4M7 8.5h4M7 12h7" />
    </svg>
  ),
  gift: (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="9" width="18" height="11" rx="2" />
      <path d="M3 13h18M12 9v11M12 9s-3.6.2-4.6-1.2C6.6 6.6 8 5 9.4 5.4 11 5.9 12 9 12 9Zm0 0s3.6.2 4.6-1.2C17.4 6.6 16 5 14.6 5.4 13 5.9 12 9 12 9Z" />
    </svg>
  ),
}

/* ---------------- helpers ---------------- */

const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })

function Stars({ count = 5 }) {
  return (
    <span className="rating__stars">
      {Array.from({ length: count }, (_, i) => (
        <StarIcon key={i} />
      ))}
    </span>
  )
}

function VideoModal({ onClose }) {
  const [playing, setPlaying] = useState(false)

  useEffect(() => {
    const onKey = (event) => event.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    document.body.classList.add('is-locked')
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.classList.remove('is-locked')
    }
  }, [onClose])

  return (
    <div className="modal" role="dialog" aria-modal="true" aria-label="Foodie's promo video" onMouseDown={(e) => e.target === e.currentTarget && onClose()}>
      <div className="modal__box">
        <button type="button" className="modal__close" aria-label="Close video" onClick={onClose}>
          <CloseIcon />
        </button>

        {playing ? (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${VIDEO_ID}?autoplay=1&rel=0`}
            title="Foodie's kitchen video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        ) : (
          <>
            <img src={IMAGES.dishes.fattoush} alt="Freshly prepared salad in our kitchen" />
            <div className="modal__overlay">
              <button type="button" className="modal__play" aria-label="Play video" onClick={() => setPlaying(true)}>
                <PlayIcon />
              </button>
              <p className="modal__caption">
                <strong>Inside the Foodie’s kitchen</strong>
                <span>See how our chefs build the perfect bowl — in 60 seconds.</span>
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

/* ---------------- sections ---------------- */

function Hero({ onWatchVideo }) {
  return (
    <section className="hero" id="home">
      <div className="container hero__inner">
        <div className="hero__copy">
          <span className="hero__badge">
            <img src={IMAGES.dishes.egg} alt="" />
            Freshly cooked every morning
          </span>

          <h1 className="hero__title">
            Dive into Delights
            <br />
            Of Delectable <em>Food</em>
          </h1>

          <p className="hero__text">
            Hand-picked ingredients, cooked with love and delivered straight to your table.
            Explore our menu and taste what everybody is talking about.
          </p>

          <div className="hero__cta">
            <button type="button" className="btn btn--primary" onClick={() => scrollTo('menu')}>
              Get Started
              <ArrowIcon />
            </button>

            <button type="button" className="video-btn" onClick={onWatchVideo}>
              <span className="video-btn__icon">
                <PlayIcon />
              </span>
              Watch Video
            </button>
          </div>

          <div className="hero__stats">
            <div className="hero__stat">
              <strong>12k+</strong>
              <span>Orders delivered</span>
            </div>
            <div className="hero__stat">
              <strong>4.9/5</strong>
              <span>Customer rating</span>
            </div>
            <div className="hero__stat">
              <strong>30 min</strong>
              <span>Average delivery</span>
            </div>
          </div>
        </div>

        <div className="hero__visual">
          <span className="hero__blob" aria-hidden="true" />
          <span className="hero__dots" aria-hidden="true" />

          <div className="hero__frame">
            <span className="hero__ring" aria-hidden="true" />
            <div className="hero__image">
              <img src={IMAGES.hero} alt="Woman enjoying a fresh healthy meal" />
            </div>
          </div>

          <div className="hero__chip hero__chip--top">
            <span className="chip-ico">
              <StarIcon />
            </span>
            <span>
              <strong>4.9 rating</strong>
              <span>from 1,200+ reviews</span>
            </span>
          </div>

          <div className="hero__chip hero__chip--bottom">
            <span className="chip-ico">{SERVICE_ICONS.delivery}</span>
            <span>
              <strong>Free delivery</strong>
              <span>on orders over $25</span>
            </span>
          </div>

          <svg className="hero__leaf" width="54" height="54" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" aria-hidden="true">
            <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
          </svg>
        </div>
      </div>
    </section>
  )
}

function PopularCategories() {
  return (
    <section className="section categories" id="menu">
      <div className="container">
        <div className="section-head section-head--center">
          <span className="eyebrow">Explore</span>
          <h2 className="section-title">Popular Categories</h2>
          <p className="lead">
            Everything on the menu, grouped the way you like to eat it.
          </p>
        </div>

        <div className="categories__grid">
          {CATEGORIES.map((category) => (
            <button
              key={category.id}
              type="button"
              className={`cat-card${category.highlight ? ' cat-card--all' : ''}`}
              onClick={() => scrollTo('offers')}
            >
              <span className="cat-card__media">
                <img src={category.image} alt={category.name} loading="lazy" />
              </span>
              <span className="cat-card__name">{category.name}</span>
              <span className="cat-card__count">{category.count}</span>
              <span className="cat-card__more">
                Browse
                <ArrowIcon />
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}

function StandoutDishes() {
  const [favorites, setFavorites] = useState([])
  const [added, setAdded] = useState([])

  const toggleFavorite = (id) =>
    setFavorites((list) => (list.includes(id) ? list.filter((item) => item !== id) : [...list, id]))

  const addToOrder = (id) => {
    setAdded((list) => (list.includes(id) ? list : [...list, id]))
  }

  return (
    <section className="section" id="offers">
      <div className="container">
        <div className="dishes__head">
          <div className="section-head">
            <span className="eyebrow eyebrow--pink">Chef’s Selection</span>
            <h2 className="section-title">
              Standout Dishes
              <br />
              From <span>Our Menu</span>
            </h2>
            <p className="lead">
              Hand-picked plates our guests keep coming back for — fresh every single day.
            </p>
          </div>

          <button type="button" className="btn btn--link" onClick={() => scrollTo('menu')}>
            <span className="btn__text">View full menu</span>
            <ArrowIcon />
          </button>
        </div>

        <div className="dishes__grid">
          {DISHES.map((dish) => {
            const isFav = favorites.includes(dish.id)
            const isAdded = added.includes(dish.id)
            return (
              <article className="dish-card" key={dish.id}>
                <div className="dish-card__media">
                  <img src={dish.image} alt={dish.name} loading="lazy" />
                  <span className="dish-card__tag">{dish.tag}</span>
                  <button
                    type="button"
                    className={`dish-card__fav${isFav ? ' is-active' : ''}`}
                    aria-label={isFav ? `Remove ${dish.name} from favorites` : `Add ${dish.name} to favorites`}
                    aria-pressed={isFav}
                    onClick={() => toggleFavorite(dish.id)}
                  >
                    <HeartIcon filled={isFav} />
                  </button>
                </div>

                <div className="dish-card__body">
                  <div className="dish-card__top">
                    <h3 className="dish-card__name">{dish.name}</h3>
                    <span className="dish-card__price">{dish.price}</span>
                  </div>

                  <p className="dish-card__desc">{dish.description}</p>

                  <div className="dish-card__foot">
                    <span className="rating">
                      <Stars />
                      <span className="rating__value">{dish.rating}</span>
                      <span className="rating__count">({dish.reviews})</span>
                    </span>

                    <button
                      type="button"
                      className={`dish-card__add${isAdded ? ' is-added' : ''}`}
                      onClick={() => addToOrder(dish.id)}
                    >
                      {isAdded ? <CheckIcon /> : <PlusIcon />}
                      {isAdded ? 'Added' : 'Add'}
                    </button>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function Testimonial() {
  return (
    <section className="section testimonial" id="testimonial">
      <div className="container testimonial__inner">
        <div className="testimonial__visual">
          <span className="testimonial__shape" aria-hidden="true" />
          <div className="testimonial__image">
            <img src={IMAGES.chef} alt="Chef preparing a fresh dish" loading="lazy" />
          </div>
          <div className="testimonial__exp">
            <span className="chip-ico">{SERVICE_ICONS.gift}</span>
            <span>
              <strong>15+ years</strong>
              <span>of kitchen craft</span>
            </span>
          </div>
        </div>

        <div className="testimonial__copy">
          <span className="eyebrow">Testimonial</span>
          <h2 className="section-title">
            What Our Customers
            <br />
            Say <span>About Us</span>
          </h2>

          <p className="testimonial__text">
            Foodie’s is the reason our whole team looks forward to lunch. Every dish arrives
            fresh, beautifully plated and right on time — the catering service has become a
            weekly staple in our office.
          </p>

          <div className="testimonial__people">
            <div className="avatars">
              {IMAGES.avatars.map((avatar, index) => (
                <img key={index} src={avatar} alt="Foodie's customer" loading="lazy" />
              ))}
            </div>

            <div className="testimonial__meta">
              <strong>Sarah Mitchell</strong>
              <span>Food blogger · 2.4k followers</span>
            </div>

            <div className="testimonial__score">
              <strong>4.9</strong>
              <Stars />
              <span className="rating__count">1,200+ reviews</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function CulinaryJourney() {
  return (
    <section className="section" id="services">
      <div className="container journey__inner">
        <div className="journey__text">
          <span className="eyebrow">Our Journey</span>
          <h2 className="section-title">Our Culinary Journey</h2>
          <p className="lead">
            From a small family kitchen to a table loved across the city — we have spent over
            fifteen years perfecting honest food, warm service and recipes passed down
            generation after generation.
          </p>

          <div className="journey__cta">
            <button type="button" className="btn btn--primary" onClick={() => scrollTo('testimonial')}>
              Explore More
              <ArrowIcon />
            </button>
          </div>
        </div>

        <div className="services">
          {SERVICES.map((service) => (
            <article className="service-card" key={service.title}>
              <span className="service-card__ico">{SERVICE_ICONS[service.icon]}</span>
              <h3 className="service-card__title">{service.title}</h3>
              <p className="service-card__text">{service.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Main() {
  const [videoOpen, setVideoOpen] = useState(false)

  return (
    <main>
      <Hero onWatchVideo={() => setVideoOpen(true)} />
      <PopularCategories />
      <StandoutDishes />
      <Testimonial />
      <CulinaryJourney />

      {videoOpen && <VideoModal onClose={() => setVideoOpen(false)} />}
    </main>
  )
}

export default Main
