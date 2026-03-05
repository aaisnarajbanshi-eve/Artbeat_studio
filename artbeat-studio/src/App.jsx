import React, { useState } from 'react';
import { Menu, X, Instagram, Facebook, Mail, MapPin, Phone, Palette, Brush, PartyPopper, Youtube, Paintbrush } from 'lucide-react';
import { motion } from 'framer-motion';

// Assets - Please ensure these files are saved in src/assets
// Assets - All images are exported with .png.jpg extension as found in the assets folder
import logo from './assets/artbeat logo.jpg';
import heroImg from './assets/media__1770684898073.jpg';

// Artwork Gallery
import artwork1 from './assets/artwork1.png.jpg';
import artwork2 from './assets/artwork2.png.jpg';
import artwork3 from './assets/artwork3.png.jpg';
import artwork4 from './assets/artwork4.png.jpg';
import artwork5 from './assets/artwok5.png.jpg';
import artwork6 from './assets/artwork6.png.jpg';
import artwork7 from './assets/artwork7.png.jpg';
import artwork8 from './assets/artwork8.png.jpg';

// Class Gallery
import class1 from './assets/class1.png.jpg';
import class2 from './assets/class2.png.jpg';
import class3 from './assets/class3.png.jpg';
import class4 from './assets/class4.png.jpg';
import class5 from './assets/class5.png.jpg';
import class6 from './assets/class6.png.jpg';
import class7 from './assets/class7.png.jpg';
import class8 from './assets/class8.png.jpg';
import class9 from './assets/class9.png.jpg';
import class10 from './assets/class10.png.jpg';

// Murals Gallery
import mural1 from './assets/mural1.png.jpg';
import mural2 from './assets/mural2.png.jpg';
import mural3 from './assets/mural3.png.jpg';
import mural5 from './assets/mural5.png.jpg';

// Commission Gallery
import commission1 from './assets/commission1.png.jpg';
import commission2 from './assets/commission2.png.jpg';
import commission3 from './assets/commission3.png.jpg';
import commission4 from './assets/commission4.png.jpg';
// Exhibition Gallery
import exhibition1 from './assets/exhitbions1.png.jpg';
import exhibition2 from './assets/exhibitions2.png.jpg';

// The task boundary said:
// logo.png (The blue 1st image - Artbeat logo)
// class1-4.png (The art class photos)
// media__1770684898073.jpg (Hero background)

// Let's assume media__1770684898073.jpg is the first one uploaded?
// Wait, the first request had 2 pictures?
// "first picture is logo and second picture is for hero section"
// The first request had 2 attached images but the metadata only showed 1 image uploaded in that request: But wait, in the artifacts/metadata, I only see:
// 1. media__1770701650374.jpg (Classes)
// 2. media__1770701867969.jpg (Artworks)
// 3. media__1770684898073.jpg (From the list_dir earlier, size 355144).

// I will import all images and use them correctly.
// I'll need to double check which is which based on the user's prompt history.
// User's first prompt had 2 images.
// User's second prompt had 1 image (Classes)
// User's third prompt had 1 image (Mural)
// User's fourth prompt had 1 image (Artworks)

// So:
// media__1770684898073.jpg might be one of the first two.
// I should verify if there are other images in the assets folder.

function App() {
  console.log("App component rendering...");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen font-sans text-stone-800 bg-earth-sand">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-paper-white/90 backdrop-blur-sm shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-3">
              <img src={logo} alt="Artbeat logo" className="h-10 w-auto rounded-lg" />
              <span className="text-2xl font-serif font-bold text-earth-terracotta tracking-wider">Artbeat Studio</span>
            </div>

            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-stone-600 hover:text-earth-terracotta transition-colors">Home</a>
              <a href="#about" className="text-stone-600 hover:text-earth-terracotta transition-colors">About</a>
              <a href="#artwork" className="text-stone-600 hover:text-earth-terracotta transition-colors">Artwork</a>
              <a href="#murals" className="text-stone-600 hover:text-earth-terracotta transition-colors">Murals</a>
              <a href="#classes" className="text-stone-600 hover:text-earth-terracotta transition-colors">Classes</a>
              <a href="#exhibitions" className="text-stone-600 hover:text-earth-terracotta transition-colors">Exhibitions</a>
              <a href="#contact" className="px-4 py-2 bg-earth-terracotta text-white rounded-full hover:bg-earth-terracotta/90 transition-colors">Contact</a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-stone-600">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-paper-white border-t border-stone-100">
            <div className="px-4 pt-2 pb-6 space-y-2">
              <a href="#home" className="block py-2 text-stone-600" onClick={() => setIsMenuOpen(false)}>Home</a>
              <a href="#about" className="block py-2 text-stone-600" onClick={() => setIsMenuOpen(false)}>About</a>
              <a href="#artwork" className="block py-2 text-stone-600" onClick={() => setIsMenuOpen(false)}>Artwork</a>
              <a href="#murals" className="block py-2 text-stone-600" onClick={() => setIsMenuOpen(false)}>Murals</a>
              <a href="#classes" className="block py-2 text-stone-600" onClick={() => setIsMenuOpen(false)}>Classes</a>
              <a href="#exhibitions" className="block py-2 text-stone-600" onClick={() => setIsMenuOpen(false)}>Exhibitions</a>
              <a href="#contact" className="block py-2 text-earth-terracotta font-medium" onClick={() => setIsMenuOpen(false)}>Contact Us</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 lg:pt-0 relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-earth-sand/90 to-transparent z-10"></div>
          {/* Using a placeholder for now, will update with real hero image */}
          <img
            src={heroImg}
            alt="Art Studio"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center lg:text-left w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-8 hidden lg:block"
            >
              <img src={logo} alt="Artbeat Logo" className="w-32 h-32 rounded-3xl shadow-2xl border-4 border-white" />
            </motion.div>
            <h1 className="text-5xl lg:text-7xl font-serif font-bold text-stone-900 mb-6 leading-tight">
              Where Art Finds <br />
              <span className="text-earth-terracotta">Its Rhythm</span>
            </h1>
            <p className="text-xl text-stone-700 mb-8 max-w-lg mx-auto lg:mx-0">
              Discover a warm, creative space for learning, expression, and professional art creation. Join our community at Artbeat Studio.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="#classes" className="px-8 py-4 bg-earth-terracotta text-white rounded-full font-medium hover:bg-earth-terracotta/90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Explore Art Classes
              </a>
              <a href="#contact" className="px-8 py-4 bg-paper-white text-stone-800 border-2 border-stone-200 rounded-full font-medium hover:border-earth-terracotta hover:text-earth-terracotta transition-all">
                Commission Artwork
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-paper-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1 relative"
            >
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-earth-olive rounded-2xl z-0"></div>
              <img
                src="https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="About Artbeat"
                className="relative z-10 w-full h-[500px] object-cover rounded-2xl shadow-xl"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-1 lg:order-2"
            >
              <span className="text-earth-terracotta font-medium tracking-wider uppercase text-sm">Our Story</span>
              <h2 className="text-4xl font-serif font-bold text-stone-900 mt-2 mb-6">A Canvas for Your Imagination</h2>
              <p className="text-stone-600 mb-6 text-lg leading-relaxed">
                Artbeat Studio is more than just a place to paint; it's a sanctuary for creativity. We believe that everyone has an artist within them, waiting to be discovered. Our studio provides a nurturing environment where beginners can learn the basics and experienced artists can refine their craft.
              </p>
              <p className="text-stone-600 mb-8 text-lg leading-relaxed">
                Inspired by nature and the beauty of handmade art, our space is designed to be warm, welcoming, and inspiring. Whether you're here for a workshop, a regular class, or to commission a unique piece, you'll find passion in every brushstroke.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h4 className="text-4xl font-serif font-bold text-earth-olive mb-1">50+</h4>
                  <p className="text-stone-500 font-medium">Students Taught</p>
                </div>
                <div>
                  <h4 className="text-4xl font-serif font-bold text-earth-olive mb-1">10+</h4>
                  <p className="text-stone-500 font-medium">Murals Created</p>
                </div>
                <div>
                  <h4 className="text-4xl font-serif font-bold text-earth-olive mb-1">50+</h4>
                  <p className="text-stone-500 font-medium">Commissions Done</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-earth-sand/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-earth-terracotta font-medium tracking-wider uppercase text-sm">What We Offer</span>
              <h2 className="text-4xl font-serif font-bold text-stone-900 mt-2 font-serif">Our Creative Services</h2>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Palette className="text-earth-terracotta" size={28} />,
                title: "Art Materials",
                desc: "Curated selection of high-quality paints, canvases, brushes, and unique handmade supplies.",
                color: "bg-earth-terracotta/10",
                hover: "group-hover:bg-earth-terracotta/20"
              },
              {
                icon: <Brush className="text-earth-olive" size={28} />,
                title: "Art Classes",
                desc: "Comprehensive classes for all ages. From beginner basics to advanced regular workshops.",
                color: "bg-earth-olive/10",
                hover: "group-hover:bg-earth-olive/20"
              },
              {
                icon: <Paintbrush className="text-earth-clay" size={28} />,
                title: "Mural Painting",
                desc: "Large-scale wall art for businesses, schools, and private spaces. Turning walls into landmarks.",
                color: "bg-earth-sand/30",
                hover: "group-hover:bg-earth-sand/50"
              },
              {
                icon: <PartyPopper className="text-stone-600" size={28} />,
                title: "Custom Work",
                desc: "Personalized portraits, concept artworks, and unique gifts tailored to your personal vision.",
                color: "bg-stone-100",
                hover: "group-hover:bg-stone-200"
              }
            ].map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-paper-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all group border border-stone-100"
              >
                <div className={`w-14 h-14 ${service.color} rounded-2xl flex items-center justify-center mb-6 ${service.hover} transition-colors`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-stone-900 mb-3">{service.title}</h3>
                <p className="text-stone-600 leading-relaxed text-base">
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Artwork Section */}
      <section id="artwork" className="py-32 bg-brush-stroke relative overflow-hidden">
        {/* Artistic Background Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-earth-terracotta/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-earth-olive/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-earth-terracotta font-medium tracking-widest uppercase text-xs mb-4 block">Handcrafted Excellence</span>
              <h2 className="text-6xl lg:text-7xl font-serif font-bold text-stone-900 mb-6">The Gallery</h2>
              <div className="w-32 h-1 bg-earth-terracotta mx-auto rounded-full mb-8"></div>
              <p className="max-w-2xl mx-auto text-lg text-stone-600 font-light leading-relaxed">
                Explore a curated collection of original works, from intimate portraits to expressive abstract pieces, all created with passion at Artbeat Studio.
              </p>
            </motion.div>
          </div>

          <div className="masonry-grid">
            {[artwork1, artwork2, artwork3, artwork4, artwork5, artwork6, artwork7, artwork8].map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.8,
                  delay: i * 0.1,
                  type: "spring",
                  stiffness: 50
                }}
                className="masonry-item mb-12"
              >
                <div className="artwork-frame group cursor-crosshair">
                  <div className="relative overflow-hidden canvas-texture rounded-xl">
                    <img
                      src={img}
                      alt={`Artwork ${i + 1}`}
                      className="w-full h-auto object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700 ease-out group-hover:scale-105"
                    />

                    {/* Artistic Hover Info */}
                    <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/10 transition-colors duration-500"></div>
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-4 group-hover:translate-x-0">
                      <div className="bg-white/90 backdrop-blur-md px-4 py-2 rounded-full shadow-lg border border-stone-100">
                        <span className="text-stone-800 text-xs font-bold uppercase tracking-widest">Original Work</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-20 text-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 bg-transparent border-2 border-stone-900 text-stone-900 rounded-full font-medium hover:bg-stone-900 hover:text-white transition-all duration-300"
            >
              Inquire About Pieces
            </motion.button>
          </div>
        </div>
      </section>

      {/* Murals Section */}
      <section id="murals" className="py-24 bg-earth-sand/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between mb-16 gap-8">
            <div className="max-w-2xl">
              <span className="text-earth-olive font-medium tracking-wider uppercase text-sm">Large Scale Art</span>
              <h2 className="text-5xl font-serif font-bold text-stone-900 mt-2">Mural Projects</h2>
              <p className="text-stone-600 mt-4 text-lg">Transforming walls into stories. Our murals bring life to public spaces, businesses, and homes across Nepal.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {[mural1, mural2, mural3, mural5].map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className="mural-card group cursor-pointer"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img src={img} alt={`Mural ${i + 1}`} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-stone-900/10 group-hover:bg-stone-900/0 transition-colors"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Classes Section */}
      <section id="classes" className="py-24 bg-paper-white text-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <span className="text-earth-terracotta font-medium tracking-wider uppercase text-sm">Learning</span>
              <h2 className="text-4xl font-serif font-bold text-stone-900 mt-2">Art Classes & Workshops</h2>
              <p className="mt-4 text-stone-600 text-lg">
                Join our vibrant community of learners. From kids to adults, we offer sessions that focus on technique, expression, and the joy of creating.
              </p>
            </div>
            <div className="flex lg:justify-end">
              <a href="#contact" className="px-8 py-4 bg-earth-terracotta text-white rounded-full font-medium hover:bg-earth-terracotta/90 transition-all shadow-lg">
                Book a Seat
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {[class1, class2, class3, class4, class5, class6, class7, class8, class9, class10].map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="aspect-square rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <img src={img} alt={`Class ${i + 1}`} className="w-full h-full object-cover" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Commissions Section */}
      <section id="commissions" className="py-24 bg-stone-50 border-t border-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/3">
              <span className="text-earth-clay font-medium tracking-wider uppercase text-sm">Custom Work</span>
              <h2 className="text-4xl font-serif font-bold text-stone-900 mt-2 mb-6">Commission Artwork</h2>
              <p className="text-stone-600 mb-8">
                Looking for something unique for your space? We specialize in custom portraits, concept art, and personalized gifts.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3 text-stone-700 font-medium">
                  <div className="w-2 h-2 rounded-full bg-earth-terracotta" /> Personalized Portraits
                </li>
                <li className="flex items-center gap-3 text-stone-700 font-medium">
                  <div className="w-2 h-2 rounded-full bg-earth-terracotta" /> Interior Decor Concepts
                </li>
                <li className="flex items-center gap-3 text-stone-700 font-medium">
                  <div className="w-2 h-2 rounded-full bg-earth-terracotta" /> Commercial Illustrations
                </li>
              </ul>
              <a href="#contact" className="text-earth-terracotta font-bold hover:underline inline-flex items-center gap-2">
                Get a Quote <span className="text-xl">→</span>
              </a>
            </div>
            <div className="md:w-2/3 grid grid-cols-2 gap-6">
              {[commission1, commission2, commission3, commission4].map((img, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -10 }}
                  className="rounded-3xl overflow-hidden shadow-xl aspect-[3/4]"
                >
                  <img src={img} alt={`Commission ${i + 1}`} className="w-full h-full object-cover" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Exhibitions Section */}
      <section id="exhibitions" className="py-24 bg-stone-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-earth-terracotta font-medium tracking-widest uppercase text-xs mb-4 block">Events</span>
              <h2 className="text-5xl font-serif font-bold mb-4">Exhibitions & Showcases</h2>
              <p className="text-stone-400 max-w-xl">Sharing our journey and passion with the community. Explore our past events where art meets the soul.</p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {[
              {
                img: exhibition1,
                title: "The Song of Hope",
                date: "Feb 2023",
                loc: "Dhulabari",
                desc: "A Small Step for a Big Journey. An exhibition celebrating growth and artistic discovery in our community."
              },
              {
                img: exhibition2,
                title: "Where Colors Find A Voice",
                date: "Dec 2023",
                loc: "Lhotse English School",
                desc: "In association with Artbeat Studio. Highlighting the power of live paintings and visual expression."
              }
            ].map((event, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="group relative h-[500px] rounded-3xl overflow-hidden"
              >
                <img src={event.img} alt={event.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-70" />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-900/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-10 w-full">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="bg-earth-terracotta/20 text-earth-terracotta px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest border border-earth-terracotta/30">
                      {event.date}
                    </span>
                    <span className="text-stone-400 text-sm">{event.loc}</span>
                  </div>
                  <h3 className="text-4xl font-serif font-bold mb-4 group-hover:text-earth-terracotta transition-colors">{event.title}</h3>
                  <p className="text-stone-400 max-w-md leading-relaxed mb-6">
                    {event.desc}
                  </p>
                  <button className="flex items-center gap-2 text-white font-bold group-hover:gap-4 transition-all">
                    View Gallery <span className="text-earth-terracotta">→</span>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <footer id="contact" className="bg-stone-900 text-stone-400 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-3xl font-serif text-white font-bold mb-6">Artbeat Studio</h3>
              <p className="max-w-sm mb-8 leading-relaxed">
                A creative haven in Dhulabari, Jhapa. We bring art into your everyday rhythm through classes, supplies, and custom creations.
              </p>
              <div className="flex space-x-5">
                <a href="https://www.facebook.com/profile.php?id=61574813712086" target="_blank" rel="noopener noreferrer" className="hover:text-earth-terracotta transition-colors"><Facebook size={24} /></a>
                <a href="https://www.youtube.com/@sanuArtistry" target="_blank" rel="noopener noreferrer" className="hover:text-earth-terracotta transition-colors"><Youtube size={24} /></a>
                <a href="#" className="hover:text-earth-terracotta transition-colors"><Instagram size={24} /></a>
                <a href="mailto:alishahnawaj020@gmail.com" className="hover:text-earth-terracotta transition-colors"><Mail size={24} /></a>
              </div>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Quick Links</h4>
              <ul className="space-y-4">
                <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#artwork" className="hover:text-white transition-colors">Artwork</a></li>
                <li><a href="#murals" className="hover:text-white transition-colors">Murals</a></li>
                <li><a href="#classes" className="hover:text-white transition-colors">Art Classes</a></li>
                <li><a href="#exhibitions" className="hover:text-white transition-colors">Exhibitions</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Contact Us</h4>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <MapPin size={20} className="text-earth-terracotta shrink-0" />
                  <span>dhulabari mnp 10, Jhapa District, Nepal</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Phone size={20} className="text-earth-terracotta shrink-0" />
                  <span>981-7027346</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Mail size={20} className="text-earth-terracotta shrink-0" />
                  <span>alishahnawaj020@gmail.com</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-12 border-t border-stone-800 text-center text-sm">
            <p>&copy; {new Date().getFullYear()} Artbeat Studio. All rights reserved. Designed with love.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
