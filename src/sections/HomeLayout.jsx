import React from "react";
import { motion } from "framer-motion";
import Hero from "./Hero";
import Introduction from "./Introduction";
import ComprehensiveSection from "./ComprehensiveSection";
import FeaturesAndWorkflow from "./FeaturesAndWorkflow";
import Integrations from "./Integrations";
import Team from "./Team";
import Testimonials from "./Testimonials";
import Pricing from "./Pricing";
import Faqs from "./Faqs";
import CallToAction from "./CallToAction";

export default function HomeLayout() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <section id="hero"><Hero /></section>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
      >
        <section id="introduction"><Introduction /></section>
      </motion.div>

      <section id="features"><ComprehensiveSection /></section>
      <section id="features-workflow"><FeaturesAndWorkflow /></section>
      <section id="integrations"><Integrations /></section>
      <section id="team"><Team /></section>
      <section id="testimonials"><Testimonials /></section>
      <section id="pricing"><Pricing /></section>
      <section id="faqs"><Faqs /></section>
      <section id="call-to-action"><CallToAction /></section>
    </>
  );
}