export class Article {
    constructor({id, title, urlToImage, tags, ...rest}) {
        this.id = id;
        this.title = title;
        this.urlToImage = urlToImage;
        this.tags = tags;
        Object.assign(this, rest);
    }

    generateArticle() {
        let template = '';
        let article = document.createElement('article');
        article.className = 'strategy block-shadowed';
        article.setAttribute('data-id', this.id);

        this.urlToImage &&
        (template += `<img src='${this.urlToImage}' alt="bd cards">`)
        if(this.tags || this.title) {
            template += `<div class="strategy__content">`
            this.title &&
            (template += `<h3 class="strategy__name">${this.title}</h3>`)
            if(this.tags) {
                template += `<div class="">`

                this.tags.map(tag => {
                    template += `<span class="tag tag__colored">${tag}</span>`
                })

                template += `</div>`
            
            }

            template += `</div>`
        }
        article.innerHTML = template;
        return article;
    }
}

{/* <article class="strategy block-shadowed">
<img src="./src/img/strategies/pic-2.jpg" alt="bd cards">
<div class="strategy__content">
    <h3 class="strategy__name">Success Steps For Your Personal Or Business Life</h3>
    <div class="">
        <span class = "tag tag__colored">Culture</span>
        <span class = "tag tag__colored">Design</span>
        <span class = "tag tag__colored">Art</span>
    </div>
</div>
</article> */}