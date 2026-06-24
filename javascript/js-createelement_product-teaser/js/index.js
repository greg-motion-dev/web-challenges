console.clear();

const name = "Queen angelfish";
const description =
  "With their bright colors and deep, laterally compressed bodies, marine angelfishes are some of the more conspicuous residents of the aquarium. The queen angelfish grows to be 45 cm. With neon blue and yellow scales and iridescent purple and orange markings, surprisingly it is not conspicuous, and actually hides very well, and is very shy.";
const category1 = "Freshwater";
const category2 = "Large aquarium";
const category3 = "Plankton Diet";
const price = "149,99 €";
const imageSrc =
  "https://unsplash.com/photos/3VOTHTrE614/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjU5NTM3NTA2&force=true&w=640";




  //  // create
  // const product = document.createElement('article');
  // const productSection = document.createElement('section');
  // const productTextContainer = document.createElement('div');
  // const productName = document.createElement('h2');
  // const productCategoryList = document.createElement('ul');
  // const productCategoryListItem1 = document.createElement('li');
  // const productCategoryListItem2 = document.createElement('li');
  // const productCategoryListItem3 = document.createElement('li');
  // const productDescription = document.createElement('p');
  // const productImageContainer = document.createElement('div');
  // const productImage = document.createElement('img');
  // const productFooter = document.createElement('footer');
  // const productPrice = document.createElement('span');
  // const productButton = document.createElement('button');


  // // configure
  // product.classList.add('product'); // article
  // productSection.classList.add('product__body'); // section
  // productTextContainer.classList.add('product__text-container'); // div
  // productName.classList.add('product__name'); // h2
  // productName.innerHTML = name;
  // productCategoryList.classList.add('product__categories'); // ul
  // productCategoryListItem1.classList.add('product__category'); // li
  // productCategoryListItem1.innerHTML = category1;
  // productCategoryListItem2.classList.add('product__category'); // li
  // productCategoryListItem2.innerHTML = category2;
  // productCategoryListItem3.classList.add('product__category'); // li
  // productCategoryListItem3.innerHTML = category3;
  // productDescription.classList.add('product__description'); // p
  // productDescription.innerHTML = description;
  // productImageContainer.classList.add('product__image-container'); // div
  // productImage.classList.add('product__image'); // img
  // productImage.src = imageSrc;
  // productFooter.classList.add('product__footer'); // footer
  // productPrice.classList.add('product__price'); // span
  // productPrice.innerHTML = price;
  // productButton.classList.add('product__buy-button'); // button
  // productButton.innerHTML = "Buying";



  // // append
  // productCategoryList.append(productCategoryListItem1, productCategoryListItem2, productCategoryListItem3)
  // productTextContainer.append(productName, productCategoryList, productDescription); // h2 + ul + p
  // productImageContainer.append(productImage); // image
  // productSection.append(productTextContainer, productImageContainer); // section + text div + image div
  // productFooter.append(productPrice, productButton); //footer content
  // product.append(productSection, productFooter); // section + footer
  // document.body.append(product); // article


  // productButton.addEventListener("click", ()=>{
  //   console.log(name + " " + price);
  // });



const newProduct = document.createElement('article');
newProduct.classList.add('product');


newProduct.innerHTML = `
<section class="product__body">
        <div class="product__text-container">
          <h2 class="product__name">${name}</h2>
          <ul class="product__categories">
            <li class="product__category">${category1}</li>
            <li class="product__category">${category2}</li>
            <li class="product__category">${category3}</li>
          </ul>
          <p class="product__description">
            ${description}
          </p>
        </div>
        <div class="product__image-container">
          <img
            class="product__image"
            src="${imageSrc}"
            alt=""
          />
        </div>
      </section>
      <footer class="product__footer">
        <span class="product__price">${price}</span>
        <button type="button" class="product__buy-button">Buy</button>
      </footer>
`

document.body.append(newProduct);

const productButton = newProduct.querySelector('.product__buy-button');

productButton.addEventListener("click", ()=>{
console.log(`${name} : ${price}`);
});

//   ## Tasks

// This exercise includes an example of a product teaser for an online shop. Please append a second product teaser to the page with JavaScript based on the data given in the `index.js` file.
// Use `.innerHTML` to generate the HTML elements for the teaser. Use string interpolation to include the given data into the HTML.
// Add an event listener to the "buy" button of the second product teaser. When clicking the button, the product's name and price should be logged to the console.
