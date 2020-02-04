Design decisions:
  CSS
    Used grid to define layout.  
      Makes The spacing easy to understand and to change.
    
  Framework
    React
      React lends itself well to being able to easily display a list of items, and also updating the UI when the data changes (i.e. upvoting)
      
  Testing
    Uses: Jest, react-testing-library, jest-dom
    Run tests:
      npm run test
      
  Features
    Rank order display is achieved by sorting the list of products according to their vote count and updating the UI

  Building and viewing page
    npm install
    npm run build
    copy seed.js into 'build' folder (I've already done this in the zipped )
      currently I left it so that the seeds.js has to be manually copied into the dist folder, since I felt that file was outside of the normal code for the page
    copy the images folder into the build folder
    open "index.html"
    
