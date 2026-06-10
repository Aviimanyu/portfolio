'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'


const FloatingWhatsApp = () => {
  const phoneNumber = '919971055356'
  const message = 'Hi%20Abhimanyu%2C%20I%20would%20like%20to%20discuss%20a%20project'
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`

  return (
    <motion.div
      className="floating-whatsapp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5, delay: 1 }}
    >
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <Link
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-r from-green-400 to-green-600 text-green-50 shadow-lg hover:shadow-2xl transition-all duration-300 hover:from-green-500 hover:to-green-700 group"
          aria-label="Contact on WhatsApp"
        >
          <svg
            className="w-6 h-6 group-hover:scale-110 transition-transform text-green-50"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.846 1.235c-1.514.756-2.846 1.848-3.848 3.153-1.002 1.305-1.542 2.845-1.542 4.445 0 1.212.236 2.392.694 3.504l-1.083 3.851 3.938-1.035A9.97 9.97 0 005.804 20a9.87 9.87 0 004.845-1.235c1.514-.756 2.846-1.848 3.848-3.153 1.002-1.305 1.542-2.845 1.542-4.445a9.867 9.867 0 00-2.858-7.018A9.87 9.87 0 0011.05 6.98z" />
          </svg>
        </Link>
      </motion.div>

      {/* Tooltip */}
      <motion.div
        initial={{ opacity: 0, x: 10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3, delay: 1.3 }}
        className="absolute right-20 bottom-0 bg-gray-900 text-white text-sm px-3 py-2 rounded-lg whitespace-nowrap pointer-events-none"
      >
        Message us
        <div className="absolute right-[-4px] top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-l-gray-900 border-t-4 border-t-transparent border-b-4 border-b-transparent"></div>
      </motion.div>
    </motion.div>
  )
}

export default FloatingWhatsApp
