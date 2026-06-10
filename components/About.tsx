'use client'

import { motion } from 'framer-motion'
import { HiCheckCircle } from 'react-icons/hi2'

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  const achievements = [
    'Built multiple SEO-focused websites',
    'Improved website speed by 60%',
    'Optimized websites for higher search rankings',
    'Developed scalable full-stack systems',
  ]

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          {/* Left - Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <motion.h2
                variants={itemVariants}
                className="text-3xl sm:text-4xl font-bold mb-4"
              >
                About Me
              </motion.h2>
              <motion.div
                variants={itemVariants}
                className="w-12 h-1 bg-gradient-to-r from-accent to-blue-500 rounded-full"
              ></motion.div>
            </div>

            <motion.p
              variants={itemVariants}
              className="text-text-secondary text-lg leading-relaxed"
            >
              With 6 years of experience building digital products, I&apos;ve developed a passion for creating fast, scalable, and SEO-optimized web solutions. I believe great web development combines technical excellence with business strategy.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-text-secondary text-lg leading-relaxed"
            >
            My journey has taken me through WordPress ecosystems, modern JavaScript frameworks, and performance optimization. I&apos;ve helped startups and established businesses grow their online presence through smart development and SEO strategies.

            </motion.p>

            {/* Achievements */}
            <motion.div variants={containerVariants} className="space-y-3 pt-4">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex items-start space-x-3"
                >
                  <HiCheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                  <span className="text-text-secondary">{achievement}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right - Visual Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="glass p-8 rounded-2xl space-y-6">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Location</h3>
                <p className="text-text-secondary">Roorkee, Uttarakhand, India</p>
              </div>

              <div className="border-t border-border pt-6 space-y-4">
                <h3 className="text-xl font-semibold">Quick Facts</h3>
                <ul className="space-y-2 text-text-secondary text-sm">
                  <li>• Started web development in 2018</li>
                  <li>• Built 50+ projects across industries</li>
                  <li>• Specialized in WordPress & Next.js</li>
                  <li>• SEO expert with proven results</li>
                  <li>• Always learning new technologies</li>
                </ul>
              </div>

              <div className="border-t border-border pt-6 space-y-4">
                <h3 className="text-xl font-semibold">When I&apos;m not coding</h3>
                <p className="text-text-secondary text-sm">
                  I&apos;m exploring SEO trends, reading about web performance, creating content about web development, or spending time with family.
                </p>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-accent/10 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-blue-500/10 rounded-full blur-2xl"></div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
