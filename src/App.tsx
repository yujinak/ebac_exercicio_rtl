import Post from "./components/Post";

import styles from './App.module.css';

function App() {
  return (
    <div className={styles.app}>
      <Post imageUrl="https://cdn11.bigcommerce.com/s-rejby4tfjq/images/stencil/1000x667/products/4367/17997/98260-JADA-BLACK-1989-Batmobile-w6in-Batman-1-AZ__09687.1610384684.jpg?c=1">
        Olha só que legal minha miniatura do Batmóvel.
      </Post>
    </div>
  );
}

export default App;
