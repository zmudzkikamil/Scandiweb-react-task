# <p align="center">eCommerce web-app (2022)</p1>

# <p align="center">Kamil Żmudzki</p2>

<p align="center"><em>Shop website - React.js, graphQL, Redux</em><br>

IMPORTANT! Project was created on Class components instead of Functional components, due to react code exploration. Functional components are better, much cleaner and newer approach.
  
  **Details of web-app:**
  
  - Filtering products by category name for 3 categories: all, clothes and tech.
  - Ability to add/remove products and change their amounts in cart.
  - Ability to change attributes of every product (color, capacity, size etc.).
  - The selected options of added to cart products are visible in cart overlay and in cart page.
  - Ability to change the currency of the store to one of the available currencies.
  - Currency and cart popovers closes by clicking outside of it.
  
  **Technologies:**
  
  - **React.js** which provides good user experience using Virtual DOM etc.
  - **Redux toolkit** to manage the state (to prevent props drilling etc.) 
  - **React Router Dom** to provide a separate URL for every category and product
  - **SCSS** for better styling
  - **GraphQL (Apollo)** to fetch data from endpoint

  **List of potential improvements:**

- TypeScript would fit good here. GraphQL Codegen library would allow us to generate types that we could reuse in frontend application. Migrating to a TypeScript would provide less bugs and useful autosuggestions.
- Migrating to a newer approach - hooks would be a great addition. Using hooks gives us cleaner code. Also class components will most likely get fewer and fewer features since React development team is focusing on hooks.
- Thumbnail in products API to make sure we display the best-looking photo for a product to attract potential customer.
- UX Improvments:
  - Ability to change attributes in cart popover.
  - Clickable logo, redirection to the all categories listing page.
  - Skeleton instead of spinners to improve UX (loading queries).
  - Toast messages after add product to a cart and after increase and decrease quantity.
  - Implement tax in cart popover, not only in cart.

 **Screenshots:**
  
  - Listing Page
  <br/>
  <div align="center">
    <kbd>
  <img src="https://user-images.githubusercontent.com/72665459/187430363-dcf3cdb0-6ce9-4104-8223-a4061cde9694.png" width="400px">
    </kbd>
    <kbd>
    <img src="https://user-images.githubusercontent.com/72665459/187439180-8b28d48f-01b4-4dc7-8534-1b910a1b5bf0.png" width="400px">
    </kbd>
  </div>
<br/><br/>
  - Product Page
  <br/><br/>
  <div align="center">
    <kbd>
  <img src="https://user-images.githubusercontent.com/72665459/187430398-83ba7696-90ea-495c-918a-7a82d81b8233.png" width="400px">
    </kbd>
    <kbd>
    <img src="https://user-images.githubusercontent.com/72665459/187430458-4778aab2-c204-45fc-87f2-fe8f341e5663.png" width="400px">
      </kbd>
  </div>
  <br/><br/>
     - Currency and Cart Popovers
  <br/><br/>
  <div align="center">
    <kbd>
  <img src="https://user-images.githubusercontent.com/72665459/187430512-b0aab600-2d96-45b2-9d28-1f046e5a5331.png" width="400px">
    </kbd>
    <kbd>
    <img src="https://user-images.githubusercontent.com/72665459/187430522-b20d4f5d-7b0b-4d36-abc6-926c05ccf9ae.png" width="400px">
      </kbd>
  </div>
  <br/><br/>
     - Cart Page
  <br/><br/>
  <div align="center">
    <kbd>
  <img src="https://user-images.githubusercontent.com/72665459/187430003-393ca566-a21b-4751-b2da-da633977f870.png" width="400px">
    </kbd>
  </div>


