---------Express TypeScript Backend Server-------------

SHORT DESCRIPTION: This is a backend server built with Express and TypeScript that allows for saving and retrieving form submissions. The server uses a JSON file (db.json) as a database to store the submissions. This project includes basic CRUD operations and additional features.

All the Compulsory as well as Additional features are implemented 


Features


------Compulsory------
/ping - A GET request that always returns {"success": true}
/submit - A POST request to submit a new form
/read - A GET request to read a form submission by index




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

6. /search) from email
   Method: GET

   Query Parameter:

   email: string - The email address to search for in the submissions.

   
![Screenshot (921)](https://github.com/Karansankhe/Task-form/assets/98593148/2393320a-cd58-4dc1-b3e0-b78df1a579d1)


7. /list?page=1&limit=5

   List Submissions with Pagination
   
   Method:GET
![Screenshot (922)](https://github.com/Karansankhe/Task-form/assets/98593148/95d91a27-f1a6-4ba3-a98d-71a60fc29fce)

8./searchByName?name=John(eg is john)

Search Submissions by Name


Method:GET

![Screenshot (924)](https://github.com/Karansankhe/Task-form/assets/98593148/825424ae-28fa-4798-b1b9-0efd4f6acd16)

9)/update

supports partial updates to existing submissions in the database

Method: PATCH

![Screenshot (926)](https://github.com/Karansankhe/Task-form/assets/98593148/cccd7793-7849-4077-80ea-767e09ac1f38)

10)/Count

Count the number of submissions

Method:GET

![Screenshot (927)](https://github.com/Karansankhe/Task-form/assets/98593148/f07c69a6-390f-45b0-a9d5-22731522f5bd)

