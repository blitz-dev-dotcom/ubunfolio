import React , {useState , useEffect} from 'react';
import Commands from './Commands';
import List from './List';
import Bio from './Bio';
import Skills from './Skills';
import Contact from './Contact';
import About from './About';
import DefaultDiv from './DefaultDiv';

function Body() {
    const [ReceiveCommand , setReceiveCommand] = useState('');
    const [PreCompo,setPreCompo] = useState();
    const date = new Date();
    const currentDate = date.getDate();
    useEffect(()=>{
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
                return (
                    <>
                        <DefaultDiv value = {ReceiveCommand}/>
                        <Bio />
                    </>
                )
                break;
            case 'skills' : 
                return (
                    <>
                        <DefaultDiv value = {ReceiveCommand}/>
                        <Skills />
                    </>
                )
                break;
            case 'ls' :
                return (
                    <>
                        <DefaultDiv value = {ReceiveCommand}/>
                        <List />
                    </>
                )
                break ;
            case 'contact' :
                return (
                    <>
                        <DefaultDiv value = {ReceiveCommand}/>
                        <Contact />
                    </>
                )
                break ;
            case 'about' :
                return (
                    <>
                        <DefaultDiv value = {ReceiveCommand}/>
                        <About />
                    </>
                )
                break ;
            case 'clear' :
                return ''
                break ;
            default :
                return <div className='misword'>Command Doesnt exist.....</div>
        }
    }
    
    return (
        <div className='body'>
            <p className='date'>Today is, {DateFormat}</p>
            <h1 className='welcome'>Welcome</h1>
            {
                componentRenderer(ReceiveCommand)
            }
            <Commands  setReceiveCommand= {setReceiveCommand}/>
            
        </div>
    );
}

export default Body;
