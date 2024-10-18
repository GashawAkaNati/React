import { useState } from "react";
import './InfoStyle.css';
function GeneralInfo() {
    const [value1, setValue] = useState("");
    const [value2, setValue2] = useState("");
    const [value3, setValue3] = useState("");
    const [isEditable, setisEditable] = useState(false);
    const handleEdit = () => setisEditable(true)
    const handleSubmit = () => setisEditable(false)
    return (
        <>
            <div className="SelfInfo">
                <p>Name</p>
                <input type="text"
                    value={value1}
                    id="value1"
                    placeholder="First Middle Last"
                    disabled={!isEditable}
                    className={isEditable == true ? 'editing' : 'submitted'}
                    onChange={(event) => setValue(event.target.value)}
                />
                <p>Email</p>
                <input type="text"
                    value={value2}
                    id="value2"
                    placeholder="youremail@gmail.com"
                    disabled={!isEditable}
                    className={isEditable == true ? 'editing' : 'submitted'}
                    onChange={(event) => setValue2(event.target.value)}
                />
                <p>Phone</p>
                <input type="text" name="" id="value3"
                    value={value3}
                    placeholder="+()- _ _ _"
                    disabled={!isEditable}
                    className={isEditable == true ? 'editing' : 'submitted'}
                    onChange={(event) => setValue3(event.target.value)}
                />
                <div className="buttons">
                    <button type="submit" onClick={handleSubmit}>SUBMIT</button>
                    <button type="edit" onClick={handleEdit}>EDIT</button>
                </div>
            </div >
        </>
    );
}
export default GeneralInfo;