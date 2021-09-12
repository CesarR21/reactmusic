import React from "react";
import "./App.css";


const App =() => {
    return <div className="app-container">
        <table>
        <thead>
        <tr>
            <th>Song</th>
            <th>Title</th>
            <th>Artist</th>
            <th>Album</th>
            <th>Genre</th>
            <th>Release_Date</th>
        </tr>
        </thead>
        <tbody>
            <tr>
                <td>Candy Shop</td>
                <td>Candy Shop</td>
                <td>50 Cent</td>
                <td>Get Rich or Die Trying</td>
                <td>Hip Hop</td>
                <td>june 2008</td>
            </tr>
        </tbody>
        </table>    
        </div>;
};

export default App;