import React, { useState } from 'react';
import { Flame, Sparkles, AlertCircle } from 'lucide-react';

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

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header Text */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-gold-gradient text-xs uppercase tracking-widest font-semibold mb-3">
            Our Culinary Treasures
          </h2>
          <h3 
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            The Menu
          </h3>
          <p className="text-gray-400">
            Carefully curated recipes fusing ancient Middle Eastern spices with modern gourmet craftsmanship. Select a category to begin your journey.
          </p>
        </div>

        {/* Categories Tab Selector */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-6 py-3 rounded-full text-sm font-semibold tracking-wider transition-all duration-300 ${
                activeTab === cat.id
                  ? 'bg-gradient-to-r from-[#8b0000] to-[#4a0000] border border-[#d4af37] text-white shadow-lg'
                  : 'bg-[#170a0a]/60 border border-white/5 text-gray-400 hover:text-white hover:border-[#d4af37]/30'
              }`}
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {menuItems[activeTab].map((item, idx) => (
            <div 
              key={idx}
              className="glass-panel p-6 md:p-8 card-luxury flex flex-col justify-between text-left"
            >
              <div>
                <div className="flex justify-between items-start gap-4 mb-4">
                  {/* Item Name */}
                  <h4 
                    className="text-xl md:text-2xl font-bold text-[#f4edd8]"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    {item.name}
                  </h4>
                  
                  {/* Price */}
                  <span 
                    className="text-lg md:text-xl font-bold text-gold-gradient shrink-0"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    {item.price}
                  </span>
                </div>

                {/* Description */}
                <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-6">
                  {item.desc}
                </p>
              </div>

              {/* Tag and features */}
              <div className="flex justify-between items-center border-t border-white/5 pt-4 mt-auto">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#8b0000]/10 border border-[#d4af37]/20 text-gold-light">
                  {item.spicy ? <Flame className="w-3.5 h-3.5 text-red-500 animate-pulse" /> : <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />}
                  {item.tag}
                </span>

                <button 
                  className="text-xs uppercase tracking-wider font-semibold text-[#f4edd8] hover:text-[#d4af37] transition-colors"
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
