import React, { Component } from 'react';
import { DetailWrapper, Header, Content } from './style';

class Detail extends Component {
    render() {
        return (
            <DetailWrapper>
                <Header>
                    Heer dafe dasf fe5f223
                </Header>
                <Content>
                    <img src="//upload-images.jianshu.io/upload_images/15872426-587e3bbc0967b1de.jpg?imageMogr2/auto-orient/strip|imageView2/2/w/386/format/webp" />
                    <p>TrendingHand DrawingFake Word Generator</p>
                    <p><b>It is quite a task thinking up great made-up words that are unique</b></p>
                    <p>so I created this word generator to help you come up with the best fake word ideas</p>
                    <p>They can be great for naming your website, business, product or project. Fake words or pseudowords are words which look like they are real, but actually have no meaning.</p>
                </Content>
            </DetailWrapper>
        )
    }
}

export default Detail;