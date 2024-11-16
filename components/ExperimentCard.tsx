import { Experiment } from '@/Types';
import { useRouter } from 'expo-router';
import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import { Card, Title, Paragraph, Button } from 'react-native-paper';
import Markdown from 'react-native-markdown-display';

const ExperimentCard = ({ experiment }: { experiment: Experiment }) => {
  const router = useRouter();

  const handlePress = () => {
    router.push(`/experiment/${experiment._id}`);
  };

  return (
    <Card style={styles.card} onPress={handlePress}>
      <Card.Content>
        <Title style={styles.title}>{experiment.ExpName}</Title>
        <Paragraph style={styles.paragraph}>Year: {experiment.year}</Paragraph>
        <Paragraph style={styles.paragraph}>ACE Year: {experiment.aceYear}</Paragraph>
        <Paragraph style={styles.paragraph}>Branch: {experiment.Branch}</Paragraph>
        <Paragraph style={styles.paragraph}>Course Code: {experiment.CCode}</Paragraph>
        <Paragraph style={styles.paragraph}>Course Name: {experiment.CName}</Paragraph>
        <Paragraph style={styles.paragraph}>Experiment Number: {experiment.ExpNo}</Paragraph>
        <Markdown style={styles.markdown}>{experiment.ExpDesc}</Markdown>
      </Card.Content>
      <Card.Actions>
        <Button onPress={handlePress} color="#6200ee">View Details</Button>
      </Card.Actions>
    </Card>
  );
};

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  card: {
    marginBottom: 20,
    borderRadius: 10,
    elevation: 3,
    backgroundColor: "#ffffff",
    width: width - 20,
    marginHorizontal: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#6200ee",
    marginBottom: 10,
  },
  paragraph: {
    fontSize: 16,
    color: "#333333",
    marginBottom: 5,
  },
  markdown: {
    fontSize: 16,
    color: "#444444",
    backgroundColor: "#f0f0f0",
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
});

export default ExperimentCard;