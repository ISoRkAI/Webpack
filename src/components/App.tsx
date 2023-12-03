import { useState } from 'react';
import classes from './App.module.scss';
import { Link, Outlet } from 'react-router-dom';
import About from '@/pages/about/About';
import avatarPng from '@/assets/Image.png';
import avatarJpg from '@/assets/Img.jpg';
import Trips from '@/assets/Trips.svg';

export const App = () => {
  const [count, setCount] = useState<number>(0);

  const increment = () => setCount(e => e + 1);

  return (
    <div>
      <div>
        <h1>PLATFORM={__PLATFORM__}</h1>
      </div>
      <div>
        <img width={100} height={100} src={avatarPng} />
      </div>
      <div>
        <img width={100} height={100} src={avatarJpg} />
      </div>
       <div>
        <Trips width={50} height={50} />
      </div>
      <Link to={'/about'}>about</Link>
      <br />
      <Link to={'/shop'}>shop</Link>
      <h1 className={classes.value}>{count}</h1>
      <button className={classes.button} onClick={increment}>
        int
      </button>
      <About />
      <Outlet />
    </div>
  );
};
