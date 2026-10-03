// Menu data. Each dish looks for a photo at images/menu/<id>.jpg
// and shows a placeholder icon until that photo is added.
// "img" points a dish at a photo elsewhere (these are free Unsplash photos);
// delete it to use images/menu/<id>.jpg instead.
// Set "from: true" for dishes whose price varies by size (shows "from Rs ...").
const MENU = [
  {
    category: "Deals",
    icon: "🍽️",
    items: [
      { id: "karahi-deal", img: "https://images.unsplash.com/photo-1708782340793-ec5f2159a689?w=400&h=300&fit=crop&q=75", name: "Karahi Deal", price: 1650, desc: "Half chicken karahi, fried rice, 5 roti, 1 litre cola, raita and salad." },
      { id: "handi-boneless-deal", img: "https://images.unsplash.com/photo-1645432524603-2a5172479006?w=400&h=300&fit=crop&q=75", name: "Handi Boneless Deal", price: 1699, desc: "Half chicken handi, fried rice, 5 roti, 1 litre cola, raita and salad." },
      { id: "ginger-deal", img: "https://images.unsplash.com/photo-1696950169364-173f61adbf95?w=400&h=300&fit=crop&q=75", name: "Ginger Deal", price: 1050, desc: "Chicken ginger with 6 roti, raita and salad." },
      { id: "jalfrezi-deal", img: "https://images.unsplash.com/photo-1631292784640-2b24be784d5d?w=400&h=300&fit=crop&q=75", name: "Jalfrezi Deal", price: 1050, desc: "Chicken jalfrezi with 6 roti, raita and salad." },
      { id: "deal-6", img: "https://images.unsplash.com/photo-1682862279256-b2a9e4f3d22c?w=400&h=300&fit=crop&q=75", name: "Deal 6", price: 2050, desc: "Half chicken karahi, fried rice, 2 kababs, 8 pcs tikka boti, 8 roti, raita and salad." },
      { id: "deal-7", img: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&h=300&fit=crop&q=75", name: "Deal 7", price: 1380, desc: "Chicken qorma, fried rice, 1 kabab, 4 pcs tikka boti, 5 roti, raita and salad." },
      { id: "deal-8", img: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=400&h=300&fit=crop&q=75", name: "Deal 8", price: 560, desc: "Chicken fried rice, 1 kabab, raita and salad." }
    ]
  },
  {
    category: "Biryani & Pulao",
    icon: "🍚",
    items: [
      { id: "beef-chilli-rice", name: "Beef Chilli Rice", price: 500, desc: "Basmati with spicy chilli beef." },
      { id: "junglee-pulao", name: "Junglee Pulao", price: 430, desc: "Rice cooked with meat and mixed vegetables." },
      { id: "special-junglee-pulao", name: "Special Junglee Pulao", price: 650, desc: "A fuller version of our junglee pulao." }
    ]
  },
  {
    category: "Chicken Karahi (with bone)",
    icon: "🍲",
    items: [
      { id: "chicken-karahi", name: "Chicken Karahi", price: 980, from: true, desc: "Cooked with ginger, tomato and a squeeze of lemon." },
      { id: "special-chicken-karahi", name: "Special Chicken Karahi", price: 1200, from: true, desc: "House-style karahi finished with coriander and ginger." },
      { id: "chicken-white-karahi", name: "Chicken White Karahi", price: 1000, from: true, desc: "Mild, creamy karahi with black pepper and cream." },
      { id: "chicken-achari-karahi", name: "Chicken Achari Karahi", price: 980, from: true, desc: "Tangy karahi made with pickling spices." },
      { id: "chicken-makhni-karahi", name: "Chicken Makhni Karahi", price: 1050, from: true, desc: "Rich tomato and butter karahi." },
      { id: "chicken-tikka-karahi", name: "Chicken Tikka Karahi", price: 950, from: true, desc: "Grilled tikka pieces cooked in karahi masala." },
      { id: "kabab-karahi", name: "Kabab Karahi", price: 950, from: true, desc: "Seekh kababs simmered in a tomato and ginger karahi." }
    ]
  },
  {
    category: "Curries, Daal & Sabzi",
    icon: "🥘",
    items: [
      { id: "chicken-qorma", name: "Chicken Qorma", price: 700, desc: "Chicken in a rich, spiced qorma gravy." },
      { id: "chicken-white-qorma", name: "Chicken White Qorma", price: 750, desc: "Mild, creamy white qorma." },
      { id: "chicken-jalfrezi", name: "Chicken Jalfrezi", price: 750, desc: "Chicken with peppers and tomato in a tangy masala." },
      { id: "chicken-with-vegetables", name: "Chicken with Vegetables", price: 700, desc: "Chicken cooked with mixed vegetables." },
      { id: "matar-qeema", name: "Matar Qeema", price: 650, desc: "Minced meat cooked with green peas." },
      { id: "qeema-fry", name: "Qeema Fry", price: 700, desc: "Minced meat fried with onion and spices." },
      { id: "shahi-daal", name: "Shahi Daal", price: 420, desc: "Spiced lentils finished with herbs." },
      { id: "special-shahi-daal", name: "Special Shahi Daal", price: 480, desc: "Our richer house daal." },
      { id: "shahi-chanay", name: "Shahi Chanay", price: 420, desc: "Spiced chickpea curry." },
      { id: "mixed-sabzi", name: "Mixed Sabzi", price: 420, desc: "Seasonal vegetables cooked in masala." },
      { id: "leg-piece-with-roti", name: "Leg Piece with Roti", price: 350, desc: "Chicken leg piece served with 2 roti." }
    ]
  }
];
