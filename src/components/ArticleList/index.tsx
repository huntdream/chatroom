import * as React from 'react';
import Article from '../Article';

import './style.sass';

export interface ArticleType {
  title: string;
  author: string;
  content: string;
}

export interface ArticlesType extends Array<ArticleType> {
  [index: number]: ArticleType;
}

const articles: ArticlesType = [
  {
    title: '行香子·过七里濑',
    author: '苏轼',
    content:
      '一叶舟轻，双桨鸿惊。水天清、影湛波平。鱼翻藻鉴，鹭点烟汀。过沙溪急，霜溪冷，月溪明。重重似画，曲曲如屏。算当年、虚老严陵。君臣一梦，今古空名。但远山长，云山乱，晓山青。'
  },
  {
    title: '定风波·莫听穿林打叶声',
    author: '苏轼',
    content:
      '三月七日，沙湖道中遇雨。雨具先去，同行皆狼狈，余独不觉，已而遂晴，故作此词。莫听穿林打叶声，何妨吟啸且徐行。竹杖芒鞋轻胜马，谁怕？一蓑烟雨任平生。料峭春风吹酒醒，微冷，山头斜照却相迎。回首向来萧瑟处，归去，也无风雨也无晴'
  }
];

class ArticleList extends React.Component<any, any> {
  render() {
    return (
      <div className="artile-list">
        {articles.map((article: ArticleType, index: number) => (
          <Article article={article} key={index} />
        ))}
      </div>
    );
  }
}

export default ArticleList;
