import Nav from './components/navbar';
import Task from "./components/task"
import body from "./styles/body.module.css";
import BottomBar from './components/bottomBar';
import { Toaster } from 'react-hot-toast';

export default function Home() {
  return (
    <>
<main className={body.main}>
  <Toaster position="top-right"/>

    <Nav />
<Task />
<BottomBar />
</main>
    
    </>
  );
}
