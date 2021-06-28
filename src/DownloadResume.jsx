import "./DownloadResume.css";
import Resume from "./Mayank Resume.pdf";

const DownloadResume = () => {

  const buttonn = () =>{
    document.querySelector(".icon").addEventListener("click",function(){
      let waitClass = "waiting",
        runClass = "running",
        cl = this.classList;
  
      if (!cl.contains(waitClass) && !cl.contains(runClass)) {
        cl.add(waitClass);
        setTimeout(function(){
          cl.remove(waitClass);
          setTimeout(function(){
            cl.add(runClass);
            setTimeout(function(){
              cl.remove(runClass);
            }, 4000);
          }, 200);
        }, 1800);
      }
    });
  };
  return (
    <a type="button" className="icon" href={Resume} download onClick={buttonn}>
      <div className="cloud">
        <div className="puff puff-1"></div>
        <div className="puff puff-2"></div>
        <div className="puff puff-3"></div>
        <div className="puff puff-4"></div>
        <div className="puff puff-5"></div>
        <div className="puff puff-6"></div>
        <div className="puff puff-7"></div>
        <div className="puff puff-8"></div>
        <div className="puff puff-9"></div>
        <div className="puff puff-10"></div>
        <div className="cloud-core"></div>
        <div className="check"></div>
        <div className="arrow">
          <div className="arrow-stem">
            <div className="arrow-l-tip"></div>
            <div className="arrow-r-tip"></div>
          </div>
        </div>
      </div>
      <div className="preload">
        <div className="drop drop-1"></div>
        <div className="drop drop-2"></div>
        <div className="drop drop-3"></div>
      </div>
      <div className="progress"></div>
    </a>
  );
};

export default DownloadResume;