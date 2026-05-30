import React, { useState } from 'react';
import { Flame, Sparkles } from 'lucide-react';

export const Menu = () => {
  const [activeTab, setActiveTab] = useState('sandwiches');

  const categories = [
    { id: 'sandwiches', name: 'Sandwiches' },
    { id: 'plates', name: 'Plates' },
    { id: 'sides', name: 'Sides' },
    { id: 'drinks', name: 'Drinks' },
    { id: 'specials', name: 'Specials' },
  ];

  const menuItems = {
    sandwiches: [
      {
        name: 'The Royal Chicken Shawarma',
        price: '$14.00',
        desc: 'Slow-marinated chicken breast, hand-whipped Lebanese garlic toum, pickled cucumbers, wrapped in artisan saj bread and lightly toasted.',
        tag: 'Best Seller',
        spicy: false
      },
      {
        name: 'Black Truffle Beef Shawarma',
        price: '$16.00',
        desc: 'Prime beef tenderloin, black truffle tahini, charred tomatoes, sumac onions, fresh parsley, wrapped in thin flatbread.',
        tag: 'Signature',
        spicy: false
      },
      {
        name: 'El-Pasha Falafel Wrap',
        price: '$12.00',
        desc: 'Crispy organic herb-infused falafel, whipped sesame hummus, pickled turnips, mint, diced tomatoes, sumac tahini dressing.',
        tag: 'Vegetarian',
        spicy: false
      },
      {
        name: 'Spicy Crimson Shawarma',
        price: '$15.00',
        desc: 'Spiced chicken shawarma, house harissa garlic sauce, pickled red onions, roasted red peppers, toasted saj.',
        tag: 'Spicy Flame',
        spicy: true
      }
    ],
    plates: [
      {
        name: 'Grand Sultan Platter',
        price: '$26.00',
        desc: 'Generous slices of chicken and beef shawarma, served with fire-grilled tomatoes, hand-whipped hummus, pickles, and spiced golden wedges.',
        tag: 'Feast',
        spicy: false
      },
      {
        name: 'Royal Saffron Chicken Plate',
        price: '$24.00',
        desc: 'Slow-roasted chicken shawarma over wild saffron rice, pomegranate seeds, roasted almonds, garlic dip, warm pita bread.',
        tag: 'Popular',
        spicy: false
      },
      {
        name: 'Levant Hummus Bowl with Beef',
        price: '$20.00',
        desc: 'Creamy warm hummus topped with hot, spiced beef tenderloin, toasted pine nuts, sumac, fresh mint, and extra virgin olive oil.',
        tag: 'Chef Choice',
        spicy: false
      }
    ],
    sides: [
      {
        name: 'Truffle Toum Fries',
        price: '$8.00',
        desc: 'Golden crispy fries tossed in sumac, parsley, drizzled with black truffle oil and served with garlic dip.',
        tag: 'Classic Side',
        spicy: false
      },
      {
        name: 'Charcoal Smoked Baba Ganoush',
        price: '$9.00',
        desc: 'Smoked eggplant puree, tahini, garlic, pomegranate arils, olive oil, fresh house-baked flatbread.',
        tag: 'Traditional',
        spicy: false
      },
      {
        name: 'Sumac Pomegranate Halloumi',
        price: '$11.00',
        desc: 'Pan-seared Cypriot halloumi cheese finished with pomegranate reduction, toasted pine nuts, and fresh mint leaves.',
        tag: 'Gourmet',
        spicy: false
      }
    ],
    drinks: [
      {
        name: 'Mint Lemonade Cooler',
        price: '$6.00',
        desc: 'Freshly squeezed lemons, crushed garden mint, orange blossom water, served over crushed ice.',
        tag: 'Refreshing',
        spicy: false
      },
      {
        name: 'Pomegranate Rose Spritzer',
        price: '$7.00',
        desc: 'Sparkling organic pomegranate juice, Lebanese rose water, fresh lime, edible gold leaf flakes.',
        tag: 'Luxury Drink',
        spicy: false
      },
      {
        name: 'Cardamom Arabic Coffee',
        price: '$5.00',
        desc: 'Traditional dark roasted beans infused with crushed green cardamom, brewed and served in a gold finjan.',
        tag: 'Traditional',
        spicy: false
      }
    ],
    specials: [
      {
        name: 'Gold Leaf Wagyu Shawarma',
        price: '$45.00',
        desc: 'A luxury masterpiece: Slow-roasted Wagyu beef, truffle-infused tahini, sumac onions, wrapped in edible 24k gold leaf sheets.',
        tag: 'Ultra Luxury',
        spicy: false
      },
      {
        name: 'Smoked Royal Platter (For Two)',
        price: '$55.00',
        desc: 'A spectacular presentation of beef and chicken, brought to the table smoking under a glass dome with cedarwood smoke, sides of all dips and house flatbreads.',
        tag: 'Table Experience',
        spicy: false
      }
    ]
  };

  return (
    <section 
      id="menu" 
      className="section-padding relative overflow-hidden bg-islamic-pattern"
      style={{
        backgroundColor: 'var(--color-bg-darker)'
      }}
    >
      {/* Background Radial Glow */}
      <div className="absolute left-1/4 top-1/3 w-[450px] h-[450px] ambient-glow-red rounded-full opacity-20 pointer-events-none" />
      <div className="absolute right-1/4 bottom-1/3 w-[450px] h-[450px] ambient-glow-gold rounded-full opacity-25 pointer-events-none" />

      <div className="container-max relative z-10">
        
        {/* Header Text */}
        <div className="section-header">
          <h2 className="section-subtitle">
            Our Culinary Treasures
          </h2>
          <h3 
            className="section-title"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            The Menu
          </h3>
          <p className="section-header-desc">
            Carefully curated recipes fusing ancient Middle Eastern spices with modern gourmet craftsmanship. Select a category to begin your journey.
          </p>
        </div>

        {/* Categories Tab Selector */}
        <div className="menu-tabs">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`menu-tab-btn ${activeTab === cat.id ? 'active' : 'inactive'}`}
              style={{
                fontFamily: 'var(--font-body)',
                background: activeTab === cat.id ? 'linear-gradient(135deg, var(--color-red-primary) 0%, var(--color-red-dark) 100%)' : 'rgba(23, 10, 10, 0.6)'
              }}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Menu Items Grid */}
        <div className="menu-grid">
          {menuItems[activeTab].map((item, idx) => (
            <div 
              key={idx}
              className="menu-card glass-panel card-luxury"
            >
              <div>
                <div className="menu-card-top">
                  {/* Item Name */}
                  <h4 
                    className="menu-card-title"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    {item.name}
                  </h4>
                  
                  {/* Price */}
                  <span 
                    className="menu-card-price text-gold-gradient"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    {item.price}
                  </span>
                </div>

                {/* Description */}
                <p className="menu-card-desc">
                  {item.desc}
                </p>
              </div>

              {/* Tag and features */}
              <div className="menu-card-footer">
                <span className="menu-card-badge">
                  {item.spicy ? <Flame className="w-3.5 h-3.5 text-red-500" /> : <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />}
                  {item.tag}
                </span>

                <button 
                  className="menu-card-action"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  Order Add-on
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Menu;
