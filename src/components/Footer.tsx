export default function Footer() {
    return (
      <footer className="w-full border-t bg-gray-50 mt-12">
        <div className="max-w-7xl mx-auto px-4 py-6 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Murati Group. All rights reserved.
        </div>
      </footer>
    );
  }
  