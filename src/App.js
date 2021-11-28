import './App.scss';
import { Row } from '../src/StyledCStyles/grid';
import Task1 from './Tasks/Task1/Task1.jsx'
import Task2 from './Tasks/Task2/Task2.jsx';
import Task3 from './Tasks/Task3/Task3.jsx';
import Task4 from './Tasks/Task4/Task4';
import Task5 from './Tasks/Task5/Task5';
import Task6 from './Tasks/Task6/Task6';
import Task8 from './Tasks/Task8/Task8';
import Task9 from './Tasks/Task9/Task9';
import Task10 from './Tasks/Task10/Task10';
import Task11 from './Tasks/Task11/Task11';
import Task12 from './Tasks/Task12/Task12';
import img1 from '../src/Images/2Task/1.png'
import img2 from '../src/Images/2Task/2.png'
import img3 from '../src/Images/2Task/3.png'
import img4 from '../src/Images/2Task/4.png'

function App() {

  return (
    <div className="App">
      <Row mt={7} justify_content={"center"} text_align={"start"}>
        <ul>
          <li>Здравствуйте! Отправляю, как говорил в течении недели, правда, по css - немного страшный проект (не "причесывал" его)</li>
          <li>Задания расположил в папке Tasks</li>
          <li>Задание 5 - это header (папка Task5)</li>
          <li>Задание 6 - это footer (папка Task6)</li>
          <li>Задание 7 -  якоря в header</li>
          <li>11 задание: сделал только переключение с 1го слайда на другой (подключил билиотеку React Anime.js Wrapper)</li>
          <li>В 1-м задании использовал SCSS (подключил через npm i node-sass)</li>
          <li>В остальных заданиях использовал, в основном, styled-components (папка "StyledCStyles")</li>
        </ul>
      </Row>
      <h1>
        Задание 1:
      </h1>
      <Task1 />
      <h1>Задание 2:</h1>
      <Task2 text={"text1"} orderL={2} orderR={1} img={img1} />
      <Task2 text={"text2"} orderL={1} orderR={2} img={img2} />
      <Task2 text={"text3"} orderL={2} orderR={1} img={img3} />
      <Task2 text={"text4"} orderL={1} orderR={2} img={img4} />
      <h1><a name="top"></a>Задание 3:</h1>
      <Task3 text={"text1"} orderL={2} orderR={1} img={img1} right={"60%"} left={"40%"} />
      <Task3 text={"text2"} orderL={1} orderR={2} img={img2} right={"40%"} left={"60%"} />
      <Task3 text={"text3"} orderL={2} orderR={1} img={img3} right={"60%"} left={"40%"} />
      <Task3 text={"text4"} orderL={1} orderR={2} img={img4} right={"40%"} left={"60%"} />
      <h1><a name="middle">Задание 4:</a></h1>
      <Task4 />
      <Task5 />
      <Task6 />
      <h1>Задание 8:</h1>
      <Task8 />
      <h1>Задание 9:</h1>
      <Task9 />
      <h1>Задание 10:</h1>
      <Task10 />
      <h1>Задание 11:</h1>
      <Task11 />
      <h1>Задание 12:</h1>
      <Task12 />
    </div>
  );
}

export default App;
