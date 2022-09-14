import Header from './components/header';
import TranslateEngine from './components/translate-engine';
import HistoryBook from './components/history-box';
import './App.scss';

function App() {
  return (
    <>
      <Header />
      <TranslateEngine />
      <HistoryBook />
    </>
  );
}

export default App;
