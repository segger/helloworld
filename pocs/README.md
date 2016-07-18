## POCS
#### <a name="mean-auth"></a>mean-auth
Built on [mean-todo](../tutorials/README.md#mean-todo)

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
