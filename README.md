# MySMS

Test project for learning purposes.

Ruby on Rails webserver with Angular 16 frontend.

## Instructions to run the server

- cd ./backend
- bundle
- rails db:setup
- rails db:migrate
- rails s

Server will run on localhost:3000

## Instructions to run frontend

- cd ./frontend
- npm install
- ng serve

Frontend will run on localhost:4200

## Usage

- Go to http://localhost:4200
- Register a user
- Send messages and view what you sent

## Notes

Currently configured with my Twilio trial account details. To run with your own account, please change the following keys in application.rb:

- config.x.sms.twilio_sender_number
- config.x.sms.twilio_account_sid
- config.x.sms.twilio_auth_token

I'm aware this is unsecure and not suited for a prduction environment.
