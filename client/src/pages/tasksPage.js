import React, { Component } from 'react';
import { 
    TaskContainer, 
    Feeding,
    FoodPrep,
    Medication,
    Toileting,
    Bathing,
    Laundry,
    Dressing,
    Mobility,
    Transportation,
    Shopping,
    MediaTech,
    Housekeeping
} from "../components/Tasks";


class TasksPage extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col s12 l6 offset-l3 center">
                      <h2> Date | Shift ID | Patient Name<br/></h2>
                       <h3>Todays Shift (link) >></h3>
                      

                    </div>
                </div>
                <div className="row">
                    <div className="col s12 l6 offset-l3">
                    <TaskContainer>
                            <FoodPrep/>
                            <Feeding/>
                            <Medication/>
                            <Toileting/>
                            <Bathing/>
                            <Laundry/>
                            <Dressing/>
                            <Housekeeping/>
                            <Mobility/>
                            <Transportation/>
                            <Shopping/>
                            <MediaTech/>
                        </TaskContainer>
                    </div>
                </div>
            </div>
            
        )
    }
}
export default TasksPage;