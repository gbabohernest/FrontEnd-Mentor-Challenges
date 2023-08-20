# Frontend Mentor - Loopstudios landing page solution

This is a solution to the [Loopstudios landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/loopstudios-landing-page-N88J5Onjw). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Link](#link)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

![](desktop.png)

### Link

- Live Site URL: [loop-studio-landing-page](https://fem-loop-studio-landing-page.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- Sass
- JavaScript for toggle

### What I learned

I have been working with **Sass** for a while now, and it has help me write my styles in a better way than the normal css has.

Using sass for my styles in this helped me write **mixins** for different **breakpoints** and include them anywhere in my sass code to achieve a particular style for a particular viewport.

With the help of sass **@use** and **@forward** rules, I was able to modularized my styles ans called upon them from anywhere in my code.

Use this section to recap over some of your major learnings while working through this project. Writing these out and providing code samples of areas you want to highlight is a great way to reinforce your own knowledge.

To see how you can add code snippets, see below:

#### sinppets of rem & em function in sass

```sass
  @use "sass:math";

    @function rem($value) {
      @if math.is-unitless($value) {
        @return math.div($value, 16) + rem;
     }@else {
        @error "Don't use a unit when using the rem() function!!";
     }
    }
    @function em($value) {
      @if math.is-unitless($value) {
        @return math.div($value, 16) + em;
      } @else {
        @error "Don't use a unit when using the em() function!!";
      }
    }

```

In the above function, I am converting pixels value to rem and em. rem for font-sizes, padding etc while em for my media quires.

### Continued development

I want to continue focusing on more javascript projects to improve my skills in javascript. Projects that will push me to learn more new features of javascript that I have not been exposed to.

## Author

- Frontend Mentor - [@gbabohernest](https://www.frontendmentor.io/profile/gbabohernest)
- Twitter - [@gbaboh_dev](https://twitter.com/gbaboh_dev)
