import React from 'react';
import { RouteObject } from 'react-router-dom';

interface Props {
  route: RouteObject;
}

export default function HomePageLink({ route }: Props): JSX.Element {
  return <a href={route.path}>{route.id}</a>;
}
