import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/components/Navbar";
import ThemeProvider from "@/app/components/ThemeProvider";
import Footer from "@/app/components/Footer";
import Container from "@/app/components/Container";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: ": Discover the Latest in Fashion and trends",
  description: "A blog that explores the latest fashion trends, offers style advice, showcases unique outfit ideas, and provides insights into sustainable and ethical fashion.",
};

export default function RootLayout({//kahan gaya....tah ismeh toh kaha gya yahi toh pouch rha hoo..mjhe kia pata...ab kia krein itna bara folder tah woh toh sham mai toh tah..nah
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.className} bg-light dark:bg-dark `}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem = {false}
          disableTransitionOnChange
        >
          <Container>
          <Navbar />
          {children}
          <Footer />
          </Container>
        
        </ThemeProvider>
      </body>
    </html>
  );
}


// components ka floder kahan gaya ....recyele bon mai ek folder hai yeh woh toh nai hai.. konsa...yeh wala dekho...kia karna hai bolona...nhi yr maine itni mehnat se hero section bnaya tha