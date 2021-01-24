# test all server routes using Curl
# In progress
# get all users
curl localhost:3000/users
# post one user
curl --data "email=email@gmail.ca&firstName=Test&lastName=Bob&age=26" http://localhost:3000/users
# get user by id
curl localhost:3000/1
# update user by id
curl -X PUT -d "firstName=John" -d "email=bob@email.ca" localhost:3000/users/1
# delete user by id
curl -X "DELETE" localhost:3000/users/1