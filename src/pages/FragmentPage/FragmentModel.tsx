import { Component, Fragment } from 'react';
import { renderMethodList } from '../../util';

interface KeyExampleItem {
  items: [string, string];
  id: number;
}

export default class FragmentModel extends Component {
  shorthandExample() {
    return (
      <>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <p>Deleniti aperiam eveniet, cupiditate aut illo officia saepe.</p>
        <p>Beatae deleniti officia impedit id tempora asperiores labore.</p>
        <p>Sint praesentium assumenda atque id harum numquam maiores.</p>
      </>
    );
  }

  keyExample() {
    const items: KeyExampleItem[] = [
      { items: ['Lorem,', 'ipsum'], id: 1 },
      { items: ['dolor', 'sit'], id: 2 },
      { items: ['amet', 'consectetur'], id: 3 },
      { items: ['adipisicing', 'elit.'], id: 4 },
      { items: ['Accusamus', 'ab.'], id: 5 },
    ];

    return (
      <Fragment>
        {items.map(({ items: [item1, item2], id }) => (
          <Fragment key={`item-${id}`}>
            <p>{item1}</p>
            <p>{item2}</p>
          </Fragment>
        ))}
      </Fragment>
    );
  }

  groupingTextExample() {
    return (
      <Fragment>
        <span>&copy; </span>
        Fancy Company,
        <span> {new Date().getFullYear()}</span>
      </Fragment>
    );
  }

  render() {
    return renderMethodList({
      methods: [
        this.shorthandExample,
        this.keyExample,
        this.groupingTextExample,
      ],
      title: 'Fragment',
    });
  }
}
