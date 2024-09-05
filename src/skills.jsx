import { useState } from 'react';

function Skills() {
  const [skills, setSkills] = useState([]);
  const [inputSkill, setInputSkill] = useState('');
  const [error, setError] = useState('');
  const [skillSubmit, setSkillSubmit] = useState(false);
  const [skillEdit, setSkillEdit] = useState(false);

  const handleInputChange = (e) => {
    setInputSkill(e.target.value);
  };

  const addSkill = () => {
    if (skills.length >= 10) {
      setError('You exceeded maximum number of skills');
      return; //this return statment ensures func exits if condition is met
    }

    setSkills([...skills, inputSkill.trim()]);
    setInputSkill('');
    setError('');
  };

  const handleSkillSubmit = (e) => {
    e.preventDefault();

    if (skills.length <= 3) {
      setError('You need to add more skills (min 4)');
      return; //prevents submission if condition is met
    }

    setSkillSubmit(true);
    setSkillEdit(false);
    setError('');
  };

  const handleSkillEdit = () => {
    setSkillEdit(true);
  }

  return (
    <>
      <div className="skillsContainer">
        {!skillSubmit || skillEdit ? (
          <form onSubmit={handleSkillSubmit}>
            <h2>Enter Your Skills</h2>
            <label>Skills:</label>

            <input
              type="text"
              placeholder="Enter Skill"
              value={inputSkill}
              onChange={handleInputChange}
              id="skill"
            />

            <button type="button" className="addSkill" onClick={addSkill}> Add Skill</button>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <button type="submit" className="skillSubmitBtn">Submit</button>
            {/* Going to output the list here just to see if it works */}

            {skills.length > 0 && (
            <ul>
              {skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          )}
          
          </form>
        ) :(
          <div className = 'skillsInfo'>
          <h2>Skills <span> <button onClick = {handleSkillEdit} className = 'editSkillBtn' type = 'button'> Edit </button> </span> </h2>
            <ul>
              {skills.map( (skills, index) =>
               <li key = {index}> {skills} </li>
               )}
            </ul>
            </div>
        )}
      </div>
    </>
  );
}
export default Skills;
