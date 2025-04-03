'use client';

export default function GlobalError({
    error,
}: {
    error: Error & { digest?: string };
}) {
    return (
        <html>
            <body className="min-h-screen flex flex-col items-center justify-center p-8 text-center">
                <h1 className="text-4xl font-bold text-red-600 mb-4">Application Error</h1>
                <p className="text-gray-600 mb-2">Something went wrong on our side.</p>
                <p className="text-sm text-gray-400">{error?.message}</p>
            </body>
        </html>
    );
}
