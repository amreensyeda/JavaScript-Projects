const reviews=[
    {
        id:"1",
        img: "https://img.freepik.com/free-photo/portrait-beautiful-woman_144627-7888.jpg?w=2000",
        name:"Sara Jones",
        role:"INTERN",
        desc:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa quia ipsam dolores quis architecto maxime eos placeat, fugit, facere ratione nostrum."
    },
    {
        id:"2",
        img: "https://assets.website-files.com/619e8d2e8bd4838a9340a810/647c1064ebf1c6171bfd3a87_profile-picture-feature-1.webp",
        name:"Elena James",
        role:"DEVELOPER",
        desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa quia ipsam dolores quis architecto maxime eos placeat, fugit, facere ratione nostrum."
    },
    {
        id:"3",
        img: "data:image/png;base64,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",
        name:"Amreen Syeda",
        role:"MANAGER",
        desc:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa quia ipsam dolores quis architecto maxime eos placeat, fugit, facere ratione nostrum."
    },
    {
        id:"4",
        img: "https://cdn-icons-png.flaticon.com/512/168/168720.png",
        name:"Lisa Kudrow",
        role:"ACTOR",
        desc:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa quia ipsam dolores quis architecto maxime eos placeat, fugit, facere ratione nostrum."
    }
]

const imgEl=document.getElementById("img-el")
const nameEl=document.getElementById("name")
const roleEl=document.getElementById("role")
const paraEl=document.getElementById("para")
const prevEl=document.getElementById("prev-el")
const nextEl=document.getElementById("next-el")
const supriseEl=document.getElementById("surprise-el")

let index=0
console.log(index)

nextEl.addEventListener("click",function(){
    index+=1
    renderContainer(index)
})
prevEl.addEventListener("click",function(){
    index-=1
    renderContainer(index)
})
supriseEl.addEventListener("click",function(){
    let randomNum=Math.floor(Math.random()*reviews.length)
    renderContainer(randomNum)
})


function renderContainer(index){
    imgEl.src=reviews[index%reviews.length].img
    nameEl.textContent=reviews[index%reviews.length].name
    roleEl.textContent=reviews[index%reviews.length].role
    paraEl.textContent=reviews[index%reviews.length].desc
}

