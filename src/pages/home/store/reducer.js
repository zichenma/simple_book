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
    }]
});

export default (state = defaultState, action) => {
    switch (action.type) {
        default: 
            return state;
    }
}