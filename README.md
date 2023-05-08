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

Specifically, you need to complete a page that displays a list of learners along with their basic information such as ID, name, email, and a list of mentors. Users should be able to click on a learner to highlight it, and the list of mentors for each learner should be expandable and collapsible. You can refer to the [full mockup](https://w-s5-challenge.herokuapp.com/) for the design and layout of the page.

To help you complete the task, several members of your team will provide you with instructions and advice.

### 💾 DevOps

Below, your DevOps Engineer will help you set up your local environment and lauch the project.

<details>
  <summary>Click to read</summary>

  ---

This is a **full-stack web application** that comprises both back-end and front-end components. When deployed to production, the back-end part runs in the cloud (think Amazon Web Services), while the front-end is executed by the users' web browser (like Chrome for Android, or Firefox for desktop).

As a front-end engineer, your focus is mainly on the files that load **on the user's device**. These files live inside the `frontent` folder in this particular project. The `backend` folder contains a web service built in Node, but the project as a whole is managed as a Node app, with a `package.json` file at the root containing meta-information and some useful commands developers can use to launch and test the application.

1. You will **clone this repository** to your computer, which will allow you to run the software locally for development and testing purposes.

1. You will navigate your terminal to the project folder **and execute `npm install`**. This will install the libraries listed inside `package.json`. Some of these packages are needed for the back-end to do its job of serving JSON data and also serving the front-end assets. Other libs help with things like testing and linting your code.

1. After successful installation, you will run, in separate terminals, the two scripts listed inside `package.json`: **execute `npm start` in your first terminal, and `npm test` in your second**. On successful start, you will load the app in Chrome by **navigating the browser to `http://localhost:3001`**. The term "localhost" means "your machine", and the number is called a port, allowing multiple web servers to run on the same hardware, with one server per port.

My job assisting you with local setup of the app is done! You will speak to our designer next.

  ---

</details>

**[Watch the video](http://wistia.com)**

### 🎨 Designer

Below you will find information on how to approach the task.

<details>
  <summary>Click to read</summary>

  ---

Collaboration between a designer and a web developer can be very powerful. Designers excel at creating amazing user experiences and have a keen eye for beauty and usability, while developers are experts in the underlying technology of the product.

However, it's important to remember that if a design for a feature exists, it's not a suggestion. Your job as a web developer is to implement the design with as much fidelity as possible. While a developer might think they have a better way to arrange elements on the screen, the mocks and designs are the result of research and hard work. It's important to treat them with the respect they deserve.

For this project, there are certain constraints and requirements that must be followed, such as sticking to certain class names or keeping the structure of the HTML a certain way to avoid breaking the CSS.

It's crucial to use the readable texts designed for the user interface verbatim. If a design reads "Loading Doughnuts...", then "Loading _Your_ Doughnuts..." is incorrect. Attention to detail is critical!

Fortunately, you have a very detailed mock that you can load in your browser and inspect in detail, which will make your job much easier. And don't worry, you don't have to write any CSS because it's already been taken care of!

  ---

</details>

**[Watch video](http://wistia.com)**

### 🥷 Lead Developer

Below, your team lead will discuss strategy and tactics for dealing with this ticket.

<details>
  <summary>Click to read</summary>

  ---

Hey there! Let's make sure you're up to speed on this project.

- Have you installed the app on your computer and run both the `start` and `test` scripts?
- Have you studied the [mock](https://w-s5-challenge.herokuapp.com/) in the Elements tab of Dev Tools?
- Have you noticed how some text contents and some class names change as the user clicks around?

Awesome! Our back-end engineer says that the data needed to build the Learner Cards comes from two endpoints:

- [GET] <http://localhost:3001/api/learners>
- [GET] <http://localhost:3001/api/mentors>

Make sure you have the `start` script running, or the endpoints won't work! You should try out the endpoints using Postman to see what they return.

Here's the tricky part: each learner has a list of mentors, but the mentors are only identified by ID numbers.

So, you need to fetch all mentors so you can match the mentor IDs from the `learners` endpoint with the names of the mentors from the `mentors` endpoint. To make things easier, use `Promise.all` to handle both requests. This will ensure that you don't start building the DOM until you have all the necessary data.

When you have the data you need, combine the two lists into a data structure that you can work with. Ideally, it would look something like this:

```js
[
  // etc
  {
    id: 22,
    email:"mickey.mouse@example.com",
    fullName: "Mickey Mouse",
    mentors:['James Gosling', 'Mary Shaw']
  },
  // etc
]
```

Once you have the data in the right shape, you can create a component function that takes a learner in the format above, and returns a Learner Card. Then just loop over the data, generating cards as you go, and attaching them to the DOM.

Make sure that each element you create uses the exact same class names and text contents as those in the mock! Also, render the cards in the same order as they come from the learner endpoint.

As for interactivity, all the behaviors on the page as the user clicks on the cards are governed by changes in text contents of some elements, and changes to some class names on only two elements.

Don't use any class names that aren't in the mock. That would break the CSS. Also, don't add any styles or HTML. And only make changes to `frontend/index.js`!

It might seem like you need several click handlers on different elements, but that would just make the code more complicated. Remember, events bubble up from the target to its ancestor elements! So it's easier to just slap an event listener on the card element, and then check who's the target of the click before taking the appropriate action.

  ---

</details>

**[Watch video](http://wistia.com)**

## FAQ

<details>
  <summary>How do I submit this assignment?</summary>

You submit via Codegrade. Check the assignment page on the learning platform.

</details>

<details>
  <summary>Do I need to install libraries, or add scripts to the HTML?</summary>

No. Everything you need should be installed already.

</details>

<details>
  <summary>The output of the "test" script is too overwhelming! What do I do?</summary>

If a test complains about something, you should try your best to replicate the problem in Chrome. If you need to disable all tests except the one you are focused on, edit the `mvp.test.js` file and, as an example, change `test('👉 it works!', () => {})` into `test.only('👉 it works!', () => {})`.

</details>

<details>
  <summary>Why are there so many files in this project?</summary>

Although a small, "old-fashined" website might be made of just HTML, CSS and JS files, these days we mostly manage projects with Node and its package manager, NPM. Besides, this project also includes a web server which makes it a little bit more complicated.

</details>

<details>
  <summary>What is package.json and package-lock.json?</summary>

The `package.json` file contains meta-information about the project like its version number, scripts that the developer can execute, and a list of the dependencies that will download when we execute `npm install`. There can be some wiggle room to allow newer versions of the declared dependencies to be installed, so the `package-lock.json` file makes sure the exact versions of everything are used.

</details>

<details>
  <summary>What is package.json?</summary>

This file contains meta-information about the project like its version number, scripts that the developer can execute, and a list of the dependencies that must be installed in order for a freshly cloned project may work.

</details>
