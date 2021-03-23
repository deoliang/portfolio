# Portfolio
A portfolio site built with gatsby.js, scss and with blog content served from [Contentful](https://www.contentful.com/) cms
## Tools required before running
- Gatsby CLI
- npm

##  Usage

1.  **Clone repository**
    ```
    git clone https://github.com/deoliang/portfolio.git
    ```

2.  **Install dependencies**
    ```
    cd portfolio
    npm install
    ```

1.  **Start the site and make changes**
    ```
    gatsby develop
    ```
    The site will be running at [http://localhost:8000](http://localhost:8000])
    
    You are able to test graphql queries on the link [http://localhost:8000/___graphql](http://localhost:8000/___graphql)

## Live deployment
The site is currently deployed with Vercel and can be reached [here](deonliang.com)

## References
- [Gatsby Documentation](https://www.gatsbyjs.com/docs/) 
- [Contentful Documentation](https://www.contentful.com/developers/docs/)

## Disclaimer
- [Gatsby hello-world starter](https://github.com/gatsbyjs/gatsby-starter-hello-world) was used to build the site
- In the **gatsby-config.js** file, api keys for contentful from a .env file is expected, if you're not using contentful, please make relevant modifications otherwise errors will be thrown while running `gatsby develop` and your site will not start



