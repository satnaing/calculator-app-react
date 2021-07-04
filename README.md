# Frontend Mentor - Calculator app solution

This is a solution to the [Calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/calculator-app-9lteq5N29). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [How I did and What I learned](#how-i-did-and-what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- See the size of the elements adjust based on their device's screen size
- Perform mathmatical operations like addition, subtraction, multiplication, and division
- Adjust the color theme based on their preference
- **Bonus**: Have their initial theme preference checked using `prefers-color-scheme` and have any additional changes saved in the browser

### Screenshot

![Calculator App](https://user-images.githubusercontent.com/53733092/124386641-5e326980-dd01-11eb-9744-224794d51c60.png)

### Links

- Solution URL: [Github](https://github.com/satnaing/calculator-app-react)
- Live Site URL: [Calculator App](https://satnaing.github.io/calculator-app-react)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library

### How I did and What I learned

Building a calculator app has always been in my to-do list. Plus, I've learned CSS grid recently and also wanted to try that out in my project. Fortunately, I found this challenge on Frontend Mentor and thus I decided to give it a try.

Initially, I coded this project with traditional website development stack (HTML, CSS, and JavaScript); and I completed website layout and UI stuff. However, when it comes to deal with interactions, I decided to shift this project to React since I think it is easier to develop interaction with React rather than plain JavaScript and DOM.

For layout and styles, I still use plain CSS. I used CSS grid alongside with flexbox. So as to achive light/dark theme, modern CSS features like CSS variables are utilized. To trigger (toggle) dark & light theme, React's useState and useEffect come into play.

I used [mathjs](https://mathjs.org/) for calculation process. In this way, I can extend my app's functionalities like complex calculations in the future.

Last but not least, this app is a **Progress Web App** (PWA) and hence this app can be installed (Add to Home screen) in mobile devices when opened in browser and used just like a native app.

![PWA](https://user-images.githubusercontent.com/53733092/124386991-ecf3b600-dd02-11eb-8bd8-37deb8db3ec9.png)

### Continued development

In my next projects, I'll learn and integrate styling with SCSS. Besides, I'll probably use TailwindCSS with React, NextJS.

### Useful resources

- [CSS-Tricks (A Complete Guide to Grid)](https://css-tricks.com/snippets/css/complete-guide-grid/) - Want to learn CSS Grid? I'm sure this is one of the best resources for CSS Grid. I learned CSS Grid from this website.
- [MathJS](https://mathjs.org/) - A useful math library for complex calculations. I used this library to evaluate the input string to calculation.
- [Bedimcode](https://www.youtube.com/channel/UCgkDs77BoEhMIgRUB4MKrtQ) - A good youtube channel that shows how to build beautiful websites using pure CSS.

## Author

- Website - [Sat Naing](https://github.com/satnaing)
- Frontend Mentor - [@satnaing](https://www.frontendmentor.io/profile/satnaing)
- Facebook - [Sat Naing](https://www.facebook.com/satnaing.dev)
