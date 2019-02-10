export interface StyleConfig extends Array<any> {
  [index: number]: StyleItem;
}

export interface StyleItem {
  label: string;
  style: string;
}

export const blockStyleConfig: StyleConfig = [
  {
    label: 'H1',
    style: 'header-one'
  },
  {
    label: 'H2',
    style: 'header-two'
  },
  {
    label: 'H3',
    style: 'header-three'
  },
  {
    label: 'Block',
    style: 'blockquote'
  },
  {
    label: 'UL',
    style: 'unordered-list-item'
  },
  {
    label: 'OL',
    style: 'ordered-list-item'
  },
  {
    label: '</>',
    style: 'code-block'
  }
];

export const inlineStyleConfig: StyleConfig = [
  {
    label: 'B',
    style: 'BOLD'
  },
  {
    label: 'I',
    style: 'ITALIC'
  }
];
