# Auth

A good authentication skeleton to the project based on the JSON Web Token (JWT). We've implemented a jwt-strategy from scratch to suit our needs.

To run it locally, clone this repo then create your own `.env` file with the following variables:

> DATABASE_URL=""
> 
> PORT=""
> 
> PASSPORT_ALGORITHM=""

After that run this command to install all packages you'll need:

```Bash
npm install
```

Then, you gonna to migrate your database using this command:

```Bash
npx prisma migrate dev --name init
```

Now, you must generate public and private keys to be able to work. Just run this command:

```Bash
node Auth/generateKey.js
```

Finally, you can run the project and use postman or any API testing tool to see the results.