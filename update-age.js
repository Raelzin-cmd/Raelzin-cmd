const fs = require('fs')
const path = require('path')

const BIRTH_DATE = new Date (1998, 10, 29)

function calculateAge(birthDate) {
  const today = new Date()
  let age = today.getFullYear() - birthDate.getFullYear()
  const m = today.getMonth() - birthDate.getMonth()

  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--
  }
  return age
}

const currentAge - calculateAge(BIRTH_DATE)

const readmePath = path.join(__dirname, 'README.md')
let readmeContent = fs.readFileSync(readmePath, 'utf8')

const ageRegex = /\(update-age\.js here\)/

if (readmeContent.match(ageRegex)) {
  readmeContent = readmeContent.replace(ageRegex, `${currentAge}`);
  fs.writeFileSync(readmePath, readmeContent);
  console.log(`README updated with age: ${currentAge}`);
} else {
  console.log("Placeholder '(update-age.js here)' not found in README. No update performed.");
}
