import { Stack } from "expo-router";
import { ToastProvider } from "react-native-toast-notifications";
import AuthProvider from "../providers/auth-provider";

export default function RootLayout() {
  return (
    <ToastProvider>
      <AuthProvider>
        <Stack>
          <Stack.Screen
            name="(shop)"
            options={{ headerShown: false, title: "Shopping Native" }}
          />
          <Stack.Screen
            name="categories"
            options={{ headerShown: false, title: "Categorias" }}
          />
          <Stack.Screen
            name="product"
            options={{ headerShown: false, title: "Produtos" }}
          />
          <Stack.Screen
            name="cart"
            options={{ presentation: "modal", title: "Carrinho Compras" }}
          />
          <Stack.Screen name="auth" options={{ headerShown: false }} />
        </Stack>
      </AuthProvider>
    </ToastProvider>
  );
}
