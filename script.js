// select all li
let colorsLi = document.querySelectorAll('ul li')

// select div that we change its background color
let exp = document.querySelector('.expermint')

// check if local storage has item color
if (window.localStorage.color) {
    // remove active class form all li
    colorsLi.forEach(li => {
        li.classList.remove('active')
    })
    // select li that has attribut data-color and its value = localstorage.color
    document.querySelector(`[data-color="${localStorage.color}"]`).classList.add('active')
    // set div background with stored color
    exp.style.backgroundColor = window.localStorage.color
}

// looping on all li
colorsLi.forEach((li) => {

    // adding click event
    li.onclick = function (e) {
        // remove active class from all li
        colorsLi.forEach(li => {
            li.classList.remove('active')
        })
        // add active class on clicked li
        li.classList.add('active')
        // store color on local storage
        localStorage.color = this.dataset.color
        // set div background color
        exp.style.backgroundColor = this.dataset.color
    }
})