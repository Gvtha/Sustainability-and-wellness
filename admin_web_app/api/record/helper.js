const recordModel = require("../../model/user")
const {ObjectId} = require('mongodb')

let createRecord=(params)=>{
    return new Promise((resolve,reject)=>{
     let updateQuery={
        Date:new Date().toLocaleString(),
        Bt:params.Bt,
        Bp:params.Bp,
        Rp:params.Rp,
        Gs:params.Gs,
        Os:params.Os,
        Cl:params.Cl,
        Hr:params.Hr
     }
     recordModel.updateOne(
            {"id":params.userId },
            { "$push": { "recordData" : updateQuery  } })
            .then(result=>{resolve(result)})
            .catch(err =>{reject(err)})
    })
}

let createRecordUser=(params)=>{
    return new Promise((resolve,reject)=>{
      const newRecord= new recordModel({
        userId:params.userId,
        recordData:[]
      })
      newRecord.save(err =>{
          if(err){
              reject(err)
          }
          else{
              resolve(newRecord)
          }
      })
  })
}


let viewRecored=(userId)=>{
    return new Promise((resolve,reject)=>{
        recordModel.findOne({"_id":userId}).populate('userId')
        .then(res=>{resolve(res)})
        .catch(err=>{reject(err)})
    })
}

let viewLatestRecord=(userId)=>{
    return new Promise((resolve,reject)=>{
        console.log(userId);
        recordModel.aggregate(
            [
                {
                    '$match': {
                        'userId': ObjectId(userId)
                    }
                }, {
                    '$project': {
                        'latestData': {
                            '$slice': [
                                '$recordData', -1
                            ]
                        }
                    }
                }
            ]
        )
        .then(res=>{resolve(res)})
        .catch(err=>{reject(err)})
    })
}


let viewAllRecord=()=>{
    return new Promise((resolve,reject)=>{
        recordModel.find({},{"recordData":{"$slice":-1}}).populate('userId')
        .then(res=>{resolve(res)})
        .catch(err=>{reject(err)})
    })
}

let averageRecord=(emailId)=>{
    return new Promise((resolve,reject)=>{
        console.log(emailId);
        recordModel.findOne({"emailId":emailId})
        .then(res=>{
            console.log(res);
            let avgBt=0
            let avgBp=0
            let avgRp=0
            let avgGs=0
            let avgOs=0
            let avgCl=0
            let avgHr=0
            res.recordData.forEach(element => {
                avgBp+=element.Bp
                avgBt+=element.Bt
                avgRp+=element.Rp
                avgGs+=element.Gs
                avgOs+=element.Os
                avgCl+=element.Cl
                avgHr+=element.Hr
            });
            avgBp=avgBp/res.recordData.length
            avgBt=avgBt/res.recordData.length
            avgRp=avgRp/res.recordData.length
            avgGs=avgGs/res.recordData.length
            avgOs=avgOs/res.recordData.length
            avgCl=avgCl/res.recordData.length
            avgHr=avgHr/res.recordData.length
            resolve({"avgBp":avgBp,
                "avgBt":avgBt,
                "avgRp":avgRp,
                "avgGs":avgGs,
                "avgOs":avgOs,
                "avgCl":avgCl,
                "avgHr":avgHr
            })
        })
        .catch(err=>{reject(err)})
    })
}
module.exports = {
    createRecord,
    viewRecored,
    createRecordUser,
    viewLatestRecord,
    viewAllRecord,
    averageRecord
}
