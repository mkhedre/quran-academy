'use client';

import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function Hero() {
  const heroImg = PlaceHolderImages.find((img) => img.id === 'hero-quran');

  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-right"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-headline font-bold text-primary leading-snug mb-6">
              اجعل القرآن رفيقك.. والمكافأة تشجيعك
              <br />
              <span className="text-secondary">
                رحلة إيمانية فريدة، نكافئك فيها على كل آية تحفظها.
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl leading-relaxed">
              تعلم، احفظ، واحصل على مكافآت فورية لكل آية تحفظها. رحلتك مع كتاب
              الله أصبحت أكثر إلهاماً مع نظامنا الفريد.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-end">
              <Button
                size="lg"
                className="bg-secondary text-primary hover:bg-secondary/90 text-lg font-bold px-10 py-7 rounded-xl shadow-lg shadow-secondary/20"
              >
                <a href="#register">ابدأ رحلتك الآن</a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary/5 text-lg font-bold px-10 py-7 rounded-xl"
              >
                <a href="#programs">اكتشف البرامج</a>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: -50 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative flex justify-center"
          >
            <div className="relative w-full max-w-[500px] aspect-square rounded-full flex items-center justify-center">
              <div className="absolute inset-0 bg-secondary/10 rounded-full blur-[100px] animate-pulse"></div>
              <div className="relative z-10 w-[80%] aspect-square rounded-3xl overflow-hidden shadow-2xl rotate-3 border-4 border-white/50 animate-subtle-glow">
                <Image
                  src={heroImg?.imageUrl || ''}
                  alt="Quran Placeholder"
                  fill
                  className="object-cover"
                  data-ai-hint="Quran glow"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 bg-white p-6 rounded-2xl shadow-xl flex items-center gap-4 z-20 border border-secondary/20">
                <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center">
                  <span className="text-secondary text-xl font-bold">✨</span>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">آخر مكافأة</p>
                  <p className="font-bold text-primary">50 جنيه / 50 آيه</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-0 right-0 -z-10 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-0 left-0 -z-10 w-[300px] h-[300px] bg-primary/5 rounded-full blur-[100px]"></div>
    </section>
  );
}
