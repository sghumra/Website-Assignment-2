# Write Up

Initial plan of homepage:
![Screenshot1](/Users/suhaylghumra/Desktop/Final Year Uni/Front-end Web Development/HTML/Assignment/Front-End/Design + Wireframes/Screen Shot 2017-11-29 at 11.54.40.png)

Initial plan of description page:
![Screenshot2](/Users/suhaylghumra/Desktop/Final Year Uni/Front-end Web Development/HTML/Assignment/Front-End/Design + Wireframes/Screen Shot 2017-11-29 at 12.11.26.png)

Initial plan of about page:
![Screenshot3](/Users/suhaylghumra/Desktop/Final Year Uni/Front-end Web Development/HTML/Assignment/Front-End/Design + Wireframes/Screen Shot 2017-11-29 at 12.40.10.png)

Site map for the website:
![Sitemap](/Users/suhaylghumra/Desktop/Final Year Uni/Front-end Web Development/HTML/Assignment/Front-End/Design + Wireframes/Screen Shot 2017-12-19 at 17.01.17.png)

For the prototypes of the website, Proto.io had been used.

Prototype of homepage:

![Prototype of homepage](/Users/suhaylghumra/Desktop/Final Year Uni/Front-end Web Development/HTML/Assignment/Front-End/Design + Wireframes/Prototypes/Screen Shot 2017-12-26 at 19.19.03.png)

Prototype of description page:

![Prototype of description page](/Users/suhaylghumra/Desktop/Final Year Uni/Front-end Web Development/HTML/Assignment/Front-End/Design + Wireframes/Prototypes/Screen Shot 2017-12-26 at 19.23.22.png)

Prototype of about us page:

![Prototype of about us page](/Users/suhaylghumra/Desktop/Final Year Uni/Front-end Web Development/HTML/Assignment/Front-End/Design + Wireframes/Prototypes/Screen Shot 2017-12-26 at 19.33.07.png)

Prototype of mobile homepage:

![Prototype of homepage-mobile](/Users/suhaylghumra/Desktop/Final Year Uni/Front-end Web Development/HTML/Assignment/Front-End/Design + Wireframes/Prototypes/Screen Shot 2017-12-26 at 19.41.23.png)

Prototype of mobile description page:

![Prototype of description-mobile](/Users/suhaylghumra/Desktop/Final Year Uni/Front-end Web Development/HTML/Assignment/Front-End/Design + Wireframes/Prototypes/Screen Shot 2017-12-26 at 19.42.32.png)

Prototype of mobile about us page:

![Prototype of aboutus-mobile](/Users/suhaylghumra/Desktop/Final Year Uni/Front-end Web Development/HTML/Assignment/Front-End/Design + Wireframes/Prototypes/Screen Shot 2017-12-26 at 19.44.09.png)

The website created is a movie review website thats layout and theme took inspiration from IMDB, following a yellow-black colour theme and similar layout. The development process for my website was more of an incremental process as I started the foundation of each website first then implemented a basic CSS to show how everything would layout. After, this I had implemented the design scheme I was going against, since my website was going to be a film review website. The main issue I had encountered was the resizing of the navigation bar when I had shrunk the window or using it on a smaller device the navigation bar would dsiappear. Media breakpoints were confusing to get my head around as I had difficulties trying to implement the correct sizes and keep the lining of the images above each other. At first there was no initial idea to have a separate page for user feedback, but then I thought it would be a good idea to have it as its own page, so the user can look through the website and then give feedback on it after. 

The issues that I had encountered had included trying to implement the '.active' feature in the CSS for the navigation bar, this feature was meant to be there for the purpose of the user knowing what page they are currently on. Also, when I had called in a Google Maps API, and had ran that page (about us) through the HTML validator, it had shown 1 error, this was to put all design attributes into the CSS rather than in the iFrame in the HTML document.

From any page on the website, every other page is accessible via the navigation bar, there was an initial plan of removing the link of the navigation bar when the user clicks that particular button e.g. clicks 'description' page, so all the other links will show except that. In terms of accessibility, I had used 'alt' tags, this is because if the respective image did have any issues with loading then the description of the alt tag will show. 

All pages and stylesheets were manually inputted into the relevant validation website by W3C, this was done for CSS and HTML.

Validation of homepage:

![Validation of homepage] (/Users/suhaylghumra/Desktop/Final Year Uni/Front-end Web Development/HTML/Assignment/Front-End/Validation/Screen Shot 2017-12-25 at 16.59.40.png)

Validation of description page:

![Validation of description page] (/Users/suhaylghumra/Desktop/Final Year Uni/Front-end Web Development/HTML/Assignment/Front-End/Validation/Screen Shot 2017-12-25 at 17.00.26.png)

Validation of about us page:

![Validation of about us page] (/Users/suhaylghumra/Desktop/Final Year Uni/Front-end Web Development/HTML/Assignment/Front-End/Validation/Screen Shot 2017-12-27 at 15.25.21.png)

Validation of feedback page:

![Validation of feedback] (/Users/suhaylghumra/Desktop/Final Year Uni/Front-end Web Development/HTML/Assignment/Front-End/Validation/Screen Shot 2017-12-25 at 18.25.28.png)

Proximity
Alignment
Repition
The positioning of the navigation, the font, and positon of the logo was repeated throughout all the pages. This is because if it changes around it can make the site less user friendly and cause confusion.
Contrast 
There was contrast between the background, images, and writing. This is important so there is no colour clash and giving difficulties when reading or viewing images. 

I had applied JavaScript differently than I would have usually, after research I had found that a navigation bar could be implemented using JavaScript. For CSS, I had used @keyframes and webkits to give the images on the homepage transitions, however, the @keyframes related to  .fadeInRight and .fadeInLeft had displayed parse errors and the webkits had displayed as warnings (see below).

CSS Validation:

![CSS Validation](/Users/suhaylghumra/Desktop/Final Year Uni/Front-end Web Development/HTML/Assignment/Front-End/Validation/Screen Shot 2017-12-27 at 16.25.09.png)

For user testing, I had made a new page called 'Feedback' and within this page I had called in a Typeform questionnaire. I had shown the website to 10 people, and at the end of the browsing period I had told them to click the feedback link where the questionnaire would initiate. The questionnaire consisted of questions about navigation, layout, and accessibility. From the user feedback, the main issue I had found out was that the description page has images that have an 'ease in' effect, so when the user hovers over the image, the image would push back slightly making the user the think it can be clicked, however it was just an ordinary picture with a figcaption. After this feedback, I had removed this effect. On the other hand, respondents had said that navigating through the website was easy and the navigation bar was not too confusing.

Code responsible for the effect:

![Code Snippet of effect](/Users/suhaylghumra/Desktop/Final Year Uni/Front-end Web Development/HTML/Assignment/Front-End/Design + Wireframes/Code snippets/Screen Shot 2017-12-23 at 15.40.04.png)

Mouse rollover with effect:

![Mouse rollover with effect](/Users/suhaylghumra/Desktop/Final Year Uni/Front-end Web Development/HTML/Assignment/Front-End/Design + Wireframes/Screen Shot 2017-12-23 at 15.40.41.png)

Mouse rollover without effect:

![Mouse rollover without effect](/Users/suhaylghumra/Desktop/Final Year Uni/Front-end Web Development/HTML/Assignment/Front-End/Design + Wireframes/Screen Shot 2017-12-23 at 15.41.34.png)