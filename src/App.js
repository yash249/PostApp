import React from 'react'
import './App.css';
import AllCardsPage from '../src/Containers/AllCardsPage/AllCardsPage'

// const mostLiked = () => {
//   // this.state.picsData.sort(function (a, b) {
//   //   return a.likes - b.likes;
//   // }).reverse();
// }

// const mostCommented = ()=>{
//   this.state.picsData.sort(function (a, b) {
//     return a.comments.length - b.comments.length;
//   }).reverse();
// }

// React.useEffect(() => {
//   const results = people.filter(person =>
//     person.toLowerCase().includes(searchTerm)
//   );
//   setSearchResults(results);
// }, [searchTerm]);

function App() {
  return (
    <div>
      <div className = "App">
        <div className = "Heading">Imaginary</div>
        {/* <div className = "Header">
          <div className = "filter">Most Liked</div>
          <div className = "filter">|</div>
          <div className = "filter">Most Commented</div>
          <input type="search" placeholder = "Search Images"></input>
        </div> */}
        <AllCardsPage/>
      </div>  
    </div>
  );
}

export default App;

