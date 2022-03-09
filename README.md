# Outreach eCommerce Backend

Outreach is a sample application that demonstrates a responsive eCommerce website using Prisma, Vue.js, TailwindCss, Express and Node.js. The application will load products from the database and displays them. Users can log in, register, order products from the website. This website also includes the Vuex Shopping cart system and beautifully designed components using Tailwindcss.

[LIVE DEMO](http://outreach-fashion.s3-website.ap-south-1.amazonaws.com/)

[Link to Frontend Repo](https://github.com/husnuljahneer/vue-ecommerce)

## Installation

```bash
npm Install
```

### **Main dependencies**

- prisma
- bcrypt
- express
- joi
- jsonwebtoken
- passport
- passport-jwt
- prisma

## .env configuration
configure the database url here
```env
DATABASE_URL="mysql://root@localhost:3306/example_db"
```

## Prisma Configuration
prisma/prisma.schema
```javascript
datasource db {
  provider = "mysql"
  url      = env("DATABASE_URL")
}

```
## After Prisma configuration
To pull the DB from MySQL DB we provided above
```
npx prisma db pull
```
To generate the Prisma client
```
npx prisma generate 
```

## Run the application

```bash
npm start
```
## Run the application in development server
```bash
npm start-dev
```
## Testing
```bash
npm run test
```


## License
[MIT](https://choosealicense.com/licenses/mit/)
