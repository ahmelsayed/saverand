import * as React from 'react';
import { Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import ScaleInterface from './components/ScaleInterface';

export const routes = <Layout>
    <Route exact path='/' component={ScaleInterface} />
</Layout>;
