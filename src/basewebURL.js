let basewebURL;
let meetingbasewebURL;

if (window.location.host === "localhost:3000") {
  basewebURL = "https://hellotoppers.com";
  meetingbasewebURL = "http://localhost:3000";
}

if (window.location.host === "127.0.0.1:8000") {
  basewebURL = "http://127.0.0.1:8000";
  meetingbasewebURL = basewebURL;
}

if (window.location.host === "bimalendupradhan.com") {
  basewebURL = "https://bimalendupradhan.com";
  meetingbasewebURL = basewebURL;
}


if(window.location.host === "hellotoppers.com"){
basewebURL = "https://hellotoppers.com";
meetingbasewebURL = basewebURL;
}



export default basewebURL;

export { meetingbasewebURL };
