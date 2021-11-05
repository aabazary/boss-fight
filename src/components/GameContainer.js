import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Home from './pages/Home';
import BossBattle from './pages/BossBattle';
import Gathering from './pages/Gathering';
import Puzzle from './pages/Puzzle';
import Store from './pages/Store';

export default function GatheringContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'Gathering') {
      return <Gathering />;
    }
    if (currentPage === 'BossBattle') {
      return <BossBattle />;
    }
    if (currentPage === 'MinionBattle') {
      return <MinionBattle />;
    }
    if (currentPage === 'Puzzle') {
        return <Puzzle />;
      }
    return <Store />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* We are passing the currentPage from state and the function to update it */}
      <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Here we are calling the renderPage method which will return a component  */}
      {renderPage()}
      <Footer></Footer>
    </div>
  );
}