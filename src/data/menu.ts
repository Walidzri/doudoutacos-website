export const menuCategories = [
  {
    id: "tacos",
    name: "Tacos",
    description: "Nos tacos et variantes",
    items: [
      {
        id: "tacos",
        name: "Tacos Classique",
        description: "Tacos classique, sauce fromagère, frites",
        fillings: [
          { id: "poulet", name: "Poulet", sizes: [{ size: "L", price: 350 }, { size: "XL", price: 700 }, { size: "XXL", price: 1050 }] },
          { id: "viande-hachee", name: "Viande hachée", sizes: [{ size: "L", price: 400 }, { size: "XL", price: 800 }, { size: "XXL", price: 1200 }] },
          { id: "merguez", name: "Merguez", sizes: [{ size: "L", price: 350 }, { size: "XL", price: 700 }, { size: "XXL", price: 1050 }] },
          { id: "abats", name: "Abats", sizes: [{ size: "L", price: 350 }, { size: "XL", price: 700 }, { size: "XXL", price: 1050 }] },
          { id: "mixte", name: "Mixte", sizes: [{ size: "L", price: 500 }, { size: "XL", price: 1000 }, { size: "XXL", price: 1500 }] },
        ],
      },
      {
        id: "tacos-gratine",
        name: "Tacos Gratiné",
        description: "Sauce fromagère, frites, gratiné au four",
        fillings: [
          { id: "poulet", name: "Poulet", sizes: [{ size: "L", price: 400 }, { size: "XL", price: 800 }, { size: "XXL", price: 1200 }] },
          { id: "viande-hachee", name: "Viande hachée", sizes: [{ size: "L", price: 450 }, { size: "XL", price: 900 }, { size: "XXL", price: 1350 }] },
          { id: "merguez", name: "Merguez", sizes: [{ size: "L", price: 400 }, { size: "XL", price: 800 }, { size: "XXL", price: 1200 }] },
          { id: "abats", name: "Abats", sizes: [{ size: "L", price: 400 }, { size: "XL", price: 800 }, { size: "XXL", price: 1200 }] },
          { id: "mixte", name: "Mixte", sizes: [{ size: "L", price: 550 }, { size: "XL", price: 1100 }, { size: "XXL", price: 1650 }] },
        ],
      },
    ],
  },

  {
    id: "sandwichs",
    name: "Sandwichs",
    description: "Makloub, Tabouna, Malfouf, Baguette farcie",
    items: [
      {
        id: "makloub",
        name: "Makloub",
        description: "Prix unique selon garniture",
        fillings: [
          { id: "poulet", name: "Poulet", sizes: [{ size: "Unique", price: 350 }] },
          { id: "vh", name: "V.H", sizes: [{ size: "Unique", price: 400 }] },
          { id: "merguez", name: "Merguez", sizes: [{ size: "Unique", price: 350 }] },
          { id: "abats", name: "Abats", sizes: [{ size: "Unique", price: 350 }] },
          { id: "mixte", name: "Mixte", sizes: [{ size: "Unique", price: 500 }] },
        ],
      },
      {
        id: "tabouna",
        name: "Tabouna",
        description: "Prix unique selon garniture",
        fillings: [
          { id: "poulet", name: "Poulet", sizes: [{ size: "Unique", price: 300 }] },
          { id: "vh", name: "V.H", sizes: [{ size: "Unique", price: 350 }] },
          { id: "merguez", name: "Merguez", sizes: [{ size: "Unique", price: 300 }] },
          { id: "abats", name: "Abats", sizes: [{ size: "Unique", price: 300 }] },
          { id: "mixte", name: "Mixte", sizes: [{ size: "Unique", price: 450 }] },
        ],
      },
      {
        id: "malfouf",
        name: "Malfouf",
        description: "Prix unique selon garniture",
        fillings: [
          { id: "poulet", name: "Poulet", sizes: [{ size: "Unique", price: 300 }] },
          { id: "vh", name: "V.H", sizes: [{ size: "Unique", price: 350 }] },
          { id: "merguez", name: "Merguez", sizes: [{ size: "Unique", price: 300 }] },
          { id: "abats", name: "Abats", sizes: [{ size: "Unique", price: 300 }] },
          { id: "mixte", name: "Mixte", sizes: [{ size: "Unique", price: 450 }] },
        ],
      },
      {
        id: "baguette-farcie",
        name: "Baguette Farcie",
        description: "Prix unique",
        fillings: [{ id: "mixte", name: "Mixte", sizes: [{ size: "Unique", price: 500 }] }],
      },
    ],
  },

  {
    id: "pizzas",
    name: "Pizzas",
    description: "Tailles L / XL / XXL",
    items: [
      {
        id: "pizza",
        name: "Pizza",
        description: "Choisis ta pizza et ta taille",
        fillings: [
          { id: "margherita", name: "Margherita", sizes: [{ size: "L", price: 300 }, { size: "XL", price: 550 }, { size: "XXL", price: 700 }] },
          { id: "vegetarienne", name: "Végétarienne", sizes: [{ size: "L", price: 450 }, { size: "XL", price: 850 }, { size: "XXL", price: 1100 }] },
          { id: "orientale", name: "Orientale", sizes: [{ size: "L", price: 450 }, { size: "XL", price: 900 }, { size: "XXL", price: 1200 }] },
          { id: "orientale-boisee", name: "Orientale Boisée", sizes: [{ size: "L", price: 500 }, { size: "XL", price: 1100 }, { size: "XXL", price: 1400 }] },
          { id: "vh", name: "V.H (Viande hachée)", sizes: [{ size: "L", price: 450 }, { size: "XL", price: 900 }, { size: "XXL", price: 1200 }] },
          { id: "vh-boisee", name: "V.H Boisée", sizes: [{ size: "L", price: 500 }, { size: "XL", price: 1100 }, { size: "XXL", price: 1400 }] },
          { id: "crevette", name: "Crevette", sizes: [{ size: "L", price: 800 }, { size: "XL", price: 1600 }, { size: "XXL", price: 2000 }] },
          { id: "crevette-boisee", name: "Crevette Boisée", sizes: [{ size: "L", price: 900 }, { size: "XL", price: 1700 }, { size: "XXL", price: 2200 }] },
          { id: "poulet", name: "Poulet", sizes: [{ size: "L", price: 450 }, { size: "XL", price: 900 }, { size: "XXL", price: 1200 }] },
          { id: "poulet-boisee", name: "Poulet Boisée", sizes: [{ size: "L", price: 500 }, { size: "XL", price: 1100 }, { size: "XXL", price: 1400 }] },
          { id: "trois-fromages", name: "3 fromages", sizes: [{ size: "L", price: 500 }, { size: "XL", price: 900 }, { size: "XXL", price: 1300 }] },
          { id: "trois-fromages-boisee", name: "3 fromages boisée", sizes: [{ size: "L", price: 600 }, { size: "XL", price: 1100 }, { size: "XXL", price: 1450 }] },
          { id: "thon", name: "Thon", sizes: [{ size: "L", price: 450 }, { size: "XL", price: 900 }, { size: "XXL", price: 1200 }] },
          { id: "dinde-fumee", name: "Dinde fumée", sizes: [{ size: "L", price: 500 }, { size: "XL", price: 1000 }, { size: "XXL", price: 1500 }] },
          { id: "dinde-fumee-boisee", name: "Dinde fumée boisée", sizes: [{ size: "L", price: 600 }, { size: "XL", price: 1100 }, { size: "XXL", price: 1600 }] },
          { id: "panachee", name: "Panachée", sizes: [{ size: "L", price: 550 }, { size: "XL", price: 1100 }, { size: "XXL", price: 1500 }] },
          { id: "quatre-saisons", name: "4 saisons", sizes: [{ size: "L", price: 800 }, { size: "XL", price: 1300 }, { size: "XXL", price: 1600 }] },
        ],
      },
    ],
  },

  {
    id: "fried",
    name: "Fried Chicken",
    description: "Wings + frites",
    items: [
      {
        id: "fried-chicken",
        name: "Fried Chicken",
        description: "Boxes",
        fillings: [
          { id: "wings-4", name: "Wings x4 + frites", sizes: [{ size: "Box", price: 350 }] },
          { id: "wings-6", name: "Wings x6 + frites", sizes: [{ size: "Box", price: 450 }] },
          { id: "wings-8", name: "Wings x8 + frites", sizes: [{ size: "Box", price: 550 }] },
          { id: "wings-10", name: "Wings x10 + frites", sizes: [{ size: "Box", price: 650 }] },
        ],
      },
    ],
  },

  {
    id: "gratins-poutine",
    name: "Gratins & Poutine",
    description: "Prix uniques",
    items: [
      {
        id: "gratins",
        name: "Gratins",
        description: "Prix unique",
        fillings: [
          { id: "poulet", name: "Poulet", sizes: [{ size: "Unique", price: 450 }] },
          { id: "vh", name: "V.H", sizes: [{ size: "Unique", price: 500 }] },
          { id: "panache", name: "Panaché", sizes: [{ size: "Unique", price: 600 }] },
        ],
      },
      {
        id: "poutine",
        name: "Poutine",
        description: "Prix unique",
        fillings: [
          { id: "poulet", name: "Poulet", sizes: [{ size: "Unique", price: 450 }] },
          { id: "vh", name: "V.H", sizes: [{ size: "Unique", price: 500 }] },
          { id: "panache", name: "Panaché", sizes: [{ size: "Unique", price: 600 }] },
        ],
      },
      {
        id: "souffle",
        name: "Soufflé",
        description: "Sauce rouge / Sauce boisée",
        fillings: [
          { id: "poulet", name: "Poulet", sizes: [{ size: "Sauce rouge", price: 450 }, { size: "Sauce boisée", price: 500 }] },
          { id: "vh", name: "V.H", sizes: [{ size: "Sauce rouge", price: 500 }, { size: "Sauce boisée", price: 550 }] },
          { id: "merguez", name: "Merguez", sizes: [{ size: "Sauce rouge", price: 450 }, { size: "Sauce boisée", price: 500 }] },
          { id: "panache", name: "Panaché", sizes: [{ size: "Sauce rouge", price: 550 }, { size: "Sauce boisée", price: 600 }] },
        ],
      },
    ],
  },

  {
    id: "burgers",
    name: "Burgers",
    description: "Classique / Double (Simple ou Cheddar)",
    items: [
      {
        id: "burgers",
        name: "Burgers",
        description: "Poulet et V.H",
        fillings: [
          {
            id: "poulet",
            name: "Poulet",
            sizes: [
              { size: "Classique (Simple)", price: 300 },
              { size: "Classique (Cheddar)", price: 400 },
              { size: "Double (Simple)", price: 500 },
              { size: "Double (Cheddar)", price: 600 },
            ],
          },
          {
            id: "vh",
            name: "V.H",
            sizes: [
              { size: "Classique (Simple)", price: 250 },
              { size: "Classique (Cheddar)", price: 350 },
              { size: "Double (Simple)", price: 450 },
              { size: "Double (Cheddar)", price: 550 },
            ],
          },
        ],
      },
    ],
  },

  {
    id: "extras",
    name: "Suppléments & Frites",
    description: "Options et accompagnements",
    items: [
      {
        id: "supp-tacos",
        name: "Supp Tacos",
        description: "Suppléments tacos",
        fillings: [
          { id: "cheddar", name: "Cheddar", sizes: [{ size: "L", price: 100 }, { size: "XL", price: 200 }, { size: "XXL", price: 300 }] },
          { id: "sauce-gruyere", name: "Sauce Gruyère", sizes: [{ size: "L", price: 100 }, { size: "XL", price: 200 }, { size: "XXL", price: 300 }] },
          { id: "viande", name: "Viande", sizes: [{ size: "L", price: 150 }, { size: "XL", price: 300 }, { size: "XXL", price: 350 }] },
          { id: "camembert", name: "Camembert", sizes: [{ size: "L", price: 100 }, { size: "XL", price: 200 }, { size: "XXL", price: 300 }] },
        ],
      },
      {
        id: "supp-camembert",
        name: "Supp Camembert",
        description: "Supplément camembert",
        fillings: [
          { id: "camembert", name: "Camembert", sizes: [{ size: "L", price: 150 }, { size: "XL", price: 250 }, { size: "XXL", price: 350 }] },
        ],
      },
      {
        id: "supp-cheddar",
        name: "Supp Cheddar",
        description: "Supplément cheddar",
        fillings: [{ id: "cheddar", name: "Cheddar", sizes: [{ size: "L", price: 150 }, { size: "XL", price: 300 }, { size: "XXL", price: 400 }] }],
      },
      {
        id: "sauce-gruyere-pizza",
        name: "Sauce Gruyere Supp (pizza)",
        description: "Supplément sauce gruyère (pizza)",
        fillings: [{ id: "gruyere", name: "Sauce Gruyère", sizes: [{ size: "L", price: 150 }, { size: "XL", price: 250 }, { size: "XXL", price: 350 }] }],
      },
      {
        id: "barquette-frites",
        name: "Barquette Frites",
        description: "Petite / Grande",
        fillings: [
          { id: "nature", name: "Nature", sizes: [{ size: "Petite", price: 100 }, { size: "Grande", price: 200 }] },
          { id: "epice", name: "Épicé", sizes: [{ size: "Petite", price: 150 }, { size: "Grande", price: 250 }] },
          { id: "cheddar", name: "Cheddar", sizes: [{ size: "Petite", price: 200 }, { size: "Grande", price: 300 }] },
        ],
      },
    ],
  },
];
