/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Leadership } from './pages/Leadership';
import { Branches } from './pages/Branches';
import { YouthMinistry } from './pages/YouthMinistry';
import { ChildrenMinistry } from './pages/ChildrenMinistry';
import { Outreach } from './pages/Outreach';
import { Contact } from './pages/Contact';
import { Giving } from './pages/Giving';
import { Registration } from './pages/Registration';

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/leadership" element={<Leadership />} />
          <Route path="/branches" element={<Branches />} />
          <Route path="/youth-ministry" element={<YouthMinistry />} />
          <Route path="/children-ministry" element={<ChildrenMinistry />} />
          <Route path="/outreach" element={<Outreach />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/giving" element={<Giving />} />
          <Route path="/registration" element={<Registration />} />
          {/* Fallback for giving, privacy, terms if needed */}
          <Route path="*" element={<Home />} />
        </Routes>
      </Layout>
    </Router>
  );
}
