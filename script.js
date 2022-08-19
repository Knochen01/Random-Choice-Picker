const input = document.querySelector(".textarea")
const choices = document.querySelector(".choices");
input.focus()




input.addEventListener("keyup", (e) => {
    createTags(e.target.value)
    if (e.key === 'Enter') {
       e.target.value = " "
        randomSelect()
    }
})

function createTags(input) {
    const tags = input.split(',').filter(tag => tag.trim() !== '').map(tag => tag.trim())
    console.log(tags)

    choices.innerHTML = "";
    tags.forEach(tag => {
        const tagEl = document.createElement('span')
        tagEl.classList.add("tag");
        tagEl.innerText = tag
        choices.appendChild(tagEl)

    })
}

function randomSelect() {
    const times = 30;
    
    const interval = setInterval(() => {
        const randomTag = pickRandomTag()

        highlightTag(randomTag)
        setTimeout(() => {
            removeHighlightTag(randomTag)
        }, 100)
    }, 100)

    setTimeout(() => {
        clearInterval(interval)

        setTimeout(() =>  {
            const randomTag = pickRandomTag()

            highlightTag(randomTag)
        }, 100)
    }, times * 100)
}

function pickRandomTag() {
    const tags = document.querySelectorAll(".tag")
    return tags[Math.floor(Math.random() * tags.length)];
}

function highlightTag(tag) {
    tag.classList.add("highlight")
}

function removeHighlightTag(tag) {
    tag.classList.remove("highlight")
}








