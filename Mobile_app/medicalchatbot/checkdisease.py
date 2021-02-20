from sklearn.ensemble import RandomForestClassifier
from sklearn.tree import DecisionTreeClassifier
from sklearn.model_selection import train_test_split
import csv,numpy as np,pandas as pd
import os

data = pd.read_csv("Training.csv")
df = pd.DataFrame(data)
df.head()
cols = df.columns
print()
cols = cols[:-1]
#print(cols)
x = df[cols]
y = df['prognosis']
#print(y)
x_train, x_test, y_train, y_test = train_test_split(x, y, test_size=0.33, random_state=42)

#print ("DecisionTree")
#dt = DecisionTreeClassifier()
dt = RandomForestClassifier()
clf_dt=dt.fit(x_train,y_train)
#print(clf_dt)
#print ("Acurracy: ", clf_dt.score(x_test,y_test))
# with open('templates/Testing.csv', newline='') as f:
#         reader = csv.reader(f)
#         symptoms = next(reader)
#         symptoms = symptoms[:len(symptoms)-1]

indices = [i for i in range(132)]
#print(indices)
symptoms = df.columns.values[:-1]

dictionary = dict(zip(symptoms,indices))
#print(dictionary)

def dosomething(symptom):
    user_input_symptoms = symptom
    user_input_label = [0 for i in range(132)]
    for i in user_input_symptoms:
        #print(i)
        idx = dictionary[i]
        user_input_label[idx] = 1

    user_input_label = np.array(user_input_label)
    user_input_label = user_input_label.reshape((-1,1)).transpose()
    disease = dt.predict(user_input_label)
    #print(disease[0])
    return disease[0]

print(dosomething(['polyuria','chest_pain','vomiting']))
print(dosomething(['dark_urine','yellowish_skin','high_fever']))
print(dosomething(['nausea','headache','high_fever','diarrhoea']))
print(dosomething(['malaise','sweating','high_fever','fatigue','loss_of_appetite']))


#prediction = []
#for i in range(7):
    #pred = dosomething(['headache','muscle_weakness','puffy_face_and_eyes','mild_fever','skin_rash'])   
    #prediction.append(pred) 
#print(prediction)headache,muscle_weakness,puffy_face_and_eyes,mild_fever,skin_rash