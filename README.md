# BookStore-API

An API that sends book and author data, works with GET, PUT, DELETE and POST requests.    


# Table of contents

- [Getting Started](#getting-started)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [More Info](#more-info)
- [Contact](#contact)

## Getting Started

To access the api you need to go to your preferred browser and request the api url. The api was uploaded with a public IP through the AWS cloud system. To see the code of the project you can install it locally ( Below you will find the instructions ).

Note: Because the API is public I removed the PUT and POST methods to avoid compromising the API, but here in the repository it's complete :)

API url: http://18.229.143.23:3000    

ENDPOINTS:    
authors: http://18.229.143.23:3000/autores to show all author data.    
books: http://18.229.143.23:3000/livros to show all books data     
find book by ID: http://18.229.143.23:3000/livros/${id}      
find author by ID: http://18.229.143.23:3000/livros/${id}      
find book by publisher: http://18.229.143.23:3000/livros/busca?editora=${publisherName}

### The project has more features, install the repo and see more !

### Prerequisites

node 16.15.1 version

### Installation

```

Clone the repo:   
$ git clone git@github.com:RuhamLeal/ExpressJS-BookStore-API.git    

Go to project folder:     
$ cd ExpressJS-BookStore-API     

Install dependencies:    
$ npm install

```
### More Info

This Project will was done with node.js, express.js, mongoDb(mongoose) and MVC architecture.

### Contact

Ruham Leal    
Email: ruhamxlpro@hotmail.com    
Linkedin: https://www.linkedin.com/in/ruham-leal-dos-santos-sutil-38a837243/
