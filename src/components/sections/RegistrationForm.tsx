
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useFirestore } from "@/firebase";
import { doc, collection } from "firebase/firestore";
import { setDocumentNonBlocking } from "@/firebase/non-blocking-updates";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { 
  Form, 
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from "@/components/ui/form";
import { Loader2, MessageCircle } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(3, { message: "الاسم يجب أن يكون 3 أحرف على الأقل" }),
  whatsapp: z.string().min(10, { message: "يرجى إدخال رقم واتساب صحيح" }),
  goal: z.string().min(5, { message: "يرجى كتابة هدفك بوضوح" }),
});

type FormValues = z.infer<typeof formSchema>;

export function RegistrationForm() {
  const firestore = useFirestore();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      whatsapp: "",
      goal: "",
    },
  });

  function onSubmit(values: FormValues) {
    if (!firestore) return;
    setIsSubmitting(true);

    const registrationId = crypto.randomUUID();
    const registrationRef = doc(collection(firestore, "registrations"), registrationId);
    
    const registrationData = {
      id: registrationId,
      name: values.name,
      whatsapp: values.whatsapp,
      goal: values.goal,
      submissionDate: new Date().toISOString(),
    };

    // Save to Firestore
    setDocumentNonBlocking(registrationRef, registrationData, { merge: true });

    // Construct WhatsApp message
    const academyNumber = "966500000000"; // Replace with actual academy number
    const message = `السلام عليكم ورحمة الله وبركاته،\n\nأرغب في الانضمام لأكاديمية بروج.\n\nالاسم: ${values.name}\nالهدف: ${values.goal}\n\nشكراً لكم.`;
    const whatsappUrl = `https://wa.me/${academyNumber}?text=${encodeURIComponent(message)}`;

    // Small delay for professional feel before redirecting
    setTimeout(() => {
      window.open(whatsappUrl, "_blank");
      setIsSubmitting(false);
      form.reset();
    }, 1000);
  }

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
                  <p className="font-medium">سيتم حفظ طلبك في قاعدة بياناتنا</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center font-bold">3</div>
                  <p className="font-medium">سيتم توجيهك فوراً للمتابعة عبر الواتساب</p>
                </div>
              </div>
            </div>
            <div className="mt-12 pt-8 border-t border-primary/10">
              <p className="text-sm font-bold italic">"خيركم من تعلم القرآن وعلمه"</p>
            </div>
          </div>

          <div className="lg:w-3/5 p-8 md:p-16 text-white">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem className="space-y-2">
                        <FormLabel className="text-white/80">الاسم الكامل</FormLabel>
                        <FormControl>
                          <Input 
                            {...field} 
                            placeholder="ادخل اسمك الثلاثي" 
                            className="bg-white/5 border-white/20 text-white placeholder:text-white/30 h-14 rounded-xl focus:ring-secondary" 
                          />
                        </FormControl>
                        <FormMessage className="text-secondary" />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="whatsapp"
                    render={({ field }) => (
                      <FormItem className="space-y-2">
                        <FormLabel className="text-white/80">رقم الواتساب</FormLabel>
                        <FormControl>
                          <Input 
                            {...field} 
                            placeholder="مثال: +966..." 
                            className="bg-white/5 border-white/20 text-white placeholder:text-white/30 h-14 rounded-xl focus:ring-secondary" 
                            dir="ltr" 
                          />
                        </FormControl>
                        <FormMessage className="text-secondary" />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="goal"
                  render={({ field }) => (
                    <FormItem className="space-y-2">
                      <FormLabel className="text-white/80">هدفك من الانضمام</FormLabel>
                      <FormControl>
                        <Textarea 
                          {...field} 
                          placeholder="أخبرنا عن هدفك (حفظ القرآن كاملاً، مراجعة جزء معين، إلخ...)" 
                          className="bg-white/5 border-white/20 text-white placeholder:text-white/30 rounded-xl focus:ring-secondary min-h-[120px]" 
                        />
                      </FormControl>
                      <FormMessage className="text-secondary" />
                    </FormItem>
                  )}
                />
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-secondary hover:bg-secondary/90 text-primary font-bold py-8 text-xl rounded-2xl transition-transform active:scale-[0.98] flex items-center justify-center gap-3"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="animate-spin" />
                      جاري المعالجة...
                    </>
                  ) : (
                    <>
                      <MessageCircle />
                      تسجيل ومتابعة عبر الواتساب
                    </>
                  )}
                </Button>
                <p className="text-center text-sm text-white/50">بضغطك على إرسال، سيتم حفظ بياناتك وتوجيهك للمحادثة الرسمية.</p>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
}
