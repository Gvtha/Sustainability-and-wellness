import React from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import DiseaseCard from "../components/DiseaseCard";

import Screen from "../components/Screen";
import VitalCard from "../components/VitalCard";
import color from "../config/colors";

class HomePage extends React.Component {
  state = {
    bodyTemperature: 0,
    bloodPressure: 0,
    respiration: 0,
    glucose: 0,
    heartRate: 0,
    oxygenSaturation: 0,
    cholestrol: 0,
  };

  getVitals = () => {
    fetch("https://random-data-med.herokuapp.com/api/prediabetes")
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        let data = res.data;
        this.setState({
          bodyTemperature: data.bodyTemperature,
          bloodPressure: data.bloodPressure,
          respiration: data.respiration,
          glucose: data.glucose,
          heartRate: data.heartRate,
          oxygenSaturation: data.oxygenSaturation,
          cholestrol: data.cholesterol,
        });
      });
  };

  componentDidMount() {
    this.getVitals();
    this.interval = setInterval(() => {
      this.getVitals();
    }, 30000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    let {
      bodyTemperature,
      bloodPressure,
      respiration,
      glucose,
      heartRate,
      oxygenSaturation,
      cholestrol,
    } = this.state;

    return (
      <Screen style={styles.container}>
        <View style={styles.headingTextContainer}>
          <Text style={styles.headingText}>Live Health Monitor</Text>
        </View>
        <View>
          <ScrollView
            horizontal={true}
            contentContainerStyle={styles.vitalDataContainer}
            showsHorizontalScrollIndicator={false}
          >
            <VitalCard title="Body Temperature" value={bodyTemperature} />
            <VitalCard title="Blood Pressure" value={bloodPressure} />
            <VitalCard title="Respiration" value={respiration} />
            <VitalCard title="Glucose" value={glucose} />
            <VitalCard title="Heart Rate" value={heartRate} />
            <VitalCard title="Blood Oxygen" value={oxygenSaturation} />
            <VitalCard title="Cholesterol" value={cholestrol} />
          </ScrollView>
        </View>

        <ScrollView contentContainerStyle={styles.diseaseStatusContainer}>
          <DiseaseCard
            title="Diabetes"
            description="increased level in blood sugar level (more than 200 mg/dl)"
            status={this.state.glucose > 200 ? true : false}
          />
          <DiseaseCard
            title="Prediabetes"
            description="blood sugar level 140 and 199 mg/dl"
            status={
              this.state.glucose > 140 && this.state.glucose < 200
                ? true
                : false
            }
          />
          <DiseaseCard
            title="Coronary heart disease"
            description="The  major  blood  vessels  that supply  the  heart  with  blood become clogged with deposits of cholesterol."
            status={false}
          />
          <DiseaseCard
            title="bronchiectasis"
            description="A person will have a persistent cough and frequent infections"
            status={false}
          />
          <DiseaseCard
            title="hypoxemia"
            description="Normal  oxygen  saturation  is  usually  between 96%and 98%.  Any  level  below  this  is considered dangerous and leads to hypoxemia."
            status={false}
          />
          <DiseaseCard
            title="Asthma"
            description="Is characterized by an oxygen saturation level of 92% to 95%, a pulse of 100 to 125 beats per minute, a respiratory rate of 20 to 30 breaths per minute"
            status={false}
          />
        </ScrollView>
      </Screen>
    );
  }
}

const styles = StyleSheet.create({
  container: { backgroundColor: color.light },
  vitalDataContainer: {
    marginVertical: 10,
    height: 250,
    alignItems: "center",
  },
  headingText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  headingTextContainer: {
    alignItems: "center",
    marginTop: 20,
  },
  diseaseStatusContainer: {
    backgroundColor: "transparent",
  },
});
export default HomePage;
