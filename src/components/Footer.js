export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white text-center py-4 flex items-center justify-around">
      <div className="text-yellow-400 font-bold text-2xl">MyBrand</div>
      <div className="flex justify-center gap-6 mt-4">
        <a href="#" className="hover:text-yellow-300">
          Bosh sahifa
        </a>
        <a href="#" className="hover:text-yellow-300">
          Biz haqimizda
        </a>
        <a href="#" className="hover:text-yellow-300">
          Xizmatlar
        </a>
        <a href="#" className="hover:text-yellow-300">
          Aloqa
        </a>
      </div>
      <p className="text-sm text-gray-400 mt-4">
        © 2025 MyBrand. Barcha huquqlar himoyalangan.
      </p>
    </footer>
  );
}
