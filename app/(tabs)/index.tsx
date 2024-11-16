import React from 'react';
import { StyleSheet, View, Dimensions, ScrollView, Image } from 'react-native';
import { Button, Title, Text } from 'react-native-paper';
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');

const HomePage = () => {
  return (
    <ScrollView style={styles.container}>
      <StatusBar style="light" />
      <LinearGradient
        colors={['#6200ee', '#9747FF']}
        style={styles.heroSection}
      >
        <MaterialCommunityIcons name="book-open-page-variant" size={60} color="white" />
        <Title style={styles.title}>LibWise</Title>
        <Text style={styles.subtitle}>Your Lab Companion</Text>
      </LinearGradient>

      <View style={styles.content}>
        <Text style={styles.welcomeText}>
          Welcome to NHCE CSE-DS 2026
        </Text>

        <View style={styles.featuresContainer}>
          <View style={styles.featureItem}>
            <MaterialCommunityIcons name="flask" size={40} color="#6200ee" />
            <Text style={styles.featureText}>Access Lab Experiments</Text>
          </View>

          <View style={styles.featureItem}>
            <MaterialCommunityIcons name="notebook" size={40} color="#6200ee" />
            <Text style={styles.featureText}>Detailed Solutions</Text>
          </View>

          <View style={styles.featureItem}>
            <MaterialCommunityIcons name="school" size={40} color="#6200ee" />
            <Text style={styles.featureText}>Course Materials</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  heroSection: {
    height: height * 0.4,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 42,
    fontWeight: 'bold',
    color: '#ffffff',
    marginTop: 20,
  },
  subtitle: {
    fontSize: 18,
    color: '#ffffff',
    opacity: 0.9,
    marginTop: 10,
  },
  content: {
    padding: 20,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: '600',
    color: '#333',
    textAlign: 'center',
    marginVertical: 20,
  },
  featuresContainer: {
    marginVertical: 30,
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 15,
    backgroundColor: '#f5f5f5',
    padding: 20,
    borderRadius: 10,
  },
  featureText: {
    fontSize: 18,
    marginLeft: 15,
    color: '#333',
    flex: 1,
  },
  button: {
    marginTop: 20,
    backgroundColor: '#6200ee',
    borderRadius: 30,
  },
  buttonContent: {
    paddingVertical: 8,
  },
});

export default HomePage;