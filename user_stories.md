###BUSMALL###

BusMall is a lean startup and wants an app that displays potential products to individuals in focus groups (three products at a time, side-by-side-by-side).

 BusMall wants to do market analysis on proposed products to test their potential customer interest... before actually putting them into the catalog and getting the manufacturing wheels in motion.

##User stories##

1. Marketing Research Person 1: The marketing team is interested in the total number of clicks and the percentage of times that an item was clicked when it was shown. To keep the product selection process as untainted as possible, the app should not allow any results to be shown to users until there have been a total of 25 selections made.

2. Marketing Research person 2: Since catalogs are expensive to print and distribute, and the products cost money to make and warehouse, and BusMall is a lean startup that needs to carefully watch its expenditures, BusMall wants to feature only the items in its catalog that are the most likely to sell. BusMall wants to do market analysis on proposed products to test their potential customer interest... before actually putting them into the catalog and getting the manufacturing wheels in motion.

3. Developer 1: The dev team will tag team the work. Dev 1 will write out user stories and create wireframes. Dev1's wireframes will include html tags and JS methods and APIs to help Dev2 with their research. This developer is writing user stories and just wants to start creating wireframe and coding. Therefore, Dev1 will keep the user stores as lean as possible. The app's purpose is to have the group members choose which product, of the three displayed images, that they would be most likely to purchase, and then store, calculate, and visually display the resulting data. keep track of how many times each image is displayed and do the calculations. You are also responsible for the look and feel of the app, so don't forget a custom font, color palette, layout with semantic HTML, and so on.

4. Developer 2: Dev 2 will start to research existing code bases in order to not reinvent the wheel. This will be a combination of research online docs and existing code libraries from past projects. Dev2 will build a doc with links and example code that will get the ball rolling when it is time to start building code

5. Developer 3: once the user stories, wireframes are signed off and the research is done, Dev3 jumps and helps to build out the app.

6. Focus group of participant who will be using the application. To keep the product selection process as untainted as possible, you have been instructed to not allow any results to be shown to users until there have been a total of 25 selections made.

Try to write 4-5 user stories for each role. DO THIS STEP FIRST in a file called user_stories.md.

A wise student would take about 30-45 minutes to work on the user stories and also draft a technical plan for the project (a detailed to-do list of things to make, step by step and tested at each stage) before getting into the code.


##Technical plan##

1. Built the scaffolding for the app
2. displayImage():
  a. select three random photos from the image directory and display them side-by-side-by-side in the browser window. (http://stackoverflow.com/questions/20496746/random-image-display-without-repeat-with-javascript)
  b. array of 20 images
  c. function displayImage():
    i. a 'for loop' that randomizes images
    ii. event handler and listener that connects to the htlm tag
    iii.
    iv. display the random image from the imagesArray array in the canvas image using the random number as the subscript value
    document.canvas.src = imagesArray[num];https://developer.mozilla.org/en-US/docs/Web/API/Document/images

3. drawCanvas()

3. BUTTON/FORM: Receive clicks on those displayed images, and track those clicks for each image. You'll also want to track how many times each image is displayed, for statistical purposes.(http://stackoverflow.com/questions/19693256/javascript-display-random-images)
  a. build a button that populates a form
  b. In the button tag add an onClick event handler that calls the displayImage function

4. Track how many times each image is displayed, for statistical purposes.
































##
