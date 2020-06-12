import React from 'react';
import Button from './components/Button/button';

const App: React.FC = () => {
  return (
    <div className='App'>
      <Button>hello</Button>
      <Button disabled>hello</Button>
      <Button btnType='default' size='lg'>
        hello
      </Button>
      <Button btnType='danger'>
        hello
      </Button>
      <Button btnType='link' href={'http://www.baidu.com'}>
        hello
      </Button>
      <Button btnType='link' disabled>
        hello
      </Button>
    </div>
  );
};

export default App;
