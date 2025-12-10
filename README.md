# Personal Website - Portfolio

Public repository for CS463 Intro to Web Development personal website final project.

## Project Description

A professional portfolio website showcasing my skills, experience, and projects. Built with HTML, CSS, JavaScript, and Bootstrap.

## Website

**Deployed URL:**

[[Personal Website Link](https://jamesxtruong.github.io/personal-website/)]

## Features

- Responsive navigation bar with smooth scrolling
- About section with professional introduction and images
- Previous work/experience section with resume-style layout
- Projects showcase with Boostrap carousel (4 projects)
- Contact form
- Custom CSS styling
- Interactive JavaScript functionality (form validation)
- Multi media query support (mobile, tablet, desktop)
- Accessibility compliance

## Technologies Used

- HTML
- CSS
- JavaScript (ES6+)
- Bootstrap

## Project Structure

```
personal-website/
├── src/                    # Source files
│   ├── assets/             # Images and other assets
│   │   └── images/         # Project logos, profile images, and icons
│   │       ├── classroom.png
│   │       ├── email.png
│   │       ├── github.png
│   │       ├── healthcare-system.png
│   │       ├── linkedin.png
│   │       ├── location.png
│   │       ├── planner.png
│   │       ├── profile-pic.jpg
│   │       ├── psulogo_vert_4cp_Transparent.png
│   │       └── snake-game.png
│   ├── css/                # CSS stylesheets
│   │   └── styles.css      # Custom styles and responsive design
│   └── js/                 # JavaScript files
│       └── index.js        # Contact form validation and submission
├── .gitignore              # Git ignore rules
├── index.html              # Main HTML file (single-page portfolio)
└── README.md               # This file
```

## How to Run

1. Clone the repository:

   ```bash
   git clone [repository-url]
   cd personal-website
   ```

2. Open `index.html` in a web browser:

   - Double-click the file, or
   - Use a local development server like Live Server (VS Code extension)

3. Navigate through the site using the navbar or scroll through sections

## Sources & Acknowledgments

This project builds upon CS463 web development skills and concepts learned from the coursework in the `student-webdev-labs` and `webdev-code-samples` project folders.

### External Resources Used

**Bootstrap Components:**

- Bootstrap Carousel with Captions: https://getbootstrap.com/docs/5.3/components/carousel/
- Buttons: https://getbootstrap.com/docs/5.3/components/buttons/
- Modified to display and link GitHub projects

**Contact Form:**

- Formspree.io: https://formspree.io/
- Used for contact form submission handling to personal email address

```html
<form
  id="contactForm"
  action="https://formspree.io/f/{form_id}"
  method="POST"
></form>
```

**Fetch API:**

- Mozilla: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
- Used to send form data to Formspree endpoint

**CSS Override:**

- dev.to article: https://dev.to/nicm42/css-overriding-styles-177k
- Used to override Bootstrap default styles with custom CSS to resolve contrast warning.

**Accessibility Testing Tools:**

- WAVE Web Accessibility Extension: https://wave.webaim.org/extension/
- Lighthouse: https://developers.google.com/web/tools/lighthouse

**Image Assets:**

- [PSU logo](https://drive.google.com/file/d/1lzWmTxfRf6uCgDoYTcchPhsmPKc57sVi/view?usp=drive_link)
- [Planning project icon](https://www.flaticon.com/free-icon/planning_5656169)
- [Classroom project icon](https://www.flaticon.com/free-icon/classroom_3197877)
- [Healthcare system project icon](https://www.flaticon.com/free-icon/electronic-healthcare_17789443)
- [Snake game project icon](https://www.flaticon.com/free-icon/game_13950272)
- [Email icon](https://www.flaticon.com/free-icon/email_542689)
- [Location icon](https://www.flaticon.com/free-icon/maps-and-flags_447031)
- [LinkedIn icon](https://www.flaticon.com/free-icon/linkedin_3536569)
- [GitHub icon](https://www.flaticon.com/free-icon/github_2111432)
