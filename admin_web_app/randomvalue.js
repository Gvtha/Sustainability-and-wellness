const MongoClient = require("mongodb").MongoClient

randomvaluegen()
async function randomvaluegen(){
  try {
    
    const host = "mongodb+srv://jeevitha:jeevitha@sandbox.ezklo.mongodb.net"
    const client = await MongoClient.connect(host, { useNewUrlParser: true })
    const database = client.db("fitnessApi")
    const randomNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min) + min);
      };

      const randomTemperature = (min, max) => {
        let temperature = Math.random() * (max - min) + min;
        return temperature.toFixed(2);
      };

    function sleep(milliseconds) {
        const date = Date.now();
        let currentDate = null;
        do {
          currentDate = Date.now();
        } while (currentDate - date < milliseconds);
      }
      
    while(true)
    {  
    var Json={
        Date:new Date().toLocaleString(),
        Bt: randomTemperature(35.5, 37.5),
        Bp: randomNumber(80, 120),
        Rp: randomNumber(12, 16),
        Gs: randomNumber(72, 140),
        Os: randomNumber(95, 100),
        Hr: randomNumber(60, 100),
        Cl: randomNumber(125, 200)
      }

      console.log(Json);
        const { modifiedCount }= await database.collection("users").updateOne({"id":"111"},{ "$push": { "recordData" : Json } })
        console.log(modifiedCount);
        Json={
        Date:new Date().toLocaleString(),
        Bt: randomTemperature(35.5, 37.5),
        Bp: randomNumber(80, 120),
        Rp: randomNumber(12, 16),
        Gs: randomNumber(72, 140),
        Os: randomNumber(95, 100),
        Hr: randomNumber(60, 100),
        Cl: randomNumber(125, 200)
      }
      await database.collection("users").updateOne({"id":"112"},{ "$push": { "recordData" : Json } })

        await sleep(30000)
    }
}
    catch(error){
        console.log(error)
    }
}