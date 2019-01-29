import closed from './images/closed.jpg'

export const weekDays = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
]

export const events = {
  'Sunday': {
    time: '10am - 4pm',
    local: 'Lane Field Park',
    url: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13427.443911392886!2d-117.1725814!3d32.7163217!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x85fb037a3d71ccc7!2sLane+Field+Park!5e0!3m2!1sen!2sus!4v1547445484652'
  },
  'Monday': {
    time: '',
    local: 'Closed',
    url: closed
  },
  'Tuesday': {
    time: '2pm - 7pm',
    local: 'PB Farmers Market',
    url: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3353.8241763286637!2d-117.25578158482367!3d32.79692098096599!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dc01ed2f7fe3f1%3A0xf21f7987ecf77a47!2s901+Garnet+Ave%2C+San+Diego%2C+CA+92109!5e0!3m2!1sen!2sus!4v1547576083834'
  },
  'Wednesday': {
    time: '',
    local: 'Closed',
    url: closed
  },
  'Thursday': {
    time: '',
    local: 'Closed',
    url: closed
  },
  'Friday': {
    time: '',
    local: 'Closed',
    url: closed
  },
  'Saturday': {
    time: '10am - 4pm',
    local: 'Ruocco Park',
    url: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3357.0599601491053!2d-117.17419978482592!3d32.711034380992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d9535569dc3e43%3A0x4e7c1a069495628b!2sRuocco+Park!5e0!3m2!1sen!2sus!4v1547501925797'
  },
}

export const souvlakis = [
  {
    title: 'Chicken',
    description: 'Marinated chicken thigh, paprika aioli',
    price: '$12'
  },
  {
    title: 'Pork',
    description: 'Marinated pork shoulder, tzatziki',
    price: '$12'
  },
  {
    title: 'Vegetable',
    description: 'Seasonal vegetables, lemon herb aioli',
    price: '$12'
  },
  {
    title: '**All souvlaki sandwiches are topped with tomato, pickled red onion, and hand cut fries.',
    description: '',
    price: ''
  }
]

export const smallPlates = [
  {
    title: 'Fresh Pita',
    description: 'Homemade and grilled to order',
    price: '$3'
  },
  {
    title: 'Dips',
    description: 'Tzatziki, Eggplant, or Spicy Feta served with pita',
    price: '$6'
  },
  {
    title: 'Horiatiki',
    description: 'Tomato, cucumber, peppers, red onion, capers, feta, and red wine vinegrette',
    price: '$9'
  },
  {
    title: 'Greek Fries',
    description: 'Handcut russet fries topped with feta cheese and lemon herb aioli',
    price: '$9'
  }
]

export const drinks = [
  {
    title: 'Water',
    description: '',
    price: '$3'
  },
  {
    title: 'Soda',
    description: '',
    price: '$3'
  },
  {
    title: 'Greek Soda',
    description: '',
    price: '$4'
  },
  {
    title: 'Cold Brew Coffee',
    description: '',
    price: '$4'
  }
]