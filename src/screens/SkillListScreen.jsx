import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import AppButton from "../components/AppButton";
import { useAuth } from "../context/AuthContext";

const mockSkills = [
  {
    id: 1,
    title: "Carpentry",
    city: "Bamenda",
    status: "active"
  },
  {
    id: 2,
    title: "Plumbing",
    city: "Douala",
    status: "active"
  }
];

export default function SkillListScreen({ navigation }) {
  const { logout, provider } = useAuth();

  return (
    <View style={styles.page}>
      <Text style={styles.heading}>Welcome, {provider?.name}</Text>
      <Text style={styles.description}>
        Manage your provider skills from the mobile app.
      </Text>

      <AppButton
        title="Create New Skill"
        onPress={() => navigation.navigate("CreateSkill")}
      />

      <FlatList
        data={mockSkills}
        keyExtractor={(item) => String(item.id)}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.skillTitle}>{item.title}</Text>
            <Text style={styles.skillMeta}>City: {item.city}</Text>
            <Text style={styles.skillMeta}>Status: {item.status}</Text>

            <AppButton
              title="Edit Skill"
              variant="secondary"
              onPress={() => navigation.navigate("EditSkill", { skill: item })}
            />
          </View>
        )}
      />

      <AppButton title="Logout" variant="secondary" onPress={logout} />
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: "#f8fafc",
    padding: 16
  },
  heading: {
    fontSize: 22,
    fontWeight: "800",
    color: "#0f172a"
  },
  description: {
    color: "#475569",
    marginTop: 4,
    marginBottom: 14
  },
  list: {
    paddingBottom: 20
  },
  card: {
    backgroundColor: "#ffffff",
    borderRadius: 14,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#e2e8f0"
  },
  skillTitle: {
    fontSize: 18,
    fontWeight: "800",
    color: "#0f766e"
  },
  skillMeta: {
    fontSize: 14,
    color: "#475569",
    marginTop: 4
  }
});