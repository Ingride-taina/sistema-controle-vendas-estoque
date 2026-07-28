// app/layout.tsx
import "./globals.css";

export const metadata = {
  title: "Sistema de Gestão",
  description: "Aplicação exclusiva de vendas e cadastro",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}