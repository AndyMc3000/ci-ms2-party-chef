<a name="top-of-page">![Party Chef Logo created using FreeLogoDesign.org](/assets/readme-assets/party-chef-logo-readme.png)</a>

# Party Chef - Testing Document #



## 1. Development Testing ##

During the development process I manually tested elements and components after I added them to the website. If I encountered an issue or bug in most cases I worked to resolve it straight away. I have listed the tests I did including those where I encountered bugs here;

#### Tests ####

* Added Bootstrap Navbar to index.html and contact.html. Tested navigation links - Home, Contact, and Logo. All worked as expected. 
* Tested Sticky Navbar functionality. I had to add a large image to the body to test this, but once done It worked as expected.
* Added Jumbotron to index.html and contact.html. Tested button on index.html jumbotron. It worked as expected and directed me to contact.html.
* Added photo gallery section and bootstrap modal gallery. Tested ‘Open Gallery’ button (I removed this button subsequently), and tested clicking on photo to open the modal gallery. Both opened the modal carousel gallery as expected. The carousel controls on the modal gallery also worked as expected.
* Added Testimonial and Footer sections. Tested responsiveness of both and they reacted as expected.
* Add Google Map using Google Maps API. Map worked as expected.
* Added test marker to Google Map. Marker orked as expected.
* Added second test marker to Google Map in order to test marker clustering functionality. Clustering worked as expected (I subsequently removed clustering as I decided to use customer markers with InfoWindows - I could not find a way to cluster this type of marker).
* Added Google Maps ‘Info Window’ functionality. So if a user clicks on a marker an Info Window will pop-up to show contact details for a local Party Chef kitchen/office. This worked as expected.
* Added custom markers to Google Maps. They worked as expected (however as mentioned above, they stopped clustering from working).
* Add code for Info Window so that if a second marker is clicked on, the previous Info Window will close and the new one will open. Tested this and it worked as expected.
* Styled content appearing in InfoWindow on Google Map. Tested this and it rendered as expected.
* Added additional locations to Google Maps. Tested each location marker as I saved the location data to maps.js.
* Tested Email links on InfoWindows on Google Map to check if they opened my desktop email client once clicked. They all worked as expected.
* Created a modal to contain the MyMenu 'shopping cart' system. That opened as expected.
* Added ‘Add to cart’ button to index.html to test WebDevSimplified JavaScript shopping cart code. I then added a store.js file to contain JavaScript code from the plugin. I then a div with an ID to call the JS code to the modal. I then tested adding an item to the MyMenu modal/cart and it worked as expected.
* Tested increasing/decreasing quantities of items in the MyMenu, and removing items from MyMenu. Worked as expected.
* Added EmailJS javascript file for 'Request a quote' form code on MyMenu/Cart. Tested it and it worked as expected.
* Added Bootstrap form validation to form on MyMenu. Tested it and it worked as expected.
* Added content to menu items. Tested ‘Add to MyMenu’ button functionality for each item as I went along. All worke as expected.
* Added images to Bootsrap gallery. I tested calling the gallery, and the modal controls. All worked as expected.
* Added wmailjs Contact Form send functionality. Teste it and it worked as expected.
* Added MyMenu cart item indicator to MyMenu button in navbar. Tested it and it worked as expected. 


#### Tests with Bugs ####

* Added Bootstrap menu accordions to index.html. Found a bug where all accordions open and close at the same time. I realised I needed to give each accordion * unique control ID’s. That fixed the bug.
* One one occassion I had an issue with launching the project master instance on GitPod. It wasn't loading completely - see screenshot. When trying to resolve the issue I ended up working on a branch of my Master. I found that the simplest course of action was to delete my GitPod instances (branch & master) and create an new instance by launching the site afresh from GitPod.
<img src="/assets/readme-assets/gitpod-error-instance-not-loading.png">
* I tried implement a Javascript shopping cart plugin for the MyMenu system but couldn’t get it to work. See GitHub the following repository for that code: [Asraf-Uddin-Ahmed /jquery.mycart](https://github.com/Asraf-Uddin-Ahmed/jquery.mycart). I decided to use a simpler alternative solution instead. See: [Introduction to JavaScript Lesson 1](https://github.com/WebDevSimplified/Introduction-to-Web-Development/tree/master/Introduction%20to%20JavaScript/Lesson%201).
* I had a bug with form submission. EmailJS was executing (sending email) before Bootstrap validation takes place. I git help from Tutor support to resolve this.
* I had an issue on the MyModal form with here I couldn't put a placeholder in for the options dropdown input. The first option in the list 'Choose and option' was acting as the placeholder but was also selectable, which doesn't make sense. I eventually found a solution on StackOverflow whihc allow me to add a class to the first option so that it would not be selectable.


## 2. User & Client Stories Testing ##

#### Client Stories ####

1. “The main goal of the website is to attract new business, and provide value to visitors in the information is provides.”
      * The website offers details about what Party Chef does at the top of index.html.
      * The website allows users to look through the different menus of food which Party Chef offers.
      * The website allows users to calculate the cost of their preferred list of menu items.
      * The website allows users to identify their local Party Chef kitchen/office and get its contact details easily.
      * The website details testimonial quotes from past customers.
      * The website aloows users to easily connect with the Party Chef social media channels and mentions the party planning tips and tricks which those             channels offer.
1. “The website must show and promote the services which Party Chef provides.”  
      * The website describes its services in the 'What We Do' section at the top of the homepage.
1. “The website must detail the various menu's on offer, and the cost of food/drink items on each menu.” 
      * The website shows 5 menu types in accordions on index.html - a Canapés menu, a Starters menu, a Main Course menu, a Desserts menu, and a Drinks menu.
1. “The website must allow people to easily contact Party Chef to arrange a party planning consultation.”
      * The website has a map which shows the contact details for all kitchens/offices where a customer can arrange a consultation. Each map location marker         gives the address, email, and telephone number for a specific kitchen when clicked.
      * The website shows the contact details of the Party Chef head office - address, telephone and email.
      * The website highlights links to its social media channels.
      * The website allows a user to requat a quote by completing a form on the MyMenu modal.
      * The website allows a user to send a question or query via a contact form on contact.html.
1. “The website must allow users to create their own menu from the items available, in order to get an idea of food/drinks costs for their party.”
      * The website allows user to pick items from the food & drink menus and add them to a 'MyMenu modal where they can calculate costs for their menu               choices based on the quantity of guets that are attending their party.   
1. “The website must allow users to send a copy of their personal menu to an email address. A copy of this should also be sent to the business owner so they         can better understan what items users prefer.”
      * This functionality was not included. It is listed as a future development.
1. “The website must also allow users to request a quote, based on their menu, having supplied further relevant information about their event. The quote           request information should be sent by email to the business owner. A copy of the quote request should also be sent to the user.”
      * The website allows a user to request a quote by ansering questions on a form on the MyMenu modal.
3. “The website must allow users to find contact details for their local kitchen/office using an interactive Google Map (offices are called a 'kitchens'         on the website).”
      * The website has a Google Map with custom markers. When clicked the InfoWindows display the contact details (address, email, and telephone number)           for a specific kitchen/office.     
4. “The website must promote Party Chef's social media channels.”
      * The website has social media links in the footer of index.html and contact.html. 
      * The website has social media links in a specific social media section on contact.html.
5. “The website must show photos of previous events.” 
      * The website has a modal carousel gallery on index.html which shows picture of past Party Chef events and food dishes.
6. “The website must show customer testimonial quotes.”
      * The website has a testimonial section on index.html highlighting two quotes from previous customers.
7. “The website must be mobile-friendly.”
      * The website has a responsive design. Most of the section are made responsive by using the Bootstrap framework.

#### User Stories ####

1. “I want to see what kind of services Party Chef offers.”
      * The website has a Features section on index.html. This details what Party Chef offers.   
1. “I want to see what kind of menu's (food & drink) Party Chef offer.”
      * The website has five menu sections on index.html - Canapés, Starters, Main Course, Something Sweet, and Drinks.   
1. “I want to find out where they are located, and which is the closest office to me.”
      * The website has a Google map which shows the locations of all Party Chef kitchen/office locations.    
1. “I want to see photo's of the dishes in Party Chef menu's.”
      * The website has a gallery section on index.html which shows picture of the food dishes they offer.
1. “I want to see photo's of previous events serviced by Party Chef.”
      * The website has a gallery section on index.html which shows picture of previous events.
1. “I want to be able to see pricing for menu items.”
      * The website has a list of menus on index.html. These menus include per-person pricing for each item."
1. “I want to be able to create my own menu from the menu's of items offerred. And I want to be able to email a copy of my menu to myself.”
      * The website allows user to create their own menu within the MyMenu modal.
      * The ability to send a MyMenu list by email was not added. This feature is listed as a future feature.
5. “I want to be able to send my menu, along with details about my planned event, to the Party Chef team in order to confirm their availability to service my     event, and to get a detailed quote inclusive of all costs”.
      * The website includes the ability to request a quote based on questions answered on a form on the MyMenu form. The ability to add the MyMenu items to         a request was not included.
7. “I want to find the Party Chef social media channels.”
      * The website has links to the Party Chef social media channels in the footer of index.html and contact.html.
      * The website has links to the Party Chef socia media channels in a specific section on contact.html.


## 3. Code Validation ##



## 4. Manual Testing ##

### Homepage ###

### MyMenu Modal ###

### Contact Page ###



## 5. Browser Testing ##

### Chrome ###

### Firefox ###

### Safari ###




