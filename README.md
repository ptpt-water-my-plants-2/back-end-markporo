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

- all of these are stored as strings in the backend except for owner...so make sure these are strings and owner is a number when you send them.
  -the ids which is what the owner is (user_id, plantId) are numbers
  -take note that h2OFrequency is spelled with an uppercase O not a zero 0

UPDATE PLANT BY PLANT ID:
[PUT] https://water-my-plants-app2.herokuapp.com/api/plants/${plantId}

-all properties need to be sent to server including plantId and owner. So even if only one thing is being changed frontend code should send a full object...for example the full object will need to look something like:
{
"plantId": 5,
"nickname": "Snake Plant",
"species": "Dracaena trifasciata",
"h2OFrequency": "14", // notice the number here is a string (14 days)
"owner": 5
}

DELETE PLANT BY PLANT ID:
[DELETE] https://water-my-plants-app2.herokuapp.com/api/plants/:plantId
