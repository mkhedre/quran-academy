
"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function RegistrationForm() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto bg-primary rounded-[3rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row border border-white/10">
          <div className="lg:w-2/5 bg-secondary p-12 text-primary flex flex-col justify-between">
            <div>
              <h2 className="text-4xl font-headline font-bold mb-6">سجل الآن وابدأ رحلتك</h2>
              <p className="text-lg opacity-80 leading-relaxed mb-8">
                خطوة واحدة تفصلك عن الانضمام لأكبر مجتمع لتحفيظ القرآن الكريم بنظام المكافآت.
              </p>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center font-bold">1</div>
                  <p className="font-medium">املأ بياناتك الأساسية</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center font-bold">2</div>
                  <p className="font-medium">سيتم التواصل معك عبر الواتساب</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center font-bold">3</div>
                  <p className="font-medium">ابدأ الحلقات واجمع مكافآتك</p>
                </div>
              </div>
            </div>
            <div className="mt-12 pt-8 border-t border-primary/10">
              <p className="text-sm font-bold italic">"خيركم من تعلم القرآن وعلمه"</p>
            </div>
          </div>

          <div className="lg:w-3/5 p-8 md:p-16 text-white">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-white/80">الاسم الكامل</Label>
                  <Input id="name" placeholder="ادخل اسمك الثلاثي" className="bg-white/5 border-white/20 text-white placeholder:text-white/30 h-14 rounded-xl focus:ring-secondary" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="whatsapp" className="text-white/80">رقم الواتساب</Label>
                  <Input id="whatsapp" placeholder="مثال: +966..." className="bg-white/5 border-white/20 text-white placeholder:text-white/30 h-14 rounded-xl focus:ring-secondary" dir="ltr" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="goal" className="text-white/80">هدفك من الانضمام</Label>
                <Textarea id="goal" placeholder="أخبرنا عن هدفك (حفظ القرآن كاملاً، مراجعة جزء معين، إلخ...)" className="bg-white/5 border-white/20 text-white placeholder:text-white/30 rounded-xl focus:ring-secondary min-h-[120px]" />
              </div>
              <Button type="submit" className="w-full bg-secondary hover:bg-secondary/90 text-primary font-bold py-8 text-xl rounded-2xl transition-transform active:scale-[0.98]">
                إرسال طلب الانضمام
              </Button>
              <p className="text-center text-sm text-white/50">بضغطك على إرسال، أنت توافق على شروط وأحكام الأكاديمية.</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
