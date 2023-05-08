async function sprintChallenge5() {
  const footer = document.querySelector('footer')
  const currentYear = new Date().getFullYear()
  footer.textContent = `© BLOOM INSTITUTE OF TECHNOLOGY ${currentYear}`

  // 👇 WORK WORK BELOW THIS LINE 👇


  // 👆 WORK WORK ABOVE THIS LINE 👆
}

// ❗ DO NOT CHANGE THE CODE BELOW
sprintChallenge5()
// This try/catch is needed to expose the sprintChallenge5 function to the test runner
try { module.exports = { sprintChallenge5 } } catch {
  // module.exports does not exist in the browser
  // so this is always a crash in Chrome
}
