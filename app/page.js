import Main from "./pages";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <Header />
      <main className="pt-16">
        <div className="">
          <main className="">
            <Main />
          </main>
        </div>
      </main>
      <Footer />
    </div>
  );
}
