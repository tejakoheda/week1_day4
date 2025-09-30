function Challenge() {
  let Myname = "Teja";
  let internship_name = "Intern-Technology in Volta";
  let skills = ["HTML", "CSS", "JavaScript"]; // use array

  return (
    <div>
      <h1>My name is {Myname}</h1>
      <h2>I am doing internship in {internship_name}</h2>
      <h3>My skills are:</h3>
      <ol>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ol>
      <button>Hire Me</button>
    </div>
  );
}

export default Challenge;
