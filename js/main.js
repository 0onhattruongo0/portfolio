
// Portfolio Item Fillter

const filterContainer=document.querySelector(".portfolio-filter");
filterBtns=filterContainer.children;
totalFilterBtns=filterBtns.length;
portfolioItem=document.querySelectorAll(".portfolio-item");
totalPortfolioItem=portfolioItem.length;

for(let i=0; i<totalFilterBtns;i++){
    filterBtns[i].addEventListener("click", function(){
        filterContainer.querySelector(".active").classList.remove("active");
        this.classList.add("active");
        
        const filterValue=this.getAttribute("data-filter");
        
        for(let k=0; k<totalPortfolioItem;k++){
            if(filterValue == portfolioItem[k].getAttribute("data-category")){
                portfolioItem[k].classList.remove("hide");
                portfolioItem[k].classList.add("show");
            }else{
                portfolioItem[k].classList.remove("show");
                portfolioItem[k].classList.add("hide");
            }
            if(filterValue=="all"){
                portfolioItem[k].classList.remove("hide");
                portfolioItem[k].classList.add("show");
            }
        }

    })
}

// Portfolio lightbox
const lightbox = document.querySelector(".lightbox"),
      lightboxImg =document.querySelector(".lightbox-img"),
      lightboxClose=document.querySelector(".lightbox-close")
      lightboxText=document.querySelector(".caption-text"),
      lightboxCounter=document.querySelector(".caption-counter");
let itemIndex=0;

for(let i=0; i<totalPortfolioItem;i++){
    portfolioItem[i].querySelector(".icon").addEventListener("click",function(){
        itemIndex=i;
        changeItem();
        toggleLightbox();
    })
}

function nextItem(){
    if(itemIndex==totalPortfolioItem-1){
        itemIndex=0;
    }
    else{
        itemIndex++;
    }
    changeItem();
}
function prevItem(){
    if(itemIndex==0){
        itemIndex=totalPortfolioItem-1;
    }
    else{
        itemIndex--;
    }
    changeItem();
}

function toggleLightbox(){
     lightbox.classList.toggle("open");
}

function changeItem(){
    imgSrc=portfolioItem[itemIndex].querySelector(".portfolio-img img").getAttribute("src");
    lightboxImg.src=imgSrc;
    lightboxText.innerHTML=portfolioItem[itemIndex].querySelector("h4").innerHTML;
    lightboxCounter.innerHTML= (itemIndex+1)+" "+"of"+ " "+ totalPortfolioItem;
}

lightbox.addEventListener("click", function(event){
   if(event.target== lightboxClose || event.target ===lightbox){
       toggleLightbox();
   }
})



// Aside Navbar

const nav=document.querySelector(".nav"),
      navlist=nav.querySelectorAll("li"),
      totalNavList=navlist.length,
      allSection=document.querySelectorAll("section"),
      totalSection=allSection.length;

for(let i=0; i<totalNavList;i++){
    const a=navlist[i].querySelector("a");
    a.addEventListener("click",function(){
        for(let i=0; i<totalSection;i++){
        allSection[i].classList.remove("back-section");
    }
        for(let j=0; j<totalNavList;j++){
            if(navlist[j].querySelector("a").classList.contains("active")){
                allSection[j].classList.add("back-section");
            }
            navlist[j].querySelector("a").classList.remove("active");
        }
        this.classList.add("active");
        showSection(this);
    })
}
function showSection(element){
    for(let i=0; i<totalSection;i++){
        allSection[i].classList.remove("active");
    }
     const target=element.getAttribute("href").split("#")[1];
    
     document.querySelector("#"+target).classList.add("active")
}


const navTogglerBtn=document.querySelector(".nav-toggler"),
      aside=document.querySelector(".aside");

navTogglerBtn.addEventListener("click",()=>{
    asideSectionTogglerBtn();
})

function asideSectionTogglerBtn(){
    aside.classList.toggle("open");
    navTogglerBtn.classList.toggle("open");
    for(let i=0; i<totalSection;i++){
        allSection[i].classList.toggle("open");
    }
}