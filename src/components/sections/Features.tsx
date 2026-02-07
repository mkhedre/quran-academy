'use client';

import { motion } from 'framer-motion';
import { Video, Award, Wallet, CheckCircle2 } from 'lucide-react';

export function Features() {
  const features = [
    {
      title: 'حلقات مباشرة',
      desc: 'تفاعل مباشر مع معلمين مجازين في حلقات تعليمية تفاعلية تضمن لك الإتقان.',
      icon: Video,
      color: 'bg-blue-500/10 text-blue-600',
    },
    {
      title: 'الإتقان (سرد الجمعة)',
      desc: "نظام 'سرد الجمعة' الفريد لمراجعة وتثبيت المحفوظ وضمان عدم النسيان.",
      icon: Award,
      color: 'bg-purple-500/10 text-purple-600',
    },
    {
      title: 'حوافز نقدية',
      desc: 'نحن نقدر جهدك؛ كل آية تحفظها تتحول إلى رصيد حقيقي في محفظتك الإلكترونية.',
      icon: Wallet,
      color: 'bg-amber-500/10 text-amber-600',
    },
  ];

  return (
    <section id="programs" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-secondary font-bold"
          >
            مميزات الأكاديمية
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-headline font-bold text-primary mt-4 mb-6"
          >
            لماذا تختار أكاديمية قيم؟
          </motion.h2>
          <p className="text-muted-foreground text-lg">
            نجمع بين الأصالة في التعليم والابتكار في التحفيز لخلق تجربة تعليمية
            لا تُنسى.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="p-8 rounded-3xl border border-border bg-white hover:border-secondary/30 hover:shadow-xl hover:shadow-secondary/5 transition-all group"
            >
              <div
                className={`w-14 h-14 rounded-2xl ${item.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
              >
                <item.icon size={28} />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">
                {item.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {item.desc}
              </p>
              {/* <ul className="space-y-3">
                {[1, 2].map((_, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-2 text-sm text-primary/70"
                  >
                    <CheckCircle2 size={16} className="text-secondary" />
                    <span>ميزة إضافية تضمن جودة التعليم</span>
                  </li>
                ))}
              </ul> */}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
