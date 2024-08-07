const logoImg = document.querySelector(".file-wrapper")
const fileInput = document.getElementById('logo');
const addfileImg = document.querySelector(".add-file")
const fileText = document.querySelector(".file-text")
const deleteAva= document.querySelector(".delete-avatar")
const closeModal = document.querySelector('#close-modal')
const openModal = document.querySelector('#modal-open')
const modal = document.querySelector('.modal')
const overlay = document.querySelector('.modal-overlay')

const inputTel = document.querySelector("#tel")
const inputEmail = document.querySelector("#email")

const allInputs = document.querySelectorAll(`[data-valid]`)

fileInput.addEventListener('change', function() {
    const file = fileInput.files[0]
    if (file) {
        const imgURL = URL.createObjectURL(file)
        logoImg.style.backgroundImage = `url(${imgURL})`
        logoImg.style.backgroundSize = 'cover'
        addfileImg.style.display = "none"
        fileText.style.display = "none"
    }
});
deleteAva.addEventListener('click', function (event){
    event.preventDefault();
    console.log(event.target)
    logoImg.style.background ="linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('./images/logo.png')  0px 0px no-repeat"
    logoImg.style.backgroundSize = 'cover'
    addfileImg.style.display = "block"
    fileText.style.display = "block"
})

function validateEmail(email){
    const re = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu
    return re.test(String(email).toLowerCase())
}
function validateTel (tel){
    const re = /^\+7\(\d{3}\)\d{3}-\d{2}-\d{2}$/
    return re.test(tel)
}

document.getElementById('modal-form').addEventListener('submit', function (event){
    event.preventDefault()
    const emailVal = inputEmail.value
    const telVal = inputTel.value

    const emptyInputs = Array.from(allInputs).filter(input => input.value === '')

    if(emptyInputs.length !==0) {
        alert('Поля со ✱ должны быть заполнены')
        return false
    }

    if(!validateEmail(emailVal)){
        alert("Email не валиден")
        return false
    }
    if(!validateTel(telVal)){
        alert("Телефон не валиден")
        return false
    }
    alert('Форма успешно отправлена')
    return true
})

closeModal.addEventListener('click', function (){
    modal.classList.add('close')
})

openModal.addEventListener('click', function (){
    modal.classList.remove('close')
})
overlay.addEventListener('click', function (){
    modal.classList.add('close')
})
