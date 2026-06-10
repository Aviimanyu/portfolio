'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { HiHeart } from 'react-icons/hi2'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ]

  const socialLinks = [
    { name: 'GitHub', href: 'https://github.com/Aviimanyu' },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/wordpress-seo-specialist-abhi/' },
  ]

  return (
    <footer className="border-t border-border bg-primary/50 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12"
        >
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">AY</span>
              </div>
              <span className="text-lg font-bold gradient-text">Abhimanyu</span>
            </Link>
            <p className="text-text-secondary text-sm">
              Full Stack Developer & SEO Consultant building fast, scalable web solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-text-secondary hover:text-accent transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Social</h3>
            <ul className="space-y-2">
              {socialLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text-secondary hover:text-accent transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="mailto:abhimanyucoder88@gmail.com"
                  className="text-text-secondary hover:text-accent transition-colors text-sm"
                >
                  Email
                </Link>
              </li>
              <li>
                <Link
                  href="https://wa.me/919971055356"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-secondary hover:text-accent transition-colors text-sm"
                >
                  WhatsApp
                </Link>
              </li>
              <li>
                <Link
                  href="https://calendly.com/abhimanyucoder88"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-secondary hover:text-accent transition-colors text-sm"
                >
                  Book Call
                </Link>
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Divider */}
        <div className="border-t border-border mb-8"></div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center justify-between text-sm text-text-secondary"
        >
          <p>
© {currentYear} Abhimanyu Kumar. All rights reserved.
          </p>
          {/*
            Removed "Made with using Next.js & Tailwind" line per request.
          */}
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
