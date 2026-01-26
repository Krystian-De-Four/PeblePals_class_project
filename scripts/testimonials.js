// If we dont have local testimonials, these will be loaded by default
let testimonialList = [
    {
        "rating": 4,
        "name": "Bobbi",
        "review": "A true gem of a friend!"
    },
    {
        "rating": 4,
        "name": "Bob",
        "review": "This Rocks!"
    },
    {
        "rating": 2,
        "name": "Goob",
        "review": "Very lazy, doesn't move for days."
    },
    {
        "rating": 5,
        "name": "Bobbert",
        "review": "Mine's not just a rock. it's family!"
    },
    {
        "rating": 5,
        "name": "Bobsi",
        "review": "My depression? Cured. Will to live? Restored!"
    },
    {
        "rating": 5,
        "name": "Bobberta",
        "review": "Walking my pet rock every day has been a great way to get some exercise!"
    }
]
// The function will load testimonials, if nothing is saved, we use the default
function loadTestimonials(){
    let loaded = JSON.parse(localStorage.getItem("Testimonials"))

    if (loaded){
        return loaded
    } else {
        return testimonialList
    }

}

function saveTestimonials(){
    localStorage.setItem("Testimonials", JSON.stringify(testimonialList))
}

testimonialList = loadTestimonials();

let testimonialsBox = document.getElementById("testimonials-box");
// Draw the loaded testimonial to the screen
for (let review of testimonialList){

    drawNewTestimonial(review.name, review.review, review.rating);
    
}


let tForm = document.getElementById("t-form");
function addTestimonial(event){
    event.preventDefault();

    let name = document.getElementById("t-name").value;
    let message = document.getElementById("t-message").value;
    let rating = document.querySelector("input[name = rating]:checked").value;

    drawNewTestimonial(name, message, rating);
// Adds a formatted testimonial to our lists, then saves the list to local storage
    testimonialList.push({
        "rating":rating,
        "name":name,
        "review":message,
    })
    saveTestimonials();

}
tForm.addEventListener("submit", addTestimonial);

//Display testimoonial on the screen based on the values provided 
function drawNewTestimonial(name, message, rating){
    
    let stars="";
    for (let i =0; i < 5; i++){
        if(i < rating){
            stars += `<img class="star-img" src="/assets/star_yellow.svg">`
        } else{
            stars += `<img class="star-img" src="/assets/star_black.svg">`
        }
    }
    
    
    let testimonial = `
        <div class="testimonial">
            <div class="rating-row">
                <div class="t-stars">
                    ${stars}
                </div>
                <p class="t-name">~${name}</p>
            </div>
            <p class="t-message">
                ${message}
            </p>
        </div>
    </div>`
               
    
    testimonialsBox.innerHTML += testimonial;

}