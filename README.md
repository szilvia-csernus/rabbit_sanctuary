# Website for Hopper Farm Rabbit Rescue

This website was created as the 1st Milestone Project (User Centric Frontend Development Project) for Code Institute's web application development course.

----------

Live website: https://szilvia-csernus.github.io/rabbit_sanctuary

Hopper Farm Rabbit Rescue is a fictional non-profit organisation. The website is designed to support the charity's primary mission which is to help find new homes for rescued pet rabbits.

![Light mode](assets/readme-images/amiresponsive-light-mode.jpeg)

---------

## CONTENTS

* [User Experience](#user-experience-ux)
  * [Webite Owner's Goals](#website-owners-goals)
  * [User Stories](#user-stories)

* [Design](#design)
  * [Colour Scheme](#colour-scheme)
  * [Typography](#typography)
  * [Imagery](#imagery)
  * [Wireframes](#wireframes)

* [Features](#features)
  * [General Features on Each Page](#general-features-on-each-page)
  * [Future Implementations](#future-implementations)
  * [Accessibility](#accessibility)

* [Technologies Used](#technologies-used)
  * [Languages Used](#languages-used)
  * [Frameworks, Libraries & Programs Used](#frameworks-libraries--programs-used)

* [Deployment & Local Development](#deployment--local-development)
  * [Deployment](#deployment)
  * [Local Development](#local-development)
    * [How to Fork](#how-to-fork)
    * [How to Clone](#how-to-clone)

* [Testing](#testing)

* [Credits](#credits)
  * [Icons](#icons)
  * [Main Images](#main-images)
  * [Gallery Images](#gallery-images)
  * [Other Credits](#other-credits---incorporated-ideas-and-solutions)
  * [Acknowledgments](#acknowledgments)

---

## User Experience (UX)

### Website Owner's Goals

* To help people find the organisation for the primary purpose of rehoming a rescued rabbit.
* To help find potential donors and volunteers willing to contribute to the charity's work.
* To help visitors to make contact with the organisation.
* The website to have simple structure and clear 'call to action' messages.
* The website to be responsive to all screen sizes as well as light/dark mode preferences.
---
### Website visitors' Goals

* To find the relevant piece of information quickly, be it about rabbit adoption, volunteering or donation.
* To be able to make contact with the charity for relevant requests effectively.
* To be able to find the location quickly.
* To be able to access the website in any screen sizes.
* To read the site comfortably when dark mode is preferrable.
---
## Design

All wireframes and design were created in [Figma](https://www.figma.com/).

### Colour Scheme

Colour choice was made in line with industry norms and customer expectations, green being the most frequent choice for for animal charity organisations. Orange was chosen as an accent colour to emphasize 'call to action' messages. In addition, various shades of greys were added to complement the two main colours.

Primary and accent colours were sampled from the hero image of the landing page, then slightly modified to satisfy accessibility requirements.

![Light mode palette:](assets/readme-images/light-palette.png)

![Dark mode palette:](assets/readme-images/dark-palette.png)

### Typography

Typography choice was made with the help of a font pairing website [Typ.io](https://typ.io/lists).
[Nunito](https://fonts.google.com/specimen/Nunito) and [Nunito Sans](https://fonts.google.com/specimen/Nunito+Sans) were selected from the [Google Fonts](https://fonts.google.com/) library for their simplicity, legibility yet fairly informal feel. 

### Imagery

Free images were chosen from [Pexels](https://pexels.com/) and [Unsplash](https://unsplash.com/) websites.
Feature rabbit icon was custom created by the author, other icons were downloaded from [svgrepo](https://svgrepo.com/) and edited in [Figma](https://www.figma.com/).

### Wireframes - Low & High Fidelity Designs

All design was created by the author with the design tool [Figma](https://www.figma.com/).

![mobile-low-fidelity-design](assets/readme-images/mobile-low-fidelity-design.jpeg)
![desktop-low-fidelity-design](assets/readme-images/desktop-low-fidelity-design.jpeg)
![mobile-high-fidelity-design](assets/readme-images/mobile-high-fidelity-design.jpeg)
![desktop-high-fidelity-design](assets/readme-images/desktop-high-fidelity-design.jpeg)


## Features

The website comprises of three pages: Home/About page, Adopt page and Contact Us page. In addition, there are two forms for 'volunteering' and 'donation' as well as a 'thank you' modal appearing after a successful form submission.

### General features on each page

Header on large screens:
![header-desktop-light-mode](assets/readme-images/header-desktop-light-mode.jpeg)
![header-desktop-dark-mode](assets/readme-images/header-desktop-dark-mode.jpeg)


Header on small screens:

![header-mobile-light-mode](assets/readme-images/header-mobile-light-mode.jpeg)
![header-mobile-dark-mode](assets/readme-images/header-mobile-dark-mode.jpeg)

Side bars opening from burger menu:

![sidebar-light-mode](assets/readme-images/sidebar-light-mode.jpeg)
![sidebar-dark-mode](assets/readme-images/sidebar-dark-mode.jpeg)

Footer:

![footer-desktop](assets/readme-images/footer-desktop.jpeg)
![footer-mobile](assets/readme-images/footer-mobile.jpeg)

Volunteer form:

![volunteer-form-light-mode](assets/readme-images/volunteer-form-light-mode.jpeg)
![volunteer-form-dark-mode](assets/readme-images/volunteer-form-dark-mode.jpeg)

Donate form:

![donate-form-light-mode](assets/readme-images/donate-form-light-mode.jpeg)
![donate-form-dark-mode](assets/readme-images/donate-form-dark-mode.jpeg)

Thank you modal:

![thank-you-modal-light-mode](assets/readme-images/thank-you-modal-light-mode.jpeg)
![thank-you-modal-dark-mode](assets/readme-images/thank-you-modal-dark-mode.jpeg)

Favicons in light and dark mode:

![favicon-light-mode](assets/readme-images/favicon-light-mode.svg)
![favicon-dark-mode](assets/readme-images/favicon-dark-mode.svg)

Home page:

![home-light-mode](assets/readme-images/home-light-mode.jpeg)
![home-dark-mode](assets/readme-images/home-dark-mode.jpeg)

Adopt page:

![adopt-light-mode](assets/readme-images/adopt-light-mode.jpeg)
![adopt-dark-mode](assets/readme-images/adopt-dark-mode.jpeg)

Contact Us page:

![contact-light-mode](assets/readme-images/contact-light-mode.jpeg)
![contact-dark-mode](assets/readme-images/contact-dark-mode.jpeg)

### Future Implementations

Further development could be a new page dedicated entirely to provide more details about each rabbit. It would be implemented with a comprehensive database and backend server.

## Accessibility

* All images have descriptive 'alt' attributes and all other elements that have implied meanings are labelled with aria-labels to be accessible for screen readers.

* Current pages and modals are all labelled with the appropriate aria properties to aid screen readers.

* Fonts were chosen to be simple with clean contours to maximize legibility. 

* For font-sizes, 'rem' were used throughout the site to allow the text to scale according to the users' preferred default font-size.

* All colours were tested to have sufficient contrast with the help of [Color Palette Contrast Checker](https://color-contrast-checker.deque.com/)

![light-mode-colors-nr1](assets/readme-images/light-mode-colors-nr1.jpeg)
![light-mode-colors-nr2](assets/readme-images/light-mode-colors-nr2.jpeg)
![dark-mode-colors-nr1](assets/readme-images/dark-mode-colors-nr1.jpeg)
![dark-mode-colors-nr2](assets/readme-images/dark-mode-colors-nr2.jpeg)

All pages on all screen sizes in both light and dark mode passed Lighthouse's accessibility test with 100%.

![Accessibility image](assets/readme-images/accessibility.jpeg)


## Technologies Used

### Languages Used

The site was mainly built with [HTML5](https://en.wikipedia.org/wiki/HTML5) and [CSS3](https://en.wikipedia.org/wiki/CSS), although few lines of code in [JavaScript](https://en.wikipedia.org/wiki/JavaScript) was also added to customise Bootstrap's behaviour.

### Frameworks, Libraries & Programs Used

* [Figma](https://www.figma.com/) - to create design.

* [Git](https://git-scm.com/) & [Github](https://github.com/) for version control, safe storage and deployment.

* [Bootstrap Version 5.2](https://getbootstrap.com/docs/5.2/getting-started/introduction/) - for main frames, code for navigation bar, modals, forms and form validation.

* [Google Fonts](https://fonts.google.com/) - to import fonts into the stylesheet.


* [Google Dev Tools](https://developer.chrome.com/docs/devtools/) - for testing and troubleshooting.

* [CloudConvert](https://cloudconvert.com/jpg-converter) - to convert images to .webp format.

* [RealFaviconGenerator](https://realfavicongenerator.net/svg-favicon/) - to generate dark mode responsive favicons.

* [amiresponsive](https://ui.dev/amiresponsive) - to create site visuals for responsive design.

## Deployment & Local Development

### Deployment

This project was deployed on Github Pages. It was done through [the project's Github repo - current page](https://github.com/szilvia-csernus/rabbit_sanctuary) / Settings / Pages / Deploy from branch - main.
Every further commits pushed to the repository would be automatically deployed on this site.

### Local Development

#### How to Fork

* To fork this repository, go to the top of [this current](https://github.com/szilvia-csernus/rabbit_sanctuary) page and 
* locate and click the 'Fork' button.
* by forking this repo you would be able to contribute to this project through merge requests.

#### How to Clone

* Open your local terminal and navigate to the directory where you want to place the clone, then
* copy-paste: "git clone https://github.com/szilvia-csernus/rabbit_sanctuary.git" in your terminal.

## Testing

Start as you mean to go on - and get used to writing a TESTING.md file from the very first project!

Testing requirements aren't massive for your first project, however if you start using a TESTING.md file from your first project you will thank yourself later when completing your later projects, which will contain much more information.
  
Use this part of the README to link to your TESTING.md file - you can view the example TESTING.md file [here](milestone1-testing.md)

## Credits

### Icons
All icons have been edited.

Original Icons:

Visitors icon: https://www.svgrepo.com/svg/18735/class-open-door (No Copyright)

Gift icon: https://www.svgrepo.com/svg/61094/gift (No Copyright)

Helping hands icon: https://www.svgrepo.com/svg/76123/voluntary-service (No Copyright)

Facebook icon: https://www.svgrepo.com/svg/176882/facebook-social-media (No Copyright)

Instagram icon: https://www.svgrepo.com/svg/445823/instagram (Open Soruce MIT licence)

Twitter icon: https://www.svgrepo.com/svg/389481/twitter (Open Soruce MIT licence)

Location icon: https://www.svgrepo.com/svg/309741/location (Open Soruce MIT licence)

Phone icon: https://www.svgrepo.com/svg/425344/phone-1 (No Copyright)

Mail icon: https://www.svgrepo.com/svg/263869/email-mail (No Copyright)


### Main images

[Hero image](https://www.pexels.com/photo/close-up-view-of-white-rabbit-10595503/): Photo by Ali Atakan Açıkbaş on [Pexels](https://pexels.com/)

Adopting page image: Photo by [Lorna Ladril](https://unsplash.com/@lorna_ladril?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/s/photos/rabbits?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) 

### Gallery images

["Fluff & Bunbun" photo](https://www.pexels.com/photo/white-and-brown-rabbits-on-bed-6846043/) by Tima Miroshnichenko on [Pexels](https://pexels.com/)

["Jack & Jill" photo](https://www.pexels.com/photo/close-up-photo-of-rabbits-playing-11702024/) by Şeyma Dalar on [Pexels](https://pexels.com/) 

"Fish & Chips" photo by [Pure Julia](https://unsplash.com/@purejulia?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/s/photos/rabbits?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)
  
"Miffy & Olive" photo by [Andriyko Podilnyk](https://unsplash.com/@andriyko?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/s/photos/rabbits?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)
  
"Holly" photo by [Janan Lagerwall](https://unsplash.com/@stuffinabox?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/s/photos/rabbits?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)
  
"Teddy" photo by [Satyabratasm](https://unsplash.com/@smpicturez?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/s/photos/rabbits?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)
  
"Lola" photo by [Matt Pike](https://unsplash.com/@mjp_tw?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/s/photos/rabbits?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)

"Cinnabun" photo by [Daniel McCarthy @themccarthy](https://unsplash.com/@danielmccarthy?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/s/photos/rabbits?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)

"Hopper" photo by [Sandy Millar](https://unsplash.com/@sandym10?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/s/photos/rabbits?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)

"Chester" photo by [Misha Walker](https://unsplash.com/@misharose?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/s/photos/rabbits?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)

"Thumper" photo by [Chan Swan](https://unsplash.com/ja/@moyathebunny?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/s/photos/rabbits?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)
  
"Daisy" photo by [Gabriel Miklós](https://unsplash.com/@gebgramm?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/s/photos/rabbits?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)

"Oreo" photo by [Li Yan](https://unsplash.com/@yanli247?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/s/photos/rabbits?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)

"Oliver" photo by [Jacob Amson](https://unsplash.com/@jacobamson?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/s/photos/rabbits?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)

"Snowball" photo by [Pablo Martinez](https://unsplash.com/@pablomp?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/s/photos/rabbits?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)
  
["Bruno and Tom" photo](https://www.pexels.com/photo/gray-and-brown-bunnies-8891763/) by Мария on [Pexels](https://www.pexels.com) 


### Other credits - incorporated ideas and solutions

* making svg icons responsive: https://css-tricks.com/cascading-svg-fill-color/ by Chris Coyier https://css-tricks.com/author/chriscoyier/

* using images in HTML in different sizes to improve performance:
https://css-tricks.com/responsive-images-youre-just-changing-resolutions-use-srcset/
https://ausi.github.io/respimagelint/docs.html
https://medium.com/@woutervanderzee/responsive-images-with-srcset-and-sizes-fc434845e948

* adding backup image in .png format for older Safari users
https://stackoverflow.com/questions/58487035/how-to-add-webp-support-in-safari-browser

* improving accessibility: https://web.dev/how-to-review/

### Content

Content was all written by the author, however, inspiration was drawn from the following sites:

[The Littlest Lives Rescue](https://thelittlestlivesrescue.org.uk)

[South Coast Rabbit Rescue](https://www.southcoastrabbitrescue.co.uk)

[Essex Guinie Pig, Rat and Rabbit Rescue](https://www.egprr.org)


  
###  Acknowledgments

I would like to thank [Elaine Broche](https://github.com/elainebroche-dev) and Pasquale Fasulo for the helpful feedback I was given throughout the development and testing process.

