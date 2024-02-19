import React from 'react'
import './RegisterTask.css'
import { useState } from 'react';

const RegisterTask = () => {

    const [description, setDescription] = useState(null);
    const [estimatedDate, setEstimatedDate] = useState(null);

    const handleSaveTask = () => {
        const task = {
            description: description,
            estimatedDate: estimatedDate
        }
    }

    return (
        <div id='container-register-task'>
            <form>
                <div id='container-form'>
                    <div id='form-group'>
                        <label htmlFor="fdescription">Description Task</label>
                        <input type="text" id="fdescription" name="fdescription"
                            placeholder="Your description.."
                            onChange={(evt) => setDescription(evt.target.value)}
                        />
                    </div>
                    <div id='form-group'>
                        <label htmlFor="festimateddate">Estimated date Create date</label>
                        <input type="date" id="festimateddate" name="festimateddate"
                            onChange={(evt) => setEstimatedDate(evt.target.value)}
                        />
                    </div>
                    <button type='button' id='bt-save-task' onClick={handleSaveTask}>
                        Save My Task
                    </button>
                </div>
            </form>
        </div>
    )
}

export default RegisterTask