import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

function Landing() {
  const stageRef = useRef(null);
  const navigate = useNavigate();

  const { scrollYProgress } = useScroll({
    target: stageRef,
    offset: ['start start', 'end start'],
  });

  const blackPanelX = useTransform(scrollYProgress, [0, 0.65, 1], ['-100%', '0%', '0%']);
  const maskLineWidth = useTransform(scrollYProgress, [0, 1], ['16%', '60%']);
  const maskX = useTransform(scrollYProgress, [0, 0.5, 1], ['0%', '-50%', '-100%']);

  return (
    <div className="page">
      <section ref={stageRef} className="split-stage" aria-label="Hero transition">
        <div className="split-stage__sticky">
          <div className="panel panel--white" />
          <motion.div className="panel panel--black" style={{ x: blackPanelX }}>
            <div className="panel__content panel__content--fade">
              <p className="panel__eyebrow panel__eyebrow--solid">Developer · Storyteller</p>
              <h2>
                I build systems that feel humane—from full-stack apps to thoughtful,
                research-driven experiences.
              </h2>
              <p>I design and build digital tools with clarity, empathy, and technical precision.</p>
            </div>
          </motion.div>

          <motion.div className="mask" style={{ x: maskX, translateX: '-50%' }}>
            <p className="mask__eyebrow">Hey!</p>
            <h1 className="mask__title">I’m Emma</h1>
            <motion.span className="mask__line" style={{ width: maskLineWidth }} />
          </motion.div>
        </div>
      </section>

      <section className="cta-blink" aria-label="More about Emma">
        <div className="cta-blink__frame">
          <button className="cta-blink__button" onClick={() => navigate('/home')}>
            <span>Uncover more about me & my work</span>
          </button>
        </div>
      </section>
    </div>
  );
}

export default Landing;

