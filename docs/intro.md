---
sidebar_position: 1
---

# Introducction 

Chain is a fintech application that pretends to simplify the administrative processes and connect all necessary features in a single place.


The app name: "Chain" was given to express connection. The ability to connect with the things that are important to you and disconnect to the ones who stop you enjoying your business.

Chain will connect, Chain will simplify, Chain automates, Chain is tech, Chain is cool.

## Principles 
### Connect

Be United. Connect yourself, connect with others. Connect everywhere with everyone. 
### Simplify
Be clear. Say things as you feel and as you think. Being simple is the best way to say something and give importance to your voice.
### Sharing
Be supportive. Sharing you will grow up, sharing you will connect with the ones you will be stronger.  Share with conditions who you are, your ideas and your knowledge. 

## Design
### Logo and colours 

The Chain app design is based on our principles. Our logo is a shackle that represents the connection. 

Our main colour palette is based on purple and yellow colours to being cool and bring amazing contrast.

We have a secondary palette to create combinations, contrast and differentiate products and advertising campaigns. Our secondary palette is based on purple, yellow, magenta and cyan colours.

### Typography
Our typography es Muli. We choose it because is simple and legible and provides 14 options for being customized. 

### Characters
For the platform we occupy our own universe, created thanks to our characters, the users who respecting the coolness of the brand, the colours and following these key concepts:

- Cool characters
- Memorable
- That express movement
- No gender
- Timeless
- Multicultural
- Not stereotyped
- With Chain colours
- The logo is your brand

You can check on our BrandBook [here](../static/files/brandbook.pdf)
## Tech design principles

Chain app was built in the microservice architecture on the backend and as a PWA app on the frontend.

## Backend
Our backend was built with a microservice architecture using different technologies. 
### Technology 
#### Programming 
We use the next programming languages to build our services:
- Javascript 
- Elixir

In specific, we build or services with:
- Graphql as manager and connection between our services and the frontend side
- NodeJS for our REST APIs related with user's information 
- Elixir for our REST APIs related to money management, recurrent actions and polling tasks.

Also, we use the next databases:
- SQL:  for the NodeJS services using the *mssql* library who uses tedious to connect to the database. We use Stored Procedures to request information, save a new one, make editions or delete information.
- PSQL: for the Elixir services using *ecto* to connect with the database. We use the tools provided by Ecto.Repo to create, update, destroy or query entries to de database. 

** Disclaimer: We also rise the Ecto.Schema, Ecto.Changeset and Ecto.Query tools for manage, validate and request information related to the information storage ** 

#### Deployment
We use Azure services for deployment and build apps. We follow the next tools:

- The services are running on Web Services Applications
- The services' versions are updated by pipelines where the Database migrations are running, the test is running and the new code is updated on the Web App
- All the services are contained on a VNet in order to avoid the SNat Ports exhaustion

#### Tools
We use different tools that are useful to avoid and monitoring errors:
- Sentry: To get errors that appear on users flows
- Newrelic: To get the usage metrics and performance ones
