## Backend API's
### GET
* **User** /api/auth/login/google &rarr; "login with google".
* **User** /api/auth/logout &rarr; "logout user".
* **User** /api/auth/confirm_email?token="" &rarr; "confirm user email".
* **User** /api/auth/password_reset_token &rarr; "confirm user email".
* **User** /api/auth/resend_confirmation_token &rarr; "confirm user email".
* **User** /api/auth/users &rarr; "get all user".
* **Job** /api/jobs?limit=&offset= &rarr; "get job list".
### POST
* **User** /api/auth/signup &rarr; "sign up user".
* **User** /api/auth/login &rarr; "log in user".
### PATCH
* **User** /api/auth/userImage &rarr; "Update user image".

### DELETE