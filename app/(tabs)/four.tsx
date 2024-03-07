import { Experiment } from '@/Types';
import { useRouter } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, ScrollView, Text, TouchableOpacity, View, StyleSheet } from 'react-native';

const App = ({ experiment } : { experiment: Experiment }) => {
  const router = useRouter();

  const handlePress = () => {
    router.push({ pathname: "/experiment/[id]", params: { id: experiment._id } });
  };
  return (
    <TouchableOpacity onPress={handlePress} style={styles.card}>
      <Text style={styles.text}>Year: {experiment?.year}</Text>
      <Text style={styles.text}>ACE Year: {experiment?.aceYear}</Text>
      <Text style={styles.text}>Branch: {experiment?.Branch}</Text>
      <Text style={styles.text}>Course Code: {experiment?.CCode}</Text>
      <Text style={styles.text}>Course Name: {experiment?.CName}</Text>
      <Text style={styles.text}>Experiment Number: {experiment?.ExpNo}</Text>
      <Text style={styles.text}>Experiment Name: {experiment?.ExpName}</Text>
      <Text style={styles.text}>Experiment Name: {experiment.ExpDesc}</Text>
    </TouchableOpacity>
  );
};

const ExperimentList = () => {
  const [isLoading, setLoading] = useState(true);
  const [experiments, setExperiments] = useState<Experiment[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://connect-craft.vercel.app/api/experiments');
        const json = await response.json();
        setExperiments(json.experiments);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={{ justifyContent: 'center', alignItems: 'center', paddingVertical: 20 }}>
        {isLoading ? (
          <ActivityIndicator size="large" color="blue" />
        ) : (
          experiments.map((exp) => <App key={exp._id} experiment={exp} />)
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  card: {
    marginBottom: 20,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    width: 300,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  text: {
    fontSize: 16,
    marginBottom: 5,
  },
});

export default ExperimentList;