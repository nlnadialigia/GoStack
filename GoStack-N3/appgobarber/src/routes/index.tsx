import React from 'react';
import { ActivityIndicator } from 'react-native';
import { View } from 'react-native';
import { useAuth } from '../hooks/auth';
import AppRoutes from './app.routes';
import AuthRoutes from './auth.routes';

const Routes: React.FC = () => {
  const { user, loading } = useAuth();

  if (loading) {
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ActivityIndicator size="large" color="#999" />
    </View>;
  }

  return user ? <AppRoutes /> : <AuthRoutes />;
};

export default Routes;
