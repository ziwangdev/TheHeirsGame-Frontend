import React, {Component} from "react"
import '../../styles/Calendar.css'
import calendarBackground from '../../images/calendar.png'

class Calendar extends Component{
    render(){
        return(

                <div className={'calendar-container'}>
                    <div className={'calendar-info'}>
                        <p className={'calendar-day'}>星期一</p>
                        <h4 className={'calendar-date'}>1</h4>
                    </div>
                    <img src={calendarBackground} className={'calendar-background'}/>
                </div>


        );
    }
}

export default Calendar;
