'use client';

interface ErrorProps {
    error: Error & { digest?: string };
    reset: () => void;
}

export default function GlobalError({ error, reset }: ErrorProps) {
    return (
        <html>
            <body className="min-h-screen flex items-center justify-center flex-col p-8 text-center">
                <h1 className="text-4xl font-bold text-red-600 mb-4">Something went wrong</h1>
                <p className="text-gray-600 mb-4">{error.message}</p>
                <button
                onClick={() => reset()}
                className="bg-primary text-white px-4 py-2 rounded hover:bg-red-600 transition"
                >
                    Try again
                </button>
            </body>
        </html>
    );
}
