import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, Image, ScrollView, TouchableOpacity } from 'react-native';

type Community = {
  _id: string;
  clerkId: string;
  name: string;
  username: string;
  email: string;
  password?: string;
  bio?: string;
  picture: string;
  location?: string;
  portfolioWebsite?: string;
  reputation?: string;
  joinedAt?: Date;
};

const Three = ({ community }: { community: Community }) => {
  return (
    <TouchableOpacity onPress={() => console.log(community)} style={{ marginBottom: 20, padding: 10, backgroundColor: '#eee', borderRadius: 10 , width : 300 , height : 300 }}>
      <Image source={{ uri: community.picture }} style={{ width: 100, height: 100, borderRadius: 50 }} />
      <Text>Name: {community.name}</Text>
      <Text>Username: {community.username}</Text>
      <Text>Email: {community.email}</Text>
      {community.bio && <Text>Bio: {community.bio}</Text>}
      {community.location && <Text>Location: {community.location}</Text>}
      {community.portfolioWebsite && <Text>Portfolio Website: {community.portfolioWebsite}</Text>}
    </TouchableOpacity>
  );
};

const CommunityList = () => {
  const [isLoading, setLoading] = useState(true);
  const [communities, setCommunities] = useState<Community[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://connect-craft.vercel.app/api/community');
        const json = await response.json();
        setCommunities(json.user);
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
          communities.map((community) => <Three key={community._id} community={community} />)
        )}
      </View>
    </ScrollView>
  );
};

export default CommunityList;
