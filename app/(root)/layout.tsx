import MobileNav from "@/components/shared/mobile-nav";
import Sidebar from "@/components/shared/sidebar";
import { Toaster } from "@/components/ui/toaster";

type RootProps = {
  children: React.ReactNode;
};

const RootLayout = ({ children }: RootProps) => {
  return (
    <main className="root">
      <Sidebar />
      <MobileNav />
      <Toaster />
      <div className="root-container">
        <div className="wrapper">{children}</div>
      </div>
    </main>
  );
};

export default RootLayout;
