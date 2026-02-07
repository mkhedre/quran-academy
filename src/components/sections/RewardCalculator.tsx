
"use client";

import { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { motion, AnimatePresence } from "framer-motion";
import { Wallet, Coins, Sparkles } from "lucide-react";

export function RewardCalculator() {
  const [ayahs, setAyahs] = useState([10]);
  const REWARD_PER_AYAH = 5; // 5 units per ayah

  return (
    <section id="rewards" className="py-24 bg-primary text-white overflow-hidden relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-secondary font-bold uppercase tracking-widest text-sm"
          >
            نظام المكافآت الذكي
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-headline font-bold mt-4"
          >
            حاسبة المكافآت التفاعلية
          </motion.h2>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center bg-white/5 backdrop-blur-lg p-8 md:p-12 rounded-[2rem] border border-white/10">
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <span className="text-xl font-bold">عدد الآيات المحفوظة</span>
                <span className="text-3xl font-headline font-bold text-secondary">
                  {ayahs[0]}
                </span>
              </div>
              <Slider
                value={ayahs}
                onValueChange={setAyahs}
                max={100}
                step={1}
                className="py-4"
              />
              <p className="text-white/60 text-sm">حرك المؤشر لتحديد عدد الآيات التي تخطط لحفظها هذا الأسبوع.</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                <p className="text-xs text-white/50 mb-1">المكافأة لكل آية</p>
                <p className="text-lg font-bold">{REWARD_PER_AYAH} ريال</p>
              </div>
              <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                <p className="text-xs text-white/50 mb-1">الرتبة المتوقعة</p>
                <p className="text-lg font-bold text-secondary">
                  {ayahs[0] > 50 ? "حافظ متميز" : "طالب مجتهد"}
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center p-8 rounded-[2rem] bg-gradient-to-br from-secondary/20 to-secondary/5 border border-secondary/20 relative">
            <div className="absolute -top-4 -right-4 bg-secondary text-primary p-2 rounded-full shadow-lg">
              <Sparkles size={24} />
            </div>
            
            <motion.div
              key={ayahs[0]}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-center"
            >
              <div className="w-24 h-24 bg-secondary/30 rounded-full flex items-center justify-center mx-auto mb-6">
                <Wallet size={48} className="text-secondary" />
              </div>
              <h3 className="text-white/70 text-lg mb-2">المكافأة المتوقعة</h3>
              <div className="flex items-center justify-center gap-2">
                <span className="text-5xl md:text-7xl font-headline font-bold text-secondary">
                  {ayahs[0] * REWARD_PER_AYAH}
                </span>
                <span className="text-2xl font-bold">ريال</span>
              </div>
              
              <div className="mt-8 flex gap-1 justify-center">
                {Array.from({ length: 5 }).map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{ 
                      y: [0, -10, 0],
                      opacity: [0.5, 1, 0.5]
                    }}
                    transition={{ 
                      duration: 2, 
                      delay: i * 0.2, 
                      repeat: Infinity 
                    }}
                  >
                    <Coins className="text-secondary/40" size={20} />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Background Decor */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-secondary/10 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-[120px] translate-x-1/3 -translate-y-1/3"></div>
    </section>
  );
}
