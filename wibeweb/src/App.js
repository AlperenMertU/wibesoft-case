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
    flexDirection: 'column', 
    alignItems: 'center', 
  },
  logo: {
    color: 'red', 
    textAlign: 'center', 
    marginBottom: 20, 
  },
  listContainer: {
    paddingTop: 20,
  },
};

export default App;
