import React, {Component} from "react"
import '../../styles/Calendar.css'
import calendarBackground from '../../images/calendar.png'

class Calendar extends Component{
    render(){
        return(

                <div className={'calendar-container'}>
                    <div className={'calendar-info'}>
                        <p className={'calendar-day'}>ζζδΈ</p>
                        <h4 className={'calendar-date'}>1</h4>
                    </div>
                    <img src={calendarBackground} alt={'Calendar'} className={'calendar-background'}/>
                </div>


        );
    }
}

export default Calendar;
