import React, { useState } from "react";
import { Alert, ScrollView, StyleSheet, Text } from "react-native";
import AppInput from "../components/AppInput";
import AppButton from "../components/AppButton";

export default function EditSkillScreen({ route, navigation }) {
  const skill = route.params?.skill;

  const [title, setTitle] = useState(skill?.title || "");
  const [city, setCity] = useState(skill?.city || "");
  const [description, setDescription] = useState("");

  const handleUpdate = () => {
    if (!title || !city) {
      Alert.alert("Missing information", "Title and city are required.");
      return;
    }

    Alert.alert("Updated", "Skill update will connect to the backend next.");
    navigation.goBack();
  };

  return (
    <ScrollView style={styles.page} contentContainerStyle={styles.content}>
      <Text style={styles.heading}>Edit Skill</Text>

      <AppInput
        label="Skill Title"
        value={title}
        onChangeText={setTitle}
        placeholder="Skill title"
      />

      <AppInput
        label="City"
        value={city}
        onChangeText={setCity}
        placeholder="City"
      />

      <AppInput
        label="Description"
        value={description}
        onChangeText={setDescription}
        placeholder="Update service description"
        multiline
      />

      <AppButton title="Update Skill" onPress={handleUpdate} />
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