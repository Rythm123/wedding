import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom';
import './Event.scss'

const Event = () => {

    const [searchParams] = useSearchParams();
    const [events,setEvents]=useState([])

    console.log(searchParams.get('day'))

    const day = searchParams.get('day');
    useEffect(() => {
        getEventsPerDay();
    },[])

    const getEventsPerDay = async () => {
        const data = await fetch('https://cdn.builder.io/api/v3/content/wedding-events?apiKey=83c63d0712bc49a08269b91fadef8128&query.data.day=' + day);
        const json = await data.json();
        console.log('event', json)
        setEvents(json?.results[0]?.data?.allEvents)
    }



    return (
        <div className='event-page'>
            <h2 className="heading">{day}</h2>
            <img className='heroimg' src="https://media-api.xogrp.com/images/bc55924f-dd46-4b8d-bc6a-a000af974687~rt_auto-rs_768.h?ordering=explicit" alt="banner" />

            <div className="events">
                <h2 className="title">Events for the day</h2>

                <div className="eventslist">

                    {events.map((event,index)=>{
                        return <div className="event-card">
                            <img src={event?.img} alt="" className="eventimg" />
                        <h2 className="eventName">{event.event}</h2>
                        <p className="time">{event.date}</p>
                        <hr />
                        <div className="location">
                            <p className="lname">{event.venue}</p>
                            <a href={event?.location}  className="direction">Get Directions</a>
                        </div>

                    </div>
                    })}
                </div>
            </div>
        </div>
    )
}

export default Event