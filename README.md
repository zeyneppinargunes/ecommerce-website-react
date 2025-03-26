# Getmobil Sr Frontend Dev Case Study

#### Requirements
Please make sure these are installed on your system:
- node.js
- git
- any terminal

#### Running the project
Open up your terminal and follow these steps:
1. Clone this repo
    ``` shell
    $ git clone https://github.com/ZeynepPinarKaya/ecommerce-website-react.git
    ```
2. Change directory into created `getmobil-case-study`
    ``` shell
    $ cd getmobil-case-study
    ```
3. Install npm dependencies
    ``` shell
    $ npm install
    ```
4. Create a `.env` file by duplicating `.env.example` file and update to this:
   ``` shell
   VITE_API_URL=https://dummyjson.com
   ```
5. Run in development mod
    ``` shell
    $ npm run dev
    ```
6. Open prompted url in your browser (probably: `http://localhost:5173/`)
#### Testing
1. If you want to run e2e tests, run this command and it will open up a browser window to show executed tests:
    ``` shell
    $ npm run test:e2e
    ```

2. If you want to run unit tests, run this command and it will prompt tests:
    ``` shell
    $ npm run test:unit
    ```
#### Building
If you want to run for production, follow these steps:
1. Build for production mode
    ``` shell
    $ npm run build
    ```
2. Run in a local vite server
    ``` shell
    $ npm run preview
    ```
3. Open prompted url in your browser (probably: `http://localhost:4173/`)

----
#### What can be done more?
- Search functionality
  - Add searchbar to menu via layout
  - Store search value in redux and use it when fetching products
  - When submitted, redirect to product list page
- Add to favorites functionality (client side) - (custom hooks)
  - Add favorite button to details page or product list card
  - Store selected value in local storage using custom hooks
  - Always read and match with current listed products
- Theme
  - Use ant design & styled-components theme configurations to create alternative themes
  - Add theme toggle button to menu
  - Use Context Api to keep track of selected theme
  - Update via ant design and styled-components config providers
- Add category filter to product list page
  - Fetch categories and list as sidebar
  - When selected, update fetch request accordingly
- Sort products on product list page (server side)
  - Add sort selection to right top
  - When selected, update fetch request accordingly
