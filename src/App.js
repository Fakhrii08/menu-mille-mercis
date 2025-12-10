import React, { useState } from 'react';

const menuData = {
  boissons: {
    icon: "🍹",
    title: "Boissons",
    color: "#E67E22",
    subcategories: {
      chaudes: {
        icon: "☕",
        title: "Boissons Chaudes",
        items: [
          { name: "Tasse de lait", price: 3.5 },
          { name: "Expresso", price: 4.5 },
          { name: "Américain", price: 5 },
          { name: "Capucin", price: 5 },
          { name: "Café crème", price: 5.5 },
          { name: "Chocolat au lait", price: 6 },
          { name: "Cappuccino", price: 6.5 },
          { name: "Café turc", price: 8 },
          { name: "Double expresso", price: 8 },
          { name: "Chocolat chaud", price: 8.5 },
          { name: "Latte caramel", price: 7 },
          { name: "Latte chocolat", price: 7 },
          { name: "Latte noisette", price: 10 },
          { name: "Latte nutella", price: 9.5 },
          { name: "Latte speculose", price: 9.5 },
          { name: "Latte pistache", price: 12 }
        ]
      },
      capsules: {
        icon: "💊",
        title: "Cafés Capsules",
        items: [
          { name: "Expresso", price: 6.5 },
          { name: "Expresso Machiatto", price: 7 },
          { name: "Americano", price: 8 },
          { name: "Double shot", price: 10 }
        ]
      },
      thes: {
        icon: "🍵",
        title: "Thés & Infusions",
        items: [
          { name: "Menthe", price: 5 },
          { name: "Kyuffi", price: 5.5 },
          { name: "Verveine", price: 5 },
          { name: "Infusion", price: 6 },
          { name: "Aux amandes", price: 8.5 },
          { name: "Aux pignons", price: 10 },
          { name: "El Bey", price: 13 },
          { name: "Thé 4 plantes", price: 7 }
        ]
      },
      froides: {
        icon: "🧊",
        title: "Boissons Froides",
        items: [
          { name: "Américain glacé", price: 8 },
          { name: "Liégeois", price: 8 },
          { name: "Thé glacé", price: 8 },
          { name: "Frappé caramel", price: 14 },
          { name: "Frappé nutella", price: 14 },
          { name: "Frappé spéculos", price: 14 },
          { name: "Frappé noisette", price: 16 },
          { name: "Frappé pistache", price: 17 },
          { name: "Frappé fruit de saison", price: 14 }
        ]
      },
      jus: {
        icon: "🍊",
        title: "Jus & Fraîcheur",
        items: [
          { name: "Jus d'orange", price: 7 },
          { name: "Citronnade", price: 8.5 },
          { name: "Fraise", price: 10.5 },
          { name: "Jus de Banane", price: 10.5 },
          { name: "Citronnade aux amandes", price: 11.5 },
          { name: "Citronnade Brésilienne", price: 14, badge: "Bestseller" },
          { name: "Jus de Kiwi", price: 12 },
          { name: "Jus Goyave", price: 12 },
          { name: "Banane Kiwi", price: 13 },
          { name: "Banane Fraise", price: 13 },
          { name: "Banane date", price: 12.5 },
          { name: "Banane date Fruit Sec", price: 16.5 },
          { name: "Panaché", price: 10 },
          { name: "Banane Orange", price: 13 }
        ]
      },
      cocktails: {
        icon: "🍹",
        title: "Mojitos & Cocktails",
        items: [
          { name: "Mojito Virgin", price: 13.5 },
          { name: "Mojito Blue", price: 14.5 },
          { name: "Mojito Red", price: 16 },
          { name: "Fruit Cocktail", price: 16.5 }
        ]
      },
      smoothies: {
        icon: "🥤",
        title: "Smoothies",
        items: [
          { name: "Healthy (Red / Green)", price: 16 },
          { name: "Banane", price: 16 },
          { name: "Fraise", price: 16 },
          { name: "Tropical", price: 17 },
          { name: "Forêt", price: 17 },
          { name: "Vert", price: 17 },
          { name: "Protéiné", price: 18 },
          { name: "Pina Colada", price: 18 },
          { name: "Red Kiss", price: 18 }
        ]
      }
    }
  },
  sucre: {
    icon: "🍫",
    title: "Sucré",
    color: "#9B59B6",
    subcategories: {
      crepesSucrees: {
        icon: "🥞",
        title: "Crêpes Sucrées",
        items: [
          { name: "Crêpe exotique (Miel, Fruit Exotique)", price: 13 },
          { name: "Crêpe Nutella", price: 15 },
          { name: "Crêpe Nutella Banane", price: 17 },
          { name: "Crêpe Nutella amandine", price: 17 },
          { name: "Crêpe chocolat pistache", price: 18 },
          { name: "Crêpe cheese cake Mille Mercis", price: 22, badge: "Spécial" }
        ]
      },
      pancakes: {
        icon: "🥞",
        title: "Pancakes",
        items: [
          { name: "Exotique", price: 14 },
          { name: "Nutella", price: 15 },
          { name: "Nutella Banane Amande", price: 19 },
          { name: "Jardin Pistache", price: 19 },
          { name: "Mille Mercis", price: 25, badge: "Signature" }
        ]
      },
      painPerdu: {
        icon: "🍯",
        title: "Pain Perdu",
        items: [
          { name: "Caramel Banane", price: 15 },
          { name: "Nutella Banane", price: 15 },
          { name: "Nutella Fruit Rouge", price: 20 },
          { name: "Fruit Rouge", price: 16 },
          { name: "Fruit de Saison", price: 18 },
          { name: "Jardin Pistache", price: 20 }
        ]
      }
    }
  },
  sale: {
    icon: "🧀",
    title: "Salé",
    color: "#E74C3C",
    subcategories: {
      omelettes: {
        icon: "🍳",
        title: "Omelettes",
        items: [
          { name: "Omelette nature", price: 9 },
          { name: "Omelette jambon fromage", price: 15 },
          { name: "Omelette poulet fromage", price: 17 },
          { name: "Omelette thon fromage", price: 15 },
          { name: "Omelette légumes fromage", price: 14 }
        ]
      },
      croissants: {
        icon: "🥐",
        title: "Croissants Salés",
        items: [
          { name: "Croissant salé jambon ou thon", price: 9 },
          { name: "Croissant salé poulet fumé sauce béchamel", price: 12 },
          { name: "Croissant salé saumon sauce béchamel", price: 15 }
        ]
      },
      crepesSalees: {
        icon: "🧀",
        title: "Crêpes Salées",
        items: [
          { name: "Crêpe thon fromage", price: 16 },
          { name: "Crêpe Jambon fromage", price: 16 },
          { name: "Crêpe poulet fromage", price: 18 }
        ]
      },
      crepesGratinees: {
        icon: "🔥",
        title: "Crêpes Gratinées",
        items: [
          { name: "Crêpe poulet champignons sauce blanche", price: 19 },
          { name: "Crêpe Bolonaise", price: 18 }
        ]
      },
      toasts: {
        icon: "🍞",
        title: "Toasts",
        items: [
          { name: "Toast Tomate", price: 15 },
          { name: "Toast Tunisien", price: 16 },
          { name: "Toast Avocat", price: 17 },
          { name: "Toast Poulet", price: 18 },
          { name: "Toast Bresaola", price: 20 },
          { name: "Toast Scandinave", price: 25 },
          { name: "Œuf Bénédict", price: 12 }
        ]
      }
    }
  },
  plats: {
    icon: "🍽️",
    title: "Plats & Salades",
    color: "#27AE60",
    subcategories: {
      plats: {
        icon: "🍗",
        title: "Plats Principaux",
        items: [
          { name: "Turkish Ciribri", price: 20 },
          { name: "Poulet grillé", price: 25 },
          { name: "Émincé poulet champignon", price: 26 },
          { name: "Poulet Crespi", price: 26 }
        ]
      },
      pates: {
        icon: "🍝",
        title: "Pâtes",
        items: [
          { name: "Pâtes à la sauce puttanesca", price: 16 },
          { name: "Pâtes penne poulet pesto", price: 19 },
          { name: "Pâtes penne poulet sauce champignons", price: 18 }
        ]
      },
      salades: {
        icon: "🥗",
        title: "Salades",
        items: [
          { name: "Salade César", price: 16 },
          { name: "Salade Grecque", price: 16 },
          { name: "Salade Exotique", price: 17 }
        ]
      }
    }
  },
  petitDej: {
    icon: "🌅",
    title: "Petit Déjeuner",
    color: "#F39C12",
    subcategories: {
      formules: {
        icon: "☀️",
        title: "Formules Petit Déj",
        items: [
          { name: "Express", price: 9.5, desc: "Café au choix, viennoiserie, eau ½" },
          { name: "Express Plus", price: 14, desc: "Café, jus, viennoiserie, eau, vérine du chef" },
          { name: "Classique", price: 27, desc: "Complet avec omelette, charcuterie, pancake..." },
          { name: "Duo (2 pers.)", price: 46.9, desc: "Menu complet pour 2 personnes" },
          { name: "Tunisienne", price: 32, desc: "Mlaoui, harissa, thon, chakchouka..." },
          { name: "Healthy", price: 25, desc: "Café, jus protéiné, yaourt granola, omelette..." }
        ]
      },
      brunch: {
        icon: "🍾",
        title: "Brunch Mille Mercis",
        items: [
          { name: "Brunch Mille Mercis (2 pers.)", price: 62, badge: "Premium" },
          { name: "Labna Classic", price: 23 },
          { name: "Labna Saucisse", price: 25 },
          { name: "Labna Poulet", price: 25 }
        ]
      },
      brunchToast: {
        icon: "🍞",
        title: "Brunch Toast",
        items: [
          { name: "Toast Tunisienne", price: 22 },
          { name: "Œuf Bénédict", price: 22 },
          { name: "Toast Avocat", price: 24 },
          { name: "Toast Poulet", price: 25 },
          { name: "Toast Bresaola", price: 26 },
          { name: "Toast Scandinave", price: 29 },
          { name: "Pain Perdu", price: 26 }
        ]
      }
    }
  }
};

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const categories = Object.entries(menuData);

  const currentCategory = selectedCategory ? menuData[selectedCategory] : null;
  const currentSubcategory = selectedSubcategory && currentCategory 
    ? currentCategory.subcategories[selectedSubcategory] 
    : null;

  const filteredItems = currentSubcategory
    ? currentSubcategory.items.filter(item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];

  const goBack = () => {
    if (selectedSubcategory) {
      setSelectedSubcategory(null);
      setSearchTerm('');
    } else if (selectedCategory) {
      setSelectedCategory(null);
    }
  };

  const getTotalItems = (category) => {
    return Object.values(category.subcategories).reduce((sum, sub) => sum + sub.items.length, 0);
  };

  const styles = {
    container: {
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
      fontFamily: "'Playfair Display', Georgia, serif",
      color: '#fff',
      paddingBottom: '100px'
    },
    header: {
      background: 'linear-gradient(180deg, rgba(212,175,55,0.3) 0%, transparent 100%)',
      padding: '20px 16px',
      textAlign: 'center',
      position: 'sticky',
      top: 0,
      zIndex: 100,
      backdropFilter: 'blur(10px)'
    },
    title: {
      fontSize: '28px',
      fontWeight: '700',
      background: 'linear-gradient(135deg, #d4af37 0%, #f4e4ba 50%, #d4af37 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      margin: 0,
      letterSpacing: '3px',
      textTransform: 'uppercase'
    },
    subtitle: {
      fontSize: '12px',
      color: '#d4af37',
      margin: '8px 0 0 0',
      letterSpacing: '2px',
      opacity: 0.8
    },
    breadcrumb: {
      padding: '12px 16px',
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      fontSize: '13px',
      color: 'rgba(255,255,255,0.6)',
      background: 'rgba(0,0,0,0.2)',
      flexWrap: 'wrap'
    },
    searchContainer: {
      padding: '16px',
      position: 'sticky',
      top: '80px',
      zIndex: 99
    },
    searchInput: {
      width: '100%',
      padding: '14px 20px',
      borderRadius: '30px',
      border: '2px solid rgba(212,175,55,0.3)',
      background: 'rgba(255,255,255,0.1)',
      color: '#fff',
      fontSize: '16px',
      outline: 'none',
      boxSizing: 'border-box',
      backdropFilter: 'blur(10px)'
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: '16px',
      padding: '16px'
    },
    categoryButton: (color) => ({
      background: `linear-gradient(145deg, ${color}44, ${color}22)`,
      border: `2px solid ${color}88`,
      borderRadius: '24px',
      padding: '28px 16px',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '12px',
      boxShadow: `0 8px 32px ${color}33`
    }),
    categoryIcon: {
      fontSize: '52px',
      filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.4))'
    },
    categoryTitle: {
      color: '#fff',
      fontSize: '16px',
      fontWeight: '700',
      textAlign: 'center'
    },
    categoryCount: {
      fontSize: '11px',
      color: 'rgba(255,255,255,0.6)',
      background: 'rgba(255,255,255,0.15)',
      padding: '5px 12px',
      borderRadius: '12px'
    },
    backButton: {
      background: 'rgba(255,255,255,0.1)',
      border: 'none',
      borderRadius: '50px',
      padding: '12px 24px',
      color: '#fff',
      fontSize: '14px',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      marginBottom: '20px'
    },
    sectionHeader: (color) => ({
      textAlign: 'center',
      marginBottom: '24px',
      padding: '24px',
      background: `linear-gradient(145deg, ${color}44, ${color}11)`,
      borderRadius: '24px',
      border: `2px solid ${color}66`
    }),
    subcategoryButton: {
      background: 'rgba(255,255,255,0.08)',
      border: '1px solid rgba(255,255,255,0.15)',
      borderRadius: '16px',
      padding: '20px',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      gap: '16px',
      transition: 'all 0.2s ease',
      width: '100%',
      textAlign: 'left'
    },
    subcategoryIcon: (color) => ({
      fontSize: '36px',
      width: '60px',
      height: '60px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: `${color}33`,
      borderRadius: '16px'
    }),
    itemCard: {
      background: 'rgba(255,255,255,0.08)',
      borderRadius: '16px',
      padding: '16px 20px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      border: '1px solid rgba(255,255,255,0.1)'
    },
    itemName: {
      fontSize: '16px',
      fontWeight: '500',
      color: '#fff'
    },
    badge: {
      background: 'linear-gradient(135deg, #d4af37, #f4e4ba)',
      color: '#1a1a2e',
      fontSize: '10px',
      padding: '3px 10px',
      borderRadius: '20px',
      fontWeight: '700',
      textTransform: 'uppercase'
    },
    price: {
      background: 'linear-gradient(135deg, #d4af37, #f4e4ba)',
      color: '#1a1a2e',
      padding: '8px 16px',
      borderRadius: '20px',
      fontWeight: '700',
      fontSize: '15px',
      marginLeft: '12px',
      whiteSpace: 'nowrap'
    },
    nav: {
      position: 'fixed',
      bottom: 0,
      left: 0,
      right: 0,
      background: 'rgba(26, 26, 46, 0.95)',
      backdropFilter: 'blur(20px)',
      padding: '12px 20px 24px 20px',
      display: 'flex',
      justifyContent: 'space-around',
      borderTop: '1px solid rgba(212,175,55,0.3)'
    },
    navButton: (active) => ({
      background: active ? 'linear-gradient(135deg, #d4af37, #f4e4ba)' : 'transparent',
      border: 'none',
      borderRadius: '16px',
      padding: '12px 24px',
      color: active ? '#1a1a2e' : '#fff',
      cursor: 'pointer',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '4px',
      opacity: active ? 1 : 0.6
    })
  };

  return (
    <div style={styles.container}>
      {/* Header */}
      <header style={styles.header}>
        <h1 style={styles.title}>✨ Mille Mercis ✨</h1>
        <p style={styles.subtitle}>Menu 2026</p>
      </header>

      {/* Breadcrumb */}
      {(selectedCategory || selectedSubcategory) && (
        <div style={styles.breadcrumb}>
          <span 
            onClick={() => { setSelectedCategory(null); setSelectedSubcategory(null); setSearchTerm(''); }}
            style={{ cursor: 'pointer', color: '#d4af37' }}
          >
            🏠 Menu
          </span>
          {selectedCategory && (
            <>
              <span>›</span>
              <span 
                onClick={() => { setSelectedSubcategory(null); setSearchTerm(''); }}
                style={{ cursor: selectedSubcategory ? 'pointer' : 'default', color: selectedSubcategory ? '#d4af37' : '#fff' }}
              >
                {currentCategory.icon} {currentCategory.title}
              </span>
            </>
          )}
          {selectedSubcategory && (
            <>
              <span>›</span>
              <span style={{ color: '#fff' }}>
                {currentSubcategory.icon} {currentSubcategory.title}
              </span>
            </>
          )}
        </div>
      )}

      {/* Search Bar */}
      {selectedSubcategory && (
        <div style={styles.searchContainer}>
          <input
            type="text"
            placeholder="🔍 Rechercher..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={styles.searchInput}
          />
        </div>
      )}

      {/* Main Categories Grid */}
      {!selectedCategory ? (
        <div style={{ padding: '16px' }}>
          <p style={{ textAlign: 'center', color: 'rgba(255,255,255,0.6)', marginBottom: '20px', fontSize: '14px' }}>
            Choisissez une catégorie
          </p>
          <div style={styles.grid}>
            {categories.map(([key, category]) => (
              <button
                key={key}
                onClick={() => setSelectedCategory(key)}
                style={styles.categoryButton(category.color)}
              >
                <span style={styles.categoryIcon}>{category.icon}</span>
                <span style={styles.categoryTitle}>{category.title}</span>
                <span style={styles.categoryCount}>{getTotalItems(category)} articles</span>
              </button>
            ))}
          </div>
        </div>
      ) : !selectedSubcategory ? (
        /* Subcategories View */
        <div style={{ padding: '16px' }}>
          <button onClick={goBack} style={styles.backButton}>← Retour</button>
          
          <div style={styles.sectionHeader(currentCategory.color)}>
            <span style={{ fontSize: '64px' }}>{currentCategory.icon}</span>
            <h2 style={{ fontSize: '26px', margin: '12px 0 0 0', color: '#fff' }}>{currentCategory.title}</h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {Object.entries(currentCategory.subcategories).map(([key, subcategory]) => (
              <button key={key} onClick={() => setSelectedSubcategory(key)} style={styles.subcategoryButton}>
                <span style={styles.subcategoryIcon(currentCategory.color)}>{subcategory.icon}</span>
                <div style={{ flex: 1 }}>
                  <span style={{ color: '#fff', fontSize: '17px', fontWeight: '600', display: 'block' }}>{subcategory.title}</span>
                  <span style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)', marginTop: '4px', display: 'block' }}>{subcategory.items.length} articles</span>
                </div>
                <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '20px' }}>›</span>
              </button>
            ))}
          </div>
        </div>
      ) : (
        /* Items View */
        <div style={{ padding: '16px' }}>
          <button onClick={goBack} style={styles.backButton}>← Retour</button>

          <div style={styles.sectionHeader(currentCategory.color)}>
            <span style={{ fontSize: '56px' }}>{currentSubcategory.icon}</span>
            <h2 style={{ fontSize: '22px', margin: '12px 0 0 0', color: '#fff' }}>{currentSubcategory.title}</h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {filteredItems.map((item, index) => (
              <div key={index} style={styles.itemCard}>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
                    <span style={styles.itemName}>{item.name}</span>
                    {item.badge && <span style={styles.badge}>{item.badge}</span>}
                  </div>
                  {item.desc && (
                    <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.5)', margin: '6px 0 0 0', lineHeight: '1.4' }}>{item.desc}</p>
                  )}
                </div>
                <div style={styles.price}>{item.price} DT</div>
              </div>
            ))}
          </div>

          {filteredItems.length === 0 && searchTerm && (
            <div style={{ textAlign: 'center', padding: '40px', color: 'rgba(255,255,255,0.5)' }}>
              <span style={{ fontSize: '48px' }}>🔍</span>
              <p>Aucun résultat pour "{searchTerm}"</p>
            </div>
          )}
        </div>
      )}

      {/* Bottom Navigation */}
      <nav style={styles.nav}>
        <button
          onClick={() => { setSelectedCategory(null); setSelectedSubcategory(null); setSearchTerm(''); }}
          style={styles.navButton(!selectedCategory)}
        >
          <span style={{ fontSize: '20px' }}>🏠</span>
          <span style={{ fontSize: '11px', fontWeight: '600' }}>Menu</span>
        </button>
        <button 
          onClick={() => window.open('https://www.google.com/search?sca_esv=d44b221d688bac1f&rlz=1C1OPNX_frTN1093TN1093&sxsrf=AE3TifMGaL1dyHZ2ipOGTyxOUa0iktfvsg:1765392814300&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-E9gYBZLjdcgPzkjXT_kkA2QUwROIP15yiuImGsoUOy_PGVzA7GVIfNTA8HjP8QLtpIoj28C5AyAYZrZqebYrYxPspzQT&q=Mille+Mercis+Avis&sa=X&ved=2ahUKEwjRotfc2LORAxV9fKQEHbXGLj0Q0bkNegQIJhAD&biw=1920&bih=911&dpr=1#lrd=0x12fd4bcd8c3c9097:0xafd050d037d9c9bf,3,,,,', '_blank')}
          style={styles.navButton(false)}
        >
          <span style={{ fontSize: '20px' }}>⭐</span>
          <span style={{ fontSize: '11px', fontWeight: '600' }}>Avis Google</span>
        </button>
        <button 
          onClick={() => window.open('https://www.instagram.com/mille.mercis.cafe.patisserie?igsh=MXJubHljdHNleG52bw==', '_blank')}
          style={styles.navButton(false)}
        >
          <span style={{ fontSize: '20px' }}>📸</span>
          <span style={{ fontSize: '11px', fontWeight: '600' }}>Instagram</span>
        </button>
      </nav>
    </div>
  );
}

export default App;
