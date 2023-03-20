import { FC } from 'react';
import { RouteObject } from 'react-router-dom';

interface Props {
  route: RouteObject;
}

const HomePageLink: FC<Props> = ({ route }: Props) => {
  return <a href={route.path}>{route.id}</a>;
};

export default HomePageLink;
