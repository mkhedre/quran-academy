import logo from '../../assets/قِيَم-removebg-preview.png';
import Image from 'next/image';

export function Footer() {
  return (
    <footer className="bg-slate-50 py-12 border-t">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <Image src={logo} alt="أكاديمية قيم" className="h-10 w-10" />
            <span className="text-xl font-headline font-bold text-primary">
              أكاديمية قيم
            </span>
          </div>

          <div className="flex gap-8 text-sm text-muted-foreground">
            {/* <a href="#" className="hover:text-primary transition-colors">
              سياسة الخصوصية
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              الشروط والأحكام
            </a> */}
            <a
              href="#register"
              className="hover:text-primary transition-colors"
            >
              تواصل معنا
            </a>
          </div>

          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} جميع الحقوق محفوظة لأكاديمية قيم.
          </p>
        </div>
      </div>
    </footer>
  );
}
