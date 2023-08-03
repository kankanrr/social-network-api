# Social-Network-Api

## Description

This project is a simple API for a social networking app using MongoDB in which users can share their thoughts, react to friends thoughts, and create a friend list.

Demo:
https://drive.google.com/file/d/1edZiPPF91An1Retu_oVV2zS7LzxsJCSx/view?usp=sharing

Screenshot of working delete reaction endpoint as it wasnt in the demo:

![delete endpoint](./assets/Screenshot%20working%20delete.png)

## Installation

Run an `npm i` to install deps then `npm run dev` or `npm run start` then you can start testing endpoints.

This app uses Express, Moment (for timestamp), and Mongoose.

## How to use

There is no pre-seeded data, therefore you have to seed manually through post endpoints using the example below to add a user.

```
{
	"username": "majimafan22",
	"email": "likeadragon@gmail.com"
}
```

You can then do a get request to /api/users to view your users. You can also get data by User ID as well through /api/users/:ID

PUT and DELETE for users is also supported.

POST thoughts by using a valid userID at /api/thoughts/:ID in the JSON format below:

```
{
	"thoughtText": "Kiryu-CHAN!!!",
	"username": "majimafan22"
}
```

GET all current thoughts through /api/thoughts. You can also get thoughts by their id.

PUT and DELETE for thoughts is also supported.

POST reactions by using a valid thoughtID through /api/thoughts/:thoughID/reactions and populate the body of the request with sample JSON like below.

```
{
	"reactionBody": "what the heck",
	"username": "majimafan22"
}
```

DELETE is also supported for reactions.

## Credits

Sameer Mirza | Columbia University Coding Bootcamp
