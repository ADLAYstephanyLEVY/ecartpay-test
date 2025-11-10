General description
Webb application that simulates a portal for merchants (MerchantHub) integrated with EcartPay API

Software struture

*** Frontend ***
* Tools used :  
- Vue.js : framework
- Primevue with Aura theme : for style components and theme

* Start command : npm run dev

* Structure
- /src : 
    - /api : util configuration for the app to recognize the token 
    - /assets : all graphic resources
    - /components : folder with reusable components
    - /router : routes coionfiguration, for secure navigation
    - /screens : templates with the diferent screens displayed
    - /services : files with the services/functions to retrive or send information to the backend

*** Backend ***
* Tools used :
- Node.js
- Express
- Axios : for api calls
- Ecartpay Api

* Start command : node server.js

* Structure
- /middleware : File with a function to verify if the token exists to move forward and have acces to the Ecartpay API 
- /models : Files with the tables structure inserted into the Mongo database
- /routes : Files with all the endopints used for this project
- server.js : main file with important configuration for the backen to work properly