const options = {
    root: null,
    rootMargin: '0px',
    threshold: 1.0
}

function callback(entries, observer) {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.src = entry.target.dataset['src']
            observer.unobserve(entry.target)
        }
    })
}

const observer = new IntersectionObserver(callback, options)
const imgList = document.querySelectorAll('.img')
imgList.forEach(img=> {
    observer.observe(img)
})