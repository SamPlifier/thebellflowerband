const NumberOfEvents = (props) => {
    const noError = () => {
        if (props.events === 1) {
            return <p className="title">There is {props.events} event in the next 30 days.</p>
        } else {
            return <p className="title">There are {props.events} events in the next 30 days.</p>
        }
    }
    const error = () => {
        return <p className="title">Sorry, calendar data could not be fetched. Refresh this page in a few seconds to try again.</p>
    }
    return props.error ? error() : noError();
}

export default NumberOfEvents;