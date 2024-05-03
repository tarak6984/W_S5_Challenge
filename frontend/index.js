async function sprintChallenge5() { // Note the async keyword, in case you wish to use `await` inside sprintChallenge5
  // 👇 WORK WORK BELOW THIS LINE 👇

  const { data: learners } = await axios.get('http://localhost:3003/api/learners')
  const { data: mentors } = await axios.get('http://localhost:3003/api/mentors')

  const info = document.querySelector('.info')
  info.textContent = 'No learner is selected'

  for (let learner of learners) {
    const mentorIds = learner.mentors
    const mentorNames = []
    for (let id of mentorIds) {
      for (let mentor of mentors) {
        if (id === mentor.id) mentorNames.push(`${mentor.firstName} ${mentor.lastName}`)
      }
    }
    learner.mentors = mentorNames
  }

  const cardsContainer = document.querySelector('.cards')

  for (let learner of learners) {
    const card = document.createElement('div')
    card.classList.add('card')
    const heading = document.createElement('h3')
    heading.textContent = learner.fullName
    card.appendChild(heading)
    const email = document.createElement('div')
    email.textContent = learner.email
    card.appendChild(email)
    const mentorsHeading = document.createElement('h4')
    mentorsHeading.classList = 'closed'
    mentorsHeading.textContent = 'Mentors'
    card.appendChild(mentorsHeading)
    const mentorsList = document.createElement('ul')
    for (let mentorName of learner.mentors) {
      const li = document.createElement('li')
      li.textContent = mentorName
      mentorsList.appendChild(li)
    }
    card.appendChild(mentorsList)
    card.dataset.fullName = learner.fullName
    cardsContainer.appendChild(card)

    card.addEventListener('click', evt => {
      const mentorsHeading = card.querySelector('h4')
      // critical booleans
      const didClickTheMentors = evt.target === mentorsHeading
      const isCardSelected = card.classList.contains('selected')
      // do a reset of all learner names, selected statuses, info message
      document.querySelectorAll('.card').forEach(crd => {
        crd.classList.remove('selected')
        crd.querySelector('h3').textContent = crd.dataset.fullName
      })
      info.textContent = 'No learner is selected'
      // conditional logic
      if (!didClickTheMentors) {
        // easy case, no mentor involvement
        if (!isCardSelected) {
          // selecting the card:
          card.classList.add('selected')
          heading.textContent += `, ID ${learner.id}`
          info.textContent = `The selected learner is ${learner.fullName}`
        }
      } else {
        // clicked on mentors, we toggle and select no matter what
        card.classList.add('selected')
        if (mentorsHeading.classList.contains('open')) {
          mentorsHeading.classList.replace('open', 'closed')
        } else {
          mentorsHeading.classList.replace('closed', 'open')
        }
        if (!isCardSelected) {
          // if card was not selected adjust texts
          heading.textContent += `, ID ${learner.id}`
          info.textContent = `The selected learner is ${learner.fullName}`
        }
      }
    })
  }

  const footer = document.querySelector('footer')
  const currentYear = new Date().getFullYear()
  footer.textContent = `© BLOOM INSTITUTE OF TECHNOLOGY ${currentYear}`

  // 👆 WORK WORK ABOVE THIS LINE 👆
}

// ❗ DO NOT CHANGE THE CODE  BELOW
if (typeof module !== 'undefined' && module.exports) module.exports = { sprintChallenge5 }
else sprintChallenge5()
