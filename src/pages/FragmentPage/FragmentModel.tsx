import { FC, Fragment } from 'react';
import { ComponentList } from '../../util';

const ShorthandExample: FC = () => (
  <>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    <p>Deleniti aperiam eveniet, cupiditate aut illo officia saepe.</p>
    <p>Beatae deleniti officia impedit id tempora asperiores labore.</p>
    <p>Sint praesentium assumenda atque id harum numquam maiores.</p>
  </>
);

interface KeyExampleItem {
  items: [string, string];
  id: number;
}

const KeyExample: FC = () => {
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
};

const GroupingTextExample: FC = () => {
  return (
    <Fragment>
      <span>&copy; </span>
      Fancy Company,
      <span> {new Date().getFullYear()}</span>
    </Fragment>
  );
};

const FragmentModel: FC = () => {
  return (
    <ComponentList
      title="Fragment"
      components={[
        { element: <ShorthandExample />, name: ShorthandExample.name },
        { element: <KeyExample />, name: KeyExample.name },
        { element: <GroupingTextExample />, name: GroupingTextExample.name },
      ]}
    />
  );
};

export default FragmentModel;
