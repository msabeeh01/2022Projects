import React from "react";
import "./skills.css"

function Skills(){
    return(
        <div className="SkillsParent">
            
            <div className="frontend">
                <h2>Skills</h2>
                <p> <b>Frontend:</b> HTML, CSS, <i>JavaScript</i></p>
                
            </div>

            <div className="backend">
                <p><b>Backend: </b> C#, C++, Java, SQL, Linux</p>
            </div>

            <div className="frameworks">
                    <h3>FrameWorks:</h3>
                    <p>ReactJS, NodeJS</p>
                </div>

            
        </div>
    );
}

export default Skills;