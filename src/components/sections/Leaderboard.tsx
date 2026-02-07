
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Trophy, Medal, Star } from "lucide-react";

export function Leaderboard() {
  const leaders = [
    {
      name: "أحمد بن علي",
      ayahs: 154,
      reward: 770,
      avatar: PlaceHolderImages.find(i => i.id === "avatar-1")?.imageUrl,
      rank: 1,
    },
    {
      name: "سارة محمود",
      ayahs: 142,
      reward: 710,
      avatar: PlaceHolderImages.find(i => i.id === "avatar-2")?.imageUrl,
      rank: 2,
    },
    {
      name: "عبد الرحمن محمد",
      ayahs: 120,
      reward: 600,
      avatar: PlaceHolderImages.find(i => i.id === "avatar-3")?.imageUrl,
      rank: 3,
    },
  ];

  return (
    <section id="leaderboard" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="text-right">
            <h2 className="text-3xl md:text-5xl font-headline font-bold text-primary">أفضل القراء لهذا الأسبوع</h2>
            <p className="text-muted-foreground mt-4">كن جزءاً من المنافسة الشريفة وارتقِ في درجات العلم والمكافآت.</p>
          </div>
          <div className="bg-white px-6 py-3 rounded-full shadow-sm border flex items-center gap-3">
            <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
            <span className="text-sm font-bold text-primary">تحديث مباشر للمتصدرين</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {leaders.map((person, idx) => (
            <motion.div
              key={person.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-6 rounded-[2rem] border shadow-sm flex items-center gap-6 relative overflow-hidden"
            >
              {person.rank === 1 && (
                <div className="absolute top-0 left-0 bg-secondary text-primary px-4 py-1 rounded-br-2xl font-bold text-xs">
                  الأول
                </div>
              )}
              
              <div className="relative">
                <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-secondary/30">
                  <Image src={person.avatar || ""} alt={person.name} width={80} height={80} className="object-cover" />
                </div>
                <div className="absolute -bottom-2 -right-2 bg-white w-8 h-8 rounded-full shadow-md flex items-center justify-center">
                  {person.rank === 1 ? <Trophy size={16} className="text-secondary" /> : person.rank === 2 ? <Medal size={16} className="text-slate-400" /> : <Medal size={16} className="text-amber-700" />}
                </div>
              </div>

              <div className="flex-1">
                <h4 className="text-xl font-bold text-primary">{person.name}</h4>
                <div className="flex items-center gap-4 mt-2">
                  <div>
                    <p className="text-[10px] text-muted-foreground uppercase">الآيات</p>
                    <p className="font-bold text-secondary">{person.ayahs}</p>
                  </div>
                  <div className="w-px h-8 bg-border"></div>
                  <div>
                    <p className="text-[10px] text-muted-foreground uppercase">المكافأة</p>
                    <p className="font-bold text-primary">{person.reward} ريال</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-center">
                <Star size={20} className={idx === 0 ? "text-secondary fill-secondary" : "text-slate-200"} />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-12 text-center"
        >
          <button className="text-secondary font-bold flex items-center gap-2 mx-auto hover:underline">
            عرض القائمة الكاملة للمتصدرين
          </button>
        </motion.div>
      </div>
    </section>
  );
}
