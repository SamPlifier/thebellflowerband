import Head from 'next/head';
import StyleBase from '../components/StyleBase';
import React from 'react';
import axios from 'axios';
import NumberOfEvents from '../components/NumberOfEvents';
import Cta from '../components/Cta';
import navigate from '../public/navigate-icon-01.svg';
 
class Calendar extends React.Component {
    state = {
        calendarEvents: [],
        fetchError: false
    }

    componentDidMount() {
        let now = new Date();
        let startOfToday = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0, 0, 0);
        let endOfDayOneMonthOut = new Date(now.getFullYear(), now.getMonth() + 3, now.getDate(), 23, 59, 59);
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
                // window.thedescription = calEvent.description;
                return  <div className="eventCard" key={i}>
                            <h3>{calEvent.summary}</h3>
                            <div className="detailsContainer">
                                <div className="details">
                                    <div className="event"><img className="icon" src={require('../public/time-icon-01.svg')} /><p className="time">{this.date(calEvent.start.dateTime, 'day')}, {this.date(calEvent.start.dateTime, 'month')} {this.date(calEvent.start.dateTime, 'dayNum')}  {this.date(calEvent.start.dateTime, 'localTime')} - {this.date(calEvent.end.dateTime, 'localTime')}</p></div>
                                    <div className="event"><img className="icon" src={require('../public/pin-icon-01.svg')} /><p className="pin">{calEvent.location}</p></div>
                                    {/* <div className="event"><img className="icon" src={require('../public/description-icon-01.svg')} /><p className="description">{calEvent.description}</p></div> */}
                                    <div className="event"><img className="icon" src={require('../public/description-icon-01.svg')} /><p className="description" dangerouslySetInnerHTML={{__html: calEvent.description}}></p></div>
                                    <div className="buttons">
                                        <div className="cta-container">
                                            <Cta type="link" alt="directions link" goTo={this.formatMapsUrl(calEvent.location)} text="NAVIGATE" icon={require('../public/navigate-icon-01.svg')} />
                                        </div>
                                        <div className="cta-container">
                                            <Cta type="link" alt="view in google calendar" goTo={calEvent.htmlLink} icon={require('../public/calendar-icon-01.svg')} text="CALENDAR" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        <style jsx>{`
                        html-blob br {
                            display: none;
                        }
                        .eventCard {
                            text-align: left;
                            padding: 20px 0;
                            border-bottom: 2px solid orange;
                            margin-bottom: 20px;
                        }
                        .icon {
                            height: 1.5rem;
                            position: relative;
                            background: var(--main-orange);
                            padding: 5px;
                            border-radius: 10px;
                            top: 5px;
                        }
                        .event {
                            display: flex;
                            align-items: baseline;
                            width: 100%;
                            word-break: break-word;
                        }
                        .event p {
                            margin: 15px 0 0 10px;
                        }
                        .buttons {
                            display: inline-grid;
                            grid-template-rows: auto auto;
                            grid-gap: 10px;
                            margin: 20px 0;
                            width: 100%;
                        }
                        .cta-container {
                            width: 100%;
                            display: flex;
                            justify-content: flex-start;
                        }
                        @media (min-width: 400px) {
                            .buttons {
                                grid-template-rows: auto;
                                grid-template-columns: auto auto;
                            }
                            .cta-container:first-child {
                                justify-content: flex-end;
                            }
                            .cta-container:last-child {
                                justify-content: flex-start;
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