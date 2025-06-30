import "./globals.css";
import CustomLink from "./components/CustomLink";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <nav className="border-b border-gray-400 p-4">
          <ul className="flex gap-5">
            <li>
              <CustomLink path=" /">Home</CustomLink>
            </li>
            <li>
              <CustomLink path="/dashboard/settings">Settings</CustomLink>
            </li>
            <li>
              <CustomLink path="/dashboard/analytics">Analytics</CustomLink>
            </li>
          </ul>
        </nav>
        {children}
      </body>
    </html>
  );
}
