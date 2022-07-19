import MainActivityNavBar from '../MainActivityNavBar';
import ActivityDetails from '../ActivityDetails';
import ActivityList from '../ActivityList';
import activities from '../../data/MainActivities.json';
import React, {useState} from 'react';
import './style.css';

interface ActivityData {
    id: number;
    type: string;
    name: string;
    description: string;
    date: string;
    time: string;
    location: string;
    instructorname: string;
    instructordescription: string;
    instructorhighlight: string;
    linkedin: string;
    instructor2name?: string;
    instructor2description?: string;
    instructor2highlight?: string;
    linkedin2?: string;
}

const empty = {
    id: 0,
    type: '',
    name: '',
    description: '',
    date: '',
    time: '',
    location: '',
    instructorname: '',
    instructordescription: '',
    instructorhighlight: '',
    linkedin: '',
};
export default function MainActivities() {
    //state/view management
    const [type, setType] = useState(activities[0].type);
    const [activity, setActivity] = useState(activities[0].id);

    function changeType(a: string) {
        setType(a);
        setActivity(mainActivities[a as 'Workshops' | /*'Plenary' |*/ 'Keynotes'][0].id);
    }

    function changeActivity(id: number) {
        setActivity(id);
        setViewPage(true);
    }


    const Workshops: ActivityData[] = [];
    const Keynotes: ActivityData[] = [];
    const Plenary: ActivityData[] = [];
    activities.forEach((item) => {
        switch (item.type) {
            case 'Workshops': {
                Workshops.push(item);
                break;
            }
            case 'Keynotes': {
                Keynotes.push(item);
                break;
            }
            case 'Plenary': {
                Plenary.push(item);
                break;
            }
        }
    });
    const mainActivities = {Workshops, Keynotes /*, Plenary*/};

    const [viewPage, setViewPage] = useState(false);
    return (
        <div className="MainActivities">
            <MainActivityNavBar
                items={['Keynotes', 'Workshops' /*, 'Plenary'*/]}
                changeView={changeType}
                default={activities[0].type}
            />

            <div className="mainContainer">
                <div className={`${viewPage ? 'hidden ' : 'showed '}listContainer`}>
                    <ActivityList
                        activities={mainActivities[type as 'Workshops' /*| 'Plenary'*/ | 'Keynotes']}
                        changeView={changeActivity}
                    />
                </div>
                <div className={`pageContainer${viewPage ? ' showed' : ' hidden'}`}>
                    <div className="backButton" onClick={() => setViewPage(false)}>
                        <i className="fa-solid fa-backward"></i> Back
                    </div>
                    <ActivityDetails
                        activity={
                            mainActivities[type as 'Workshops' /*| 'Plenary'*/ | 'Keynotes'].find(
                                (element) => element.id == activity,
                            ) || empty
                        }
                    />
                </div>
            </div>
        </div>
    );
}
