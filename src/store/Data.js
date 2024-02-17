const products = [
  {
    id: 1,
    brandLogo:
      "https://i.pinimg.com/736x/cb/a4/5c/cba45c297d76265b0f0b60ebd5d967bd.jpg",
    name: " PUMA BMW Motorsport Future Cat Ultra Trainers, White/Grey Violet ",
    rating: 4.3,
    category: "shose",
    brandName: "puma",
    description:
      "With a form that recalls the sleekest lines on race cars, these BMW Motorsport sneakers make an instant statement. The synthetic upper is incredibly soft to the touch, and the vamp and PUMA Formstrip are both perforated. ",
    price: 199,
    image:
      "https://i.pinimg.com/564x/ec/fa/90/ecfa906c3c5c975f3ae87786a722fdf2.jpg",
  },
  {
    id: 2,
    brandLogo:
      "https://cdn.mos.cms.futurecdn.net/786NzPhpXo6G8hkutJkHTM-1200-80.jpg",
    name: "Men's Nike Big Swoosh Reversible Boa Jacket (Asia Sizing) in Black White",
    rating: 4.2,
    category: "jacket",
    brandName: "nike",
    description:
      "Buy and sell the hottest sneakers including Adidas Yeezy and Retro Jordans, Supreme streetwear, trading cards, collectibles, designer handbags and luxury watches.",
    price: 229,
    image:
      "https://i.pinimg.com/564x/24/90/10/24901015450c3bb8da14881091d92035.jpg",
  },
  {
    id: 3,
    brandLogo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJVRib8BpkMk83D9wZWoMCTUUaaMgUSijKQA&usqp=CAU",
    name: "Predator 30 FG - 30 Year Teaser (IF8897) - 12 adidas  ",
    category: "shose",
    brandName: "adidas",
    rating: 3.2,
    description:
      "1994. A new staple of adidas football boots is spotted for the first time on the field. An instant classic is born. The limited edition Predator Elite FT Firm Ground Football Boots are a true collector's item that pays homage to those memorable days. ",
    price: 99,
    image:
      "https://i.pinimg.com/564x/72/e4/0a/72e40ad1c4db9a72dc2a6b8b8c385c00.jpg",
  },
  {
    id: 4,
    brandLogo:
      "https://i.pinimg.com/564x/79/ab/37/79ab37db17393a970c5a11b662d62e80.jpg",
    name: "1995-97 England Umbro Home Jersey classic retro 100% original football shirt",
    rating: 4.8,
    category: "shirt",
    brandName: "umbro",
    description:
      "Buy this classic retro 100% original football shirt at Vintagefootballshirts.com - 1995-97 England Umbro Home Shirt",
    price: 119,
    image:
      "https://i.pinimg.com/564x/ac/d1/1c/acd11c1421d4b795b3c2905eece35db2.jpg",
  },
  {
    id: 5,
    brandLogo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJVRib8BpkMk83D9wZWoMCTUUaaMgUSijKQA&usqp=CAU",
    name: " Adidas shirt Originals + Skateboards   global streetwear phenomenon",
    rating: 4.2,
    category: "shirt",
    brandName: "adidas",
    description:
      "London’s Palace Skateboards has quickly grown from a core skateboard company into a global streetwear phenomenon. Drawing on a ’90s vibe that is uniquely London ",
    price: 229,
    image:
      "https://i.pinimg.com/564x/bf/7b/84/bf7b847035bea088d16662902720e24d.jpg",
  },
  {
    id: 6,
    brandLogo:
      "https://i.pinimg.com/736x/cb/a4/5c/cba45c297d76265b0f0b60ebd5d967bd.jpg",
    name: "Sports jacket for men Puma Essentials Padded Black ",
    rating: 4.2,
    category: "jacket",
    brandName: "puma",
    description:
      "Stay in shape and discover the latest innovations in the industry to practice sport in the best conditions! Buy Puma Essentials Padded Black Sport Jacket for Men at the best price and enjoy a healthy life! Gender",
    price: 229,
    image:
      "https://i.pinimg.com/564x/ec/6e/d9/ec6ed9a200c011fc6de3972d51fc8735.jpg",
  },
  {
    id: 7,
    brandLogo:
      "https://cdn.mos.cms.futurecdn.net/786NzPhpXo6G8hkutJkHTM-1200-80.jpg",
    name: "Nike Phantom GX Elite DF FG Firm Ground Soccer Cleat Hyper ",
    rating: 4.2,
    category: "shose",
    brandName: "nike",
    description:
      "Nike Phantom GX Elite DF FG Firm Ground Soccer Cleat Hyper Turquoise/Fuchsia Dream/Black/White. Stay ready so you don't have to get ready with the enhanced grip and comfort of the Nike Phantom GX Elite DF (collared) soccer cleats. CLEAT-TO-BALL CONTACT More grip",
    price: 229,
    image:
      "https://i.pinimg.com/564x/40/9a/06/409a06d616dc82dda68f810e84ff8de7.jpg",
  },
  {
    id: 8,
    brandLogo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJVRib8BpkMk83D9wZWoMCTUUaaMgUSijKQA&usqp=CAU",
    name: " adidas Tastigo 19 Women's Soccer Shorts are super comfortable to wear during practice or games.",
    rating: 4.2,
    category: "shorts",
    brandName: "adidas",
    description:
      " The adidas Tastigo 19 soccer shorts are made from soft, sweat-wicking material for maximum mobility and comfort throughout the game. With an elastic waistband and drawcord, the adidas Tastigo 19 shorts stay in place and offer a more custom fit. ",
    price: 229,
    image:
      "https://i.pinimg.com/564x/d2/ae/11/d2ae11cd258b78ca8215f96f958aa791.jpg",
  },
  {
    id: 9,
    brandLogo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJVRib8BpkMk83D9wZWoMCTUUaaMgUSijKQA&usqp=CAU",
    name: "adidas Originals Men's Adicolor Classics Superstar Track Jacket",
    rating: 4.2,
    category: "jacket",
    brandName: "adidas",
    description:
      " Buy adidas Originals Men's Adicolor Classics Superstar Track Jacket and other Track & Active Jackets at Amazon.com. Our wide selection is elegible for free shipping and free returns.",
    price: 229,
    image:
      "https://i.pinimg.com/564x/52/b4/55/52b45550b9cf749d02063fe79b61b4df.jpg",
  },
  {
    id: 10,
    brandLogo:
      "https://i.pinimg.com/564x/79/ab/37/79ab37db17393a970c5a11b662d62e80.jpg",
    name: "Umbro Speciali Pro 98 TF Men's Shoes Black/White/Tw Royal",
    rating: 4.8,
    category: "shose",
    brandName: "umbro",
    description:
      "Umbro Speciali Pro 98 TF - Men's Shoes : Black/White/Tw Royal : Sporty and stylish, the Umbro Speciali Pro 98 TF are the epitome of comfort and a must-have in your shoe collection. Leather upper. Comfortable insole and lining. Stylish accent elaborate tongue tab with brand logo",
    price: 119,
    image:
      "https://i.pinimg.com/564x/d5/74/90/d57490a18242322498f2a6b0a2a9b830.jpg",
  },
  {
    id: 11,
    brandLogo:
      "https://cdn.mos.cms.futurecdn.net/786NzPhpXo6G8hkutJkHTM-1200-80.jpg",
    name: "Men's Nike Stock Dri-Fit Overtime Short - XL / TM SCARLET/TM WHITE/TM WHITE ",
    rating: 4.2,
    category: "shorts",
    brandName: "nike",
    description:
      "Take the court ready to go the distance—and even into overtime—in the lightweight comfort of the Nike Dri-FIT Shorts. Breathable knit fabric with sweat-wicking power helps keep you cool and dry from tip-off to the locker room. Choose from 16 different color combinations to outfit your team. ",
    price: 229,
    image:
      "https://i.pinimg.com/564x/ae/42/91/ae4291aa82a5352c494063d9d5b1c331.jpg",
  },
  {
    id: 12,
    brandLogo:
      "https://cdn.mos.cms.futurecdn.net/786NzPhpXo6G8hkutJkHTM-1200-80.jpg",
    name: "Tuy X Nike Shirt Croover Chet Ogo Hort Eeve Back",
    rating: 4.2,
    category: "shirt",
    brandName: "nike",
    description:
      "Women's Stussy Tuy X Nike Croover Chet Ogo Hort Eeve Back - Black - T-shirts Stussy x nike crossover chest logo short sleeve t-shirt unisex black dd3343-010. ",
    price: 229,
    image:
      "https://i.pinimg.com/564x/b1/46/15/b1461509e106917875f703bb18e9e51d.jpg",
  },
  {
    id: 13,
    brandLogo:
      "https://i.pinimg.com/564x/79/ab/37/79ab37db17393a970c5a11b662d62e80.jpg",
    name: "Umbro Jacket Umbro Coat Vintage 90s Black Size Extra Extra Large",
    rating: 4.8,
    category: "jacket",
    brandName: "umbro",
    description:
      "Umbro Jacket Umbro Coat Vintage 90s Track Jacket Windbreaker Wind Resistent Waterproof Vintage Jacket Light Track Jacket Men's Black Size Extra Extra Large Fast shipping Approx measurements PTP:16 Length:31 SKU:AL1A06 Size: Extra Extra Large",
    price: 119,
    image:
      "https://i.pinimg.com/564x/c0/48/1b/c0481beccc5ac12641a8dc04645bd036.jpg",
  },
  {
    id: 14,
    brandLogo:
      "https://i.pinimg.com/736x/cb/a4/5c/cba45c297d76265b0f0b60ebd5d967bd.jpg",
    name: "PUMA Cloudspun Men's Training Tee, storlek Small",
    rating: 4.2,
    category: "shirt",
    brandName: "puma",
    description:
      "Constructed With Our Moisture-wicking, 4-way Stretch Cloudspun Material, This Regular-fit Men's Tee Will Keep You Comfortable From The Track To The Gym To The Trail, And Everywhere In Between.",
    price: 229,
    image:
      "https://i.pinimg.com/564x/17/0b/19/170b194d92b585792810df86b49f7a26.jpg",
  },
  {
    id: 15,
    brandLogo:
      "https://i.pinimg.com/564x/79/ab/37/79ab37db17393a970c5a11b662d62e80.jpg",
    name: "Umbro Athletic Shorts: Black Solid Sporting & Activewear",
    rating: 4.8,
    category: "shorts",
    brandName: "umbro",
    description:
      "Umbro Athletic Shorts Size: 10 Sporting & Activewear - used. 100% Polyester, Solid | Umbro Athletic Shorts: Black Solid Sporting & Activewear",
    price: 119,
    image:
      "https://i.pinimg.com/564x/46/cd/ef/46cdef035d11d3ed33a9e17dccaf865c.jpg",
  },
  {
    id: 16,
    brandLogo:
      "https://i.pinimg.com/736x/cb/a4/5c/cba45c297d76265b0f0b60ebd5d967bd.jpg",
    name: "Puma Boys Ess Logo Woven Shorts  Jogging Sports Trousers 852114 Black",
    rating: 4.2,
    category: "shorts",
    brandName: "puma",
    description:
      "Puma Boys ESS Logo Woven Shorts 5  Sweatpants Sports Pants 852114 Black Puma Boys ESS Logo Woven Shorts 5  Sweatpants Sports Pants 852114 Black Item Description At the ESS Logo Woven Shorts  no one from Puma will come by unseen, ",
    price: 229,
    image:
      "https://i.pinimg.com/564x/1a/03/70/1a03705692b096cbf0202069eeceddec.jpg",
  },
];
export default products;
