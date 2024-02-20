import React from 'react';
import Logo from './components/Logo';
import List from './components/List';

const App = () => {
  return (
    <div style={styles.container}>
      <div style={styles.logo}>
        <Logo></Logo>
      </div>

      <div style={styles.listContainer}>
        <List />
      </div>
    </div>
  );
};

const styles = {
  container: {
    justifyContent: 'center',
    marginTop: 20,
    display: 'flex',
    flexDirection: 'column', // Sütun düzeni
    alignItems: 'center', // Öğeleri dikey olarak ortalar
  },
  logo: {
    color: 'red', // Yazı rengi
    textAlign: 'center', // Yatay hizalama
    marginBottom: 20, // Alt boşluk
  },
  listContainer: {
    paddingTop: 20,
  },
};

export default App;
