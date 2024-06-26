import React, { useEffect, useState } from 'react'
import './Home.scss';
import { Link } from 'react-router-dom';
const Home = () => {

    const [days, setDays] = useState(0);
    const [events, setEvents] = useState([]);
    const [exploreMore,setExploreMore]=useState(null)

    useEffect(() => {
        daysBetweenDates('2024-07-11');
        getWeddingDayInfo();
        getRichTextContent();
    }, [])

    const getWeddingDayInfo = async () => {
        const data = await fetch('https://cdn.builder.io/api/v3/content/wedding-events?apiKey=83c63d0712bc49a08269b91fadef8128&cacheSeconds=0&staleCacheSeconds=0');
        const json = await data.json();
        setEvents(json?.results);
        console.log(json);
    }

    const getRichTextContent=async()=>{
        const data= await fetch('https://cdn.builder.io/api/v3/content/webcontent?apiKey=83c63d0712bc49a08269b91fadef8128');
        const json=await data.json();
        console.log(json)
        setExploreMore(json?.results[0].data.content)
    }

    function daysBetweenDates(setDate) {
        // Get the current date
        const currentDate = new Date();

        // Convert the setDate string to a Date object
        const targetDate = new Date(setDate);

        // Calculate the difference in time
        const timeDifference = targetDate.getTime() - currentDate.getTime();

        // Convert the time difference to days
        const dayDifference = Math.ceil(timeDifference / (1000 * 3600 * 24));

        setDays(dayDifference)

    }

    const handleClick = () => {
        localStorage.clear();
        window.location.pathname = '/'
    }

    return (
        <div className='home-page' >

            <button onClick={handleClick} className="logout">Logout</button>

            {/* <div className="prehero">
                <h1> ITS WEDDING TIME!! </h1>
            </div> */}

            <div className="hero">

                <img src="https://media-api.xogrp.com/images/bc55924f-dd46-4b8d-bc6a-a000af974687~rt_auto-rs_768.h?ordering=explicit" alt="banner" />
                <p className="pretext">Together with their Families</p>
                <h1>
                    <span>Ishaan</span>
                    <span>&</span>
                    <span>Rupali</span>
                </h1>
                <p className="postText">tie the wedding knots</p>
            </div>
            <h1 className="title">
                {days} days to Go!
            </h1>

            <div className="events">
                <h2>Wedding Events</h2>
                <div className="cards">
                    {events.map((event, index) => {
                        return <Link to={"event?day=" + event.data.day} key={index} className="daycard">
                            {event?.data?.day}
                        </Link>
                    })}


                </div>



            </div>

            <div className="confirmation">
                <h1>Help us with your Confirmation</h1>
                <p className='note'>This will help us avoid accomodation related inconveniences</p>
                <p className="note">We all will be staying at Sanjog International wef July 10, 11 am onwards till July 12,10am </p>


                <a href='https://surveyheart.com/form/667ae3e501b8a67727effb74' >Click here to fill the form </a>
            </div>

            <div className="thingsToDo">
                <h1 className="title">Explore More</h1>

                    <div dangerouslySetInnerHTML={{__html:exploreMore}} />

            </div>
        </div>
    )
}

export default Home