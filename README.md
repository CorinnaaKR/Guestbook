🎯 Ensure your HTML form is working and submitting data into the database as expected.
🎯 Confirm that your project is functional on multiple screen sizes using either Responsive Design or media queries.
🎯 Create a working GET API route in your server.
🎯 Create a working POST API route in your client.
🎯 Seed your database with realistic-looking ‘dummy’ data through the Supabase query editor or a seed file in your server. Ensure that this is saved and submitted (in a screenshot or seed file form) so it can be marked and tested efficiently.

Stretch Requirements
🏹 Provide additional functionality on the form, for example, by adding form validation or other options.
🏹 Style the page excellently, for example, by adding extra UX considerations or animations.
🏹 Add a delete button to each message and a DELETE route in the server.
🏹 Create an option for users to like others’ posts.
Reflection
Please also provide an assignment reflection in your project README.md file.

Required
🎯 What requirements did you achieve?
🎯 Were there any requirements or goals that you were unable to achieve?
🎯 If so, what was it that you found difficult about these tasks?
Optional

THOUGHTS THROUGHOUT PROJECT
Followed Manny's demo, had a couple of errors crop up from missing steps in the step - initally mixed up the steps when making the client/server folders as my notes had errors in them. Corrected my notes then began again - followed Sam's instructions in his README. to set up the client and server folders, and found this really easy and understandable to follow. Errored in the deployment on render, checked through the steps and guide to see if I'd missed any steps - I hadn't, so I asked Manny, who spotted a syntax error in one of the folder names. Deployment then completed with no issues - yay!
Went back over Joe's feedback from the week2 assignment, after asking where to start. Made the html containers to hold the the user inputs and database returns, then created a template for styling the different elements.
I created two scratch files, one in server, one in client, to write out my thoughts and process - i also copied some of the demo code from the relevant demos into the scratch files so i wouldnt have to keep switching tabs. Used the demo to create the form templates I wanted.
Spent time making a wire frame and adding in my intentions in comments around it to make me thoughts and intentions clear around design. Then went back to css to add in more skeleton code to reflect my intentions. I'm using the wire frame as a visual representation of what I'm thinking, add comments to keep track of what I want to do and why. Will add to a folder to include with code.
Sectioned out my html elements to make them clear and readable, then did the same with my css selectors as per the feedback on last week's assignment. I'm aiming to do more planning and prep work so that if I don't achieve everything I want to with the project then at least my vision and intent are clear.
Added my wire frame into an assets folder for easy referral.
Turned my attention to the server and creating the get and post rrequests. Got confused with the terminologyu and asked TA Joe to explain it to me, tried to create a new table in SQL to put in the dummy data for guest feedback, tried to do it in the table editor, got confused then Manny redirected me to the code we had written the day before for creating new tables - light blub momen to do it - verbal confusion over which data type would hold email address so googled it after verbal reasoning spar with TA Joe, found out it should be VARCHAR, set about doing the code to create a new table, insert the code then running it to check it works.
Server works, now creating the functions to call, stringfy and return the data. Pulled the code from last weeks assignment to use and refactor but got confused with the functions and what they are supposed to be doing - asked Manny for help and he helped me talk through what i was trying to achieve and therefore what the code should be doing, which really helped. Did manage to creat the queries and get route from the client to server to database, now trying to get the data from the database back to client through the server so that the submitted comments show on the webpage.
