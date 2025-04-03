import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'About Us | Murati Group',
    description: 'Learn more about Murati Group and our construction values.',
};

export default function AboutPage() {
    return (
        <section className="max-w-5xl mx-auto p-8">
            <h1 className="text-3xl font-bold mb-4">About Us</h1>
            <p>We are Murati Group – experts in construction based in London.</p>
        </section>
    );
}
