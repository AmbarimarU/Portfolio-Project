
// apis

 const API_KEY = "07d8ff7eef564c0ea6ce5ea3f2af151e";
 const HEADLINES = "https://newsapi.org/v2/top-headlines?country=us&apiKey=";
 const GENERAL = "https://newsapi.org/v2/top-news?country=us&category=general&apiKey=";
 const BUSINESS = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=";
 const SPORTS = "https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=";
 const ENTERTAINMENT = "https://newsapi.org/v2/top-headlines?country=us&category=entertainment&apiKey=";
 const TECH = "https://newsapi.org/v2/top-headlines?country=us&category=&apiKey=";
 const SEARCH = "https://newsapi.org/v2/top-headlines?q=";


// selecting needed html to add links 

 const generalHere = document.querySelector("#general");
 const businessHere = document.querySelector("#business");
 const sportsHere = document.querySelector("#sports");
 const techHere = document.querySelector("#technology");
 const entertHere = document.querySelector("#entert");

 const searchButton = document.querySelector(".form");
 const newsTitleHere = document.querySelector("#newstitle");
 const newsDetails = document.querySelector(".newsdetails");
 const headnews = document.querySelector("#primicias");
 const searchNews = document.querySelector("#query");

let newsArray = [];



//event listeners 

generalHere.addEventListener("click", (event) => {
    getGeneral();
});

businessHere.addEventListener("click", (event) => {
    getBusiness();
});

sportsHere.addEventListener("click", (event) => {
    getSports();
});

techHere.addEventListener("click", (event) => {
    getTech();
});

entertHere.addEventListener("click", (event) => {
    getEntert();
});

headnews.addEventListener("click", (event) => {

 getHeadlines();

 });

 searchButton.addEventListener("submit", (event) => {
    event.preventDefault();

    getSearch();
});

const getHeadlines = async () => {
    const response = await fetch(HEADLINES+API_KEY);
    newsArray = [];
    if (response){
        const myJson = await response.json();
        newsArray = myJson.articles;     
    } else {
        console.log(response.status, response.statusText);
    }
 displayNews();


}

const getGeneral = async () => {
    const response = await fetch(GENERAL+API_KEY);
    newsArray = [];
    if (response){
        const myJson = await response.json();
        newsArray = myJson.articles;     
    } else {
        console.log(response.status, response.statusText);
    }
 displayNews();


}

const getBusiness = async () => {
    const response = await fetch(BUSINESS+API_KEY);
    newsArray = [];
    if (response){
        const myJson = await response.json();
        newsArray = myJson.articles;       
    } else {
        console.log(response.status, response.statusText);
    }
 displayNews();
}

const getSports = async () => {
    const response = await fetch(SPORTS+API_KEY);
    newsArray = [];
    if (response){
        const myJson = await response.json();
        newsArray = myJson.articles;       
    } else {
        console.log(response.status, response.statusText);
    }
 displayNews();
}

const getTech = async () => {
    const response = await fetch(TECH+API_KEY);
    newsArray = [];
    if (response){
        const myJson = await response.json();
        newsArray = myJson.articles;       
    } else {
        console.log(response.status, response.statusText);
    }
 displayNews();
}

const getEntert = async () => {
    const response = await fetch(ENTERTAINMENT+API_KEY);
    newsArray = [];
    if (response){
        const myJson = await response.json();
        newsArray = myJson.articles;       
    } else {
        console.log(response.status, response.statusText);
    }
 displayNews();
}
        
const getSearch = async () => {

    if (searchNews.value)
    return;

    const response = await fetch(SEARCH+encodeURIComponent(searchNews.value)+"&apiKey="+API_KEY);
    newsArray = []; ur
    if (response){
        const myJson = await response.json();
        newsArray = myJson.articles;       
    } else {
        console.log(response.status, response.statusText);
    }

 displayNews();
}


       
       function displayNews() {

        newsDetails.innerHTML = "";

        if(newsArray.length === 0) {
            return newsDetails.innerHTML = "<p>No news found</p>";
        }

        newsArray.forEach(element => {
            const div = document.createElement("div");
            div.setAttribute("class", "details");
            const date =  element.publishedAt.split("T") 
            const htagHeadlines = document.createElement("h3");
            htagHeadlines.innerHTML = element.title;
            const image = document.createElement("img");
            image.setAttribute("src", "element.urlToImage");
            image.setAttribute("alt", "image of the article");
            const dateHeadlines = document.createElement("h4");
            dateHeadlines.innerHTML = date[0];
            const descriptionPtag = document.createElement("p");
            descriptionPtag.innerHTML = element.description;
            

            newsDetails.append(div);

            div.append(htagHeadlines);
            div.append(image);
            div.append(dateHeadlines);
            div.append(descriptionPtag);

            
        });
    
    }
