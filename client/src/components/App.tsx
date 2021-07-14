import * as React from 'react';
import About from './About';

export interface HelloWorldProps {
  username: string;
  lang: string;
}

export const App = (props: HelloWorldProps) => {
  return (
    <div>

      <h1>
        Hi {props.username} from React! Welcome to {props.lang}!
      </h1>
      <About />
    </div>
  );
}

