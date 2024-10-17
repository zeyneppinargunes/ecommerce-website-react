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
    $ git clone https://github.com/ZeynepPinarKaya/getmobil-case-study.git
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
---
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
# TODO
1- vitest
2- playwright