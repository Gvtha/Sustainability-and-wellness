const userModel = require("../../model/user")
const bcrypt = require('bcryptjs')

const randomNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min) + min);
};

const randomTemperature = (min, max) => {
let temperature = Math.random() * (max - min) + min;
return temperature.toFixed(2);
};

let createUser=(params)=>{
    return new Promise((resolve,reject)=>{
      const newUser= new userModel({
          firstName:params.firstName,
          lastName:params.lastName,
          emailId:params.emailId,
          password:params.password,
          age:params.age,
          gender:params.gender,
          height:params.height,
          weight:params.weight,
          id:params.id,
          recordData:[{
            Date:new Date().toLocaleString(),
            Bt: randomTemperature(35.5, 37.5),
            Bp: randomNumber(80, 120),
            Rp: randomNumber(12, 16),
            Gs: randomNumber(72, 140),
            Os: randomNumber(95, 100),
            Hr: randomNumber(60, 100),
            Cl: randomNumber(125, 200)
          }]
      })
      newUser.save(err =>{
          if(err){
              reject(err)
          }
          else{
              resolve(newUser)
          }
      })
  })
}

let findById=(id)=>{
    return new Promise((resolve,reject)=>{
        userModel.findById(id)
        .then(res=>{
            resolve(res)
        })
        .catch(err=>{
            reject(err)
        })
    })
}


let viewUserByEmailId=(emailId)=>{
    return new Promise((resolve,reject)=>{
        userModel.findOne({"emailId":emailId})
        .then(res=>{resolve(res)})
        .catch(err=>{reject(err)})
    })
}

let updateUser=(user)=>{
    return new Promise((resolve,reject)=>{
        userModel.findOne({"emailId":user.emailId})
        .then(res=>{
            if(!res){
                reject({"message":"user not found"})
            }
            else{
                let updateQuery={
                        emailId:user.emailId,
                        firstName:user.firstName,
                        lastName:user.lastName,
                        phoneNumber:user.phoneNumber
                }
                userModel.updateOne({"emailId":user.emailId},updateQuery)
                .then(res=>{resolve(res)})
                .catch(err=>{reject(err)})
            }
        })
        .catch(err=>{reject(err)})
    })
}

let updateUserRole=(user)=>{
  return new Promise((resolve,reject)=>{
    userModel.updateOne({"_id":user._id},{'role':user.role})
    .then(res=>{resolve(res)})
    .catch(err=>{reject(err)})
  })
}


let changePassword=(user)=>{
  return new Promise((resolve,reject)=>{
      userModel.findOne({"emailId":user.emailId})
      .then(res=>{
          if(!res){
              reject({"message":"user not found"})
          }
          else{
              let updateQuery={
                      password:user.pass,
              }
              userModel.updateOne({"emailId":user.emailId},updateQuery)
              .then(res=>{resolve(res)})
              .catch(err=>{reject(err)})
          }
      })
      .catch(err=>{reject(err)})
  })
}


let viewAdmin=()=>{
    return new Promise((resolve,reject)=>{
        userModel.find(function(err,result){
            if (err){
                reject(err)
            }
            else{
                resolve(result)
            }
        })
    })
}

let deleteUser=(emailId)=>{
    return new Promise((resolve,reject)=>{
        userModel.findOne({"emailId":emailId})
        .then(res=>{
            if(res){
                userModel.deleteOne({"emailId":emailId})
                .then(res=>{resolve(res)})
                .catch(err=>{reject(err)})
            }
            else{
                reject({"message":"user not found"})
            }
        })
        .catch(err=>{reject(err)})
    })
}

let deleteUserById=(id)=>{
    return new Promise((resolve,reject)=>{
        userModel.findOne({"_id":id})
        .then(res=>{
            if(res){
                userModel.deleteOne({"_id":id})
                .then(res=>{resolve(res)})
                .catch(err=>{reject(err)})
            }
            else{
                reject({"message":"user not found"})
            }
        })
        .catch(err=>{reject(err)})
    })
}

let viewUser=()=>{
    return new Promise((resolve,reject)=>{
        userModel.find({})
        .then(res=>{resolve(res)})
        .catch(err=>{reject(err)})
    })
}

let loginUser=(params)=>{
    return new Promise((resolve,reject)=>{
        console.log(params);
        userModel.findOne({"emailId":params.emailId})
        .then(res=>{
            console.log(res);
            bcrypt.compare(params.password, res.password, (err, isMatch) => {
                if (err) reject(err)

                if (isMatch) {
                    resolve(res)
                }
                else {
                // Password is incorrect
                resolve({ message : "Incorrect Password" });
                }
            })
        })
        .catch(err=>{reject(err)})
    })
    
}


module.exports = {
    createUser,
    findById,
    viewUserByEmailId,
    updateUser,
    deleteUser,
    viewUser,
    changePassword,
    deleteUserById,
    loginUser
}
