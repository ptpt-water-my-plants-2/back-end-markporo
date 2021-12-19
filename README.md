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
