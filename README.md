# Auth

A stable authentication skeleton based on the JSON Web Token (JWT).

It uses **prisma** as an ORM with MySQL database.

It implements a simple one-to-many relationship between the **User** model and the **Message** model. 

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
