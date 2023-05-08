# Sprint 5 Challenge

## Introduction

Welcome to Sprint Challenge 5! Today, you'll practice using JavaScript to manipulate the DOM by fetching data from the network and building a section of a web page using "vanilla" JavaScript, without any frameworks.

This experience will give you a taste of what your first task at a software company might feel like, and it matches the difficulty and scope of a take-home assignment during a hiring process for a Web Developer position.

Here's an overview of the tasks you need to complete:

1. **Obtain** JSON data from a web service.
1. **Combine** data obtained from different sources into a single data structure.
1. **Render** repeatable components to the DOM using the combined data.

To succeed in this challenge, you'll need the following technical skills:

1. **Promises** and the ability to deal with asynchronous code.
1. **Making HTTP requests** with Axios or fetch.
1. **Looping over data** to populate a new data structure.
1. **Selecting elements** and groups of elements from the DOM.
1. **Creating new elements** and attaching them to the DOM.
1. **Altering the text content** and class names of elements based on certain events.
1. **Adding simple interactivity** to elements via event listeners.

Additionally, the following soft skills will greatly impact your performance:

1. Attention to detail. Make sure there isn't a single character out of place!
1. Perseverance. Keep trying until you figure it out!
1. Patience. Make sure to read the entire README for important information.

## Context

On your first day as a junior web developer at a coding school, you have been assigned a ticket to complete. The task involves adding a new feature to the school's software platform.

Specifically, you need to complete a page that displays a list of learners along with their basic information such as ID, name, email, and a list of mentors. Users should be able to click on a learner to highlight it, and the list of mentors for each learner should be expandable and collapsible. You can refer to the [full mockup](https://w-s5-challenge.herokuapp.com/) for the design and behavior of the page.

To help you complete the task, several members of your team will provide you with instructions and advice.

### 💾 DevOps

Below, your DevOps Engineer will help you set up your local environment and launch the project.

<details>
  <summary>Click to read</summary>

  ---

This is a **full-stack web application** that comprises both back-end and front-end components. When deployed to production, the back-end part would run in the cloud (think Amazon Web Services or Azure), while the front-end would execute inside the user's web browser (like Chrome for Android, or Firefox for desktop).

As a front-end engineer, your focus is mainly on the files that load **on the user's device**. In this particular project, these files live inside the `frontent` folder (but there are many ways to organize a project). The `backend` folder contains a web server built in Node, but the project as a whole is managed as a Node app, with a `package.json` file at the root containing meta-information and some useful commands developers can use to launch and test the application.

1. You will **clone this repository** to your computer, which will allow you to run the software locally for development and testing purposes.

1. You will navigate your terminal to the project folder **and execute `npm install`**. This will install the libraries listed inside `package.json`. Some of these packages are needed for the back-end to do its job of serving JSON data and front-end assets. Other libs help with things like testing and linting your code.

1. After successful installation you will run, in separate terminals, the two scripts found inside `package.json`. **Execute `npm start` in your first terminal, and `npm test` in your second**. On successful start, you will load the app in Chrome by **navigating the browser to `http://localhost:3001`**. The term "localhost" means "your machine", and the number is called a port, allowing multiple web servers to run on the same computer, with one server per port.

My job assisting you with local setup of the app is done! You will speak to our designer next.

  ---

</details>

**[Watch the video](http://wistia.com)**

### 🎨 Designer

Below, you will find information on how to approach the task, from your Product Designer.

<details>
  <summary>Click to read</summary>

  ---

Collaboration between a designer and a web developer can be very powerful. Designers excel at creating amazing user experiences and have a keen eye for beauty and usability, while developers are experts in the underlying technology of the product.

However, it's important to remember that **if a design for a feature exists, it's not a suggestion**. Your job as a web developer is to implement the design with as much fidelity as possible. While a developer might think they have a better way to arrange elements on the screen, the mocks and designs are the result of research and hard work. It's important to treat them with the respect they deserve.

It's crucial to use the readable texts designed for the user interface **verbatim**. If a design reads "Loading Doughnuts...", then "Loading _Your_ Doughnuts..." is incorrect. Attention to detail is critical!

There are other constraints and requirements that must be followed, such as sticking to certain class names or keeping the structure of the HTML a certain way **to avoid breaking the CSS**.

Fortunately, you have [a very detailed mock](https://w-s5-challenge.herokuapp.com/) that you can load in your browser and inspect in detail, which will make your job much easier. And don't worry, **you don't have to write any CSS** because it's already been taken care of!

  ---

</details>

**[Watch the video](http://wistia.com)**

### 🥷 Lead Developer

Below, your Team Lead will discuss strategy and tactics for dealing with this ticket.

<details>
  <summary>Click to read</summary>

  ---

Hey! Let's make sure you're up to speed with your **action items so far**.

- [ ] The app is installed on your machine, with both `start` and `test` scripts running in terminals.
- [ ] You studied the [mock](https://w-s5-challenge.herokuapp.com/) in the Elements tab of Dev Tools.
- [ ] You saw how some text contents and some class names change as the user clicks around.

Awesome! Our back-end engineer says that the JSON data needed to build the Learner Cards comes from two endpoints:

- Endpoint A [GET] <http://localhost:3001/api/learners>
- Endpoint B [GET] <http://localhost:3001/api/mentors>

❗ You should stop now, and **try out both endpoints using Postman**, to see what they return.

Here's the tricky thing: each learner has a short list of mentors, but the response from Endpoint A only identifies the mentors by their ID numbers. This means **you need to match the mentor IDs from Endpoint A with the real names of the mentors, found in the response from Endpoint B**.

You can optionally use `Promise.all` to handle the requests. We do not need the data from request A in order to _start_ request B, so the requests can happen concurrently instead of back-to-back. **This will make the app feel faster** to the user!

Once you have the payloads from Endpoints A and B stored inside variables, check that they match what you saw in Postman, and then **use your JavaScript skills to combine the two lists into a single data structure** that is comfortable to work with. Ideally, it would look something like this:

```js
[
  // etc
  {
    id: 22,
    email:"mickey.mouse@example.com",
    fullName: "Mickey Mouse",
    mentors: ['James Gosling', 'Mary Shaw'] // ❗ actual names instead of IDs!
  },
  // etc
]
```

Once you have the data in the right shape, you can **create a component function** that takes a learner in the format above, and returns a Learner Card. Then just loop over the data, generating cards as you go, and attaching them to the DOM.

Make sure that each element you create uses the **exact same class names and text contents** as those in the mock! Also, render the learners **in the same order** as they arrive from Endpoint A.

As for interactivity, all the behaviors on the page as the user clicks on the cards boil down to **changes in text contents of some elements, and changes to some class names** which can be observed in the [mock](https://w-s5-challenge.herokuapp.com/). Do not use any other mechanisms!

It might seem like you need several click handlers on different elements, but that would just make the code more complicated. Remember, events bubble up from the target towards its ancestor elements! It's easier to just attach an event listener on the card element, and then **check who's the target of the click before taking the appropriate action**.

❗ Install the [Eslint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) for VSCode. It will highlight syntax errors and problems right inside your editor.

❗ Only make changes to the `frontend/index.js` file.

  ---

</details>

**[Watch the video](http://wistia.com)**

## FAQ

<details>
  <summary>How do I submit this task?</summary>

You submit via Codegrade. Check the assignment page on your learning platform.

</details>

<details>
  <summary>Do I need to install libraries or add scripts to the HTML?</summary>

No. Everything you need should be installed already, including Axios.

</details>

<details>
  <summary>Why can't I edit the HTML and CSS files?</summary>

The CSS is the domain of a different team, and in this particular project we're not supposed to touch it. Do not use inline styles to get around this! It will only make the CSS team angry. And believe me, you want them happy, as they can write CSS twenty times faster than you.

</details>

<details>
  <summary>Why can't I edit the HTML file?</summary>

This particular part of the product is a Single Page Application, so the HTML is mostly generated by JavaScript. We don't want to manually edit HTML files when the data that powers the site changes often! It would be untenable.

</details>

<details>
  <summary>The output of the "test" script is too overwhelming! What do I do?</summary>

If a test complains about something, you should try your best to replicate the problem in Chrome. If you need to disable all tests except the one you are focused on, edit the `mvp.test.js` file and, as an example, change `test('👉 it works!', () => {})` into `test.only('👉 it works!', () => {})`.

</details>

<details>
  <summary>Why are there so many files in this project?</summary>

Although a small, "old-fashioned" website might be made of just HTML, CSS and JS files, these days we mostly manage projects with Node and its package manager, NPM. Node apps typically have a `package.json` file, and several other configuration files, at the root of the project. This project also includes automated tests and a web server, which adds a little bit of extra complexity and files.

</details>

<details>
  <summary>What are the package.json and package-lock.json files?</summary>

The `package.json` file contains meta-information about the project like its version number, scripts that the developer can execute, and a list of the dependencies that are downloaded when you execute `npm install`. There can be some wiggle room to allow newer versions of the dependencies to be installed, so the `package-lock.json` file makes sure the exact same versions of everything are used every time the project is installed from scratch.

</details>

<details>
  <summary>What is the .eslintrc.js file?</summary>

This file works in combination with the Eslint extension for VSCode to highlight syntax errors and problems in your code. If a particular linting rule becomes annoying, it can be disabled using this file.

</details>

<details>
  <summary>What is Jest?</summary>

Jest is a framework that allows to write tests and execute them, to alert you very quickly of problems with the code. Jest can do in seconds what an entire Quality Assurance team would take hours. In the context of the Sprint Challenge, Jest is used to check your code against specification and give you a grade (% of tests passing).

</details>

<details>
  <summary>Is this how projects are normally organized?</summary>

Web projects can be organized freely in a million ways, there are no standards beyond the placement of configuration files, which typically live at the root. Some developers like it like this, while others prefer to use opinionated frameworks, which do a lot of magic but prescribe that folders and files be structured and named just so.

</details>
