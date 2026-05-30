import React, { useState } from "react";
import { Alert, ScrollView, StyleSheet, Text } from "react-native";
import AppInput from "../components/AppInput";
import AppButton from "../components/AppButton";

export default function CreateSkillScreen({ navigation }) {
  const [title, setTitle] = useState("");
  const [city, setCity] = useState("");
  const [description, setDescription] = useState("");

  const handleSave = () => {
    if (!title || !city || !description) {
      Alert.alert("Missing information", "Please complete all fields.");
      return;
    }

    Alert.alert("Saved", "Skill creation will connect to the backend next.");
    navigation.goBack();
  };

  return (
    <ScrollView style={styles.page} contentContainerStyle={styles.content}>
      <Text style={styles.heading}>Create Skill</Text>

      <AppInput
        label="Skill Title"
        value={title}
        onChangeText={setTitle}
        placeholder="Example: Carpenter"
      />

      <AppInput
        label="City"
        value={city}
        onChangeText={setCity}
        placeholder="Example: Bamenda"
      />

      <AppInput
        label="Description"
        value={description}
        onChangeText={setDescription}
        placeholder="Describe your service"
        multiline
      />

      <AppButton title="Save Skill" onPress={handleSave} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: "#f8fafc"
  },
  content: {
    padding: 16
  },
  heading: {
    fontSize: 24,
    fontWeight: "800",
    color: "#0f172a",
    marginBottom: 18
  }
});