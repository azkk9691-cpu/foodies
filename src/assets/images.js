/**
 * Barcha rasmlar uchun yagona konfiguratsiya fayli.
 * Rasmni almashtirish uchun faqat shu fayldagi qiymatni o'zgartiring —
 * komponentlarda kod o'zgarishi kerak emas.
 */
import heroEater from './images/hero-eater.jpg'
import chef from './images/chef.jpg'

import catMainDish from './images/cat-main-dish.jpg'
import catBreakfast from './images/cat-breakfast.jpg'
import catDessert from './images/cat-dessert.jpg'
import catBrowseAll from './images/cat-browse-all.jpg'

import dishFattoush from './images/dish-fattoush.jpg'
import dishVegetable from './images/dish-vegetable-salad.jpg'
import dishEgg from './images/dish-egg-salad.jpg'

import avatar1 from './images/avatar-1.jpg'
import avatar2 from './images/avatar-2.jpg'
import avatar3 from './images/avatar-3.jpg'
import avatar4 from './images/avatar-4.jpg'

export const IMAGES = {
  hero: heroEater,
  chef,

  categories: {
    mainDish: catMainDish,
    breakfast: catBreakfast,
    dessert: catDessert,
    browseAll: catBrowseAll,
  },

  dishes: {
    fattoush: dishFattoush,
    vegetable: dishVegetable,
    egg: dishEgg,
  },

  avatars: [avatar1, avatar2, avatar3, avatar4],
}

export default IMAGES
