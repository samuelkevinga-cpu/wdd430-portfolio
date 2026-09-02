export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-white">
      <div className="mx-auto max-w-6xl px-6 py-4 text-center text-sm">
        <p>&copy; {currentYear} Kevin Samuel Pacheco García. All rights reserved.</p>
      </div>
    </footer>
  );
}
