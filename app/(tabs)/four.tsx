import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Text, View } from 'react-native';

type Experiment = {
    _id: string;
    year: number;
    aceYear: string;
    Branch: string;
    CCode: string;
    CName: string;
    ExpNo: number;
    ExpName: string;
    ExpDesc: string;
    ExpSoln: string;
    __v: number;
};

const App = () => {
    const [isLoading, setLoading] = useState(true);
    const [experiment, setExperiment] = useState<Experiment | null>(null);

    const getExperiment = async () => {
        try {
            const response = await fetch('https://connect-craft-git-main-ajamit17.vercel.app/api/experiments/65df0ff5b2cbab70b057b4cc');
            const json = await response.json();
            setExperiment(json);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getExperiment();
    }, []);

    return (
        <View style={{ flex: 1, padding: 24 }}>
            <View>
                <Text style={{ color: 'white' }}>ID: {experiment?._id}</Text>
                <Text style={{ color: 'white' }}>Year: {experiment?.year}</Text>
                <Text style={{ color: 'white' }}>Ace Year: {experiment?.aceYear}</Text>
                <Text style={{ color: 'white' }}>Branch: {experiment?.Branch}</Text>
                <Text style={{ color: 'white' }}>Code: {experiment?.CCode}</Text>
                <Text style={{ color: 'white' }}>Name: {experiment?.CName}</Text>
                <Text style={{ color: 'white' }}>Experiment Description: {experiment?.ExpDesc}</Text>
                <Text style={{ color: 'white' }}>Experiment Name: {experiment?.ExpName}</Text>
                <Text style={{ color: 'white' }}>Experiment Solution: {experiment?.ExpSoln}</Text>
            </View>
        </View>
    );
};

export default App;