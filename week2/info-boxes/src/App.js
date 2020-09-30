import React from 'react';
import Card from './Card';

const App = () => {
  return (
  <div>
    <Card bgColor="red" title="Title 1" subTitle="Sub Title 1" info="Hello world 1!" />
    <Card bgColor="orange" title="Title 2" subTitle="Sub Title 2" info="Hello world 2!" />
    <Card bgColor="yellow" title="Title 3" subTitle="Sub Title 3" info="Hello world 3!" />
    <Card bgColor="green" title="Title 4" subTitle="Sub Title 4" info="Hello world 4!" />
    <Card bgColor="blue" title="Title 5" subTitle="Sub Title 5" info="Hello world 5!" />
    <Card bgColor="indigo" title="Title 6" subTitle="Sub Title 6" info="Hello world 6!" />
    <Card bgColor="violet" title="Title 7" subTitle="Sub Title 7" info="Hello world 7!" />
    <Card bgColor="red" title="Title 8" subTitle="Sub Title 8" info="Hello world 8!" />
    <Card bgColor="orange" title="Title 9" subTitle="Sub Title 9" info="Hello world 9!" />
    <Card bgColor="yellow" title="Title 10" subTitle="Sub Title 10" info="Hello world 10!" />
  </div>
  );
}

export default App;
