# Website for Hopper Farm Rabbit Rescue

This website was created as the 1st Milestone Project (User Centric Frontend Development Project) for Code Institute's web application development course.

---

### [View the live project here](https://szilvia-csernus.github.io/rabbit_sanctuary)

---

Hopper Farm Rabbit Rescue is a fictional non-profit organisation. The website is designed to support the charity's primary mission which is to help find new homes for rescued pet rabbits.
<br><br>

![Light mode](assets/readme-images/amiresponsive-light-mode.jpeg)

---

## CONTENTS

* [User Experience](#user-experience-ux)
  * [Webite Owner's Goals](#website-owners-goals)
  * [Website Visitors' Goals](#website-visitors-goals)

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
* To help visitors to make contact with the organisation through various channels.
* The website to have simple structure and clear 'call to action' messages.
* The website to be responsive to all screen sizes as well as light/dark mode preferences.
---
### Website Visitors' Goals

* To find the relevant piece of information quickly, be it about rabbit adoption, volunteering or donation.
* To be able to make contact with the charity for relevant requests effectively.
* To be able to find the location quickly.
* To be able to access the website in any screen sizes.
* To read the site comfortably when dark mode is preferrable.
---
## Design

All wireframes and design were created in [Figma](https://www.figma.com/).

### Colour Scheme

Animal charities most frequently use green as their primary colour and I kept my site in line with this customer expectation. I chose orange as an accent colour to emphasize the 'call to action' messages. In addition, I used various shades of greys to complement the two main colours.

I sampled the primary and the accent colours from the hero image of the landing page, then I slightly modified them later to satisfy accessibility requirements. 

![Light mode palette:](assets/readme-images/colour-palette-light.svg)

![Dark mode palette:](assets/readme-images/colour-palette-dark.svg)

### Typography

A font pairing website [Typ.io](https://typ.io/lists) helped me make typograpy choice.
I selected [Nunito](https://fonts.google.com/specimen/Nunito) and [Nunito Sans](https://fonts.google.com/specimen/Nunito+Sans) from the [Google Fonts](https://fonts.google.com/) library for their simplicity and legibility yet fairly informal feel. 

### Imagery

All the images appearing on the site are unlicenced, sourced from [Pexels](https://pexels.com/) and [Unsplash](https://unsplash.com/) websites.

The icons which I did not drew myself were downloaded from [svgrepo](https://svgrepo.com/) then edited to be uniform in design as well as responsive to colour changes. These original icons are either unlicenced or open-source icons. All references to the images and icons can be found in the [credits](#credits) section.

### Wireframes - Low & High Fidelity Designs

I created all designs in [Figma](https://www.figma.com/).

![mobile-low-fidelity-design](assets/readme-images/mobile-low-fidelity-design.jpeg)
![desktop-low-fidelity-design](assets/readme-images/desktop-low-fidelity-design.jpeg)
![mobile-high-fidelity-design](assets/readme-images/mobile-high-fidelity-design.jpeg)
![desktop-high-fidelity-design](assets/readme-images/desktop-high-fidelity-design.jpeg)


## Features

The website comprises of three pages: Home/About page, Adopt page and a Contact Us page. In addition, I added two overlay modals with forms for 'volunteering' and 'donation' as well as a 'thank you' modal to appear after a successful form submission.

### General features on each page

The header is responsive to screen sizes. On large screens, it expands horizontally, while on mobile and narrower screens the menu bar is replaced with a burger icon. Clicking this icon would make the menu appear as a side bar.


![header-desktop-light-mode](assets/readme-images/header-desktop-light-mode.jpeg)
[![Image from Gyazo](https://i.gyazo.com/373081881d1df8d868909cb8f61be732.gif)](https://gyazo.com/373081881d1df8d868909cb8f61be732)
![header-desktop-dark-mode](assets/readme-images/header-desktop-dark-mode.jpeg)


Header on small screens:

![header-mobile-light-mode](assets/readme-images/header-mobile-light-mode.jpeg)
![header-mobile-dark-mode](assets/readme-images/header-mobile-dark-mode.jpeg)

Side bars opening from burger menu:

![sidebar-light-mode](assets/readme-images/sidebar-light-mode.jpeg)
![sidebar-dark-mode](assets/readme-images/sidebar-dark-mode.jpeg)

Footer:

![footer-desktop](assets/readme-images/footer-desktop.jpeg)
<h2 align="center" ><img src="assets/readme-images/footer-mobile.jpeg"></h2>

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

Further development could be a new page dedicated entirely to listing rabbits waiting for adoption. It would be implemented with a comprehensive database and backend server.

Frontend could be improved by re-developing it using ReactJS framework to bring the site in line with current industry standards.

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


## Deployment

### GitHub Pages

The project was deployed to GitHub Pages using the following steps...

1. Log in to GitHub and locate the [GitHub Repository](https://github.com/)
2. At the top of the Repository (not top of page), locate the "Settings" Button on the menu.
3. Scroll down the Settings page until you locate the "Pages" Section.
4. Under "Source", click the dropdown called "None" and select "Main Branch".
5. The page will automatically refresh.
6. Once the deployment process completed the published site's link will appear after the main title.

### Forking the GitHub Repository

By forking the GitHub Repository we make a copy of the original repository on our GitHub account to view and/or make changes without affecting the original repository by using the following steps...

1. Log in to GitHub and locate the [GitHub Repository](https://github.com/)
2. At the top of the Repository (not top of page) just above the "Settings" Button on the menu, locate the "Fork" Button.
3. You should now have a copy of the original repository in your GitHub account.

### Making a Local Clone

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

## Testing

* Code validation

1. [Home page validation](assets/readme-images//home-validation.jpeg) - Passed, no error found.

2. [Adopt page validation](assets/readme-images//adopt-validation.jpeg) - Passed, no error found.

3. [Contact Us page validation](assets/readme-images//contact-validation.jpeg) - Passed, no error found.

4. [CSS validation](assets/readme-images//css-validation.pdf) - Passed, no error found.

5. [JS validation](assets/readme-images/js-validation.pdf) - Passed, no error found.




## Credits

### Icons
All downloaded icons have been edited.

Original Icons:

Visitors icon: https://www.svgrepo.com/svg/18735/class-open-door (Unlicenced)

Gift icon: https://www.svgrepo.com/svg/61094/gift (Unlicenced)

Helping hands icon: https://www.svgrepo.com/svg/76123/voluntary-service (Unlicenced)

Facebook icon: https://www.svgrepo.com/svg/176882/facebook-social-media (Unlicenced)

Twitter icon: https://www.svgrepo.com/svg/389481/twitter (Open Soruce MIT licence)

Location icon: https://www.svgrepo.com/svg/309741/location (Open Soruce MIT licence)

Phone icon: https://www.svgrepo.com/svg/425344/phone-1 (Unlicenced)


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

* Content of the website was all written by the author, however, inspiration was drawn from the following sites:

  [The Littlest Lives Rescue](https://thelittlestlivesrescue.org.uk)

  [South Coast Rabbit Rescue](https://www.southcoastrabbitrescue.co.uk)

  [Essex Guinie Pig, Rat and Rabbit Rescue](https://www.egprr.org)

* Content for Deployment and Development of this README file was was written using [Code Institute's sample README file](https://raw.githubusercontent.com/Code-Institute-Solutions/SampleREADME/master/README.md).
  
###  Acknowledgments

I would like to thank [Elaine Broche](https://github.com/elainebroche-dev) and Pasquale Fasulo for the helpful feedback I was given throughout the development and testing process.

