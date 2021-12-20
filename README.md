# back-end-markporo

Back end Mark Poro

---

REGISTER/ CREATE USER:
[POST] https://water-my-plants-app2.herokuapp.com/api/auth/register

-ALL text fields required
-phone number must be between 7 and 11 characters
-Password must be 4 or more characters long

LOGIN USER:
[POST] https://water-my-plants-app2.herokuapp.com/api/auth/login

-try username: tlu || or username: markporo
with a password of 1234

---

GET USER BY ID:
[GET] https://water-my-plants-app2.herokuapp.com/api/users/:user_id

UPDATE USER BY ID:
[PUT] https://water-my-plants-app2.herokuapp.com/api/users/:user_id

GET USERS PLANTS (All plants owned by user):
[GET] https://water-my-plants-app2.herokuapp.com/api/users/:user_id/users-plants

---

GET PLANT BY PLANT ID:
[GET] https://water-my-plants-app2.herokuapp.com/api/plants/:plantId

-should have access too something that looks like this:
{
"plantId": 5,
"nickname": "Snake Plant",
"species": "Dracaena trifasciata",
"h2OFrequency": "14", // notice the number here is a string (14 days)
"owner": 5
}

CREATE NEW PLANT:
[POST] https://water-my-plants-app2.herokuapp.com/api/plants/

-must include "nickname", "species", "h2OFrequency", "owner"...

- all of these are stored as strings in the backend...so make sure these are strings when you send them.  
  -In contrast, the ids (user_id, plantId) are integers
  -owner is the user_id of the current user creating the plant so you might get that user_id (owner) by passing it from props. (The user will not fill in their user_id on a form. That will just be in front end code.)  
  -take note that h2OFrequency is spelled with an uppercase O not a zero 0

UPDATE PLANT BY PLANT ID:

DELETE PLANT BY PLANT ID:
