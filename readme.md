Source code is in:
  `app/`
  
Test code is in:
  `app/__tests__`

Design decisions:
* CSS
  * Used grid to define layout.  Makes The spacing easy to understand and to change.
    
* Framework
  * React
    * React lends itself well to being able to easily display a list of items, and also updating the UI when the data changes (i.e. upvoting)
      
* Testing
  * Uses: Jest, react-testing-library, jest-dom
  * Run tests:
    `npm run test`
      
* Functionality
  * Rank order display is achieved by sorting the list of products according to their vote count and updating the UI

Building and viewing page:
  1. npm install
  2. npm run build
  3. copy seed.js into 'build' folder (already done in the zipped file)
      - I left it so that the seeds.js has to be manually copied into the dist folder, since I felt that file is outside of the normal code
  4. copy the images folder into the build folder
  5. open "index.html"
    
