import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['OnePunch']);
  
  const onAddCategory = (newCategory) => {


    if (categories.includes(newCategory)) return;

    setCategories([newCategory, ...categories])
    
    // setCategories(['valorant', ...categories]);

  }
    
    return (
      <>
            <h1>GiftExpertApp</h1>
            
        <AddCategory
          onNewCategory={(event)=>onAddCategory(event)}

        />
            
        <ol>
          {
            categories.map(category => (

              <GifGrid
                key={ category }
                category={category}
              />

            ))
          }
        </ol>
      </>
    );
}