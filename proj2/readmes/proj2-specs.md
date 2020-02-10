# Wes Anderson places

see WA places presented on a map + add your own if you're see one

## Routes

- Which routes do we need to implement for the following features?
- Who should be allowed to access these routes?

#### Display all locations

`GET` `/locations` -> render the list of all places: User generated and those from Instragram API

who: everyone

#### Display one location

`GET` `/location/:id` -> render a specific location with a given id

who: everyone

#### Log in

`POST` `/login`

#### Add a location

`GET` `/location/new` -> render a form to add a location

`POST` `/location` -> create a new location

who: logged in users

#### Edit a location

`GET` `/location/:id/edit` -> render a form to edit a location

`POST` `/location/:id` -> update a location with a given id

who: the owner/original creator of the location, moderators

#### Delete a location

`GET` `/location/:id/delete` -> delete a location with a given id

who: the owner of the location, moderators

## Models

- What fields do we need for these models?
- How can we relate them to each other if needed?

### User

- role: default = regular, enum = [regular, moderators] (just in case we can do comments)
- username
- password
- fav WA film
- profession

### location (1 location)

- owner: User id
- place name
- place address
- built date
- description
- photo
- WS quote

  <!-- - comments: [Comment id] -->

<!-- ### Comment
author: User id
content -->

<!-- //// NICE TO HAVES /////

### Comment

#### Get all comments for a room

AJAX `GET` `/rooms/:id/comments` -> return a JSON with the list of comments for a room
OR no new route but change `GET` `/rooms/:id` so that it also renders the comments

who: everyone

#### Add a comment on a room

`POST` `/rooms/:id/comments` -> add a comment to a room

who: logged in users -->
