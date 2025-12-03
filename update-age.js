const fs = require('fs')
const path = require('path')

const BIRTH_DATE = new Date(1998, 10, 29)

function calcAge(birthDate) {
  const today = new Date()
  let age = today.getFullYear() - birthDate.getFullYear()
  const m = today.getMonth() - birthDate.getMonth()

  if (m < 0 || (m == 0 && today.getDate() < birthDate.getDate())) {
    age --
  }
  return age
}


const currentAge = calcAge(BIRTH_DATE)


const readmePath = path.join(__dirname, 'README.md')
let readmeContent = fs.readFileSync(readmePath, 'utf8')


const ageRegex = /\{\{AGE\}\}/g


if (ageRegex.test(readmeContent)) {
  readmeContent = readmeContent.replace(ageRegex, String(currentAge))
  fs.writeFileSync(readmePath, readmeContent)
  console.log(`README atualizado com a idade: ${currentAge}`)
} else {
  console.log("Placeholder '{{AGE}}' não encontrado no README. Nenhuma atualização realizada")
}