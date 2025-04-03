export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center flex-col p-8 text-center">
            <h1 className="text-4xl font-bold mb-4">Page Not Found</h1>
            <p className="text-gray-600 mb-8">The page you're looking for doesn't exist.</p>
            <a href="/" className="text-primary underline">Go back home</a>
        </div>
    );
}
  