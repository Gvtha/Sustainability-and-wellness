import urllib
import json
import os
import csv
import diseaseprediction
from flask import Flask 
from flask import request
from flask import make_response
import herepy
import re

app = Flask(__name__)

@app.route('/webhook',methods = ['POST'])
def webhook():
    req= request.get_json(silent=True , force= True)
    #print("Request: "+req)
    #print(json.dumps(req, indent=4))
    res = makeWebhookResult(req)
    res = json.dumps(res , indent=4)
    print(res)
    r = make_response(res)
    print(r)
    r.headers['Content-Type'] = 'application/json'
    return r


def makeWebhookResult(req):
    if req.get("queryResult").get("action")=="symptom":
        result = req.get("queryResult")
        parameters = result.get("parameters")
        symptom = parameters.get("symptom")
        disease = diseaseprediction.dosomething(symptom)
        print(disease)
        #speech = "you may have " + disease + ". Please, consult your doctor."
        #print(speech)
        if not disease:
            speech = "For further details Please click on the below link"
            disease = symptom[0]
        else:
            speech = "you may have " + disease + ". Please, consult your doctor."

        return{
            "fulfillmentText" : speech,
            "fulfillmentMessages": [
            {
                "platform": "ACTIONS_ON_GOOGLE",
                "simpleResponses": {
                    "simpleResponses": [ {
                        "textToSpeech": speech
                    }]
                }
            },
            {
                "platform": "ACTIONS_ON_GOOGLE",
                "linkOutSuggestion": {
                    "destinationName": "Details of disease",
                    "uri": "https://www.webmd.com/search/search_results/default.aspx?query="+disease
                }
            },
                    {
                        "platform": "ACTIONS_ON_GOOGLE",
                        "suggestions": {
                        "suggestions": [
                            {
                            "title": "Predict disease"
                            },
                            {
                            "title": "Details about disease"
                            },
                            {
                            "title": "Know nearby hospitals"
                            },
                            {
                            "title": "Thank you"
                            }
                        ]
                        }
                    }]
        }
    if req.get("queryResult").get("action")=="Detailsaboutsymptoms.Detailsaboutsymptoms-custom":
        result = req.get("queryResult")
        parameters = result.get("parameters")
        symptom = parameters.get("disease")
        speech = "For further details Please click on the below link"
        disease = symptom
        return{
            "fulfillmentText" : speech,
            "fulfillmentMessages": [
            {
                "platform": "ACTIONS_ON_GOOGLE",
                "simpleResponses": {
                    "simpleResponses": [ {
                        "textToSpeech": speech
                    }]
                }
            },
            {
                "platform": "ACTIONS_ON_GOOGLE",
                "linkOutSuggestion": {
                    "destinationName": "Details of disease",
                    "uri": "https://www.webmd.com/search/search_results/default.aspx?query="+disease
                }
            },
            {
                        "platform": "ACTIONS_ON_GOOGLE",
                        "suggestions": {
                        "suggestions": [
                            {
                            "title": "Predict disease"
                            },
                            {
                            "title": "Details about disease"
                            },
                            {
                            "title": "Know nearby hospitals"
                            },
                            {
                            "title": "Thank you"
                            }
                        ]
                        }
                    }]
        }
    if req.get("queryResult").get("action")=="google":
        result = req.get("queryResult")
        parameters = result.get("parameters")
        location = parameters.get("geo-city")
        hospital_name = []
        hospital_address = []
        speech = ""
        geocoderApi = herepy.GeocoderApi('NYzvNeZQL5quJfEWEUccVGR-nXIIVt3PeFj1X11dWkw')
        placesApi = herepy.PlacesApi('NYzvNeZQL5quJfEWEUccVGR-nXIIVt3PeFj1X11dWkw')

        
        

        response = geocoderApi.free_form(location)
        dict = response.as_dict()
        print(dict)
        position = dict['items'][0]['position']
        latitude = position['lat']
        longitude = position['lng']

        response = placesApi.category_places_at([latitude, longitude], [herepy.PlacesCategory.hospital_health_care_facility])
        dict = response.as_dict()



        for i in range(0,10):
            #print(places_result["results"])
                hospitalname = dict["results"]["items"][i]["title"]
                hospital_name.append(hospitalname)
        
                hospitaladdress = dict["results"]["items"][i]["vicinity"]
                hospital_address.append(hospitaladdress)

        for i in range(0,len(hospital_name)):
            speech += "<br/><br/>Hospital name: " + hospital_name[i] +"<br/>Hospital Address: " + hospital_address[i] 
        return{
            "fulfillmentText" : speech,
            "fulfillmentMessages": [
            {
                "platform": "ACTIONS_ON_GOOGLE",
                "simpleResponses": {
                    "simpleResponses": [ {
                        "textToSpeech": speech
                    }]
                }
            },{
                        "platform": "ACTIONS_ON_GOOGLE",
                        "suggestions": {
                        "suggestions": [
                            {
                            "title": "Predict disease"
                            },
                            {
                            "title": "Details about disease"
                            },
                            {
                            "title": "Know nearby hospitals"
                            },
                            {
                            "title": "Thank you"
                            }
                        ]
                        }
                    }]
            
        }

if __name__ == "__main__":
    port = int(os.getenv('PORT', 80))
    print("starting on port %d" %(port))
    app.run(debug= True, port= 80)