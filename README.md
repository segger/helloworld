# helloworld

## TUTORIALS
#### <a name="mean-todo"></a>mean-todo
Prerequisits:
* local running installation of mongodb
* npm
* nodemon

Installation & run
```
mean-todo > npm install
mean-todo > nodemon server.js
```

View the result at http://localhost:9090

## POCS
#### mean-auth
Built on [mean-todo](#mean-todo)

Use at http://localhost:9008

##### Signup
Sign up a new user
```
POST auth/signup
```
```json
{
    "name":"admin",
    "password":"pass"
}
```

###### Authenticate
Authenticate user to retrieve JWT token
```
POST auth/authenticate
```
```json
{
    "name":"admin",
    "password":"pass"
}
```
** Response **
```json
{
    "success": false,
    "token": "JWT <token>"
}
```

###### Memberinfo
Send JWT authorization to access memberinfo

| Header | Value |
| ------ | ----- |
| `Authorization` | JWT token |

```
GET auth/memberinfo
```

## IDEAS
* online-year-diary
* worktimelogging
