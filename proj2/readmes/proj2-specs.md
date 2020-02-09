# Berlin gigs

see gig and concert listings from SongKick presented on a map + add your own if you're hosting one

## Routes

- Which routes do we need to implement for the following features?
- Who should be allowed to access these routes?

#### Display all listings

`GET` `/listings` -> render the list of all listings: User generated and those from the Songkick API

who: everyone

#### Display one gig or concert

`GET` `/listing/:id` -> render a specific listing with a given id

who: everyone

#### Add a gig or concert

`GET` `/listing/new` -> render a form to add a gig or concert

`POST` `/listing` -> create a new listing

who: logged in users

#### Edit a gig or concert

`GET` `/listing/:id/edit` -> render a form to edit a gig or concert

`POST` `/listing/:id` -> update a concert with a given id

who: the owner/original creator of the gig or concert, moderators

#### Delete a gig or concert

`GET` `/listing/:id/delete` -> delete a gig or concert with a given id

who: the owner of the gig or concert, moderators

## Models

- What fields do we need for these models?
- How can we relate them to each other if needed?

### User

- role: default = regular, enum = [regular, moderators] (just in case we can do comments)
- username
- password

### Listing (1 gig or concert)

- owner: User id
- artist
- venue name
- venue address
- date
- start + end time
- description
- photo
- price
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
