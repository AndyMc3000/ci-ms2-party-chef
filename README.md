<a name="top-of-page">![Party Chef Logo created using FreeLogoDesign.org](/assets/readme-assets/party-chef-readme-logo.png)</a>

# PartyChef.ie - Professional Private Caterers :cocktail: #
## Code Institute - Dip. in Software Development - Milestone Project 2 - Interactive Frontend Development Milestone Project ##
#### Student: Andrew McDonald - Contact me on GitHub :octocat: - <a href="https://github.com/AndyMc3000"><strong>AndyMc3000</strong></a> ####

<hr>
<img src="assets/readme-assets/maxfit-ami-responsive-homepage.png" width="900">
<hr>

## Table of Contents ##
1. [Introduction](#introduction-heading)
1. [User Experience Design (UX)](#user-experience-design)
1. [Development Process](#development-process)
1. [Website Features](#website-features)
1. [Technologies Used](#technologies-used)
1. [Testing & Bugs](#testing)
1. [Deployment](#deployment)
1. [Credits](#deployment)
<br>
<hr>

## 1. <a name="introduction-heading">Introduction</a> ##

This Party Chef website is my Milestone 2 (MS2) project for my Diploma in Fullstack Software Development course at Code Institute. This README refers to Party Chef as a fictional client of mine, where I have been hired to develop a website for the business owner to meet certain criteria (see UX section below). However, the underlying goal of the project is to meet and exceed the requirements laid out for the MS2 project by Code Institute. The high-level requirement of the MS2 is to "..build an interactive front-end site. The site should respond to the users' actions, allowing users to actively engage with data, alter the way the site displays the information to achieve their preferred goals." The principle technologies to be used are HTML5, CSS3, and JavaScript. Other technologies being used are; the Bootstrap front-end framework, the jQuery library, and EmailJS.

Party Chef is a private catering business with multiple office locations around Ireland. Party Chef is run by a professional team of chef's, service personnel, and party planners. The offices are referred to as 'kitchens' on the website, as this is where food is prepared before being delivered to event/party sites. Customers can vists the kitchens in order to discuss and plan their events with the Party Chef team. 

#### [Back To Top ^ ](#top-of-page) ####

<hr>

## 2. <a name="user-experience-design">User Experience Design (UX)</a> ##

The design of this website was determined by assessing and quantifying the goals and objectives of the business owner, as well as the requirements of end users who will visit and use the website. Following the determination of 'Client' and 'User' stories and their subsequent technical requirements, the site was designed using the principles of Jesse James Garrett's '5 Planes of UX Design'. The outcome or tasks created for each design plane is outlinined below.


#### 1. The Strategy Plane ####

The Strategy Plane is, as defined by Jesse James Garrett "..incorporates not only what the people running the site want to get out of it but what the users want to get out of the site as well." 

Please see below details of the 'Client Stories' to detail the requirements of the Pary Chef business owner, and the 'User Stories' which highlight the requiremnts of end users of the Party Chef website.

#### Client Stories ####
> - [x] “The main goal of the website is to attract new business, and provide value to visitors in the information is provides.”
> - [x] “The website must show and promote the services which Party Chef provides.”
> - [x] “The website must detail the various menu's on offer, and the cost of food/drink items on each menu.” 
> - [x] “The website must allow people to easily contact Party Chef to arrange a party planning consultation.”
> - [x] “The website must allow users to create their own menu from the items available, in order to get an idea of food/drinks costs for their party.”
> - [x] “The website must allow users to send a copy of their personal menu to an email address. A copy of this should also be sent to the business owner so they can better understan what items users prefer.”
> - [x] “The website must also allow users to request a quote, based on their menu, having supplied further relevant information about their event. The quote request information should be sent by email to the business owner. A copy of the quote request should also be sent to the user.”
> - [x] “The website must allow users to find contact details for their local kitchen/office using an interactive Google Map (offices are called a 'kitchens' on the website).”
> - [x] “The website must promote Party Chef's social media channels.”
> - [x] “The website must show photos of previous events.” 
> - [x] “The website must show customer testimonial quotes.”
> - [x] “The website must be mobile-friendly.”

#### User Stories ####
> - [x] “I want to see what kind of services Party Chef offers.”
> - [x] “I want to see what kind of menu's (food & drink) Party Chef offer.”
> - [x] “I want to find out where they are located, and which is the closest office to me.”
> - [x] “I want to see photo's of the dishes in Party Chef menu's.”
> - [x] “I want to see photo's of previous events serviced by Party Chef.”
> - [x] “I want to be able to see pricing for menu items.”
> - [x] “I want to be able to create my own menu from the menu's of items offerred. And I want to be able to email a copy of my menu to myself.”
> - [x] “I want to be able to send my menu, along with details about my planned event, to the Party Chef team in order to confirm their availability to service my event, and to get a detailed quote inclusive of all costs”.
> - [x] “I want to find the Party Chef social media channels.”


#### 2. The Scope Plane ####

Based on the outcomes from the Strategy Plane, The Scope Plane determines what features, functionality, and types of content should be included within the scope of the project. Listed below are the functional specifications and content requirements decided upon for the Party Chef website. 

#### Functional Specifications: ####
* Build a responsive Website with 2 pages - Homepage and Contact page.
* Navigation bar to highlight currently accessed page.
* Both pages should have a Jumbotron at the top of the page with relevant call-out messaging. The Homepage Jumbotron to include link to contact page in order to arrange a meeting for a no-obligation consultation.
* The Homepage should include a 'Features' section highlighting the Party Chef services.
* The Homepage should show various menu's (canpapes, starters, main course, something sweet, drinks) each showing menu items listed within an accordian. Items on the menu can be added to a MyMenu cart.
* Shopping cart functionality should be built in so that menu items can be added to a 'MyMenu' list of items. The MyMenu should then be accessed via links in the Nav bar and Footer. Once clicked, the MyMenu list of items appears on a modal. User can ammend quantites of the items they have selected in the MyMenu to get a price for their food/drink selection. A copy of the MyMenu list can be sent to a users email. A copy of the email should also be sent to Paty Chef.
* The MyMenu should also have the facility to request a quote for an event. The request should include the food/drink items in the MyMenu lis plus additional information about the event (date/time, location, etc.). The request will eb sent to Party Chef by email. A copy of the request should also be sent to the user email address.
* The Homepage should include a photo Gallery using a carousel on the Homepage to show menu items. A similar gallery on the contact page showing photos from past events should also be included.
* The contact page must include all contact infromation for the Party Chef headquarters.
* The contact page should include an interactive map showing all the kitchen locations across Ireland. By implementing features of the Google Maps API, a user should be able to select an individual kitchen marker to get a pop-up of contact information for that particular kitchen.
* The contact page should also include a section highlighting social media channels.
* The contact page should also include a contact form with a dropdown box so a user can select the subject type of their query (i.e. arrange a consultation. special menu request, service availability at certain location etc). 

#### Content Requirements: ####
* Both Jumbotrons should show images conveying people haveing fun at a great party. Appropriate messaging should also be used to convey the key values of Party Chef.
* The features section on the Homepage should briefly, but completely, convey what the main services are and the the benefits of using them.
* Menu items should include a photo, a description, and the price per single serving of each item on the menu's.
* Both photo galleries should show quality photos of impressive food layouts (Homepage Gallery) and recent events (Contact page gallery).
* Homepage should show the most glowing but brief Testimonial quotes along with the customer details.


#### 3. The Structure Plane ####

#### Interaction Design: ####

Interaction design is defined as the "..development of application flows to facilitate user tasks, defining how the user interacts with site functionality". Inline with this principle, the pages were designed as follows;

1. The Homepage;
* It should have a navigation bar with individual links to each page and a 'MyMenu' modal. The navigation bar should also be fixed to the top of the page view.
* It should contain a call-to-action to promote a no-oblidgation consultation. This should link to the contact page.
* It should contain a features/benefits section containing 4 principle featires under the following headings; 'Who We Are', 'Our Services', 'Our Menu's', and 'Talk to us'.
* It should contain a list of menu's (each within its own accordion) under the following headings; 'Canapés', 'Starters', 'Main Course', 'Something Sweet', and 'Drinks'. 
* The menu accordions should contain a list of menu item to include a photo, description, and an 'Add to MyMenu' button. When the 'Add to MyMenu' button is clicked, an item is added to the users MyMenu (i.e. shopping cart). 
* The users MyMenu (a modal) can be accessed by clicking on the MyModal button in the Nav bar and Footer. Within the MyMenu modal, a user can change the quantity of an item, remove and item, or send a copy of the menu to an email address. A copy of the email is also sent to Party Chef.
* A user can also send a copy of the menu to Party Chef, along with additional information which must be included, in order to request a quote an confirm availablity. The extra information will come from a form in the MyMenu modal which a user must complete. The from will ask for; Name, Email, Telephone number, Party date, Party start time, Location, Service Type. A copy of the quote request will also be sent to the user by email.
* It should contain a gallery of photographs highlighting recent events and food displays.
* It should contain a section to show Testimonial quotes.
* It should have a further navigation section in the footer. The footer will also contain links to all Party Chef's social media channels.

2. The Contact page;
* It should have a navigation bar with individual links to each page and a 'MyMenu' modal.
* It should contain a section to show the address and phone number of the Party Chef Headquarters.
* It should include a Google Map with markers to show the individual Party Chef offices around the country. And when a user clicks on a marker, and 'info window' should popup to show the contacts details and address for that office.
* It should contain a contact form with a dropdown to allow users to indicate their are of interest: 'Request a party planning consultation', 'Check our availability to service your event', or 'Ask us anything'.
* It should have 3 main sections focusing on; The Gym/equipment, Personal Training Services, and the Studio/class facilities.
* It should contain a gallery of photographs titled 'Our Team'.

#### Information Architecture: ####

Infromation Architechture is defined as; "The structural design of the information space to facilitate intuitive access to content" (Copyright 2000 James Garrett). As such Party Chef was designed to allows a user to find the information they need easily. For example, the navigation bar is fixed to the top of the page view so is always immediately accessible, and buttons and links are clearly visible and communicate their purpose in an unambiguous way.

The structure of the website and outline of page sections is outlined in the Sitemap. Click the link to view the <a href="assets/readme-assets/party-chef-sitemap.png"><strong>Sitemap.</strong></a>


#### 4. The Skeleton Plane ####

Following on from the tasks decided upon in the Structure Plane, the Skeleton Plane is defined as follows; ".. The skeleton is designed to optimize the arrangement of these elements (such as the placement of buttons, tabs, photos's and blocks of text) for maximum effect and efficiency..".

With this in mind the following wireframes were created to detail the layput of the website pages and individual sections/containers. Please click the following links to view these wireframes.

1. <a href="assets/readme-assets/party-chef-homepage.png"><strong>Homepage Wireframe</strong></a>
1. <a href="assets/readme-assets/party-chef-contact-page.png"><strong>Contact page Wireframe</strong></a>
1. <a href="assets/readme-assets/party-chef-mymenu-modal.png"><strong>'MyMenu' Modal Wireframe</strong></a>


#### 5. The Surface Plane - TO EDIT ####

Having completed the previous 4 stages in the UX design process, I moved on to making decisions around the design and styling of the website. The Surface Plane focuses on the styling of images, backgrounds, fonts, and colours used on a website. The details of these decisions are listed here;

1. Colours - The color scheme for the website was chosen from a selection of colours I considered, using tools on the [Coolors.co](https://coolors.co/) website. The color schemes chosen, along with their HEX values, is shown here;
<img src="assets/readme-assets/maxfit-coolors-palettes.png" width="450">

1. Font - I used the Google Fonts website to help me decide on a font to use on the MAXFIT website. I wanted something simple yet strong at the same time - not too light, not too bold. I decided upon a Font called Nunito Sans. An example of it can be seen here;   
<img src="assets/readme-assets/maxfit-font-nunito-sans.png" width="220">

1. Images - I mainly used photos taken from the [Unsplash.com](https://unsplash.com/) website. On Unspalsh.com I was able to create collections of phtotos for each of the services and classes which I wanted a gallery for. E.g. a selection for yoga, pilates, personal training etc.

1. Icons - I used Font Awesome to add icons to various page and section headings. The footer navigation list had icons which matched the icon found on each page heading. I also added a Font Awesme Favicon to the page headers.

1. Galleries - I decide to use Bootstrap Modals as containers for my Carousel Galleries.

#### [Back To Top ^ ](#top-of-page) ####

<hr>

## 3. <a name="development-process">Development Process - TO EDIT</a> ##

I drew up a process to follow for developing the Party Chef website. This is listed in sequence below.

1. Design - I firstly designed the site based on the Client/User Stories requirements, by getting ideas from fitness club/gym websites, and by creating wireframes/sketches.
1. Structure - I then wrote the HTML code for all pages including; navigation, footers, sections, galleries, forms, iframes.
2. Interactive Functionality - JavaScript
3. Content - I then added text content to sections (lorem ipsum/placeholder text), and images to galleries. 
4. Style - I then added colours and fonts and wrote CSS rule sets and media queries in order to style the website.
5. Responsive - I made sure all texts/headings, images, and container elements transform approprately and look good when viewed on different devices such as: mobile phones, tablets, laptops, large screen computers (PC's), and large TV's. 
6. Review - I did a last review of all code (formatting, besutifying etc) and content, fixing anys bugs/typo's etc as I did so.
7. Testing - And finally I validated my HTML and CSS code, and tested functionality of site elements across a range of different devices and browsers.


#### [Back To Top ^ ](#top-of-page) ####

<hr>

## 4. <a name="website-features">Website Features - TO EDIT</a> ##
* Bootstrap navigation bar
* Jumbotron 
* Bootstrap responsive grid
* JS Accordion
* JScart/MyMenu/EmailJS
* Carousel slider modal gallery
* Google Map/Markers/InfoWindow
* Contact Form/EmailJS
* Social Links in footer
* Navigation links in Footer

#### [Back To Top ^ ](#top-of-page) ####

<hr>

## 5. <a name="technologies-used">Technologies Used - TO EDIT</a> ##

<img src="assets/readme-assets/maxfit-tech-logos-readme-2.png" width="430">

I used the following technologies, services, and devices to develop, style, deploy, and test the Pary Chef website;
<br>
* HTML5 - The site was develop using HTML5 markup language.
* CSS3 - The site was styled and in some cases made responsive using CSS3.
* JavaScript/jQuery
* Bootstrap - I used the Bootstrap framework for implementing some sections and features.
* GitHub - I set up a free repository on GitHub.com to maintain a master of all website files, content, and resources.
* GitPod - I used the free GitPod.io Integrated Development Environment to write and develop the code for the website.
* Github Pages - I used the free GitHub Pages to deploy/publish the live website on the web.
* Balsamiq - I used the Balsamiq application to create the website sitemap and webpage wireframes.
* Responsive Viewer - I used a Chrome Browser Extension called Responsive Viewer to emulate the presentation of the website on multiple device sizes and types.
* Apple Preview - I used the Apple Preview image editor application to crop and resize photo's and images. 
* Apple Pages - I used the Apple Pages word processor to manage and edit text content for the website. 
* Apple Hardware - I used a MacBook Pro to develop the site. I also used an Apple iPhone, Apple TV, and Apple iPad for testing the website.

#### [Back To Top ^ ](#top-of-page) ####

<hr>

## 6. <a name="testing">Testing</a> ##

Generally speaking I continually tested each function/feature/element as I added them to the website. I also tested the website using a combination of online services, browsers, and a limited number of physical devices upon completion. 

1. Code Validation:

I ran the code on the website through the W3C Markup Validation Service for both my HTML and CSS code. The results were;

* W3C HTML Validation - Some issues arose around divs not having closing tages, and images not having ALT tags. These issues were easily corrected
* W3C CSS Validation Service - no issues.

1. Website Functionality:

I tested all functionality of links, navigation, buttons, galleries, and site features using the Chrome browser. The tests completed can be seen here <a href="functionality-tests.md"><strong>- Functionality Tests</strong></a>

1. Cross-Browser Testing:
* I tested the website on 3 browsers - Google Chrome, Apple Safari, and Mozilla Firefox.

1. Device Testing:
* I primarily used and online services and Chrome browser extension to test the website across different devices. I also tested the website on a physical MacBook Pro, and Apple iPhone 6s. The services I used were;
* [Ami.Resonive](hhttp://ami.responsivedesign.is/)
* [Responsive Viewer Browser Add-On](https://chrome.google.com/webstore/detail/responsive-viewer/inmopeiepgfljkpkidclfgbgbmfcennb?hl=en)


#### [Back To Top ^ ](#top-of-page) ####

<hr>

## 7. <a name="deployment">Deployment - TO EDIT</a> ##

This site was developed by firstly setting up a GitHub repository to store the website files. GitHub is a free online code hosting platform for websites or web applications, which enables version control and collaboration during the development of a project. A repository on GitHub containes all of a project's files and each file's revision history. You can learn more about GitHub and repositories here: [Click here to go to GitHub](https://docs.github.com/en/free-pro-team@latest/github)

I used the online GitPod Integrated Development Environment (or GitPod IDE) to write the site code. Once I was happy with a section of code I commited or saved that to the working version of the website on GitPod. I then 'pushed' those changes from the GitPod IDE to my GitHub repository where the master set of files was updated. You can learn more about GitPod: [Click here to go to GitPod](https://docs.github.com/en/free-pro-team@latest/github)

Early on in the development process I also deployed the website to a live web address using GitHub Pages. GitHub pages is a free static-site hosting service. It takes HTML, CSS, and JavaScript files directly from a GitHub repository and publishes a website with them. Once setup, any changes you make on your IDE which are subsequently 'pushed' to your GitHub repository, are automatically updated on GitHub Pages too. 

Here are the steps I took to deploy the website on GitHub Pages;
1. Login to GitHub.
1. Select 'Your Repositores' by selecting the dropdown button on the your account icon at the top right-hand corner of the screen. 
1. When you get to the Your Repositories page, select the project you want to deploy.
1. When in the individual repository page, click on the Settings icon from the lists of options above the repository file list (settings can be seen listed on the far-right of this list).
1. Once in the settings page, scroll down the GitHub Pages section near the bottom of the page.
1. Under the Source section, select the branch of the project you want to deploy from the first dropdown box (normally the master branch).
1. Also under the Source section choose the folder of the files you wnat to deploy (normally '/root').
1. Once you have made your selection, click Save. This will deploy your site to a unique URL. Once the site has been deployed, green text with a tcick mark will appear above the Source secion to notify you that deployment has been successful, and will also show you the URL for the website.

I deployed the website early on in the developmnt process, as it useful to be able to examine the website on various physical devices in its live state. Also, while the GitPod IDE has the ability to show a preview of changes to a project, sometimes that does not pick up or display issues which would appear on a live site. For example, when I deployed my website on GitHub Pages initially, I found that it was not reading my CSS file, so no styling was appearing on the site. The Preview tab in GitPod was reading the CSS file correctly. I found that a typo relating to the CSS file source address in my page headers caused the issue for the deployed site, while GitPod Preview did not pick it up. By having the deployed site up and running, I was able to address and correct the bug early in the development process.

The working version of the MAXFIT website deployed on GitHub Pages can be seen here: [Click here to view deployed website](https://andymc3000.github.io/maxfit-codeinstitute-ms1project-static-gym-website/)

#### [Back To Top ^ ](#top-of-page) ####

<hr>

## 8. <a name="credits">Credits</a> ##

1. Coding Websites - I regularly used website to help me learn how to code certain elements/features. I also copied code snippets from these sites in some cases. These websites include; 
* [W3Schools.com](https://www.w3schools.com/)
* [Mozilla MDN Web Docs](https://developer.mozilla.org/)
* [Bootstrap](https://getbootstrap.com/)
* [GitHub.com](https://github.com/)
* [StackOverflow.com](https://stackoverflow.com/)

1. Colours - I used the Coolors.co website to help me decide on a colour scheme for the webite. This website allows you to create your own colour palettes or to use one of thiers. See more about the Coolors.co palette catalogue and tools here: [Coolors.co](https://coolors.co/). 

1. Font - I used Google Fonts for the fonts on the website. See more at: [GoogleFonts.com](https://fonts.google.com/)

1. Icons - I used Fontawesome for all icons on the website. See more at: [FontAwesome.com](https://fontawesome.com/)

1. Design Principles - The design of this website employed the principles of 'The 5 Planes of UX design', which was created by Jesse James Garrett in his book; The Elements of User Experience: User-centered Design for the Web (2002). See more at; [Jjg.net](http://www.jjg.net/elements/)
  
1. Company Logo - The Maxfit logo was created using tools on the FreeLogoDesign.org website. See more at; [FreeLogoDesign.org](https://www.freelogodesign.org/)

1. Wikimedia commons - Technology logo's.

1. Text content - I rewordered some of the marketing slogans and texts/descriptions content from Equinox.com and ActiveFitness.ie, and used those on my site.

1. Map - The map on contact.html uses Google Maps iFrame code.

1. Website Analytics - I added Google Analytics to the website by adding their code to the <head> of each page. 

### Acknowledgements ###

In order to get design ideas, I took inspiration from a number of industry relevant websites.
These websites are;

No. | Business Name | Website | Description
--- | ------------- | ------- | -----------
1 | **The Movement** | [TheMovement.ie](https://www.themovement.ie/) | Single local Gym, Co.Cork, Ireland.
2 | **EQUINOX** | [Equinox.com](https://www.equinox.com/) | 400+ global locations, U.S.-based.
3 | **The Squad** | [TheSquad.ie](https://thesquad.ie/) | City Gym with 3 locations, Cork, Ireland.
4 | **Glofox** | [Glofox.com](https://www.glofox.com/) | Gym manegement and website software company.
5 | **ActiveFitness** | [ActiveFitness.ie](https://activefitness.ie/) | 24-hr Gym with one location, Galway, Ireland.
6 | **The Spencer Health Club** | [TheSpencerHealthClub.com](https://www.thespencerhealthclub.com/) | City Gym one location, Dublin, Ireland.

### Additonal Support ###

I also received help and support from;
* Allen Thomas Varghese - GitHub username: @allentv - my mento at Code Institute. He gave me advice on project planning, VSCode, Wireframing, and requirements.
* Jim - GitHub username: @JimLynx - Code Institute - advice on GitHub/Git/GitPod, milestone project planning, and creating a README.md.
* Anna - GitHub username: @anna_ci - Code Institute - advice with creating a README.md.
* Student Support - Code Institute
* Tutor Support - Code Institute

#### [Back To Top ^ ](#top-of-page) ####

<a name="top-of-page">![Party Chef Logo created using FreeLogoDesign.org](/assets/readme-assets/party-chef-readme-logo.png)</a>
