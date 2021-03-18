<a name="top-of-page">![Party Chef Logo created using FreeLogoDesign.org](/assets/readme-assets/party-chef-logo-readme.png)</a>

# Party Chef - Testing Document #



## 1. Development Testing ##

During the development process I manually tested elements and components after I added them to the website. If I encountered an issue or bug, in most cases I wored to resolve it straight away. I have listed the tests and, and those with bugs here;

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


#### Tests with Bugs ####
* Added Bootstrap menu accordions to index.html. Found a bug where all accordions open and close at the same time. I realised I needed to give each accordion * unique control ID’s. That fixed the bug.
* One one occassion I had an issue with launching the project master instance on GitPod. It wasn't loading completely - see screenshot. When trying to resolve the issue I ended up working on a branch of my Master. I found that the simplest course of action was to delete my GitPod instances (branch & master) and create an new instance by launching the site afresh from GitPod.
<img src="gitpod-error-instance-not-loading.png">
* I tried implement a Javascript shopping cart plugin for the MyMenu system but couldn’t get it to work. See GitHub the following repository for that code: [Asraf-Uddin-Ahmed /jquery.mycart](https://github.com/Asraf-Uddin-Ahmed/jquery.mycart). I decided to use a simpler alternative solution instead. See: [Introduction to JavaScript Lesson 1](https://github.com/WebDevSimplified/Introduction-to-Web-Development/tree/master/Introduction%20to%20JavaScript/Lesson%201).
* I had a bug with form submission. EmailJS was executing (sending email) before Bootstrap validation takes place.


## 2. User & Client Stories Testing ##




## 3. Code Validation ##



## 4. Device Testing ##



## 5. Browser Tsting ##




