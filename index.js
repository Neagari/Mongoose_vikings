//Make sure to require your model so you can connect to the DB
const VikingModel = require("./models/VikingModel");
//This line of code connects to the Database
require("./db");
/*mongoose
.connect("mongodb://127.0.0.1/viking")
.then(()=>{
    console.log("Great job, you connected to viking")
})
.catch((err)=>{
console.log("There was an error connecting", err)
}); */

//Iteration 2:
const viking = {
    firstName: "Spak",
    familyName: "Valhalla",
    strength: 99,
    weapon: "Axe",
}

VikingModel.create(viking)
.then((newVikingInDB)=>{
    console.log("Nice, now you got a new Viking",newVikingInDB) 
})
.catch((err)=>{
    console.log("There was error creating the Viking",err)
})

const deleteViking = async () => {
try{
    const deletedViking = await VikingModel.findOneAndDelete({
firstName: "Spak"
    });
    console.log("viking deleted", deletedViking);
}catch(err) {
    console.log(err);
}
};
deleteViking();

const updateViking = async()=>{
    try{
        const updateViking = await VikingModel.findOneAndUpdate(
            {firstName : "Spak"},
            {firstName: "Odin", streng: 1000},
            {new:true}
        );
            
    console.log("Viking updated", updateViking);
} catch (err){
    console.log(err);
}
};
updateViking()
//Iteration 3: