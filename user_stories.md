###BUSMALL###
BusMall is a lean startup and wants an app that displays potential products to individuals in focus groups (three products at a time, side-by-side-by-side).

 BusMall wants to do market analysis on proposed products to test their potential customer interest... before actually putting them into the catalog and getting the manufacturing wheels in motion.

##User stories##
1. Marketing Researcher:
As a marketing researcher, I want to keep track of the images the user clicks on so that I can determine which items are the most popular.

As a marketing researcher, I want to keep the selection process is untainted as possible so that previous results will not influence the user.

As a marketing researcher, I want to feature only the items in its catalog that are the most likely to sell so that we don't waste money on marketing materials.

As a marketing researcher, I want to test customer interest so that we can pinpoint what products will be marketed to the target customer.

2. Developers:
As a developer I want to tag the the coding so that my teammates can catch any problems was we code and another teammate can do research.

As a developer I want to start wire-frame the flow of the app before we begin to code to save time while coding.

As a developer I want to get a clear grasp of the problem domain before starting to wireframe or code.

As as developer I want to research code so that I don't waste time writing code that already exists.

3. Focus groups, or 'testers':
As a tester, I want the tool to be easy to use and understand.
As a tester, I don't want any other tester results to influence my selections.
As a tester, I don't want to see any extra information that will confuse me or distract me.
As a tester, I don't want this to take all day.

##Technical plan##
1. Built the scaffolding for the app
2. function displayImage():
  b. array of 20 images
  a 'for loop' that randomizes images
3. displayImage():
  a. select three random photos from the image directory and display them side-by-side-by-side in the browser window. (http://stackoverflow.com/questions/20496746/random-image-display-without-repeat-with-javascript)

  b.ii. event handler and listener that connects to the htlm tag
    iii.display the random image from the imagesArray array in the canvas image using the random number as the subscript value
    document.canvas.src = imagesArray[num];https://developer.mozilla.org/en-US/docs/Web/API/Document/images

4. drawCanvas()

3. BUTTON/FORM: Receive clicks on those displayed images, and track those clicks for each image. You'll also want to track how many times each image is displayed, for statistical purposes.(http://stackoverflow.com/questions/19693256/javascript-display-random-images)
  a. build a button that populates a form
  b. In the button tag add an onClick event handler that calls the displayImage function

5. Track how many times each image is displayed, for statistical purposes.

##END##
