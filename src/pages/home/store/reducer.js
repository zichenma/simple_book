import { fromJS } from 'immutable';

const defaultState = fromJS({
    topicList: [{
        id: 1,
        title: 'Trending',
        imgUrl: '//upload-images.jianshu.io/upload_images/8717551-8e32e813e8a68a63.JPG?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
    },
    {
        id: 2,
        title: 'Hand Drawing',
        imgUrl: '//upload-images.jianshu.io/upload_images/13841701-ae169278750c469b.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
    }],
    articleList: [
        {
            id: 1,
            title: 'Fake Word Generator',
            desc: 'It is quite a task thinking up great made-up words that are unique, so I created this word generator to help you come up with the best fake word ideas. They can be great for naming your website, business, product or project. Fake words or pseudowords are words which look like they are real, but actually have no meaning.',
            imgUrl: 'https://upload-images.jianshu.io/upload_images/14386767-150a1ede549eb290.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
        },
        {
            id: 2,
            title: 'Fake Word Generator',
            desc: 'It is quite a task thinking up great made-up words that are unique, so I created this word generator to help you come up with the best fake word ideas. They can be great for naming your website, business, product or project. Fake words or pseudowords are words which look like they are real, but actually have no meaning.',
            imgUrl: 'https://upload-images.jianshu.io/upload_images/14386767-150a1ede549eb290.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
        },
        {
            id: 3,
            title: 'Fake Word Generator',
            desc: 'It is quite a task thinking up great made-up words that are unique, so I created this word generator to help you come up with the best fake word ideas. They can be great for naming your website, business, product or project. Fake words or pseudowords are words which look like they are real, but actually have no meaning.',
            imgUrl: 'https://upload-images.jianshu.io/upload_images/14386767-150a1ede549eb290.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
        },
        {
            id: 4,
            title: 'Fake Word Generator',
            desc: 'It is quite a task thinking up great made-up words that are unique, so I created this word generator to help you come up with the best fake word ideas. They can be great for naming your website, business, product or project. Fake words or pseudowords are words which look like they are real, but actually have no meaning.',
            imgUrl: 'https://upload-images.jianshu.io/upload_images/14386767-150a1ede549eb290.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
        }
    ],
    recommendList: [
        {id : 1, imgUrl : 'http://cdn2.jianshu.io/assets/web/banner-s-club-aa8bdf19f8cf729a759da42e4a96f366.png'},
        {id : 2, imgUrl : 'http://cdn2.jianshu.io/assets/web/banner-s-7-1a0222c91694a1f38e610be4bf9669be.png'},
        {id : 3, imgUrl : 'http://cdn2.jianshu.io/assets/web/banner-s-5-4ba25cf5041931a0ed2062828b4064cb.png'},
        {id : 4, imgUrl : 'http://cdn2.jianshu.io/assets/web/banner-s-6-c4d6335bfd688f2ca1115b42b04c28a7.png'},
    ]
});

export default (state = defaultState, action) => {
    switch (action.type) {
        default: 
            return state;
    }
}