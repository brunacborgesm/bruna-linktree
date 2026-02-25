import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Bruna Borges | Links",
    description: "Connect with me",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="pt-BR">
            <body className="antialiased font-sans">
                {children}
            </body>
        </html>
    );
}
