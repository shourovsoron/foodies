// For Navigation
let navbar = document.querySelector(".navigation-wrap");
window.onscroll = () => {
    if (document.documentElement.scrollTop > 40) {
        navbar.classList.add("scroll-on");
    } else {
        navbar.classList.remove("scroll-on");
    }
}


let navMenu = document.querySelector(".collapse.navbar-collapse")

navMenu.addEventListener("click", (e) => {
    if (e.target.tagName == "A") {
        navMenu.classList.remove("show")
    }

})


// for Counter
document.addEventListener("DOMContentLoaded", function () {

    const target = document.querySelector(".counter-section")
    const callback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                console.log('Element is in view!');

                // Call your function here

                counter("count1", 0, 233, 2000);
                counter("count2", 0, 746, 2000);
                counter("count3", 0, 1400, 2000);
                counter("count4", 0, 1200, 2000);

            }
        });
    };

    const observer = new IntersectionObserver(callback, {
        root: null, // Use the viewport as the container
        rootMargin: '0px',
        threshold: .4 // Trigger the callback when 100% of the target is visible
    });

    observer.observe(target);
});


// document.addEventListener("DOMContentLoaded", ()=>{

//     counter("count1", 0, 233, 2000);
//     counter("count2", 0, 746, 2000);
//     counter("count3", 0, 1400, 2000);
//     counter("count4", 0, 1200, 2000);

// })

function counter(id, start, end, duration) {
    let obj = document.getElementById(id);

    let current = start;
    let range = end - start;
    let increment = end > current ? 1 : -1;
    let step = Math.abs(Math.floor(duration / range));

    obj.innerText = current;
    let timer = setInterval(() => {
        current += increment;
        obj.innerText = current;
        if (current == end) {
            clearInterval(timer)
        }
    })
}
