function StateWiseAnalysis(list){
    var a;
    var total_colleges=0;
    const AllStates={};
    var states=[];
    for(a of list){
        var stateName=a.state;
        if(AllStates[stateName]){
            AllStates[stateName]++;
        }
        else{
            AllStates[stateName]=1;
            states.push(stateName);
        }
        total_colleges+=1;
    }

    var Percentage=[];
    for(a of states){
        AllStates[a]=AllStates[a]/total_colleges*100;
        Percentage.push(AllStates[a]);
    }

    return [states,Percentage];
}

const x=[
    {
    "ID":"10001",
    "name":"IIT PKD",
    "year_founded":2015,
    "city":"Palakkad",
    "state":"Kerela",
    "country":"India",
    "no_of_students":100,
    "courses":["Computer Science","Electrical","Civil","Mechanical"]
    },{
    "ID": "10002",
    "name":"IIT Bombay",
    "year_founded":1902,
    "city":"Bombay",
    "state":"Maharashtra",
    "country":"India",
    "no_of_students":100,
    "courses":["Computer Science","Electronics","Civil","Chemical","Mechanical","Economics" ]
    },{
    "ID": "10003",
    "name":"IIT BHU",
    "year_founded":1903,
    "city":"Varanasi",
    "state":"UP",
    "country":"India",
    "no_of_students":100,
    "courses":["Computer Science","Electronics","Civil","Chemical","Mechanical","Metallurgy","Electrical","Ocean Engineering"]
    },{
    
    "ID": "10004",
    "name":"IIT Kanpur",
    "year_founded":1904,
    "city":"Kanpur",
    "state":"UP",
    "country":"India",
    "no_of_students":100,
    "courses":["Computer Science","Electronics","Civil","Chemical","Mechanical","Economics","Mining"]
    },{
    "ID": "10005",
    "name":"IIT Delhi",
    "year_founded":1905,
    "city":"Delhi",
    "state":"Delhi",
    "country":"India",
    "no_of_students":100,
    "courses":["Computer Science","Electronics","Civil","Chemical","Mechanical"]
    },{
    "ID": "10006",
    "name":"IIM Indore",
    "year_founded":2007,
    "city":"Indore",
    "state":"MP",
    "country":"India",
    "no_of_students":100,
    "courses":["MBA","BBA", "Economics"]
    },{
    "ID": "10007",
    "name":"IIT Gandhinagar",
    "year_founded":2007,
    "city":"Gandhinagar",
    "state":"Gujarat",
    "country":"India",
    "no_of_students":100,
    "courses":["Computer Science","Electronics","Civil","Chemical","Mechanical","Metallurgy"]
    },{
    "ID": "10008",
    "name":"IIM Ahamedabad",
    "year_founded":1920,
    "city":"Ahamedabad",
    "state":"Gujarat",
    "country":"India",
    "no_of_students":100,
    "courses":["Economic","CA", "MBA","BBA"]
    },{
    "ID": "10009",
    "name":"IIT Jammu",
    "year_founded":2016,
    "city":"Jammu",
    "state":"J&K",
    "country":"India",
    "no_of_students":100,
    "courses":["Computer Science","Electronics","Civil","Chemical","Mechanical"]
    },{
    "ID": "100010",
    "name":"IIT Goa",
    "year_founded":2016,
    "city":"Goa",
    "state":"Goa",
    "country":"India",
    "no_of_students":100,
    "courses":["Computer Science","Electronics","Civil","Chemical","Mechanical"]
    },{
    "ID": "10011",
    "name":"Indian School of Drama",
    "year_founded":1948,
    "city":"Delhi",
    "state":"Delhi",
    "country":"India",
    "no_of_students":100,
    "courses":["Mass Media", "Acting", "Script Writing"]
    },{
    "ID": "100012",
    "name":"IIT Tirupati",
    "year_founded":2015,
    "city":"Tirupati",
    "state":"Andhra Pradesh",
    "country":"India",
    "no_of_students":100,
    "courses":["Computer Science","Electronics","Civil","Chemical","Mechanical"]
    },{
    "ID": "100013",
    "name":"Indian Law School",
    "year_founded":1950,
    "city":"Bhopal",
    "state":"MP",
    "country":"India",
    "no_of_students":100,
    "courses":["LLB", "BALLB"]
    },{
    "ID": "10014",
    "name":"MIT",
    "year_founded":1840,
    "city":"Cambridge",
    "state":"Massachusetts",
    "country":"USA",
    "no_of_students":100,
    "courses":["Computer Science","Electronics","Civil","Chemical","Mechanical","Media","Politics"]
    },{
    "ID": "10015",
    "name":"Stanford",
    "year_founded":1820,
    "city":"Stanford",
    "state":"California",
    "country":"USA",
    "no_of_students":100,
    "courses":["Computer Science","Electronics","Civil","Chemical","Mechanical"]
    },{
    "ID": "10016",
    "name":"Cambridge",
    "year_founded":1816,
    "city":"Cambridge",
    "state":"Cambridge",
    "country":"UK",
    "no_of_students":100,
    "courses":["Computer Science","Electronics","Civil","Chemical","Mechanical"]
    },{
    "ID": "10017",
    "name":"NTU",
    "year_founded":1917,
    "city":"Singapore",
    "state":"Singapore",
    "country":"Singapore",
    "no_of_students":100,
    "courses":["Computer Science","Electronics","Civil","Chemical","Mechanical"]
    },{
    "ID": "10018",
    "name":"Jolly Law Institute",
    "year_founded":1918,
    "city":"Bombay",
    "state":"Maharashtra",
    "country":"India",
    "no_of_students":100,
    "courses":["LLB","BALLB","LLBH"]
    },{
    "ID": "10019",
    "name":"IIM Bangalore",
    "year_founded":1909,
    "city":"Bangalore",
    "state":"Karnataka",
    "country":"India",
    "no_of_students":100,
    "courses":["MBBS","BABS","MD"]
    },{
    "ID": "10020",
    "name":"IIT Bhilai",
    "year_founded":2016,
    "city":"Bhilai",
    "state":"Chhattisgarh",
    "country":"India",
    "no_of_students":100,
    "courses":["Computer Science","Electronics","Civil","Mechanical"]
    },{
    "ID": "10021",
    "name":"AIIMS Delhi",
    "year_founded":1921,
    "city":"Delhi",
    "state":"Delhi",
    "country":"India",
    "no_of_students":100,
    "courses":["MBBS","MD"]
    },{
    "ID": "10022",
    "name":"AIIMS Bhopal",
    "year_founded":1942,
    "city":"Bhopal",
    "state":"MP",
    "country":"India",
    "no_of_students":100,
    "courses":["MBBS"]
    }
    ]


var output= StateWiseAnalysis(x);
console.log(output[0]);
console.log(output[1]);