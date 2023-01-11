import { Article } from "./js/Article";
import { ArticleModal } from "./js/ArticleModal";
import { Modal } from "./js/Modal";
import './sass/style.scss';


const data = [
    {
        id: 1,
        title: 'Increasing Prosperity With Positive Thinking',
        urlToImage: './src/img/strategies/pic-4.jpg',
        tags: [ 'All', 'Design' ],
        content: 'Tools, tutorials, design and innovation experts, all in one place! The most intuitive way to imagine your next user experience.',
        date: new Date(),
    },
    {
        id: 2,
        title: 'Motivation Is The First Step To Success',
        urlToImage: './src/img/strategies/pic-5.jpg',
        tags: [ 'Culture'],
        content: 'Tools, tutorials, design and innovation experts, all in one place! The most intuitive way to imagine your next user experience.',
        date: new Date(),
    },
    {
        id: 3,
        title: 'Success Steps For Your Personal Or Business Life',
        urlToImage: './src/img/strategies/pic-2.jpg',
        tags: [  'Culture', 'Art' ],
        content: 'Tools, tutorials, design and innovation experts, all in one place! The most intuitive way to imagine your next user experience.',
        date: new Date(),
    },
    {
        id: 4,
        title: 'Increasing Prosperity With Positive Thinking',
        urlToImage: './src/img/strategies/pic-1.jpg',
        tags: [ 'Design', 'Culture', 'Art' ],
        content: 'Tools, tutorials, design and innovation experts, all in one place! The most intuitive way to imagine your next user experience.',
        date: new Date(),
    },
    {
        id: 5,
        title: 'Motivation Is The First Step To Success',
        urlToImage: './src/img/strategies/pic-6.jpg',
        tags: [ 'Design', 'Culture' ],
        content: 'Tools, tutorials, design and innovation experts, all in one place! The most intuitive way to imagine your next user experience.',
        date: new Date(),
    },
    {
        id: 6,
        title: 'Increasing Prosperity With Positive Thinking',
        urlToImage: './src/img/strategies/pic-4.jpg',
        tags: [ 'Design', 'Culture', 'Art' ],
        content: 'Tools, tutorials, design and innovation experts, all in one place! The most intuitive way to imagine your next user experience.',
        date: new Date(),
    },
    {
        id: 7,
        title: 'Success Steps For Your Personal Or Business Life',
        urlToImage: './src/img/strategies/pic-5.jpg',
        tags: [ 'Design', 'Culture', 'Art' ],
        content: 'Tools, tutorials, design and innovation experts, all in one place! The most intuitive way to imagine your next user experience.',
        date: new Date(),
    },
    {
        id: 8,
        title: 'Increasing Prosperity With Positive Thinking',
        urlToImage: './src/img/strategies/pic-2.jpg',
        tags: [ 'Design', 'Culture', 'Art' ],
        content: 'Tools, tutorials, design and innovation experts, all in one place! The most intuitive way to imagine your next user experience.',
        date: new Date(),
    },

]


console.log(data);


window.onload = function () {
    console.log ('5');
    // render
    if(data){
        renderArticlesToDom ();
    }

    addTagsClickHandler();
    addToolsClickHandler();
}

const addTagsClickHandler = () => {
    document.querySelector('.strategies__tags').addEventListener('click', (e) => {
        if (e.target.classList.contains('tag')) {
            let clickedTag = e.target;
            removeSelectedTags();
            selectClickedTag(clickedTag);
            if (clickedTag.innerText === 'All') {
                showAllStrategies();
            } else {
                filterStrategyBySelectedTag(clickedTag.innerText);
            }
        }
    })
}

const removeSelectedTags = () => {
    let tags = document.querySelectorAll('.strategies__tags .tag');
    tags.forEach(tag => {
        tag.classList.remove('tag__selected');
        tag.classList.add('tag__bordered');
    })
}

const selectClickedTag = (clickedTag) => {
    clickedTag.classList.add('tag__selected');
    clickedTag.classList.remove('tag__bordered');
}

const showAllStrategies = () => {
    let strategies = document.querySelectorAll('.strategy-wrapper .strategy');
    strategies.forEach(strategy => {
        strategy.classList.remove('strategy_hidden');
    })
}

const filterStrategyBySelectedTag = (selectedTag) => {
    let strategies = document.querySelectorAll('.strategy-wrapper .strategy');
    strategies.forEach(strategy => {
        strategy.classList.add('strategy_hidden');
        strategy.querySelectorAll('.tag').forEach(tag => {
            if (tag.innerText === selectedTag) {
                strategy.classList.remove('strategy_hidden');
            }
        })
    })
}

const renderArticlesToDom = () => {
    let strategiesWrapper = getStrategiesWrapper();
    generateArticles(data).forEach(article => {
        strategiesWrapper.append(article.generateArticle())
    })

    addStrategyClickHandler();
}

const getStrategiesWrapper = () => {
    const strategiesConstainer = document.querySelector('.strategy-wrapper');
    strategiesConstainer.innerHTML = '';
    return strategiesConstainer
}

const generateArticles = (data) => {
    let articles = [];
    data.forEach(article => {
        articles.push(new Article(article))
    });
    return articles;
}

const addToolsClickHandler = () => {
    document.querySelector('.tools__button .button').addEventListener('click', () => {
        generateToolsModal();
    })
}

const generateToolsModal = () => {
    renderModalWindow('Test content for Tools Modal');
}

const renderModalWindow = (content) => {
    let modal =  new Modal ('tools-modal');
    modal.buildModal(content);
}

const addStrategyClickHandler = () => {
    document.querySelector('.strategy-wrapper').addEventListener('click', (e) => {
        if (e.target.closest('.strategy')) {
            let clickedStrategyId = e.target.closest('.strategy').getAttribute('data-id');
            let clickedStrategyData = getClickedData(clickedStrategyId);

            renderArticleModalWindow(clickedStrategyData);
        }
    })
}

const getClickedData = (id) => {
    return data.find(article => article.id == id)
}

const renderArticleModalWindow = (article) => {
    let modal =  new ArticleModal ('article-modal', article);
    modal.renderModal();
}

// const addTagsClickHandler = () => {
//     document.querySelector('.strategies__tags').addEventListener('click', (e) => {
//         // console.log(e);

//         if(e.target.classList.contains('tag')){
//             let clickedTag = e.target;
//             removeSelectedTags();
//             addSelectedTags(clickedTag);
//             if(clickedTag.innerHTML === 'All') {
//                 showAllStrategies();
//             } else {
//                 filterStrategyBySelectedTag(clickedTag.innerHTML);
//             }



//         }
//     })
// }

// const removeSelectedTags = () => {
//     let tags = document.querySelectorAll('.strategies__tags .tag');
//     // console.log(tags);
//     tags.forEach(tag => {
//         tag.classList.remove('tag__selected');
//         tag.classList.add('tag__bordered');
//     })
// }

// const addSelectedTags = (tag) => {
//     tag.classList.remove('tag__bordered');
//     tag.classList.add('tag__selected');
// }

// const showAllStrategies = () => {
//     let strategies = document.querySelectorAll('.strategy-wrapper .strategy');
//     strategies.forEach(strategy => {
//         strategy.classList.remove('strategy_hidden');
//     })


// }
// const filterStrategyBySelectedTag = (selectedTag) => {
//     let strategies = document.querySelectorAll('.strategy-wrapper .strategy');
//     // console.log(strategies);
//     strategies.forEach(strategy => {
//         // console.log(strategy);
//         strategy.classList.add('strategy_hidden');
//         strategy.querySelectorAll('.tag').forEach(tag => {
//             // console.log(tag.innerHTML);
//             // console.log(selectedTag);

//             // && !strategy.classList.contains('strategy_hidden')
//             if(tag.innerHTML === selectedTag) {
//                 strategy.classList.remove('strategy_hidden');
//             }
//         })

//     })

// }

// const renderArticlesToDom = () => {
//     const strategiesWrapper = getStrategiesWrapper();
//     generateArticles(data).forEach(article => {
//         strategiesWrapper.append(article.generateArticle());
//     })

//     addStrategyClickHandler();
// }

// const getStrategiesWrapper = () => {
//     const strategiesContainer = document.querySelector('.strategy-wrapper');
//     strategiesContainer.innerHTML = '';
//     return strategiesContainer;
// }

// const generateArticles = (data) => {
//     let articles = [];
//     data.forEach(item => {
//         articles.push(new Article(item));
//         }
//     )
//     console.log(articles);
//     return articles;
// }

// const renderModalWindow = (content) => {
//     let modal = new Modal ('tools-modal');
//     modal.buildModal(content);
// }

// const addStrategyClickHandler = () => {
//     document.querySelector('.strategy').addEventListener('click', (event) => {
//         if(e.target.closest('.strategy')){
//             let clickedStrategyId = e.target.closest('.strategy').getAttribute('data-id');
//             console.log(clickedStrategyId);
//             let clickedStrategyData = getClickedData(clickedStrategyId);
//             console.log(clickedStrategyData);       

//             // renderArticleModalWindow(clickedStrategyData);

//         }

//     })
// }

// const getClickedData = (clickedStrategyId) => {
//     return data.find(item => item.id === clickedStrategyId)
// }

// const renderArticleModalWindow = (data) => {
//     let modal = new ArticleModal ('article-modal', data );
//     modal.renderModal();
// }