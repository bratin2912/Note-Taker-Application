import React from 'react'
import Navbar from '../Navbar/Navbar'
import './Home.css'
const Home = () => {
    const noteData=1;
    return (
        <>
            <Navbar />
            <div className='home-container'>
                <div className='home-search'>
                    <input type="text" placeholder='search!' />
                </div>
                {
                    noteData!==null?
                    <div className='home-search-result'>
                        <p>beasthbts</p>
                        <h4>rtshtrhb</h4>
                        <p>rsthntsr</p>
                    </div>:null
                }
            </div>
        </>

    )
}

export default Home