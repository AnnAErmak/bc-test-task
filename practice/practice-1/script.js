const logoImg = document.querySelector(".file-wrapper")
const fileInput = document.getElementById('logo');
const addfileImg = document.querySelector(".add-file")
const fileText = document.querySelector(".file-text")
const deleteAva= document.querySelector(".delete-avatar")
const submit = document.getElementById('submit')


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


submit.addEventListener('click', function (e)  {
    e.preventDefault()
    console.log(e.target)
})

