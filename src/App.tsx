import React from 'react';
import Button, { ButtonSize, ButtonType } from './components/Button/button';

const App: React.FC = () => {
  return (
    <div className='App'>
      <Button>hello</Button>
      <Button disabled>hello</Button>
      <Button btnType={ButtonType.Primary} size={ButtonSize.Large}>
        hello
      </Button>
      <Button btnType={ButtonType.Danger}>
        hello
      </Button>
      <Button btnType={ButtonType.Link} href={'http://www.baidu.com'}>
        hello
      </Button>
      <Button btnType={ButtonType.Link} disabled>
        hello
      </Button>
    </div>
  );
};

export default App;
