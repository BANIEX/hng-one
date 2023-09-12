const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");






const app = express();
app.use(cors());
app.use(express.json());
app.use(cookieParser());


app.get("/api", (request, response)=>{

  function currentDay() {

    const daysOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const currentDate = new Date();
    const dayOfWeekNumber = currentDate.getDay();
    const dayOfWeekName = daysOfWeek[dayOfWeekNumber];
    return dayOfWeekName;
  }

  

  const utcTime = getUTCDateTime();
  // console.log(utcTime);

 
  
  // console.log(request.query);
  console.log(new Date())

  let {slack_name, track} = request.query;
  // console.log(slack_name, track);
  // console.log(currentDay())
  let responseData = {slack_name,current_day: currentDay(), utc_time: new Date(), track, 
    github_file_url: "",
    github_repo_url: "",
    status_code: 200

    
  }

  response.send(responseData);
})


app.listen(8000, ()=>{
  console.log("Running on port 8000")
})