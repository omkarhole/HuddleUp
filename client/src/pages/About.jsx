import React, { useState } from "react";
import { motion } from "framer-motion";
import PageWrapper from "@/components/ui/PageWrapper";
import { Users, Zap, Shield, Globe, TrendingUp, Heart, ChevronRight } from "lucide-react";

const About = () => {
  const [expandedPrinciple, setExpandedPrinciple] = useState(null);
  const [hoveredStat, setHoveredStat] = useState(null);
  const stats = [
    { value: "10K+", label: "moments shared daily", color: "var(--accent)", icon: TrendingUp },
    { value: "25+", label: "sports from cricket to curling", color: "var(--turf-green)", icon: Globe },
    { value: "50+", label: "countries watching together", color: "var(--sun-yellow)", icon: Users }
  ];

  const principles = [
    {
      icon: Heart,
      title: "Community First, Always",
      description: "No algorithm deciding what you see. No ads interrupting your flow. Just pure, unfiltered sports passion from people who actually care."
    },
    {
      icon: Zap,
      title: "Built for Speed",
      description: "Upload highlights in seconds. Stream without buffering. React in real-time. Because when the game is on, every second counts."
    },
    {
      icon: Shield,
      title: "Safe Space, Real Talk",
      description: "Rivalries are fun. Toxicity isn't. We keep it competitive but respectful, so everyone can bring their A-game without the BS."
    }
  ];

  return (
    <PageWrapper>
    <div className="min-h-screen" style={{ background: 'var(--bg-primary)' }}>
      
      {/* Hero Section */}
      <section className="px-4 md:px-12 pt-16 md:pt-20 pb-12 md:pb-16">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight">
              We built{' '}
              <span style={{
                background: 'linear-gradient(135deg, #06b6d4, #3b82f6)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                HuddleUp
              </span>
              <br />
              for the fans
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl max-w-3xl" style={{ 
              color: 'var(--text-sub)', 
              lineHeight: '1.6' 
            }}>
              Because fans were yelling into the void after moments that deserved a crowd.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="px-4 md:px-12 py-12 md:py-16">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="space-y-6 md:space-y-8"
          >
            <p className="text-base sm:text-lg md:text-xl" style={{ 
              color: 'var(--text-main)', 
              lineHeight: '1.8' 
            }}>
              Every platform promised community. Most delivered isolation.
            </p>
            
            <p className="text-base sm:text-lg md:text-xl" style={{ 
              color: 'var(--text-sub)', 
              lineHeight: '1.8' 
            }}>
              You'd upload the greatest play you've ever seen, and it would vanish in 60 seconds. 
              You'd start a debate about the GOAT, and the algorithm would bury it for engagement-bait.
            </p>

            <div className="py-8 md:py-12">
              <p className="text-2xl sm:text-3xl md:text-4xl font-bold" style={{ 
                color: 'var(--text-main)',
                lineHeight: '1.4'
              }}>
                So we built something different.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Grid */}
      <section className="px-4 md:px-12 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="group relative p-6 md:p-8 cursor-pointer overflow-hidden rounded-xl transition-all duration-300 hover-lift"
                  style={{
                    background: 'var(--bg-surface)',
                    border: '1px solid var(--border-subtle)',
                  }}
                >
                  {/* Animated gradient background on hover */}
                  <motion.div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"
                    style={{ 
                      background: `linear-gradient(135deg, ${stat.color}15, ${stat.color}05)`,
                      pointerEvents: 'none'
                    }}
                  />
                  
                  {/* Glow effect on hover */}
                  <motion.div
                    className="absolute -inset-1 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300 rounded-xl"
                    style={{ background: stat.color }}
                  />

                  <div className="relative z-10">
                    <motion.div
                      animate={{ rotate: 0 }}
                      whileHover={{ rotate: 12, scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <IconComponent 
                        className="w-8 h-8 md:w-10 md:h-10 mb-4 transition-colors duration-300" 
                        style={{ color: stat.color }} 
                        strokeWidth={1.5}
                      />
                    </motion.div>
                    
                    <motion.div 
                      className="text-4xl md:text-5xl lg:text-6xl font-black mb-3 transition-colors duration-300" 
                      style={{ color: stat.color }}
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      {stat.value}
                    </motion.div>
                    
                    <p className="text-sm md:text-base transition-colors duration-300" style={{ color: 'var(--text-sub)' }}>
                      {stat.label}
                    </p>
                  </div>

                  {/* Border glow on hover */}
                  <motion.div
                    className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      border: `2px solid ${stat.color}`,
                      boxShadow: `0 0 20px ${stat.color}40`,
                      pointerEvents: 'none'
                    }}
                  />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="px-4 md:px-12 py-12 md:py-16">
        <div className="max-w-4xl mx-auto">
          <p className="text-base sm:text-lg md:text-xl mb-8 md:mb-12" style={{ 
            color: 'var(--text-sub)', 
            lineHeight: '1.8' 
          }}>
            We're not trying to replace Twitter for hot takes or YouTube for polished content. 
            We're the place you go when something just happened and you need to talk about it <em>right now</em>.
          </p>

          <div className="space-y-4 md:space-y-6 mb-12 md:mb-16">
            <p className="text-base sm:text-lg" style={{ color: 'var(--text-sub)', lineHeight: '1.8' }}>
              We don't use recommendation algorithms.
            </p>
            <p className="text-base sm:text-lg" style={{ color: 'var(--text-sub)', lineHeight: '1.8' }}>
              We don't sell your attention to advertisers.
            </p>
            <p className="text-base sm:text-lg" style={{ color: 'var(--text-sub)', lineHeight: '1.8' }}>
              We don't optimize for "engagement" — we optimize for actual conversation between actual fans.
            </p>
          </div>
        </div>
      </section>

      {/* Principles Cards */}
      <section className="px-4 md:px-12 py-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-sm font-bold uppercase tracking-widest mb-12" 
            style={{ color: 'var(--text-sub)', letterSpacing: '0.2em' }}>
            What Makes Us Different
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {principles.map((principle, index) => {
              const IconComponent = principle.icon;
              const isExpanded = expandedPrinciple === index;
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  onClick={() => setExpandedPrinciple(isExpanded ? null : index)}
                  whileHover={{ y: -8 }}
                  className="group relative p-6 md:p-8 cursor-pointer overflow-hidden rounded-xl transition-all duration-300 hover-lift"
                  style={{
                    background: 'var(--bg-surface)',
                    border: isExpanded ? '2px solid var(--accent)' : '1px solid var(--border-subtle)',
                    minHeight: isExpanded ? '320px' : '280px'
                  }}
                >
                  {/* Animated gradient background on hover */}
                  <motion.div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"
                    style={{ 
                      background: 'linear-gradient(135deg, var(--accent)15, var(--turf-green)05)',
                      pointerEvents: 'none'
                    }}
                  />
                  
                  {/* Glow effect on hover */}
                  <motion.div
                    className="absolute -inset-1 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300 rounded-xl"
                    style={{ background: 'var(--accent)' }}
                    animate={{ opacity: isExpanded ? 0.3 : 0 }}
                  />

                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-4">
                      <motion.div
                        animate={{ 
                          rotate: isExpanded ? 360 : 0,
                          scale: isExpanded ? 1.2 : 1
                        }}
                        whileHover={{ scale: 1.15 }}
                        transition={{ duration: 0.4 }}
                      >
                        <IconComponent 
                          className="w-10 h-10 md:w-12 md:h-12 transition-colors duration-300" 
                          style={{ color: 'var(--accent)' }} 
                          strokeWidth={1.5}
                        />
                      </motion.div>
                      
                      <motion.div
                        animate={{ rotate: isExpanded ? 90 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronRight 
                          className="w-5 h-5 md:w-6 md:h-6 transition-colors duration-300" 
                          style={{ color: 'var(--accent)' }}
                        />
                      </motion.div>
                    </div>

                    <h3 className="text-lg md:text-xl font-bold mb-3 transition-colors duration-300" style={{ color: 'var(--text-main)' }}>
                      {principle.title}
                    </h3>

                    <motion.div
                      initial={{ opacity: 0.7 }}
                      animate={{ opacity: isExpanded ? 1 : 0.7 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p style={{ 
                        color: 'var(--text-sub)', 
                        lineHeight: '1.7',
                        fontSize: isExpanded ? '0.95rem' : '0.9rem',
                        transition: 'all 0.3s ease'
                      }}>
                        {principle.description}
                      </p>
                    </motion.div>

                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="mt-4 pt-4 border-t"
                        style={{ borderColor: 'var(--border-subtle)' }}
                      >
                        <p className="text-xs md:text-sm font-semibold transition-colors duration-300" style={{ color: 'var(--accent)' }}>
                          ✓ Click to collapse
                        </p>
                      </motion.div>
                    )}
                  </div>

                  {/* Border glow on hover */}
                  <motion.div
                    className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      border: '2px solid var(--accent)',
                      boxShadow: '0 0 20px var(--accent)40',
                      pointerEvents: 'none'
                    }}
                    animate={{ opacity: isExpanded ? 0.5 : 0 }}
                  />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Closing Statement */}
      <section className="px-4 md:px-12 py-16 md:py-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <p className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight" style={{ color: 'var(--text-main)' }}>
              This is your stadium.
            </p>
            <p className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight mt-2 md:mt-4" style={{ 
              background: 'linear-gradient(135deg, #06b6d4, #3b82f6)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              We just keep the lights on.
            </p>
          </motion.div>
        </div>
      </section>

    </div>
    </PageWrapper>
  );
};

export default About;
