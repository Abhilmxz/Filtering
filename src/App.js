import React, { useState } from 'react';

import Navigation from './Navigation/Nav';
import Products from './Products/Products';
import Recommended from './Recommended/Recommended';
import Sidebar from './Sidebar/Sidebar';
import "./index.css"


//Database
import products from './Db/data';
import Card from './Components/Card';




function App() {

const [selectedCategory,setSelectedCategory] = useState(null);

//Input filter
const [query,setQuery] = useState("");


const handleInputChange =(event)=>{
  setQuery(event.target.value);
};

const filteredItems = products.filter(
  (product) => product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
);

//----Radio filter-----
const handleChange =(event) =>{
  setSelectedCategory(event.target.value);
};

//----Buttons filter-----
const handleClick =(event) =>{
  setSelectedCategory(event.target.value);
};


function filteredData(products,selected,query){
  let filteredProducts = products;

//Filtering input items
if(query){
  filteredProducts=filteredItems;
}

//Applaying Selected Filter
if (selected) {
  filteredProducts = filteredProducts.filter(
    ({ category, color, company, newPrice, title }) =>
      category === selected ||
      color === selected ||
      company === selected ||
      newPrice === selected ||
      title === selected
  );

}

return filteredProducts.map(({img, title, star, reviews, prevPrice, newPrice})=>(
<Card 
key={Math.random()}
img={img}
title={title}
star={star}
reviews={reviews}
prevPrice={prevPrice}
newPrice={newPrice}
/>
));


}

const result = filteredData(products, selectedCategory, query);

  return (
    <div>
    <Sidebar handleChange={handleChange} />
    <Navigation query={query} handleInputChange={handleInputChange} />
    <Recommended handleClick={handleClick} />
    <Products result={result} />
    </div>
  );
};

export default App;
