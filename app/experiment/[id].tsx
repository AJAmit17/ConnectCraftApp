import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator, ScrollView } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

const ExperimentPage = () => {
    const params = useLocalSearchParams();
    const [experiment, setExperiment] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getExperiment = async () => {
            try {
                const res = await fetch(`https://connect-craft.vercel.app/api/experiments/${params.id}`);
                if (!res.ok) {
                    throw new Error('Failed to fetch experiment');
                }
                const json = await res.json();
                setExperiment(json);
            } catch (error) {
                console.log(error);
                throw Error;
            } finally {
                setLoading(false);
            }
        };

        getExperiment();
    }, [params.id]);

    if (loading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        );
    }

    if (!experiment) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>No experiment found</Text>
            </View>
        );
    }

    return (
        <ScrollView style={{ flex: 1 }}>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: "#fff" }}>
                <Text>Experiment Details:</Text>
                <Text>ID: {experiment._id}</Text>
                <Text>Year: {experiment.year}</Text>
                <Text>Academic Year: {experiment.aceYear}</Text>
                <Text>Branch: {experiment.Branch}</Text>
                <Text>Course Name: {experiment.CName}</Text>
                <Text>Course Code: {experiment.CCode}</Text>
                <Text>Experiment Number: {experiment.ExpNo}</Text>
                <Text>Name: {experiment.ExpName}</Text>
                <Text>Description: {experiment.ExpDesc}</Text>
                <Text>Year: {experiment.ExpSoln}</Text>
            </View>
        </ScrollView>
    );
};

export default ExperimentPage;