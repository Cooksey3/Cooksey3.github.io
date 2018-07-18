const project = document.getElementById('listitem1')
const backEnd = document.querySelector('.back-end')
const frontEnd = document.querySelector('.front-end')
const other = document.querySelector('.other')
const container = document.querySelector('.container-home')

showBackEndSkills = () => {
    const backEndSkills = document.querySelector('.back-end-skills')
    backEndSkills.style.display = "block"
}

hideBackEndSkills = () => {
    const backEndSkills = document.querySelector('.back-end-skills')
    backEndSkills.style.display = "none"
}

showFrontEndSkills = () => {
    const frontEndSkills = document.querySelector('.front-end-skills')
    frontEndSkills.style.display = "block"
    }

hideFrontEndSkills = () => {
    const frontEndSkills = document.querySelector('.front-end-skills')
    frontEndSkills.style.display = "none"
}

showOtherSkills = () => {
    const otherSkills = document.querySelector('.other-skills')
    otherSkills.style.display = "block"
}

hideOtherSkills = () => {
    const otherSkills = document.querySelector('.other-skills')
    otherSkills.style.display = "none"
}

backEnd.addEventListener('mouseenter', showBackEndSkills)
backEnd.addEventListener('mouseout', hideBackEndSkills)

frontEnd.addEventListener('mouseenter', showFrontEndSkills)
frontEnd.addEventListener('mouseout', hideFrontEndSkills)

other.addEventListener('mouseenter', showOtherSkills)
other.addEventListener('mouseout', hideOtherSkills)