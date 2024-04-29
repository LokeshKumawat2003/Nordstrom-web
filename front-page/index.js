let sld = [
    { img: "https://n.nordstrommedia.com/it/147701a4-6f81-495b-944d-063ebcdf777e.jpeg?h=700&w=1608", tag1: "CelebrateinStyle", tag2: "Discover luxe looks for all your special occasion ", tag3: "Designer EventDressing s" },

    { img: "https://n.nordstrommedia.com/it/67a07f63-cbe3-45cc-910b-3d5672cd917f.jpeg?h=700&w=1608", tag1: "Getaway Style", tag2: "Elevated looks for all your spring travels from FARM Rio, Ulla Johnson and more.", tag3: "Shop Contemporary " },

    { img: "https://n.nordstrommedia.com/it/c0cb254b-c9df-408a-a479-096a202ca018.jpeg?h=700&w=1608", tag1: "Check In to Paradise", tag2: "Travel-friendly styles for your next spring trip.", tag3: "Women's Vacation" },
    { img: "https://n.nordstrommedia.com/it/147701a4-6f81-495b-944d-063ebcdf777e.jpeg?h=700&w=1608", tag1: "CelebrateinStyle", tag2: "Discover luxe looks for all your special occasion ", tag3: "Designer EventDressing s" },
    { img: "https://n.nordstrommedia.com/it/7bd8785e-81ba-4c9e-a51f-c117138138ad.jpeg?h=700&w=1608", tag1: "It's Best-Dressed Season", tag2: "From celebrations to ceremonies, RSVP yes in these styles. ", tag3: "Shop Wedding GuestRead the Story" },
]
let update = 0;
function sld1() {
    update++
    if (update == 5) {
        update = 0
    }
    let img_sld = document.querySelector(".sld-box img");
    img_sld.src = `${sld[update].img}`
    let tag_1 = document.querySelector(".detels h2");
    tag_1.innerHTML = sld[update].tag1
    let tag_2 = document.querySelector(".detels p");
    tag_2.innerHTML = sld[update].tag2
    let tag_3 = document.querySelector(".detels a");
    tag_3.innerHTML = sld[update].tag3
}
setInterval(sld1, 1500)

let login = document.querySelector(".btn button").addEventListener("click", function () {
    let inp = document.querySelector(".email");
    let inp_value = inp.value
    if (inp_value == "") {
        let valed = document.querySelector(".vailed").style.display = "block"
    } else {
        let email_name = document.querySelector(".email-name").innerHTML = inp_value
        inp.style.display = "none"
        let valed = document.querySelector(".vailed").style.display = "none"
        let nextPart = document.querySelector(".next-input").style.display = "block"
        let inp1 = document.querySelector(".f11");
        let inp2 = document.querySelector(".f22");
        let inp3 = document.querySelector(".f33");
        let name = inp1.value;
        let last = inp2.value;
        let pass = inp3.value;
        if (name == "" || last == "" || pass == "") {

        } else {
            let f1 = document.querySelector(".f1").innerHTML = name
            let f2 = document.querySelector(".f2").innerHTML = last
            let f3 = document.querySelector(".f3").innerHTML = pass
            inp1.style.display = "none";
            inp2.style.display = "none";
            inp3.style.display = "none";
            document.querySelector(".miss").style.display = "none"
            let profile=document.querySelector(".profile").innerHTML="Profile";
            let data=document.querySelector(".data").innerHTML="Your Profile Data"
            let btn_next = document.querySelector(".btn button").style.display = "none"
        }
    }
})

let arr = [
    { image: "https://n.nordstrommedia.com/id/sr3/28c6040f-2317-4c9e-80dc-cfa793dfaac1.jpeg?q=45&dpr=2&h=365.31&w=230", new: "New!", name: "Birkenstock", price: 4354.25, star: 45698 },
    { image: "https://n.nordstrommedia.com/id/sr3/156ee8d0-b005-48b1-bfcd-fd708a3281b9.jpeg?q=45&dpr=2&h=365.31&w=230", new: "New!", name: "Veja", price: "  15,721.07 - INR 16,619.42", star: 3557 },
    { image: "https://n.nordstrommedia.com/id/sr3/4111559a-51f5-4017-af89-dbb4a088f8d3.jpeg?q=45&dpr=2&h=365.31&w=230", new: "New!", name: "Caslon®", price: 5300.25, star: 3557 },
];
arr.forEach(newarr => {
    let newl = document.createElement("div")
    newl.classList.add("box-items-in")
    newl.innerHTML = `
    
    
    <div class="img-of-items">
    <img src="${newarr.image}"
        alt="">
</div>
<div class="view-box">
    <div class="vewi">
        <p>Quick View</p>
    </div>
</div>
<div class="poplur">
    <p>Popular</p>
</div>

<div class="color-skep">
    <div class="coro-pelet">
        <p class="color1 c1"></p>
        <p class="color1 c2"></p>
        <p class="color1 c3"></p>
        <p class="color1 c4"></p>
        <p class="color1 c5"></p>
        <p class="color1 c6"></p>
        <p class="color1 c7"></p>
        <p class="color1 c8"></p>
        <p class="color1 c9"></p>
    </div>
</div>

<div class="detel-of-iyems">
<div class="present-type">
<p>${newarr.new}</p>
<div class="poplur-box">
    <p id="name-arr1">${newarr.name}</p>
</div>
</div>
    <div class="price">
        <h3>NRI <span> ${newarr.price} </span></h3>
    </div>
    
    <div class="rating">
        <span><span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star"></span>
            <span class="fa fa-star"></span> <span>(35335)</span> </span>
    </div>

</div>
    `
    let append = document.querySelector(".items-box")
    append.appendChild(newl)

});

let arr2 = [
    { image: "https://n.nordstrommedia.com/id/sr3/d76b85e2-dbef-4049-a848-44ce9bb97944.jpeg?q=45&dpr=2&h=365.31&w=230", new: " 3x Points on  ", name: "Beauty DIOR", price: 4354.25, star: 45698 },
    { image: "https://n.nordstrommedia.com/id/sr3/9146d53f-e663-43b8-b544-22168597d0b5.jpeg?q=45&dpr=2&h=365.31&w=230", new: " 3x Points on   ", name: " Beauty ARMANI beauty", price: "  15,721.07 - INR 16,619.42", star: 34557 },
    { image: "https://n.nordstrommedia.com/id/sr3/7804767d-913d-4558-939a-8b1bfa7859f8.jpeg?q=45&dpr=2&h=365.31&w=230", new: " 3x Points on ", name: "Beauty DIOR", price: 5300.25, star: 3157 },

    { image: "https://n.nordstrommedia.com/id/sr3/ccc3ef17-0279-4e5b-b233-2e0ee6704540.jpeg?q=45&dpr=2&h=365.31&w=230", new: "3x Points on ", name: "BeautyBobbi Brown", price: 4600.25, star: 3527 },

    { image: "https://n.nordstrommedia.com/id/sr3/97688e5a-8729-4a53-8c0d-4d7cd283b9fd.jpeg?q=45&dpr=2&h=365.31&w=230", new: "Estée Lauder", name: "BeautyBobbi Brown", price: 3464.25, star: 3527 },
];

arr2.forEach(arr2 => {
    let newl = document.createElement("div")
    newl.classList.add("box-items-in")
    newl.innerHTML = `
    
 
    <div class="img-of-items">
    <img src="${arr2.image}"
        alt="">
</div>
<div class="view-box">
    <div class="vewi">
        <p>Quick View</p>
    </div>
</div>
<div class="poplur">
    <p>Popular</p>
</div>

<div class="color-skep">
    <div class="coro-pelet">
        <p class="color1 c1"></p>
        <p class="color1 c2"></p>
        <p class="color1 c3"></p>
        <p class="color1 c4"></p>
        <p class="color1 c5"></p>
        <p class="color1 c6"></p>
        <p class="color1 c7"></p>
        <p class="color1 c8"></p>
        <p class="color1 c9"></p>
    </div>
    <div class="next-skep">
    <div class="skip">
        <p>
            < </p>
                <p>></p>
    </div>
</div>
</div>

<div class="detel-of-iyems-box">
<div class="present-type">
<p id="name-of-arr">${arr2.new}</p>
<div class="poplur-box">
    <p id="arr2-name">${arr2.name}</p>
</div>
</div>

    <div class="price">
    <h3 class="peice-crt">NRI <span> ${arr2.price}  </span>-NRI <span> 4589.12</span></h3>
</div>
<div class="off-on-items">
    <p>( <span>Up to 30% Select items</span> )</p>
</div>
<div class="off-on-items-main-price">
    <p> <span>Up to 30% Select items</span></p>
</div>
    <div class="rating">
        <span><span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star"></span>
            <span class="fa fa-star"></span> <span>(35335)</span> </span>
    </div>

</div>
    
    `

    let appendel = document.querySelector(".items-box2");
    appendel.appendChild(newl)
});

let arr3 = [
    { image: "https://n.nordstrommedia.com/id/sr3/87c5eeac-0a0d-4997-875c-3cc2b8034a8c.jpeg?q=45&dpr=2&h=365.31&w=230", new: "New!", name: "CHANEL", price: 4354.25, star: 45698 },
    { image: "https://n.nordstrommedia.com/id/sr3/c6603009-6bcd-468a-b5d9-5402fe3f16e3.jpeg?q=45&dpr=2&h=365.31&w=230", new: "New!", name: "CHANEL", price: "  15,721.07 - INR 16,619.42", star: 3557 },
    { image: "https://n.nordstrommedia.com/id/sr3/c278c449-39db-4aec-8c96-317d9dddc049.jpeg?q=45&dpr=2&h=365.31&w=230", new: "New!", name: "On", price: 435430.25, star: 337 },

    { image: "https://n.nordstrommedia.com/id/sr3/7678a106-444a-4b46-9b27-3bf3709fa1dd.jpeg?q=45&dpr=2&h=365.31&w=230", new: "New!", name: "CHANEL", price: 1242.25, star: 35357 },

    { image: "https://n.nordstrommedia.com/id/sr3/c278c449-39db-4aec-8c96-317d9dddc049.jpeg?q=45&dpr=2&h=365.31&w=230", new: "New!", name: "Nike", price: 93120.25, star: 3557 },
    { image: "https://n.nordstrommedia.com/id/sr3/aac168e3-acb5-4ee7-a931-27b853573fcd.jpeg?q=45&dpr=2&h=365.31&w=230", new: "New!", name: "CHANEL", price: 12220.25, star: 3557 },
];
arr3.forEach(newarr => {
    let newl = document.createElement("div")
    newl.classList.add("box-items-in")
    newl.classList.add("box-items-in-x")
    newl.innerHTML = `
    
    
    <div class="img-of-items">
    <img src="${newarr.image}"
        alt="">
</div>
<div class="view-box">
    <div class="vewi">
        <p>Quick View</p>
    </div>
</div>
<div class="poplur">
    <p>Popular</p>
</div>

<div class="color-skep">
    <div class="coro-pelet">
        <p class="color1 c1"></p>
        <p class="color1 c2"></p>
        <p class="color1 c3"></p>
        <p class="color1 c4"></p>
        <p class="color1 c5"></p>
        <p class="color1 c6"></p>
    </div>
</div>

<div class="detel-of-iyems">
<div class="present-type">

<div class="poplur-box">
    <p id="name-arr1">${newarr.name}</p>
</div>
</div>
    <div class="price">
        <h3>NRI <span> ${newarr.price} </span></h3>
    </div>
    
    <div class="rating">
        <span><span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star"></span>
            <span class="fa fa-star"></span> <span>(35335)</span> </span>
    </div>

</div>
    `
    let append = document.querySelector(".arr3")
    append.appendChild(newl)

});

let sing = document.querySelector(".sing-ups").addEventListener("click", function () {
    let login = document.querySelector(".login").style.display = "block"
})
let log = document.querySelector(".close").addEventListener("click", function () {
    let login = document.querySelector(".login").style.display = "none"
})