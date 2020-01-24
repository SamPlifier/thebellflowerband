import Head from 'next/head';
import StyleBase from '../components/StyleBase';
import React from 'react';
import axios from 'axios';
import NumberOfEvents from '../components/NumberOfEvents';
class Calendar extends React.Component {
    state = {
        calendarEvents: [],
        fetchError: false
    }

    componentDidMount() {
        let now = new Date();
        let startOfToday = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0, 0, 0);
        let endOfDayOneMonthOut = new Date(now.getFullYear(), now.getMonth() + 1, now.getDate(), 23, 59, 59);
        axios.get('https://www.googleapis.com/calendar/v3/calendars/thebellflowerband%40gmail.com/events?key=AIzaSyA73ezNBuEPQSSjMgoMjfiFa5wwT1TJht8')
            .then(res => {
                let allEvents = res.data.items;
                allEvents = allEvents.sort((a, b) => (Date.parse(a.start.dateTime.toString()) > Date.parse(b.start.dateTime.toString()) ? 1: -1));
                let futureEvents = [];
                allEvents.map((calEvent, i) => {
                    let eventTime = new Date(calEvent.start.dateTime);
                    if (eventTime > startOfToday && eventTime < endOfDayOneMonthOut) {
                        futureEvents.push(calEvent);
                    }
                    return true;
                })
                this.setState({ calendarEvents: futureEvents });
            })
            .catch(err => {
                this.setState({fetchError: true});
            })
    }

    date(utcDate, type) {
        let date = new Date(utcDate);
        const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat' ];
        const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'Novermber', 'December'];
        const dateMaker = {
            get day() {return days[date.getDay()]},
            get dayNum() {return date.getDate()},
            get month() {return months[date.getMonth()]},
            get year() {return date.getFullYear()},
            get hour() {return date.getHours()},
            get minute() {return date.getMinutes()},
            get localTime() {return date.toLocaleTimeString().slice(0, -6).concat(date.toLocaleTimeString().slice(-3));}
        }
        let formattedDate;
        switch (type) {
            case 'day':
                formattedDate = dateMaker.day;
                break;
            case 'dayNum':
                formattedDate = dateMaker.dayNum;
                break;
            case 'month':
                formattedDate = dateMaker.month;
                break;
            case 'year':
                formattedDate = dateMaker.year;
                break;
            case 'hour':
                formattedDate = dateMaker.hour;
                break;
            case 'minute':
                formattedDate = dateMaker.minute;
                break;
            case 'localTime':
                formattedDate = dateMaker.localTime;
                break;
            default:
                break;

        }
        return formattedDate;
    }
    formatMapsUrl(address) {
        let firstPart = 'https://www.google.com/maps/search/?api=1&query=';
        let secondPart = encodeURIComponent(address);
        return firstPart+secondPart;
    }

    render() {
        const eventsList = (
            this.state.calendarEvents.map((calEvent, i) => {
                return  <div className="eventCard" key={i}>
                            <h3>{calEvent.summary}</h3>
                            <div className="detailsContainer">
                                <div className="details">
                                    <div className="event"><img className="icon" src={require('../public/time-icon-01.svg')} /><p className="time">{this.date(calEvent.start.dateTime, 'day')}, {this.date(calEvent.start.dateTime, 'month')} {this.date(calEvent.start.dateTime, 'dayNum')}  {this.date(calEvent.start.dateTime, 'localTime')} - {this.date(calEvent.end.dateTime, 'localTime')}</p></div>
                                    <div className="event"><img className="icon" src={require('../public/pin-icon-01.svg')} /><p className="pin">{calEvent.location}</p></div>
                                    <div className="event"><img className="icon" src={require('../public/description-icon-01.svg')} /><p className="description">{calEvent.description}</p></div>
                                    <div className="buttons">
                                        <a className="directions" alt="directions link" href={this.formatMapsUrl(calEvent.location)}><div className="event"><img className="icon" src={require('../public/navigate-icon-01.svg')} /><p className="navigate">Navigate</p></div></a>
                                        <a className="openInCalendar" alt="view in google calendar" href={calEvent.htmlLink}><div className="event"><img className="icon" src={require('../public/calendar-icon-01.svg')} /><p className="calendar">Calendar</p></div></a>
                                    </div>
                                </div>
                            </div>
                        <style jsx>{`
                        .eventCard {
                            padding: 1rem;
                            margin: 2rem 0;
                            text-align: left;
                        }
                        .eventCard:last-child {
                            margin-bottom: 0;
                        }
                        .icon {
                            height: 1.5rem;
                            position: relative;
                            top: 5px;
                        }
                        .event {
                            display: flex;
                            align-items: baseline;
                            width: 100%;
                            word-break: break word;
                        }
                        .time {
                            margin-left: 10px;
                        }                                
                        .pin {
                            margin-left: 6px;
                        }                            
                        .description {
                            margin-left: 9px;
                        }                            
                        .calendar {
                            margin-left: 10px;
                        }
                        .navigate {
                            margin-left: 9px;
                        }
                        .buttons {
                            display: flex;
                            justify-content: center;
                            margin: 1rem 0;
                            flex-direction: column;
                        }
                        .buttons .event:first-child {
                            margin: 0 0 1rem 0;
                        }
                        .buttons .event:last-child {
                            margin: 1rem 0 0 0;
                        }
                        .buttons:hover {
                            cursor: pointer;
                        }
                        .buttons .event {
                            width: 100%;
                            border: 2px solid #fff;
                            text-align: center;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            background: #f69d1a;
                            transition: background ease .5s;
                            margin: 1rem;
                        }

                        .buttons .event:hover {
                            background: #fff;
                        }
                        .buttons .event p {
                            color: #333;
                        }
                        .buttons .icon {
                            top: 0px;
                        }
                        @media only screen and (min-width:700px) {
                            .buttons {
                                flex-direction: row;
                                justify-content: space-between;
                            }
                            .buttons .event:first-child, .buttons .event:last-child {
                                margin: 0;
                                padding: 0 1rem;
                                box-sizing: border-box;
                            }
                            .directions, .openInCalendar {
                                width: calc(50% - 1rem);
                            }
                        }
                        `}</style>
                        </div>
            })
        )
        return (
            <StyleBase>
                <Head>
                    <title>Calendar</title>
                </Head>
                <section className="calendarPageContainer">
                    <div className="calendarPage">
                        <div className="numOfEvents">
                            {/* <p className="title">There are {this.state.calendarEvents.length} upcoming events this month.</p> */}
                            <NumberOfEvents events={this.state.calendarEvents.length} error={this.state.fetchError}/>
                        </div>
                    <div className="eventListContainer">{eventsList}</div>
                    </div>
                </section>
            </StyleBase>
        )
    }
}

export default Calendar;