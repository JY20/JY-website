import React from "react";

class Projects extends React.Component {
  render() {
    return (
        <div>
            <h1 style={{fontSize:"50px"}}>Projects</h1>
            <section style={{background:"#1264bf", margin:"-22px"}}>
                <p style={{height:"5px"}}/>
                <h7>Remade Donkey Kong game with greenfoot, java, and github (2019)</h7>
                <p style={{height:"0px"}}/>
                <button 
                onClick={()=> window.open("https://github.com/JY20/DonkeyKongV2", "_blank")}
                style={{border:"none",width:"200px",height:"35px",borderRadius:50, fontSize: "25px", color:"#a30316", backgroundColor:"#f9cacf"}}>
                Learn More
                </button>
                <p style={{height:"5px"}}/>
            </section>
            <section style={{background:"#1264bf", margin:"-22px"}}>
                <p style={{height:"5px"}}/>
                <h7>By using Eclipse IDE and Java to create a database (2019-2020)</h7>
                <p style={{height:"0px"}}/>
                <button 
                onClick={()=> window.open("https://github.com/JY20/Database", "_blank")}
                style={{border:"none",width:"200px",height:"35px",borderRadius:50, fontSize: "25px", color:"#a30316", backgroundColor:"#f9cacf"}}>
                Learn More
                </button>
                <p style={{height:"5px"}}/>
            </section>
            <section style={{background:"#1264bf", margin:"-22px"}}>
                <p style={{height:"5px"}}/>
                <h7>Developed a music app by using Android studio and Java (2020)</h7>
                <p style={{height:"0px"}}/>
                <button 
                onClick={()=> window.open("https://github.com/JY20/Xmusic", "_blank")}
                style={{border:"none",width:"200px",height:"35px",borderRadius:50, fontSize: "25px", color:"#a30316", backgroundColor:"#f9cacf"}}>
                Learn More
                </button>
                <p style={{height:"5px"}}/>
            </section>
            <section style={{background:"#1264bf", margin:"-22px"}}>
                <p style={{height:"5px"}}/>
                <h7>Developed Amima landing page with react js, firebase, and github (2021)</h7>
                <p style={{height:"0px"}}/>
                <button 
                onClick={()=> window.open("https://github.com/JY20/Amima", "_blank")}
                style={{border:"none",width:"200px",height:"35px",borderRadius:50, fontSize: "25px", color:"#a30316", backgroundColor:"#f9cacf"}}>
                Learn More
                </button>
                <p style={{height:"5px"}}/>
            </section>
            <p style={{height:"10px"}}/>
            <h1 style={{fontSize:"50px"}}>Awards</h1>
            <p style={{height:"10px"}}/>
            <section style={{background:"#4a8dd8", margin:"-23px"}}>
                <p style={{height:"5px"}}/>
                <h7>Winner of Courier runner up award of TOhacks (2021) </h7>
                <button 
                onClick={()=> window.open("https://devpost.com/software/recyclops-lxghf8?ref_content=my-projects-tab&ref_feature=my_projects", "_blank")}
                style={{border:"none",width:"200px",height:"35px",borderRadius:50, fontSize: "25px", color:"#a30316", backgroundColor:"#f9cacf"}}>
                Learn More
                </button>
                <p style={{height:"0px"}}/>
                <h7>Winner of the DSC McMaster challenge Deltahacks 7 (2021) </h7>
                <button 
                onClick={()=> window.open("https://devpost.com/software/pill-dispenser-reminder-2000", "_blank")}
                style={{border:"none",width:"200px",height:"35px",borderRadius:50, fontSize: "25px", color:"#a30316", backgroundColor:"#f9cacf"}}>
                Learn More
                </button>
                <p style={{height:"0px"}}/>
                <h7>Second place in work from home challenge McMaster Cad Designathon (2021)</h7>
                <p style={{height:"0px"}}/>
                <h7>Gold Medalist in the Halton skills robotics competition (2018)</h7>
                <p style={{height:"5px"}}/>
            </section>
       </div>
    );
  }
}

export default Projects;