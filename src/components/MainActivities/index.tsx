import MainActivityNavBar from "../MainActivityNavBar";
import ActivityPage from "../ActivityPage";
import ActivityList from "../ActivityList";
import activities from '../../data/MainActivities.json'
export default function MainActivities(){
    let workshops: { Type: string; name: string; description: string; date: string; time: string; location: string; instructorName: string; instructorDescription: string; instructorHighlight: string; linkedIn: string; }[]=[];
    let keynotes: { Type: string; name: string; description: string; date: string; time: string; location: string; instructorName: string; instructorDescription: string; instructorHighlight: string; linkedIn: string; }[]=[];
    let plenary: { Type: string; name: string; description: string; date: string; time: string; location: string; instructorName: string; instructorDescription: string; instructorHighlight: string; linkedIn: string; }[]=[];
    activities.forEach((item)=>{
        switch (item.Type) {
            case "Workshop": {workshops.push(item); break;};
            case "Keynote": {keynotes.push(item); break;};
            case "Plenary": {plenary.push(item); break;};
        }
    });
    const workshopsList=workshops.map(
        (item)=>{
            return({name: item.name,instructor:item.instructorName});
        }
    );
    const keynotesList=keynotes.map(
        (item)=>{
            return({name: item.name,instructor:item.instructorName});
        }
    );
    const plenaryList=plenary.map(
        (item)=>{
            return({name: item.name,instructor:item.instructorName});
        }
    );
    
    return(<div>

    </div>);
}