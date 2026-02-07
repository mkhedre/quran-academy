
export function Footer() {
  return (
    <footer className="bg-slate-50 py-12 border-t">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded flex items-center justify-center text-secondary font-headline text-lg font-bold">
              B
            </div>
            <span className="text-xl font-headline font-bold text-primary">
              أكاديمية بروج
            </span>
          </div>
          
          <div className="flex gap-8 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">سياسة الخصوصية</a>
            <a href="#" className="hover:text-primary transition-colors">الشروط والأحكام</a>
            <a href="#" className="hover:text-primary transition-colors">تواصل معنا</a>
          </div>

          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} جميع الحقوق محفوظة لأكاديمية بروج.
          </p>
        </div>
      </div>
    </footer>
  );
}
