const search_btn = document.querySelector(".btn");

search_btn.addEventListener("click",()=>{
    console.log(document.querySelector(".search").value);
    document.querySelector(".search-bar").classList.remove("center");
});

