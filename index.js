const termA = document.querySelector('#variable-a')
const termB = document.querySelector('#variable-b')
const termC = document.querySelector('#variable-c')
const resultsModal = document.querySelector('#equation-results')

const calculateButton = document.querySelector('#calculate')
const deltaValue = document.querySelector('#delta-value')

calculateButton.addEventListener('click', calculateEquation)

function calculateEquation() {
  const numberA = termA.value
  const numberB = termB.value
  const numberC = termC.value
  const equationOfDelta = /* b^2 - 4 * a * c */ Math.pow(numberB, 2) - 4 * numberA * numberC

  resultsModal.classList.add('active')

  const deltaValue = document.querySelector('#delta-value')
  deltaValue.innerHTML = `Δ = ${equationOfDelta}`

  const conditionsOfDelta = document.querySelector('#conditions-of-delta')
  if (equationOfDelta > 0) {
    conditionsOfDelta.innerHTML = `A equação possui duas raizes distintas.`
  } else if (equationOfDelta < 0) {
    conditionsOfDelta.innerHTML = `A equação não possui raízes reais.`
  } else {
    conditionsOfDelta.innerHTML = `A equação possui duas raizes iguais.`
  }

  const rootsOfEquation = document.querySelector('#roots-of-equation')
  const rootValue1 = (-numberB + Math.sqrt(equationOfDelta)) / 2 * numberA
  const rootValue2 = (-numberB - Math.sqrt(equationOfDelta)) / 2 * numberA
  if (rootValue1 == rootValue2) {
    rootsOfEquation.innerHTML = `Raizes da equação: X' e X" = <span style="font-weight: 600;">${rootValue1}</span>`
  } else {
    rootsOfEquation.innerHTML = `Raizes da equação: X' = <span style="font-weight: 600;">${rootValue1}</span> ; X" = <span style="font-weight: 600;">${rootValue2}</span>`
  }
}