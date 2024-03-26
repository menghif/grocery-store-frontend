import MozzarellaImage from "./images/pinar-kucuk-rq0GMrnLj8c-unsplash.webp";
import GorgonzolaImage from "./images/close-up-photo-of-blue-cheese-4109943.webp";
import GnocchiImage from "./images/gabor-molnar-5300Q8dOY18-unsplash.webp";
import RavioliImage from "./images/lindsay-lenard-Qjxfm-OuoMA-unsplash.webp";
import SpaghettiImage from "./images/wendy-rake-QCidlRqNqkY-unsplash.webp";
import PestoImage from "./images/milada-vigerova-eqJkqau0C8s-unsplash.webp";
import OlivesImage from "./images/olives-on-white-ceramic-bowl-4109918.webp";
import OliveOilImage from "./images/roberta-sorge-uOBApnN_K7w-unsplash.webp";
import CoffeeImage from "./images/nadia-valko-7QlJ79Cj43w-unsplash.webp";
import TomatoesImage from "./images/rodion-kutsaev-EPwuZxdketc-unsplash.webp";
import BreadImage from "./images/jem-sahagun--KLSrKaJhuA-unsplash.webp";
import SpicyRedPepperImage from "./images/john-cameron-BKkeurJTEHo-unsplash.webp";
import AranciataImage from "./images/sarah-gualtieri-lAX3fZtTpRk-unsplash.webp";
import BaroloWineImage from "./images/roberta-sorge-IywM7AQTZcM-unsplash.webp";
import WhiteWineImage from "./images/celina-albertz-mGhlWTP118Y-unsplash.webp";
import BeerImage from "./images/jonas-jacobsson-p2KA3Q2lfSw-unsplash.webp";

window.types = {
  food: "Food",
  drink: "Drink",
};

window.products = [
  {
    type: window.types.food,
    name: "Mozzarella",
    description: "Organic buffalo mozzarella from Campania (250g)",
    price: 10,
    image: MozzarellaImage,
  },
  {
    type: window.types.food,
    name: "Gorgonzola",
    description: "Cheese from cows raised on organic feed in Piedmont (250g)",
    price: 12,
    image: GorgonzolaImage,
  },
  {
    type: window.types.food,
    name: "Gnocchi",
    description: "Homemade Gnocchi (24 pcs)",
    price: 9,
    image: GnocchiImage,
  },
  {
    type: window.types.food,
    name: "Ravioli",
    description: "Hamemade ravioli stuffed with ricotta & herbs (24 pcs)",
    price: 14,
    image: RavioliImage,
  },
  {
    type: window.types.food,
    name: "Spaghetti",
    description: "Fresh homemade spaghetti pasta (500g)",
    price: 10,
    image: SpaghettiImage,
  },
  {
    type: window.types.food,
    name: "Pesto",
    price: 11,
    description: "Genovese Pesto made with 80% pine nuts from Liguria (250g)",
    image: PestoImage,
  },
  {
    type: window.types.food,
    name: "Olives",
    price: 9,
    description: "Genovese olives from Liguria (500g)",
    image: OlivesImage,
  },
  {
    type: window.types.food,
    name: "Olive Oil",
    price: 22,
    description: "Cold-pressed from Southern Puglia (1L)",
    image: OliveOilImage,
  },
  {
    type: window.types.food,
    name: "Coffee",
    price: 12,
    description: "Coffee Bag (500g)",
    image: CoffeeImage,
  },
  {
    type: window.types.food,
    name: "Tomatoes",
    price: 10,
    description: "Seasonal vine tomatoes From Campania (500g)",
    image: TomatoesImage,
  },
  {
    type: window.types.food,
    name: "Bread",
    price: 2,
    description: "Freshly baked italian bread",
    image: BreadImage,
  },
  {
    type: window.types.food,
    name: "Spicy Red Pepper",
    price: 12,
    description: "Organic Italian peperoncini from Calabria (375g)",
    image: SpicyRedPepperImage,
  },
  {
    type: window.types.drink,
    name: "Aranciata",
    description: "Cold-pressed juice made with 100% Sicilian oranges (275ml)",
    price: 7,
    image: AranciataImage,
  },
  {
    type: window.types.drink,
    name: "Barolo Wine",
    price: 75,
    description: "Wine made with Nebbiolo grapes from Piedmont region (750ml)",
    image: BaroloWineImage,
  },
  {
    type: window.types.drink,
    name: "White Wine",
    price: 15,
    description: "Arneis Wine from Alba in Piedmont (750ml)",
    image: WhiteWineImage,
  },
  {
    type: window.types.drink,
    name: "Beer",
    price: 12,
    description: "Craft Italian beer (300ml)",
    image: BeerImage,
  },
];
