---------Express TypeScript Backend Server-------------

SHORT DESCRIPTION: This is a backend server built with Express and TypeScript that allows for saving and retrieving form submissions. The server uses a JSON file (db.json) as a database to store the submissions. This project includes basic CRUD operations and additional features.

All the Compulsory as well as Additional features are implemented 


Features
------Compulsory------
/ping - A GET request that always returns {"success": true}
/submit - A POST request to submit a new form
/read - A GET request to read a form submission by index
------Additional-------
/delete - A DELETE request to delete a form submission by index
/edit - A PUT request to edit a form submission by index
Search submissions by email ID


Getting Started
-----Prerequisites-----
1)Node.js (>=14.x)
2)npm or yarn

INSTALLATION
-----Clone the repository-----
1) git clone
2) cd <foleder-name>


----Install dependencies----
npm install 
or yarn install 
(Go wwith npm install)


create a db.json (already there in the floder)


-----Running the server ----
npm start 
or 
yarn start

as a result the server will be running at `http://localhost:3000`

-----API ENDPOINTS------
1. /ping
Description: Check if the server is running.

Method: GET


![Screenshot (916)](https://github.com/Karansankhe/Task-form/assets/98593148/c49843b2-8c69-48e1-a48f-83ee20e0f97b)

2. /submit
Description: Submit a new form.

Method: POST

Parameters (JSON body):

name: string
email: string
phone: string
github_link: string
stopwatch_time: string

![Screenshot (917)](https://github.com/Karansankhe/Task-form/assets/98593148/01ec59b7-47d1-4eb2-b47e-78b6c63317eb)


3. /read
Description: Read a form submission by index.

Method: GET

Query Parameter:

index: number (0-indexed)


![Screenshot (918)](https://github.com/Karansankhe/Task-form/assets/98593148/5bd7aebb-c12c-4daa-8ecd-9df70d6ad4cb)


4. /delete
Description: Delete a form submission by index.

Method: DELETE

Query Parameter:

index: number (0-indexed)


![Screenshot (920)](https://github.com/Karansankhe/Task-form/assets/98593148/df1027fd-a5b3-4185-ba18-a8375c8661a1)


5. /edit
Description: Edit a form submission by index.

Method: PUT

Parameters (JSON body):

index: number (0-indexed)
name: string
email: string
phone: string
github_link: string
stopwatch_time: string

![Screenshot (919)](https://github.com/Karansankhe/Task-form/assets/98593148/a870e7e3-bf60-453c-a4c1-55ce90da8f8f)


