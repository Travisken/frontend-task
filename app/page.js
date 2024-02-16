import Nav from './components/navbar';
import Task from "./components/task"
import body from "./styles/body.module.css";
import BottomBar from './components/bottomBar';

export default function Home() {
  return (
    <>
<main className={body.main}>

    <Nav />
<Task />
<BottomBar />
</main>
    
    </>
  );
}
