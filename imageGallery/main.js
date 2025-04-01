const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const listImg = ["pic1.jpg", "pic2.jpg", "pic3.jpg", "pic4.jpg", "pic5.jpg"];

/* Declaring the alternative text for each image file */
const alts = [
    {altText : "Photo 1 - Closeup of a human eye"},
    {altText : "Photo 2 - Rock that looks like a wave"},
    {altText : "Photo 3 - Purple and white pansies"},
    {altText : "Photo 4 - Section of wall from a pharoah's tomb"},
    {altText : "Photo 5 - Larhe moth on a leaf"}
];

/* Looping through images */
for(let i = 0; i < listImg.length; i++){
    const newImage = document.createElement('img');
    newImage.setAttribute('src', `images/${listImg[i]}`);
    newImage.setAttribute('alt', alts[i].altText);
    thumbBar.appendChild(newImage);
}

/* Set the src and alt atrributes on the large img when smaller is clicked */
thumbBar.addEventListener("click", (event) => {
    displayedImage.setAttribute("src", event.target.getAttribute("src"));
    displayedImage.setAttribute("alt", event.target.getAttribute("alt"));
})

/* Wiring up the Darken/Lighten button */
btn.addEventListener("click", () => {
    if (btn.getAttribute("class") === "dark") {
        btn.setAttribute("class", "light");
        btn.textContent = "Lighten";
        overlay.style.backgroundColor = "rgb(0 0 0 / 50%)";
    } else {
        btn.setAttribute("class", "dark");
        btn.textContent = "Darken";
        overlay.style.backgroundColor = "rgb(0 0 0 / 0%)";
    }
});