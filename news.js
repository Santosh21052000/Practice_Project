console.log("news api");
//81aabb0793f7420cb8f82d210d5166a6

//grabbing the news container
let newsaccordian = document.getElementById('news');

// creating a ajax get request
const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://newsapi.org/v2/top-headlines?country=in&apiKey=81aabb0793f7420cb8f82d210d5166a6', true);

xhr.onload = function () {
    if (this.status === 200) {

        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        console.log(articles);
        let newshtml = "";
        articles.forEach(function (element,index) {

            //console.log(articles[news]);
            let news = `<div class="accordion-item">
                            <h2 class="accordion-header" id="heading${index}">
                            <button class="accordion-button " type="button" data-bs-toggle="collapse" data-bs-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index}">
                              <b>Breaking News${index+1}: </b>  ${element.title}
                            </button>
                            </h2>
                            <div id="collapse${index}" class="accordion-collapse collapse " aria-labelledby="heading${index}" data-bs-parent="#news">
                            <div class="accordion-body">
                                ${element.content}.<a href="${element.url}" target="_blank">Read More</a>
                            </div>
                            </div>
                        </div>`
            newshtml += news;
        });

        newsaccordian.innerHTML = newshtml;
    }
    else {
        console.log("Some error occured");
    }
}

xhr.send();

