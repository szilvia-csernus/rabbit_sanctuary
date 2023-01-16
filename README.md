# Website for Hopper Farm Rabbit Rescue

This website was created as the 1st Milestone Project (User Centric Frontend Development Project) for Code Institute's web application development course.
<br><br>

---

### [View the live project here](https://szilvia-csernus.github.io/rabbit_sanctuary)

---
<br>

**Hopper Farm Rabbit Rescue** is a fictional non-profit organisation. The website is designed to support the charity's primary mission which is to help find new homes for rescued pet rabbits.
<br><br>

![Light mode](assets/images/readme-images/amiresponsive-light-mode.jpeg)

---
<br>

## CONTENTS

* [User Experience](#user-experience-ux)
  * [Webite Owner's Goals](#website-owners-goals)
  * [Website Visitors' Goals](#website-visitors-goals)

* [Design](#design)
  * [Colour Scheme](#colour-scheme)
  * [Typography](#typography)
  * [Imagery](#imagery)
  * [Wireframes](#wireframes)
  * [High Fidelity Prototype](#high-fidelity-prototype)

* [Features](#features)
  * [General Features](#general-features)
  * [About Page](#about-page)
  * [Adopt Page](#adopt-page)
  * [Contact Us Page](#contact-us-page)
  * [Future Implementations](#future-implementations)
  * [Accessibility](#accessibility)

* [Technologies Used](#technologies-used)
  * [Languages Used](#languages-used)
  * [Frameworks, Libraries & Programs Used](#frameworks-libraries--programs-used)

* [Deployment & Local Development](#deployment-&-local-development)
  * [Deployment](#deployment)
  * [Forking the GitHub Repository](#forking-the-github-repository)
  * [Making a Local Clone](#making-a-local-clone)

* [Testing](#testing)

* [Credits](#credits)
  * [Main Images](#main-images)
  * [Gallery Images](#gallery-images)
  * [Icons](#icons)
  * [Other Credits](#other-credits---incorporated-ideas-and-solutions)
  * [Acknowledgments](#acknowledgments)
<br><br>
---
<br>

# User Experience (UX)

## Website Owner's Goals

* To help people find the organisation for the primary purpose of rehoming a rescued rabbit.
* To help find potential donors and volunteers willing to contribute to the charity's work.
* To help visitors to make contact with the organisation through various channels.
* The website to have simple structure and clear 'call to action' messages.
* The website to be responsive to all screen sizes as well as light/dark mode preferences.

## Website Visitors' Goals

* To find the relevant piece of information quickly, be it about rabbit adoption, volunteering or donation.
* To be able to make contact with the charity for relevant requests effectively.
* To be able to find the location quickly.
* To be able to access the website in any screen sizes.
* To read the site comfortably when dark mode is preferrable.
---
<br>

# Design

All wireframes and design were created in [Figma](https://www.figma.com/).
<br><br>

## Colour Scheme

Animal charities most frequently use green as their primary colour and I kept the site in line with this customer expectation. I chose orange as an accent colour to emphasize the 'call to action' messages. In addition, I used various shades of greys to complement the two main colours.

I sampled the primary and the accent colours from the hero image of the landing page, then I slightly modified them to satisfy accessibility requirements. 

![Light mode palette:](assets/images/readme-images/colour-palette-light.svg)

![Dark mode palette:](assets/images/readme-images/colour-palette-dark.svg)
<br><br>

## Typography

A font pairing website [Typ.io](https://typ.io/lists) helped me make typograpy choice.
I selected [Nunito](https://fonts.google.com/specimen/Nunito) and [Nunito Sans](https://fonts.google.com/specimen/Nunito+Sans) from the [Google Fonts](https://fonts.google.com/) library for their simplicity and legibility yet fairly informal feel. To complement these simple styled main fonts, for the feature logo I chose a more decorative typeface, [Bubblegum Sans](https://fonts.google.com/specimen/Bubblegum+Sans).
<br><br>

## Imagery

All the **images** appearing on the site are unlicenced, sourced from [Pexels](https://pexels.com/) and [Unsplash](https://unsplash.com/). All pictures have been converted to `.webp` format to reduce file size and as such, reduce loading time. To further increase performance, more image sizes are available for the browser to load the most appropriate one for any screen resolutions. For older browsers that don't recognise `.webp` format, `.png` images were added as backups. This method makes sure that for every device, the best size and resolution will be chosen to achieve the best possible performance.

All **icons** are in .svg format that is lightweight in size, scales perfectly and certain properties can be set programatically. I needed these properties to make them capable to respond to dark-mode preferences. Some of the icons I drew myself in Figma, the others I downloaded from [svgrepo](https://svgrepo.com/). These latter icons are either unlicenced or open-source. All icons were drawn or edited to be uniform in design as well as responsive to dark mode or - as in the case of the rabbit icon - to screen size changes. All icons' colour is set programatically width css.

All references to the images and icons that have been sourced from other sites can be found in the [credits](#credits) section.
<br><br>

## Wireframes

Wireframes were created in [Figma](https://www.figma.com/).

[Live link to wireframe for mobile](https://www.figma.com/proto/wQoFSgRQCECwxqL7hL9q3C/Rabbit_rescue_design?page-id=329%3A62&node-id=329%3A680&viewport=914%2C3013%2C1.76&scaling=min-zoom&starting-point-node-id=329%3A619)
<br>

![mobile-low-fidelity-design](assets/images/readme-images/mobile-low-fidelity-design.jpeg)
<br>

[Live link to wireframe for desktop](https://www.figma.com/proto/wQoFSgRQCECwxqL7hL9q3C/Rabbit_rescue_design?page-id=329%3A64&node-id=329%3A66&viewport=230%2C162%2C0.3&scaling=min-zoom&starting-point-node-id=329%3A66)
<br>

![desktop-low-fidelity-design](assets/images/readme-images/desktop-low-fidelity-design.jpeg)
<br><br>

## High Fidelity Prototype

I created high fidelity prototypes for both mobile and desktop screens. 

[Live link to HiFi Prototype for mobile](https://www.figma.com/proto/wQoFSgRQCECwxqL7hL9q3C/Rabbit_rescue_design?page-id=329%3A63&node-id=352%3A881&viewport=534%2C46%2C0.28&scaling=min-zoom&starting-point-node-id=352%3A881)
<br>

![mobile-high-fidelity-design](assets/images/readme-images/mobile-high-fidelity-design.jpeg)
<br>

[Live link to HiFi Prototype for desktop](https://www.figma.com/proto/wQoFSgRQCECwxqL7hL9q3C/Rabbit_rescue_design?page-id=329%3A65&node-id=329%3A214&viewport=223%2C207%2C0.3&scaling=min-zoom&starting-point-node-id=329%3A214)
<br>

![desktop-high-fidelity-design](assets/images/readme-images/desktop-high-fidelity-design.jpeg)

---
<br>

# Features

The website comprises of three pages: `About` page, `Adopt` page and a `Contact Us` page. In addition, I added two overlay modals with forms for `volunteering` and `donation` as well as a `thank you` modal to appear after a successful form submission.

Dark mode is implemented throughout all pages to satisfy the website owner's UX requirement.
<br><br>

## General features
<br>

### Header
<br>

The **header** is responsive to all screen sizes. On large screens, it expands horizontally, while on mobile and narrower screens the menu bar is replaced with a `burger` icon. Clicking this icon would make the menu appear as a side bar.

All types of the menu bar have Bootstrap codebase. I styled them in css to achieve the desired look. 

A hover effect gives the user feedback about the menu choices. The logo can be clicked from any pages to lead the user back to the home page.

![header-desktop-light-mode](assets/images/readme-images/header-desktop-light-mode2.jpeg)
![header-desktop-dark-mode](assets/images/readme-images/header-dark-mode.gif)
<br><br>

**Header on small screens:**
<br>

![header-mobile-light-mode](assets/images/readme-images/header-mobile-light-mode.jpeg)
![header-mobile-dark-mode](assets/images/readme-images/header-mobile-dark-mode.jpeg)
<br><br>

**Side bars are opening from the burger menu icon:**
<br>

![sidebar-light-mode](assets/images/readme-images/sidebar-light-mode.jpeg)
![sidebar-dark-mode](assets/images/readme-images/sidebar-dark-mode.jpeg)

### Footer
<br>

The **footer** features all contact information as well as links to social media pages. Calls and Emails can be directly initiated by clicking on the links.

![footer-desktop](assets/images/readme-images/footer-desktop.jpeg)
![footer-mobile](assets/images/readme-images/footer-mobile.jpeg)
<br><br>

### Modals and Forms
<br>

All modals and forms are `Bootstrap` features. I custom-styled them in css to look similar to the main design. I also wrote two short scripts in `JavaScript` to control how these features appear and disappear.

The **Volunteer** and the **Donate form** pop-ups can be triggered from more pages. In the case when the `Donate form` is reached from the mobile sidebar, a custom script makes sure that the sidebar closes after clicking the `Donate button`. This script can be found in scripts.js.
<br><br>

**Volunteer form:**
<br>

![volunteer-form-light-mode](assets/images/readme-images/volunteer-form-light-mode.jpeg)
![volunteer-form-dark-mode](assets/images/readme-images/volunteer-form-dark-mode.jpeg)
<br><br>

**Donate form:**
<br>

![donate-form-light-mode](assets/images/readme-images/donate-form-light-mode.jpeg)
![donate-form-dark-mode](assets/images/readme-images/donate-form-dark-mode.jpeg)
<br>

The forms are validated by a script provided by Bootstrap. After passing all validations and submission of either of the forms, a `thank you modal` is triggered to appear. To have this modal appear only after successful validation, I wrote a short custom script in the scripts.js file.
<br>

![thank-you-modal-light-mode](assets/images/readme-images/thank-you-modal-light-mode.jpeg)
![thank-you-modal-dark-mode](assets/images/readme-images/thank-you-modal-dark-mode.jpeg)
<br><br>

**Favicons** are also responsive to light / dark mode preferences. I drew the light mode icon myself, but used [RealFaviconGenerator](https://realfavicongenerator.net/svg-favicon/) to transform it into dark mode sensitive favicons.
<br><br>

![favicon-light-mode](assets/images/readme-images/favicon-light-mode.svg)
![favicon-dark-mode](assets/images/readme-images/favicon-dark-mode.svg)
<br><br>

---

## About Page
<br>

The `About page` is the place where all important information and links can be found. Decorative icons help the user find the desired information effectively.
<br>

![home-light-mode](assets/images/readme-images/home-light-mode.jpeg)
![home-dark-mode](assets/images/readme-images/home-dark-mode.jpeg)
<br><br>

---

## Adopt Page
<br>

The `Adopt page` provides essential information about rabbit re-homing. Its aim is to encourage the user to make the next step in the adoption process and visit the centre. To support this goal, I included a rabbit gallery as well as `Visit Us buttons` to lead the user to the `Contact Us page`. 
<br>

![adopt-light-mode](assets/images/readme-images/adopt-light-mode.jpeg)
![adopt-dark-mode](assets/images/readme-images/adopt-dark-mode.jpeg)
<br><br>
---

## Contact Us Page
<br>

On the `Contact Us page`, I included all the contact information the organisation can be reached from. Alongside the address, a live Google Maps frame helps with orientation.

The submission of a `Volunteer form` is another way of contacting the charity, so it features on this page as well.

Lastly, active links are provided for both calling and emailing the organisation.
<br>

![contact-light-mode](assets/images/readme-images/contact-light-mode.jpeg)
![contact-dark-mode](assets/images/readme-images/contact-dark-mode.jpeg)
<br><br>
---

## Future Implementations
<br>

* Further development could be a new page dedicated entirely to listing individual rabbits waiting for adoption. It would be implemented with a comprehensive database and backend server. The backend server could be accepting and processing the data coming from any contact channels.

* The project could be transformed into a single-page application using ReactJS framework to bring the site in line with current industry standards.
<br><br>
---

## Accessibility
<br>

* To aid screen readers: 
  * `Semantic HTML` were used throughout all pages.

  * All images have descriptive `alt` attributes and all other elements that have implied meanings are labelled with `aria-labels` .

  * Current pages and modals are also labelled with the appropriate `aria properties` to help navigation.

* Fonts were chosen to be simple with clean contours to maximize legibility. 

* For font-sizes, `rem` were used throughout the site to allow the text to scale according to the users' preferred default font-size.

* All colours were tested beforehand to have sufficient contrast with the help of [Color Palette Contrast Checker](https://color-contrast-checker.deque.com/).
<br><br>

---

# Technologies Used
<br>

## Languages Used
<br>

The site was mainly built with [HTML5](https://en.wikipedia.org/wiki/HTML5) and [CSS3](https://en.wikipedia.org/wiki/CSS), although I added a few lines of code in [JavaScript](https://en.wikipedia.org/wiki/JavaScript) to customise some of Bootstrap's features.
<br><br>

## Frameworks, Libraries & Programs Used
<br>

* [Figma](https://www.figma.com/) 
  - to create the design.

* [Git](https://git-scm.com/) & [Github](https://github.com/) 
  - for version control, safe storage and deployment.

* [Gitpod](https://www.gitpod.io/) alongside with [CodeInstitute's template](https://github.com/Code-Institute-Org/gitpod-full-template) 
  - for the development environment.

* [Bootstrap Version 5.2](https://getbootstrap.com/docs/5.2/getting-started/introduction/) 
  - for main frames, code for navigation bar, modals, forms and form validation.

* [Google Fonts](https://fonts.google.com/) 
  - to import fonts into the stylesheet.

* [Typ.io](https://typ.io/lists)
  - to make typography choice.

* [Google Map Generator](https://google-map-generator.com/) 
  - to generate Google Map iframe to address.

* [Google Dev Tools](https://developer.chrome.com/docs/devtools/) 
  - for testing and troubleshooting.

* [CloudConvert](https://cloudconvert.com/jpg-converter) 
  - to convert images to .webp format.

* [Color Palette Contrast Checker](https://color-contrast-checker.deque.com/)
  - to check colours have sufficient contrast.
  
* [RealFaviconGenerator](https://realfavicongenerator.net/svg-favicon/) 
  - to generate dark mode responsive favicons.

* [Am I Responsive?](https://ui.dev/amiresponsive) 
  - to create site visuals for responsive design.

* [Gyazo](https://gyazo.com) 
  - for adding .gif file to this README
<br><br>
---

# Deployment & Local Development
<br>

## Deployment
<br>

The project was deployed to GitHub Pages using the following steps...

1. Log in to GitHub and locate the [GitHub Repository](https://github.com/)
2. At the top of the Repository (not top of page), locate the "Settings" Button on the menu.
3. Scroll down the Settings page until you locate the "Pages" Section.
4. Under "Source", click the dropdown called "None" and select "Main Branch".
5. The page will automatically refresh.
6. Once the deployment process completed the published site's link will appear after the main title.
<br><br>

## Forking the GitHub Repository
<br>

By forking the GitHub Repository we make a copy of the original repository on our GitHub account to view and/or make changes without affecting the original repository by using the following steps...

1. Log in to GitHub and locate the [GitHub Repository](https://github.com/)
2. At the top of the Repository (not top of page) just above the "Settings" Button on the menu, locate the "Fork" Button.
3. You should now have a copy of the original repository in your GitHub account.
<br><br>

## Making a Local Clone
<br>

1. Log in to GitHub and locate the [GitHub Repository](https://github.com/)
2. Under the repository name, click "Clone or download".
3. To clone the repository using HTTPS, under "Clone with HTTPS", copy the link.
4. Open Git Bash
5. Change the current working directory to the location where you want the cloned directory to be made.
6. Type `git clone`, and then paste the URL you copied in Step 3.

```
$ git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY
```

7. Press Enter. Your local clone will be created.

```
$ git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY
> Cloning into `CI-Clone`...
> remote: Counting objects: 10, done.
> remote: Compressing objects: 100% (8/8), done.
> remove: Total 10 (delta 1), reused 10 (delta 1)
> Unpacking objects: 100% (10/10), done.
```
---
<br><br>

# Testing

Please view [TESTING.md](TESTING.md) for more information on testing.

---
<br><br>

# Credits
<br>

## Main images
<br>

* [Hero image](https://www.pexels.com/photo/close-up-view-of-white-rabbit-10595503/): Photo by Ali Atakan Açıkbaş on [Pexels](https://pexels.com/)

* Adopting page image: Photo by [Lorna Ladril](https://unsplash.com/@lorna_ladril?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/s/photos/rabbits?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) 
<br><br>

## Gallery images
<br>

* ["Fluff & Bunbun" photo](https://www.pexels.com/photo/white-and-brown-rabbits-on-bed-6846043/) by Tima Miroshnichenko on [Pexels](https://pexels.com/)

* ["Jack & Jill" photo](https://www.pexels.com/photo/close-up-photo-of-rabbits-playing-11702024/) by Şeyma Dalar on [Pexels](https://pexels.com/) 

* "Fish & Chips" photo by [Pure Julia](https://unsplash.com/@purejulia?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/s/photos/rabbits?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)
  
* "Miffy & Olive" photo by [Andriyko Podilnyk](https://unsplash.com/@andriyko?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/s/photos/rabbits?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)
  
* "Holly" photo by [Janan Lagerwall](https://unsplash.com/@stuffinabox?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/s/photos/rabbits?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)
  
* "Teddy" photo by [Satyabratasm](https://unsplash.com/@smpicturez?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/s/photos/rabbits?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)
  
* "Lola" photo by [Matt Pike](https://unsplash.com/@mjp_tw?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/s/photos/rabbits?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)

* "Cinnabun" photo by [Daniel McCarthy @themccarthy](https://unsplash.com/@danielmccarthy?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/s/photos/rabbits?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)

* "Hopper" photo by [Sandy Millar](https://unsplash.com/@sandym10?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/s/photos/rabbits?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)

* "Chester" photo by [Misha Walker](https://unsplash.com/@misharose?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/s/photos/rabbits?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)

* "Thumper" photo by [Chan Swan](https://unsplash.com/ja/@moyathebunny?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/s/photos/rabbits?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)
  
* "Daisy" photo by [Gabriel Miklós](https://unsplash.com/@gebgramm?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/s/photos/rabbits?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)

* "Oreo" photo by [Li Yan](https://unsplash.com/@yanli247?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/s/photos/rabbits?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)

* "Oliver" photo by [Jacob Amson](https://unsplash.com/@jacobamson?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/s/photos/rabbits?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)

* "Snowball" photo by [Pablo Martinez](https://unsplash.com/@pablomp?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/s/photos/rabbits?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)
  
* ["Brno and Tom" photo](https://www.pexels.com/photo/gray-and-brown-bunnies-8891763/) by Мария on [Pexels](https://www.pexels.com) 
<br><br>

## Icons
<br>

All downloaded icons have been edited.

* Visitors icon: https://www.svgrepo.com/svg/18735/class-open-door (Unlicenced)

* Gift icon: https://www.svgrepo.com/svg/61094/gift (Unlicenced)

* Helping hands icon: https://www.svgrepo.com/svg/76123/voluntary-service (Unlicenced)

* Facebook icon: https://www.svgrepo.com/svg/176882/facebook-social-media (Unlicenced)

* Twitter icon: https://www.svgrepo.com/svg/389481/twitter (Open Soruce MIT licence)

* Location icon: https://www.svgrepo.com/svg/309741/location (Open Soruce MIT licence)

* Phone icon: https://www.svgrepo.com/svg/425344/phone-1 (Unlicenced)

<br><br>

## Other credits - incorporated ideas and solutions
<br>

* masonry style gallery design: [Code Institute]((https://codeinstitute.net/))'s Love Runnning Project

* making svg icons responsive: https://css-tricks.com/cascading-svg-fill-color/ by Chris Coyier https://css-tricks.com/author/chriscoyier/

* making Google Maps iframes responsive to dark mode: https://codepen.io/kuranopen/pen/oNjMqGN

* using images in HTML in different sizes to improve performance:
https://css-tricks.com/responsive-images-youre-just-changing-resolutions-use-srcset/
https://ausi.github.io/respimagelint/docs.html
https://medium.com/@woutervanderzee/responsive-images-with-srcset-and-sizes-fc434845e948
https://stackoverflow.com/questions/68191793/specify-explicit-width-and-height-for-picture-tag
https://www.cssmine.com/blog/2020-02-12-css-object-fit-and-object-position-properties-crop-images-embedded-in-html

* adding backup image in .png format for older Safari users
https://stackoverflow.com/questions/58487035/how-to-add-webp-support-in-safari-browser

* improving accessibility: https://web.dev/how-to-review/

* on [how to write README files](https://github.com/kera-cudmore/readme-examples) by Kera Cudmore

<br><br>

## Content
<br>

* I wrote all content myself, however, I drew inspiration from the following sites:

  [The Littlest Lives Rescue](https://thelittlestlivesrescue.org.uk)

  [South Coast Rabbit Rescue](https://www.southcoastrabbitrescue.co.uk)

  [Essex Guinie Pig, Rat and Rabbit Rescue](https://www.egprr.org)

* Content for Deployment and Development of this README file was written using [Code Institute's sample README file](https://raw.githubusercontent.com/Code-Institute-Solutions/SampleREADME/master/README.md).
<br><br>

##  Acknowledgements
<br>

* My mentor [Elaine Broche](https://github.com/elainebroche-dev) for her helpful feedback she gave me throughout the development and testing process.

* Kera Cudmore for her [advice on how to write a Readme](https://github.com/kera-cudmore/readme-examples).

* Edmir Demaj and Sirinya Richardson who reviewed my project in Code Institute's dedicated Slack channel. 

* My friends who took the time to test my site.

* The Slack Community for continuous support.

<br><br>

##  Disclaimer
<br>

This project was created for Code Institute's web application development course as the first Milestone Project - User Centric Frontend Development Project - for assessment purposes. 
<br>
Not for public consumption.
<br>
Szilvia Csernusne Berczes, Jan 2023.
