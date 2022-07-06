import MainActivityNavBar from "../MainActivityNavBar";
import ActivityPage from "../ActivityPage";
import ActivityList from "../ActivityList";
import activities from '../../data/MainActivities.json'
import React,{ useState } from "react";
import './style.css'
export default function MainActivities(){
    
    //state/view management
    const [type,setType]=useState(activities[0].type);
    const [activity,setActivity]=useState(activities[0].id)
    function changeType(a:string){
        setType(a);
    }
    function changeActivity(id:number){
        setActivity(id);
        console.log(activity);
    }
    const empty={
        id: 0,
        type: "",
        name: "",
        description: "",
        date: "",
        time: "",
        location: "",
        instructorName: "",
        instructorDescription: "",
        instructorHighlight: "",
        linkedin: ""
    };


    const Workshop: { id:number, type: string; name: string; description: string; date: string; time: string; location: string; instructorName: string; instructorDescription: string; instructorHighlight: string; linkedin: string; }[]=[];
    const Keynote: { id:number, type: string; name: string; description: string; date: string; time: string; location: string; instructorName: string; instructorDescription: string; instructorHighlight: string; linkedin: string; }[]=[];
    const Plenary: { id:number, type: string; name: string; description: string; date: string; time: string; location: string; instructorName: string; instructorDescription: string; instructorHighlight: string; linkedin: string; }[]=[];
    activities.forEach((item)=>{
        switch (item.type) {
            case "Workshop": {Workshop.push(item); break;}
            case "Keynote": {Keynote.push(item); break;}
            case "Plenary": {Plenary.push(item); break;}
        }
    });
    const mainActivities={Workshop,Keynote,Plenary}
    return(
        <div className="MainActivities">
                <MainActivityNavBar 
                    items={['Keynote','Workshop','Plenary']} 
                    changeView={changeType } default={activities[0].type}/>
            
            <div className="mainContainer">
                <div className="listContainer"><ActivityList activities={mainActivities[(type as ('Workshop'|'Plenary'|'Keynote'))]} 
                changeView={changeActivity}/></div>
                <div className="pageContainer"><ActivityPage activity={mainActivities[(type as ('Workshop'|'Plenary'|'Keynote'))].find(element=>element.id==activity) || empty} /></div>
            </div>
        </div>
    );
}