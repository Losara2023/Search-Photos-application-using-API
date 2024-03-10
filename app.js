const formWrapper = document.querySelector(".form-wrapper");
const form = document.querySelector("#form");
const searchInput = document.querySelector("#searchInput");
const btnWrapper = document.querySelector(".button-wrapper");
const searchBTN = document.querySelector("#searchBTN");
const clearBTN = document.querySelector("#clearBTN");
const imageListWrapper = document.querySelector(".imageList-wrapper");

runEventListners();

    function runEventListners(){
      form.addEventListener("submit",search)
      clearBTN.addEventListener("click",clear)
    }

    function search(e){
      const value = searchInput.value.trim();
  
      fetch(`https://api.unsplash.com/search/photos?query=${value}`,{
        method:"GET",
        headers :{
          Authorization:"Client-ID gjVOsZuR4FGfNit6abdpgBT9cCIjFOC4Wf52fdBpxtc",

        }
      }).then((res)=>res.json())
      .then((data)=>{Array.from(data.results).forEach((image)=>{
        // console.log(image.urls.small)
        addImageToUI(image.urls.small)
      })
    })
      .catch((error)=>console.log("error",error))





      e.preventDefault()
    }

    function addImageToUI(url){
        const div = document.createElement("div");
        div.className="card";
        const img = document.createElement("img")
        img.setAttribute("src",url);
        img.height="400";
        img.width="400";
        div.appendChild(img)
        imageListWrapper.appendChild(div);
        
    }
    function clear(){
      searchInput.value="";
    // it's to way 
    // easy way
    imageListWrapper.innerHTML=""
    // hard way
      // Array.from(imageListWrapper.children).forEach((child)=>child.remove())
    }