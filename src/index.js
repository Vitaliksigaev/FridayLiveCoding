import { Article } from "./js/Article";


const data = [
    {
        id: 1,
        title: 'title1',
        urlToImage: './src/img/srategies/3.jpg',
        tags: ['Culture', 'Art', 'Design' ],
        content: 'This is',
        date: new Date(),
    },
    {
        id: 2,
        title: 'title2',
        urlToImage: './src/img/srategies/3.jpg',
        tags: ['Culture', 'Art', 'Design' ],
        content: 'This is',
        date: new Date(),
    },
    {
        id: 3,
        title: 'title3',
        urlToImage: './src/img/srategies/3.jpg',
        tags: ['Culture', 'Art', 'Design' ],
        content: 'This is',
        date: new Date(),
    },

]




window.onload = function () {
    console.log ('3');
    // render
    if(data){
        renderArticlesToDom ();
    }

    addTagsClickHandler();
}

const addTagsClickHandler = () => {
    document.querySelector('.strategies__tags').addEventListener('click', (e) => {
        // console.log(e);

        if(e.target.classList.contains('tag')){
            let clickedTag = e.target;
            removeSelectedTags();
            addSelectedTags(clickedTag);
            if(clickedTag.innerHTML === 'All') {
                showAllStrategies();
            } else {
                filterStrategyBySelectedTag(clickedTag.innerHTML);
            }



        }
    })
}

const removeSelectedTags = () => {
    let tags = document.querySelectorAll('.strategies__tags .tag');
    // console.log(tags);
    tags.forEach(tag => {
        tag.classList.remove('tag__selected');
        tag.classList.add('tag__bordered');
    })
}

const addSelectedTags = (tag) => {
    tag.classList.remove('tag__bordered');
    tag.classList.add('tag__selected');
}

const showAllStrategies = () => {
    let strategies = document.querySelectorAll('.strategy-wrapper .strategy');
    strategies.forEach(strategy => {
        strategy.classList.remove('strategy_hidden');
    })


}
const filterStrategyBySelectedTag = (selectedTag) => {
    let strategies = document.querySelectorAll('.strategy-wrapper .strategy');
    // console.log(strategies);
    strategies.forEach(strategy => {
        // console.log(strategy);
        strategy.classList.add('strategy_hidden');
        strategy.querySelectorAll('.tag').forEach(tag => {
            // console.log(tag.innerHTML);
            // console.log(selectedTag);

            // && !strategy.classList.contains('strategy_hidden')
            if(tag.innerHTML === selectedTag) {
                strategy.classList.remove('strategy_hidden');
            }
        })

    })

}

const renderArticlesToDom = () => {
    const strategiesWrapper = getStrategiesWrapper();
    generateArticles(data).forEach(article => {
        strategiesWrapper.append(article.generateArticles());
    })
}

const getStrategiesWrapper = () => {
    const strategiesContainer = document.querySelector('.strategy-wrapper');
    strategiesContainer.innerHTML = '';
    return strategiesContainer;
}

const generateArticles = (data) => {
    let articles = [];
    data.forEach(item => {
        articles.push(new Article(item));
        }
    )
    return articles;
}