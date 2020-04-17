# Web-based room booking application assignment (Govtech)

App URL: 
-
https://nuxt-room-booking.herokuapp.com/

Deployment instructions
-
##### Production:
1. Log into Heroku
`````
heroku login
`````
2. Clone the repository
`````
heroku git:clone -a nuxt-room-booking
cd nuxt-room-booking
`````

3. Deploy changes
`````
git add .
git commit -am <"summary">
git push heroku master
`````


##### Development:
1. cd into the project folder
`````
cd <project-name>
`````
2. start development
`````
npm run dev
`````
The application is now running on http://localhost:3000.

System Flow
-
1. Go to https://nuxt-room-booking.herokuapp.com/ to start
2. Search for room of choice (Small, Medium, Large meeting room)
3. After search, click on 1 of the card display
4. To book the room, fill in your details (name, email, start time, end time)
5. Room slot will appear on the calendar

List of assumptions:
-
```
- Time available for booking each day is from 8am to 10pm
- There is only 3 sizes of meeting room
- Google Map represents the floor plan and room layout
- All meeting rooms are free to book on any given range of dates
```

Stack chosen:
-
###### NuxtJS (Vue framework)
```
It provides a great structure to build the project at the start. 
It allows the creation of components for ease of code reuse such as navbar and allows reloading of webpage faster and updating of value without refreshing (Hot reloading)
```
##### Heroku
-
```
Heroku is simple and easy to use for deploying single page app

* No backend framework or programming language involved. Used JSON file to simulate data processing
```

List of know bugs
-
```
- Google Map does not display when clicking to another room via the navbar
```


