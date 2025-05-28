import React from 'react';
import Layout from '@theme/Layout';

export default function Home() {
  return (
    <Layout
      title="Welcome"
      description="UAlg Cafeteria App – Feeding the future">
      <main style={{ padding: '2rem', textAlign: 'center' }}>
        <h1>Welcome to the UAlg Cafeteria App</h1>
        <p>Use the navigation bar to explore the guides.</p>
      </main>
    </Layout>
  );
}
