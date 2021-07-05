import {memo} from 'react';

type ItemProps = {
  title: string;
};

 function ItemComponent(props: ItemProps) {
  return <li>{props.title}</li>;
}

export const Item = memo(ItemComponent)


