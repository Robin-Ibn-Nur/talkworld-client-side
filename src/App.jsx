import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Routes";
import useAuth from "./CustomHooks/useAuth";

function App() {
  const { theme, darkThemeStyles, lightThemeStyles } = useAuth()


  return (
    <div className={`transition-opacity duration-300 ${theme === "dark" ? "transition-fade" : ""
      }`} style={theme === "dark" ? darkThemeStyles : lightThemeStyles}>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;