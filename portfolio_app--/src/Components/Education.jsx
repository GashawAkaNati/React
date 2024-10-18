import { useState } from "react";
import './EducationStyle.css'
import React from "react";
function Education() {
    const [scValue, setscValue] = useState('');
    const [Edname, setEdname] = useState('');
    const [date, setdate] = useState('');
    const [isEdited, setisEdited] = useState(false);
    const handleEditForEd = () => setisEdited(true)
    const handleSubmitForEd = () => setisEdited(false)
    return (
        <>
            <div className="school">
                <p className="Scname">SCHOOL NAME</p>
                <input type="text"
                    id="education"
                    value={scValue}
                    onChange={(event) => setscValue(event.target.value)}
                    disabled={!isEdited}
                    className={isEdited === true ? 'editable' : 'submitting'}
                />
                <p className="title">TITLE</p>
                <input type="text" id="course"
                    placeholder="BSc in Mechaninical Engineering"
                    value={Edname}
                    disabled={!isEdited}
                    className={isEdited == true ? 'editable' : 'submitting'}
                    onChange={(event) => setEdname(event.target.value)}
                />
                <p className="date">DATE OF COMPLETION</p>
                <input type="text" id="datetext"
                    placeholder="date/month/year"
                    value={date}
                    disabled={!isEdited}
                    className={isEdited === true ? 'editable' : 'submitting'}
                    onChange={(event) => setdate(event.target.value)}
                />
                <div className="buttonsForEd">
                    <button type="submit" onClick={handleSubmitForEd}>SUBMIT</button>
                    <button type="edit" onClick={handleEditForEd}>EDIT</button>
                </div>
            </div>
        </>
    )
}
export default Education;