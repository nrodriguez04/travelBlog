import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";

import About from '../components/AboutSection';

const AboutPage = () => (
  <Layout>
    <SEO title="About Page" />
    <About/>
  </Layout>
);

export default AboutPage;
