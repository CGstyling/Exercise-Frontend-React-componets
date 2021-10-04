import React from 'react';
import './App.css';
import Button from "./assets/Components/Navigation";
import Product from "./assets/Components/Product";
import Tile from "./assets/Components/Tile";

import bagOne from "./assets/bag_1.png"
import bagTwo from "./assets/bag_2.png"
import bagThree from "./assets/bag_3.png"
import bagFour from "./assets/bag_4.png"
import brand from "./assets/brand.png"
import woman from "./assets/our_story.png"

function App() {
  return (
      <>
      <h1>Handbags & Purses</h1>
<nav>
    <Button isDisabled={false} clickHandler={() => console.log("To the collection!")}>
        To the collection
    </Button>
    <Button isDisabled={false} clickHandler={() => console.log("Shop all bags!")}>
        Shop all bags
    </Button>
    <Button isDisabled={true} clickHandler={() => console.log("To the pre-orders!")}>
        Pre-orders
    </Button>
</nav>
          <main>
              <Product
                  text="Best seller"
                  image={bagOne} title="The handy bag"
                  description="The handy bag"
                  price="€400"
              />
              <Product
                  text="Best seller"
                  image={bagTwo} title="The stylish bag"
                  description="The stylish bag"
                  price="€250"
              />
              <Product
                  text="New collection"
                  image={bagThree} title="The simple bag"
                  description="The simple bag"
                  price="€300"
              />
              <Product
                  text="New collection"
                  image={bagFour} title="The trendy bag"
                  description="The trendy bag"
                  price="€150"
              />
          </main>

          <footer>
              <Tile
                  title="The Brand"
                  text="Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in massa egestas mollis varius;
    dignissim elementum. Mollis tincidunt mattis hendrerit dolor eros enim, nisi ligula ornare.
    Hendrerit parturient habitant pharetra rutrum gravida porttitor eros feugiat. Mollis elit
    sodales taciti duis praesent id. Consequat urna vitae morbi nunc congue."
              />
              <Tile
                  image={brand} title="The brand logo"
              />
              <Tile
                  image={woman} title="The designers"
              />
              <Tile
                  title="Our story"
                  text="Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in massa egestas mollis varius;
    dignissim elementum. Mollis tincidunt mattis hendrerit dolor eros enim, nisi ligula ornare.
    Hendrerit parturient habitant pharetra rutrum gravida porttitor eros feugiat. Mollis elit
    sodales taciti duis praesent id. Consequat urna vitae morbi nunc congue."
              />
          </footer>

      </>
  );
}

export default App;



