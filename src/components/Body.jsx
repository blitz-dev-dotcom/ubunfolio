import React , {useState , useEffect} from 'react';
import Commands from './Commands';
import List from './List';
import Bio from './Bio';
import Skills from './Skills';
import Contact from './Contact';
import About from './About';

function Body() {
    const [ReceiveCommand , setReceiveCommand] = useState('')
    const date = new Date();
    const currentDate = date.getDate();
    useEffect(()=>{
        console.log(ReceiveCommand);
        componentRenderer(ReceiveCommand);
    },[ReceiveCommand])
    // Function to get the current day of the week
    const currentDay = () => {
        let day = date.getDay();
        const daysarr = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        return daysarr[day].substring(0,4);
    };
    
    const currentMonth = date.getMonth();
    const Year = date.getFullYear();
    const DateFormat = `${currentDay()} ${currentDate}/${currentMonth}/${Year}`; // Call currentDay function here
    let componentRenderer = (a)=>{
        switch(a){
            case 'bio' : 
                return <Bio />
                break;
            case 'skills' : 
                return <Skills />
                break;
            case 'ls' :
                return <List />
                break ;
            case 'contact' :
                return <Contact />
                break ;
            case 'about' :
                return <About />
                break ;

            default :
                return <div className='misword'>Command Doesnt exist.....</div>
        }
    }
    
    return (
        <div className='body'>
            <p className='date'>Today is, {DateFormat}</p>
            <h1 className='welcome'>Welcome</h1>
            <Commands  setReceiveCommand= {setReceiveCommand}/>
            {componentRenderer(ReceiveCommand)}
        </div>
    );
}

export default Body;
